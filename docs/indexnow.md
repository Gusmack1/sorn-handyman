# IndexNow

IndexNow is a lightweight protocol (adopted by Bing/Yandex/Seznam and others) that lets a site tell search engines immediately when URLs are created, updated, or deleted — removing the lag of waiting for a crawl.

## Key

- **Key value (generated 2026-04-19):** `e8c3698bee1584285cc29290ab82b469`
- **Verification file URL:** `https://gusmack1.github.io/sorn-handyman/e8c3698bee1584285cc29290ab82b469.txt`
- **Mirror file (easier to find):** `public/indexnow-key.txt` — identical contents to the key file above.

The verification file contains *only* the key string (no trailing newline). IndexNow spec requires the filename to equal the key and the content to equal the key.

## Pinging IndexNow when a page changes

Submit a single URL:

```
curl "https://api.indexnow.org/IndexNow?url=https://gusmack1.github.io/sorn-handyman/{path}&key=e8c3698bee1584285cc29290ab82b469"
```

Submit many URLs in one call (preferred for bulk ops) — POST JSON:

```
curl -X POST https://api.indexnow.org/IndexNow \
  -H 'Content-Type: application/json; charset=utf-8' \
  -d '{
    "host": "gusmack1.github.io",
    "key": "e8c3698bee1584285cc29290ab82b469",
    "keyLocation": "https://gusmack1.github.io/sorn-handyman/e8c3698bee1584285cc29290ab82b469.txt",
    "urlList": [
      "https://gusmack1.github.io/sorn-handyman/",
      "https://gusmack1.github.io/sorn-handyman/services/"
    ]
  }'
```

A `200 OK` or `202 Accepted` means the submission was received. `422` usually means the key file is unreachable or the host doesn't match.

## Verification via Bing Webmaster Tools

Bing Webmaster Tools auto-accepts any IndexNow key that is reachable at `/{key}.txt` on a site you have already verified in BWT. Flow:

1. Verify the site (`gusmack1.github.io/sorn-handyman` or the future custom domain) in Bing Webmaster Tools.
2. Push the key file to the live site (this PR does that).
3. The first successful IndexNow submission automatically registers the key — no manual paste needed inside BWT.

## Notes

- Keep this key for the lifetime of the site; rotating it means re-verifying.
- The key is **not** a secret — it's a public ownership proof. Committing it to git is fine and expected.
- Once a custom domain ships (e.g. `sornhandyman.co.uk`), re-host the same `e8c3698bee1584285cc29290ab82b469.txt` at the new root and update `host` / `keyLocation` in ping payloads.
