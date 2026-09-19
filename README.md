# Trackability Website

This folder is the separate public product/marketing website for `www.trackability.in`.

## Before publishing
Open `index.html` and edit the `CONFIG` object near the bottom:

- `apk`: your final APK download URL
- `app`: the current Trackability app URL
- `supportEmail`: your support email
- `instagram`, `x`, `facebook`, `youtube`: your social profile URLs

The website is intentionally separate from the application code.

## Publish
Create a separate repository for this website, upload these files to the root, and enable Pages from the repository's Settings → Pages.

For `www.trackability.in`, configure the custom domain in Pages and then configure the DNS CNAME for `www` at your domain provider.
