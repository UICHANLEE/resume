source request: Make each experience clearly show what problem was solved, how it was approached, what was executed, and what result came out. Separate certificates and awards into their own sections.
implementation URL: http://127.0.0.1:8899/
viewport checked: desktop 1280x1400, mobile 390x900
state: default page, experience cards, certificates, awards

**Findings**
- No P0/P1/P2 findings remain.

**Verification**
- `npm run build` passed.
- Page loads with meaningful resume content.
- Vite error overlay was not present.
- Browser console warnings/errors were empty.
- The page renders 4 problem-solving story cards.
- Each story card includes a prominent Core Problem strip, Approach, Execution, Result cards, and impact metric chips.
- Certificates section renders 2 cards: ADsP and SQLD.
- Awards section renders 1 card: 2024 동남권 LINC3.0 글로벌 창업 노마드 캠프 우수상.
- Mobile layout stacks story steps, certificate cards, and award cards without visible overlap.

**Content Changes Verified**
- Experience wording now explains why the problem mattered before describing the action.
- Approach and execution are separated so the reader can see both reasoning and implementation.
- Results are paired with measurable outcomes such as 98% accuracy, 50K+ labels, 15% error reduction, R2 0.966, RMSE 2.57, and TTA review pass.
- Certificates and awards are no longer mixed into education/skills; they have independent sections and sidebar navigation.

**Residual Polish**
- A future iteration could add evidence links or scanned certificates if the source files are available.
- A future iteration could add print/PDF export styling for offline submission.

final result: passed
