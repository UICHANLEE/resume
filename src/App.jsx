import { useEffect, useMemo, useState } from "react";
import {
  ArrowSquareOut,
  BracketsCurly,
  Briefcase,
  CalendarBlank,
  CaretRight,
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
    caption: "IRIS-Auto YOLOv8-seg",
    icon: ShieldCheck,
  },
  {
    label: "R2 Score",
    value: "0.966",
    caption: "IRIS-Life FT-Transformer",
    icon: TrendUp,
  },
  {
    label: "Data Pipeline",
    value: "50K+",
    caption: "Processed samples",
    icon: BracketsCurly,
  },
];

const productGroups = [
  {
    title: "ML & Data Science",
    items: [
      ["IRIS-Auto", "YOLOv8-seg defect detection"],
      ["IRIS-Life", "FT-Transformer lifespan model"],
      ["ETRI", "Lifelog metric prediction"],
    ],
  },
  {
    title: "Product MVP",
    items: [
      ["cashlog", "Vision-based expense diary"],
      ["IMC", "Integrated management console"],
      ["bread-recipe", "Recipe recommendation engine"],
    ],
  },
  {
    title: "Automation & Tools",
    items: [
      ["domeme", "E-commerce automation stack"],
      ["hotkey", "Workflow efficiency tool"],
      ["bangtalchul", "Reservation automation"],
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

const timeline = [
  {
    period: "2025.03 - 2025.12",
    role: "Machine Learning Engineer",
    company: "(주) 딥아이",
    points: [
      {
        title: "IRIS-Auto · Vision Framework",
        body:
          "YOLOv8-seg 기반 열교환기 결함 탐지 데이터셋과 라벨링 품질 체계를 구축해 98% 수준의 탐지 정확도에 기여했습니다.",
      },
      {
        title: "IRIS-Life · Predictive Modeling",
        body:
          "57개 feature와 facility hold-out 분할을 적용한 FT-Transformer 수명예측 모델을 최적화해 R2 0.966을 달성했습니다.",
      },
      {
        title: "TTA Reliability Certification",
        body:
          "ISO/IEC 23894 기반 위험관리 문서와 인증 대응 자료를 정리하며 현장 QA와 신뢰성 심사를 지원했습니다.",
      },
    ],
    tags: ["YOLOv8", "PyTorch", "Transformer", "Data Pipeline"],
  },
  {
    period: "2022.05 - Present",
    role: "E-commerce Operator",
    company: "구매대행 온라인 쇼핑몰",
    points: [
      {
        title: "Category Data Refinement",
        body:
          "토스쇼핑, 스마트스토어, 쿠팡윙, ESM+ 운영 경험을 바탕으로 상품 카테고리를 표준화해 중복을 30% 줄였습니다.",
      },
    ],
    tags: ["Commerce", "Automation", "Taxonomy"],
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
          <small>ML Resident</small>
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
          <strong>System Operational</strong>
          <a href="mailto:chaos391@naver.com">
            <EnvelopeSimple size={13} weight="bold" />
            Contact
          </a>
        </div>
      </aside>

      <header className="mobile-topbar">
        <a href="#about">Eui-chan Lee</a>
        <span>ML Portfolio</span>
      </header>

      <main className="content">
        <section className="hero section-panel" id="about">
          <div className="system-chip">
            <span />
            System initialized // v1.26
          </div>
          <h1>
            검사 데이터의 품질을
            <br />
            모델 성능으로 연결하는 ML Engineer
          </h1>
          <p className="hero-copy">
            비파괴검사 산업 데이터에서 라벨링 체계, 모델 학습, API, 신뢰성
            인증까지 이어지는 문제를 다룹니다. 현장의 결함 신호를 정제하고
            예측 가능한 AI 시스템으로 바꾸는 일을 좋아합니다.
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
            <h2>Core Experience</h2>
            <span>timeline</span>
          </div>

          <div className="timeline">
            {timeline.map((entry) => (
              <article className="experience-card" key={entry.role}>
                <div className="experience-meta">
                  <div>
                    <h3>{entry.role}</h3>
                    <p>{entry.company}</p>
                  </div>
                  <span>
                    <CalendarBlank size={13} weight="bold" />
                    {entry.period}
                  </span>
                </div>

                <div className="terminal-bar">
                  <i />
                  <i />
                  <i />
                  <code>~/experience/deepai/{entry.role.toLowerCase()}.log</code>
                </div>

                <div className="experience-lines">
                  {entry.points.map((point) => (
                    <div className="line-item" key={point.title}>
                      <CaretRight size={15} weight="bold" />
                      <div>
                        <strong>{point.title}</strong>
                        <p>{point.body}</p>
                      </div>
                    </div>
                  ))}
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
            <h2>Intellectual Property</h2>
          </div>

          <div className="ip-grid">
            <article className="feature-card highlighted">
              <span>Registered Patent</span>
              <h3>열교환기 전열관 결함 심각도 분석 및 위험구간 탐지 방법</h3>
              <p>등록번호 10-2967312 · 발명자 참여</p>
              <a href="https://doi.org/10.8080/1020250118563" target="_blank" rel="noreferrer">
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
            <h2>Product Suite</h2>
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
            <h2>Technical Case Studies</h2>
          </div>

          <article className="case-card">
            <header>
              <h3>Data Integrity & Performance Optimization</h3>
            </header>
            <div className="case-content">
              <div>
                <p>
                  동일 facility와 파일명 중복, SVR 처리 시간, 초기 수명예측 성능
                  저하를 데이터 기준 재정의와 모델 튜닝으로 풀었습니다.
                </p>
                <ul>
                  <li>중복 매핑 테이블로 공통 facility 103개 필터링</li>
                  <li>n_jobs와 대체 회귀모델 비교로 처리 시간 단축</li>
                  <li>feature 재설계로 R2 0.847에서 0.966까지 개선</li>
                </ul>
              </div>
              <div className="bar-stack" aria-label="Optimization metrics">
                <MetricBar label="SVR time" value="35s → 22s" size="66%" />
                <MetricBar label="FastPoly" value="25s → 6s" size="84%" />
                <MetricBar label="R2 Gain" value="+14.1%" size="92%" />
              </div>
            </div>
          </article>
        </section>

        <section className="section-panel" id="skills">
          <div className="section-heading">
            <h2>Technical Stack</h2>
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
          <p>© 2026 Eui-chan Lee · Built with precision</p>
        </footer>
      </main>
    </div>
  );
}

function MetricBar({ label, value, size }) {
  return (
    <div className="metric-bar">
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
      <i>
        <b style={{ width: size }} />
      </i>
    </div>
  );
}
