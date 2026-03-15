import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/contactSchema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      message: "",
    },
  });

  const messageValue = form.watch("message");
  const wordCount = messageValue?.trim().split(/\s+/).filter(Boolean).length || 0;
  const wordsNeeded = Math.max(0, 10 - wordCount);

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      form.reset();
      toast({
        title: "Message sent!",
        description: "Thanks for getting in touch. Guy will get back to you within 24 hours.",
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setSubmitError(message);
      toast({
        title: "Failed to send",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 bg-primary text-primary-foreground scroll-reveal">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-newsreel text-4xl md:text-5xl mb-4 tracking-wider">
            BOOK THE PATHÉ STYLE <span className="text-accent">VOICE TODAY!</span>
          </h2>
          <p className="font-body text-lg text-primary-foreground/80">
            Fill in the form below with your project details. Receive a quote and turnaround time within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-12 border-2 border-accent/30 bg-accent/5">
            <div className="text-accent text-5xl mb-4">✓</div>
            <h3 className="font-newsreel text-2xl tracking-wider mb-2">MESSAGE SENT!</h3>
            <p className="font-serif text-primary-foreground/80">
              Guy will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-accent hover:text-accent/80 font-serif underline underline-offset-4 transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary-foreground/70 font-serif text-sm">Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          {...field}
                          className="bg-white border-primary-foreground/20 text-gray-900 placeholder:text-gray-400 focus:border-accent"
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary-foreground/70 font-serif text-sm">Email *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          {...field}
                          className="bg-white border-primary-foreground/20 text-gray-900 placeholder:text-gray-400 focus:border-accent"
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary-foreground/70 font-serif text-sm">Phone</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Optional"
                          {...field}
                          className="bg-white border-primary-foreground/20 text-gray-900 placeholder:text-gray-400 focus:border-accent"
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary-foreground/70 font-serif text-sm">Project</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. radio ad, TVC, online"
                          {...field}
                          className="bg-white border-primary-foreground/20 text-gray-900 placeholder:text-gray-400 focus:border-accent"
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary-foreground/70 font-serif text-sm">Message *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell Guy about your project — script details, usage, deadline..."
                        rows={5}
                        {...field}
                        className="bg-white border-primary-foreground/20 text-gray-900 placeholder:text-gray-400 focus:border-accent resize-none"
                      />
                    </FormControl>
                    <div className="mt-1">
                      {wordsNeeded > 0 ? (
                        <span className="text-xs font-serif text-amber-400">
                          {wordsNeeded} more word{wordsNeeded !== 1 ? "s" : ""} needed
                        </span>
                      ) : (
                        <span className="text-xs font-serif text-green-400">
                          ✓ Good to go
                        </span>
                      )}
                    </div>
                    <FormMessage className="text-red-300" />
                  </FormItem>
                )}
              />

              {submitError && (
                <div className="bg-red-900/30 border border-red-400/40 text-red-300 px-4 py-3 text-sm font-serif text-center rounded">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground py-4 px-8 font-newsreel text-xl tracking-wide hover:bg-accent/90 transition-all duration-300 transform hover:scale-[1.01] border-4 border-accent-foreground/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={22} className="animate-spin" />
                    SENDING...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    SEND ENQUIRY
                  </>
                )}
              </button>
            </form>
          </Form>
        )}
      </div>
    </section>
  );
}
