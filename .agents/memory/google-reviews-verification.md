---
name: Google reviews verification
description: Google-controlled limits when testing official review URLs signed out.
---

Use the exact Places API (New) reviewsUri after verifying both business name and website; do not substitute constructed links when Google limits access.

**Why:** On 2026-09-25, the official URL opened existing reviews in a fresh mobile browser context, but a fresh desktop context showed the correct profile's overview with Google's “limited view” notice instead. An official URL is not proof of successful end-to-end navigation on every device.

**How to apply:** Click the actual website link in separate signed-out contexts and report results separately. Mobile may require dismissing Google's app prompt with “Go back to web”; that action can reload the page, so wait for navigation before checking visible reviews. Do not label a limited desktop overview as a passing reviews test.