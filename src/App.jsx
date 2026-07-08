import { useEffect, useMemo, useState } from "react";
import {
  ArrowSquareOut,
  BracketsCurly,
  Briefcase,
  CalendarBlank,
  Certificate,
  Code,
  EnvelopeSimple,
  FileCode,
  GithubLogo,
  GraduationCap,
  IdentificationBadge,
  LinkedinLogo,
  MagnifyingGlass,
  Medal,
  ShieldCheck,
  Stack,
  TrendUp,
} from "@phosphor-icons/react";

const navItems = [
  { id: "about", label: "About", icon: IdentificationBadge },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "ip", label: "Intellectual Property", icon: Medal },
  { id: "products", label: "Product Suite", icon: Stack },
  { id: "cases", label: "Case Studies", icon: TrendUp },
  { id: "skills", label: "Skills", icon: Code },
];

const metrics = [
  {
    label: "Detection Accuracy",
    value: "98%",
    caption: "IRIS-Auto defect detection",
    icon: ShieldCheck,
  },
  {
    label: "R2 Score",
    value: "0.966",
    caption: "IRIS-Life lifespan model",
    icon: TrendUp,
  },
  {
    label: "Labeled Dataset",
    value: "50K+",
    caption: "YOLO training samples",
    icon: BracketsCurly,
  },
];

const focusCards = [
  {
    label: "01",
    title: "데이터 품질을 모델 성능으로 연결",
    body:
      "라벨링, 검수, 재라벨링 기준을 직접 정리하고 모델 학습 데이터셋으로 이어지게 만드는 실무형 ML 흐름에 강점이 있습니다.",
  },
  {
    label: "02",
    title: "현장 제약을 반영한 예측 모델링",
    body:
      "facility 단위 hold-out, 운영환경 변수, 결함 신호의 논리 오류를 고려해 산업 데이터에 맞는 평가 기준을 세웠습니다.",
  },
  {
    label: "03",
    title: "제품화와 인증까지 이어지는 실행력",
    body:
      "FastAPI, LLM 검사계획, 신뢰성 인증 문서, 특허/저작권 산출물까지 모델 이후의 전달 과정을 챙깁니다.",
  },
];

const productGroups = [
  {
    title: "ML & Data Science",
    items: [
      ["IRIS-Auto", "YOLOv8-seg 기반 결함 탐지"],
      ["IRIS-Life", "FT-Transformer 수명예측"],
      ["ETRI", "라이프로그 지표 예측"],
    ],
  },
  {
    title: "Product MVP",
    items: [
      ["cashlog", "사진 기반 지출 기록 MVP"],
      ["IMC", "Jira/Confluence 통합 PM 콘솔"],
      ["bread-recipe", "레시피 추천 풀스택 앱"],
    ],
  },
  {
    title: "Automation & Tools",
    items: [
      ["domeme", "이커머스 상품 자동화"],
      ["review_bot", "앱 리뷰 수집/분석 파이프라인"],
      ["hotkey", "업무 단축키 매크로 패드"],
    ],
  },
];

const skillRows = [
  ["Python", "core"],
  ["PyTorch", "framework"],
  ["FastAPI", "backend"],
  ["YOLO Models", "vision"],
  ["Transformers", "lifespan"],
  ["OpenCV", "vision"],
  ["Scikit-Learn", "ml"],
  ["Data Pipelines", "mlops"],
  ["React", "frontend"],
  ["PostgreSQL", "database"],
  ["Docker", "infra"],
  ["Vercel", "deploy"],
];

