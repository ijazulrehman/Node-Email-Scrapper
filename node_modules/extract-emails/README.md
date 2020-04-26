[![Build Status](https://travis-ci.org/2tunnels/extract-emails.svg?branch=master)](https://travis-ci.org/2tunnels/extract-emails)

# Extract emails from HTML (or other text source)

## Install

```
npm install extract-emails
```

## Require

```javascript
const extractEmails = require('extract-emails');
```

## Use

```javascript
const emails = extractEmails('some html or text with emails');
```

## Pros

- Can extract emails from plain text
- Can extract emails from obfuscated html pages (Cloudflare's Email Address Obfuscation enabled).

## Cons

Can't do anything else :)

## How you can help

- Improve email regex. Now it's a total crap.
- Find new obfuscation patterns.
