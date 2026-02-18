---
description: Sync the Cmd+K search index with actual site content
---

Update the search index to reflect all content currently in the site. This is an assisted update: Claude analyzes the site content and proposes missing entries.

## Steps

1. Read the current search index:
```
Read src/data/search-index.ts
```

2. Scan site content to list all sections/pages:
```
Read src/pages/index.astro
ls src/pages/
ls src/components/landing/
ls src/components/global/
```

3. Compare index vs actual content — identify entries missing from `SEARCH_INDEX`.

4. For each missing entry, propose a `SearchEntry` object with:
   - Unique `id` following the pattern (f=feature, p=provider, q=faq, d=doc)
   - Descriptive `title`
   - Rich `keywords` (lowercase, space-separated)
   - Appropriate `category` (Features, Providers, FAQ, Install, Docs)
   - Correct anchor `url` (e.g. `/#screenshots`)
   - `source: 'landing'`

5. Show the proposed entries and ask for confirmation before editing `search-index.ts`.

6. After confirmation, add the entries to the appropriate array in `src/data/search-index.ts`.

7. Verify no TypeScript errors:
```bash
pnpm build
```

8. Report: total entries before → after, build status.

## Context

- **Index**: `src/data/search-index.ts`
- **Site pages**: `src/pages/` (index.astro, faq/)
- **Components**: `src/components/landing/` and `src/components/global/`
- Bridge is a single-page landing + FAQ page — all content is anchor-based
- No external guide repo: index only covers the landing site itself