const experienceStories = [
  {
    period: "2025.03 - 2025.12",
    role: "Machine Learning Engineer",
    company: "(주) 딥아이",
    title: "IRIS-Auto 결함 탐지 데이터 품질 개선",
    summary:
      "비파괴검사 이미지/초음파 데이터에서 라벨 품질을 안정화하고 YOLOv8-seg 학습 데이터셋을 구축했습니다.",
    problem:
      "열교환기 전열관 결함 데이터는 현장별 신호 품질과 라벨 기준이 달라 미탐/오탐 원인을 추적하기 어려웠습니다.",
    action:
      "ROBOFLOW, CVAT 기반으로 50,000건 이상의 YOLO 포맷 라벨을 구축하고, 결함 유형별 가이드와 검수/재라벨링 기준을 정리했습니다.",
    solution:
      "라벨링 기준을 모델 학습 단위와 맞추고, 결함 유형(IP, IC, EP, EC)과 데이터셋 버전을 관리해 반복 학습이 가능한 구조로 만들었습니다.",
    result:
      "IRIS-Auto 탐지 정확도 98% 수준 달성에 기여했고, 라벨 오류율을 약 15% 줄여 모델 개선의 병목을 낮췄습니다.",
    tags: ["YOLOv8-seg", "CVAT", "ROBOFLOW", "Data QA"],
  },
  {
    period: "2025.04 - 2025.10",
    role: "FT-Transformer & API Contributor",
    company: "(주) 딥아이",
    title: "IRIS-Life 수명예측 모델 고도화",
    summary:
      "facility 편차가 큰 설비 데이터를 예측 가능한 수명평가 모델과 API 흐름으로 정리했습니다.",
    problem:
      "초기 수명예측 모델은 facility별 분포 차이와 feature 정의 문제로 성능 편차가 컸고, R2가 음수로 떨어지는 케이스도 있었습니다.",
    action:
      "33,300개 샘플, 57개 feature, 37개 facility 기준으로 데이터를 재구성하고 facility hold-out 분할과 샘플링 로직을 적용했습니다.",
    solution:
      "FT-Transformer 학습을 최적화하고 LifeEvaluator, 시각화 모듈, FastAPI 엔드포인트로 모델 결과를 제품 흐름에 연결했습니다.",
    result:
      "R2 0.966, RMSE 2.57, MAE 1.99, MAPE 4.24% 성능을 달성했고 수명평가 REST API와 LLM 검사계획 기능까지 확장했습니다.",
    tags: ["FT-Transformer", "FastAPI", "Sampling", "LifeEvaluator"],
  },
  {
    period: "2025.07 - 2025.09",
    role: "Reliability Documentation",
    company: "(주) 딥아이",
    title: "TTA AI 신뢰성 인증 대응",
    summary:
      "모델 성능뿐 아니라 신뢰성, 위험관리, 설명가능성 문서를 제품 품질 체계 안에 정리했습니다.",
    problem:
      "산업용 AI는 정확도 외에도 위험관리, 문서 완성도, 환경 영향, 현장 QA 근거를 인증 관점에서 설명해야 했습니다.",
    action:
      "ISO/IEC 23894 기반 위험관리계획서와 위험관리대장을 작성하고, TTA 중간심사 회의록과 시스템 설명 자료를 정리했습니다.",
    solution:
      "결함 검출 실패 원인, Random Forest 기반 XAI, 탄소/전력 모니터링 등 평가 항목별 근거를 인증 문서에 연결했습니다.",
    result:
      "2025.08.05 TTA 신뢰성 중간심사를 통과했고, 문서 완성도와 위험도 커스터마이징 측면에서 긍정 평가를 받았습니다.",
    tags: ["TTA", "ISO/IEC 23894", "XAI", "Risk Management"],
  },
  {
    period: "2022.05 - Present",
    role: "E-commerce Operator",
    company: "구매대행 온라인 쇼핑몰",
    title: "상품 카테고리 표준화와 운영 자동화",
    summary:
      "실제 커머스 운영 경험을 통해 데이터 분류, 속성 정리, 자동화의 필요성을 몸으로 익혔습니다.",
    problem:
      "여러 판매 채널의 상품명, 속성, 카테고리 기준이 달라 중복 등록과 검색 정확도 저하가 반복됐습니다.",
    action:
      "토스쇼핑, 스마트스토어, 쿠팡윙, ESM+ 운영 데이터를 비교하며 중복/모호 카테고리를 계층 구조로 재정리했습니다.",
    solution:
      "상품명, 속성, 카테고리 기준을 표준화하고 자동 등록/수집 파이프라인 아이디어를 개인 프로젝트로 확장했습니다.",
    result:
      "중복 카테고리를 약 30% 줄이고 분류 일관성을 95% 이상으로 끌어올려 운영 효율과 검색 품질을 개선했습니다.",
    tags: ["Commerce", "Taxonomy", "Automation", "Operations"],
  },
];

