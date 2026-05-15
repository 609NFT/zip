# MEMORY.md

## App Info
- Subdomain: zip
- Repo: template/blank
- Created: 2026-04-23T01:34:37.691Z

## Architecture
- Single static `index.html` served by a minimal core Node `http.createServer` app in `server.js`.

## Known Issues
- Edge response currently shows `content-security-policy:` as an empty header value despite app-level CSP middleware being set in `server.js`; likely overwritten upstream.

## Decisions
- 2026-04-23: Replaced default placeholder with a fully minimal landing page containing only a centered folder icon.
- 2026-04-24: Migrated runtime server from raw Node `http.createServer` to Express, added `express` dependency, and standardized serving via `express.static` + `app.listen(0.0.0.0, PORT)`.
- 2026-04-24: Removed app-level CSP middleware after confirming edge layer overwrites CSP with an empty value; documented as platform limitation to avoid false security assumptions.
- 2026-04-24: Added Express catch-all middleware to handle unmatched routes and return `index.html` with `404` status from app code.
- 2026-04-29: Simplified runtime again to bare Node `http` serving cached `index.html`, removed the Express dependency, and added a `/health` endpoint to reduce moving parts and startup risk.
- 2026-04-29: Replaced the center folder emoji with an inline SVG zip-file icon.

## How to Use Memory
- Update this file with important decisions, architecture choices, and lessons
- Daily logs go in `memory/2026-04-29.md`
- Use /compact if context gets long during a session
