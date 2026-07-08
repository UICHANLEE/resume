source request: Make each experience clearly show what problem was solved, how it was approached, what was executed, and what result came out. Separate certificates and awards into their own sections. Add the missing ISO 29110 quality-system experience and show related organizations/projects such as UIPA, KTL, and TTA. Expand IRIS-Life lifespan evaluation as self-introduction material, including existing lifespan evaluation and lifespan evaluation 1/2/3 with each problem, approach, execution, and result.
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
- The page renders a dedicated IRIS-Life Deep Dive section with 5 cards: existing lifespan evaluation baseline, SK method, GS/EVA method, DEEPAI AI method, and API/visualization/LLM productization.
- The IRIS-Life Deep Dive cards include Problem, Approach, Execution, Result, and self-introduction narrative copy.
- Lifespan content includes LifeEvaluator, remaining life formula, MRT, Gumbel/Weibull, EVA, FT-Transformer, R2 0.966, RMSE 2.57, 57 features, 33,300 samples, FastAPI, `/iris-lifetime`, visualization modules, and LLM inspection plan.
- Standards section renders 3 cards: ISO 29110, ISO/IEC 23894, ISO 9712 / NDT.
- ISO 29110 content includes software quality system, KTL mark response, and UIPA quality-system diagnosis context.
- ISO 29110 card explicitly shows `울산정보산업진흥원(UIPA) 사업 · KTL 품질체계/마크 인증 대응`.
- Reliability story now references TTA, KTL, and UIPA project context in the approach/execution copy.
- Certificates section renders 2 cards: ADsP and SQLD.
- Awards section renders 1 card: 2024 동남권 LINC3.0 글로벌 창업 노마드 캠프 우수상.
- Mobile layout stacks story steps, certificate cards, and award cards without visible overlap.

**Content Changes Verified**
- Experience wording now explains why the problem mattered before describing the action.
- Approach and execution are separated so the reader can see both reasoning and implementation.
- Results are paired with measurable outcomes such as 98% accuracy, 50K+ labels, 15% error reduction, R2 0.966, RMSE 2.57, and TTA review pass.
- Reliability story now includes ISO 29110 / ISO/IEC 23894 / KTL quality-system response rather than only TTA AI reliability.
- Standards and quality-system experience is separated from personal certificates so the distinction is clear.
- Agency/project context is now visible at card level rather than hidden inside generic standards language.
- Certificates and awards are no longer mixed into education/skills; they have independent sections and sidebar navigation.
- IRIS-Life is no longer summarized as a single shallow bullet; existing evaluation and methods 1/2/3 are separated so the reader can see what problem each method solved and how the result changed.

**Residual Polish**
- A future iteration could add evidence links or scanned certificates if the source files are available.
- A future iteration could add print/PDF export styling for offline submission.

final result: passed