const caseStudies = [
  {
    title: "Data Integrity & Facility Split",
    problem: "동일 facility와 파일명이 서로 다른 폴더에 중복되어 학습/검증 데이터가 섞일 위험이 있었습니다.",
    action: "facility + 파일명 6자리 기준 매핑 테이블을 만들고 공통 facility 103개만 필터링했습니다.",
    result: "데이터 누수를 줄이고 수명예측 모델 평가를 facility 단위 hold-out 기준으로 안정화했습니다.",
    metric: "103 facilities",
  },
  {
    title: "SVR Performance Optimization",
    problem: "자동평가 파이프라인에서 SVR 처리 시간이 길어 현장 QA 반복 속도가 떨어졌습니다.",
    action: "n_jobs, epsilon, C 값을 조정하고 KernelRidge/FastPoly 대체 모델을 비교했습니다.",
    result: "기준 처리 시간을 35초에서 22초로 줄였고, 대체 모델에서는 25초에서 6초까지 단축 가능성을 확인했습니다.",
    metric: "35s -> 22s",
  },
  {
    title: "FT-Transformer Model Recovery",
    problem: "초기 모델은 facility 편차와 feature 품질 문제로 R2가 낮거나 음수로 흔들렸습니다.",
    action: "feature 정의, 샘플링, 분할 기준, 하이퍼파라미터를 재점검하며 실험 로그를 축적했습니다.",
    result: "R2 0.847에서 0.966까지 끌어올려 산업 데이터 예측 모델로 설명 가능한 성능을 만들었습니다.",
    metric: "R2 0.966",
  },
];

