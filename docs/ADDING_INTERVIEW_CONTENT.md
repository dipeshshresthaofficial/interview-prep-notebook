# Adding Interview Content

This project keeps interview content data-driven so developers do not have to hardcode markup into Vue components.

## Source file

The source transcript lives at:

- `content/interview-transcript.txt`

This repository already contains the text extracted from the supplied `.docx`.

## Generated data

The Vue page reads from:

- `src/data/interviewContent.js`

Do not edit that file manually unless you intentionally want to bypass the generator.

## Regenerating content

When the transcript changes, run:

```bash
npm run build:data
```

This runs:

- `scripts/build-interview-data.mjs`

The script:

1. Parses the transcript into session-level sections.
2. Detects question and answer pairs.
3. Applies section metadata.
4. Generates the final JS data module consumed by the site.

## Updating session titles or summaries

Edit the `sectionMeta` object inside:

- `scripts/build-interview-data.mjs`

That is where section titles, summaries, and focus tags are defined.

## UI structure

The page uses a two-level accordion:

1. Session-level accordion
2. Question-level accordion inside each session

Default behavior:

- the first session is open by default
- the first question inside the first session is open by default
- search opens matching content automatically

## Main rendering files

- `src/pages/InterviewPrepPage.vue`
- `src/assets/styles/site.css`

Keep content changes in the data flow whenever possible and avoid embedding Q&A directly in Vue templates.