export function App() {
  const [active, setActive] = useState("about");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.08, 0.2, 0.4] },
    );

    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const filteredSkills = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return skillRows;
    return skillRows.filter(([name, area]) =>
      `${name} ${area}`.toLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <div className="resume-shell">
      <aside className="sidebar">
        <a className="brand" href="#about" aria-label="Go to top">
          <span>Eui-chan</span>
          <span>Lee</span>
          <small>ML Engineer</small>
        </a>

        <nav className="side-nav" aria-label="Portfolio sections">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                className={active === item.id ? "active" : ""}
                href={`#${item.id}`}
                key={item.id}
              >
                <Icon size={15} weight="bold" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="status-box">
          <span>Status</span>
          <strong>Open to ML/Product Roles</strong>
          <a href="mailto:chaos391@naver.com">
            <EnvelopeSimple size={13} weight="bold" />
            Contact
          </a>
        </div>
      </aside>

      <header className="mobile-topbar">
        <a href="#about">Eui-chan Lee</a>
        <span>ML Resume</span>
      </header>

      <main className="content">
        <section className="hero section-panel" id="about">
          <div className="system-chip">
            <span />
            Resume website // problem to result
          </div>

          <div className="hero-layout">
            <div>
              <p className="eyebrow">이의찬 · Machine Learning Engineer</p>
              <h1>
                산업 데이터를
                <br />
                작동하는 ML 제품으로
              </h1>
              <p className="hero-copy">
                저는 비파괴검사(NDT) 도메인에서 라벨링 품질, 모델 성능,
                수명예측, API, 신뢰성 인증까지 이어지는 흐름을 경험했습니다.
                문제를 작게 쪼개고, 데이터 기준을 세우고, 결과를 수치와
                문서로 남기는 방식으로 일합니다.
              </p>

              <div className="cta-row">
                <a className="primary-btn" href="mailto:chaos391@naver.com">
                  <EnvelopeSimple size={14} weight="bold" />
                  Email
                </a>
                <a
                  className="ghost-btn"
                  href="https://github.com/UICHANLEE"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GithubLogo size={14} weight="bold" />
                  GitHub
                </a>
                <a
                  className="ghost-btn"
                  href="https://www.linkedin.com/in/의찬-이-ba771a310/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <LinkedinLogo size={14} weight="bold" />
                  LinkedIn
                </a>
              </div>
            </div>

            <aside className="profile-card" aria-label="Resume summary">
              <strong>Core Narrative</strong>
              <p>
                모델 정확도만 보는 엔지니어가 아니라, 데이터가 만들어지는
                과정부터 제품으로 전달되는 마지막 화면까지 함께 보는 사람입니다.
              </p>
              <dl>
                <div>
                  <dt>Domain</dt>
                  <dd>NDT · Vision AI · Lifespan Prediction</dd>
                </div>
                <div>
                  <dt>Style</dt>
                  <dd>Problem-first, metric-driven, documented</dd>
                </div>
              </dl>
            </aside>
          </div>

          <div className="focus-grid" aria-label="Working strengths">
            {focusCards.map((card) => (
              <article className="focus-card" key={card.title}>
                <span>{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>

          <div className="metric-grid" aria-label="Career metrics">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <article className="metric-card" key={metric.label}>
                  <div>
                    <span>{metric.label}</span>
                    <Icon size={16} weight="bold" />
                  </div>
                  <strong>{metric.value}</strong>
                  <p>{metric.caption}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-panel experience-section" id="experience">
          <div className="section-heading">
            <div>
              <h2>Experience Stories</h2>
              <p>각 경험을 Problem, Action, Solution, Result 흐름으로 정리했습니다.</p>
            </div>
            <span>PASR</span>
          </div>

          <div className="story-list">
            {experienceStories.map((entry) => (
              <article className="story-card" key={entry.title}>
                <div className="story-head">
                  <div>
                    <span className="story-period">
                      <CalendarBlank size={13} weight="bold" />
                      {entry.period}
                    </span>
                    <h3>{entry.title}</h3>
                    <p>
                      {entry.role} · {entry.company}
                    </p>
                  </div>
                  <strong>{entry.summary}</strong>
                </div>

                <div className="pasr-grid">
                  <StoryStep label="Problem" text={entry.problem} />
                  <StoryStep label="Action" text={entry.action} />
                  <StoryStep label="Solution" text={entry.solution} />
                  <StoryStep label="Result" text={entry.result} highlight />
                </div>

                <div className="tag-row">
                  {entry.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-panel band" id="ip">
          <div className="section-heading">
            <div>
              <h2>Intellectual Property</h2>
              <p>업무 산출물이 등록 가능한 기술 자산으로 이어진 경험입니다.</p>
            </div>
          </div>

          <div className="ip-grid">
            <article className="feature-card highlighted">
              <span>Registered Patent</span>
              <h3>열교환기 전열관 결함 심각도 분석 및 위험구간 탐지 방법</h3>
              <p>등록번호 10-2967312 · 발명자 참여</p>
              <a
                href="https://doi.org/10.8080/1020250118563"
                target="_blank"
                rel="noreferrer"
              >
                <ArrowSquareOut size={14} weight="bold" />
                Patent DOI
              </a>
            </article>

            <article className="feature-card">
              <span>Software Copyright</span>
              <h3>DEEP-NDT 수명평가 시스템</h3>
              <p>한국저작권위원회 제C-2025-036843호</p>
              <small>FT-Transformer 기반 잔여수명 평가 모듈</small>
            </article>
          </div>
        </section>

        <section className="section-panel" id="products">
          <div className="section-heading">
            <div>
              <h2>Product Suite</h2>
              <p>업무, 개인 MVP, 자동화 프로젝트를 제품 단위로 정리했습니다.</p>
            </div>
            <span>modules</span>
          </div>

          <div className="product-grid">
            {productGroups.map((group) => (
              <article className="product-column" key={group.title}>
                <h3>
                  <FileCode size={15} weight="bold" />
                  {group.title}
                </h3>
                {group.items.map(([name, desc]) => (
                  <div className="product-item" key={name}>
                    <strong>{name}</strong>
                    <span>{desc}</span>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section className="section-panel band" id="cases">
          <div className="section-heading">
            <div>
              <h2>Technical Case Studies</h2>
              <p>문제 해결 과정을 짧은 케이스 카드로 압축했습니다.</p>
            </div>
          </div>

          <div className="case-grid">
            {caseStudies.map((study) => (
              <article className="case-card" key={study.title}>
                <header>
                  <h3>{study.title}</h3>
                  <strong>{study.metric}</strong>
                </header>
                <div className="case-steps">
                  <StoryStep label="Problem" text={study.problem} />
                  <StoryStep label="Action" text={study.action} />
                  <StoryStep label="Result" text={study.result} highlight />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-panel" id="skills">
          <div className="section-heading">
            <div>
              <h2>Technical Stack</h2>
              <p>프로젝트와 업무에서 실제로 사용한 기술 중심입니다.</p>
            </div>
            <label className="search-box">
              <MagnifyingGlass size={14} weight="bold" />
              <input
                aria-label="Filter skills"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Filter"
                value={query}
              />
            </label>
          </div>

          <div className="skill-grid">
            {filteredSkills.map(([name, area]) => (
              <span className="skill-pill" key={name}>
                {name}
                <small>{area}</small>
              </span>
            ))}
          </div>

          <div className="education-strip">
            <GraduationCap size={17} weight="bold" />
            <div>
              <strong>국립부경대학교 시스템경영공학부 기술데이터공학전공</strong>
              <span>ADsP · SQLD · LINC3.0 글로벌 창업 노마드 캠프 우수상</span>
            </div>
            <Certificate size={17} weight="bold" />
          </div>
        </section>

        <footer className="footer">
          <span>EUI-CHAN LEE</span>
          <p>© 2026 Eui-chan Lee · Resume website</p>
        </footer>
      </main>
    </div>
  );
}

function StoryStep({ label, text, highlight = false }) {
  return (
    <div className={highlight ? "story-step highlight" : "story-step"}>
      <span>{label}</span>
      <p>{text}</p>
    </div>
  );
}
