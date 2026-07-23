import {
  ArrowLeft,
  EnvelopeSimple,
  FilePdf,
  GithubLogo,
  LinkedinLogo,
  Printer,
} from "@phosphor-icons/react";
import { useEffect } from "react";

const experienceBullets = [
  "IRIS 초음파 검사 이미지 50,000건+의 라벨링·검수 기준을 정립하고 오류율을 약 15% 줄여 YOLOv8-seg 결함 탐지 정확도 98% 달성에 기여",
  "33,300 samples · 57 features · 37 facilities 기반 FT-Transformer 수명예측 모델을 최적화해 R² 0.966, RMSE 2.57 달성",
  "facility 단위 hold-out으로 데이터 누수를 통제하고 LifeEvaluator 3개 평가 방식, FastAPI REST API, LLM 검사계획 기능까지 제품화",
  "ISO/IEC 23894 위험관리 문서와 ISO 29110 품질 산출물을 구성해 UIPA 품질체계 진단 및 TTA AI 신뢰성 중간심사 통과",
];

const projects = [
  {
    title: "SOTA AI Research Platform",
    stack: "Next.js · FastAPI · SQLite · Ollama",
    body: "Hugging Face·ArXiv·GitHub Collector, 논문 PDF 분석, 모델 분류·요약을 연결한 풀스택 AI 리서치 플랫폼",
  },
  {
    title: "Medical & Lifelog AI",
    stack: "PyTorch · ResNet-18 · LightGBM/XGBoost",
    body: "Stanford MRNet ACL MRI 분류와 피험자 GroupKFold 기반 ETRI 수면·라이프로그 지표 예측",
  },
  {
    title: "3D Point Cloud Dataset",
    stack: "PCL · ICP · RANSAC · KITTI",
    body: "LiDAR 포인트 클라우드 전처리·정합·분할과 3D Object Detection PSR Cuboid 라벨링 연구",
  },
];

const skillGroups = [
  ["AI / ML", "PyTorch, scikit-learn, YOLOv8-seg, FT-Transformer, XGBoost, LightGBM"],
  ["Data", "Pandas, NumPy, feature engineering, GroupKFold, data QA, SQL"],
  ["Product", "FastAPI, Pydantic, React, Next.js, TypeScript, Node.js"],
  ["Infra / DB", "Docker, Vercel, Fly.io, PostgreSQL, MariaDB, SQLite, Redis"],
  ["Workflow", "Git/GitHub, JIRA, Confluence, ISO 29110, ISO/IEC 23894"],
];

export function AiEngineerResume() {
  const homeHref = window.location.pathname.startsWith("/resume/") ? "/resume/" : "/";
  const pdfHref = `${homeHref}EuiChanLee_AI_Engineer_Resume.pdf`;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "AI Engineer 이력서 | 이의찬";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="a4-resume-page">
      <header className="a4-screen-toolbar">
        <a href={homeHref}>
          <ArrowLeft size={16} weight="bold" />
          포트폴리오
        </a>
        <span>A4 · 1 PAGE · AI ENGINEER RESUME</span>
        <div className="a4-toolbar-actions">
          <a href={pdfHref} download>
            <FilePdf size={16} weight="bold" />
            PDF 다운로드
          </a>
          <button type="button" onClick={() => window.print()} title="이력서 인쇄">
            <Printer size={16} weight="bold" />
            인쇄
          </button>
        </div>
      </header>

      <main className="a4-resume-sheet">
        <header className="a4-resume-header">
          <div>
            <p className="a4-overline">AI ENGINEER · MACHINE LEARNING · DATA PRODUCT</p>
            <h1>
              이의찬 <span>Eui-chan Lee</span>
            </h1>
            <p className="a4-tagline">
              데이터 품질에서 모델 검증, API 제품화, AI 신뢰성까지 연결하는 엔지니어
            </p>
          </div>

          <address className="a4-contact">
            <a href="mailto:chaos391@naver.com">
              <EnvelopeSimple size={12} weight="bold" />
              chaos391@naver.com
            </a>
            <a href="https://github.com/UICHANLEE" rel="noreferrer" target="_blank">
              <GithubLogo size={12} weight="bold" />
              github.com/UICHANLEE
            </a>
            <a
              href="https://www.linkedin.com/in/의찬-이-ba771a310/"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedinLogo size={12} weight="bold" />
              LinkedIn / Eui-chan Lee
            </a>
          </address>
        </header>

        <section className="a4-metrics" aria-label="핵심 성과">
          <Metric value="98%" label="결함 탐지 정확도" />
          <Metric value="R² 0.966" label="수명예측 모델" />
          <Metric value="50K+" label="검수 데이터" />
          <Metric value="TTA PASS" label="AI 신뢰성 심사" />
        </section>

        <div className="a4-resume-columns">
          <div className="a4-main-column">
            <ResumeSection title="Profile">
              <p className="a4-summary">
                산업용 비파괴검사 AI에서 데이터 기준 수립, Vision 모델 QA,
                FT-Transformer 예측, FastAPI 서비스, 표준·인증 대응을 수행했습니다.
                높은 점수보다 데이터 누수와 운영 실패 조건을 먼저 확인하고 결과를
                수치와 문서로 남깁니다.
              </p>
            </ResumeSection>

            <ResumeSection title="Experience">
              <article className="a4-experience">
                <header>
                  <div>
                    <h3>(주)딥아이</h3>
                    <p>AI/ML Engineer · Data Quality</p>
                  </div>
                  <time>2025.03 - 2025.12</time>
                </header>
                <ul>
                  {experienceBullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>

              <article className="a4-experience compact">
                <header>
                  <div>
                    <h3>구매대행 온라인 쇼핑몰</h3>
                    <p>Data-driven Operations</p>
                  </div>
                  <time>2022.05 - 현재</time>
                </header>
                <ul>
                  <li>
                    다채널 상품 분류체계를 표준화해 중복 카테고리 30% 감소,
                    분류 일관성 95%+ 달성
                  </li>
                </ul>
              </article>
            </ResumeSection>

            <ResumeSection title="Selected AI Projects">
              <div className="a4-project-list">
                {projects.map((project) => (
                  <article key={project.title}>
                    <div>
                      <h3>{project.title}</h3>
                      <span>{project.stack}</span>
                    </div>
                    <p>{project.body}</p>
                  </article>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="Engineering Impact">
              <div className="a4-impact-list">
                <article>
                  <strong>Data integrity</strong>
                  <p>
                    중복 347건을 추적하고 공통 facility 103개 기준으로 데이터를
                    재구성해 학습·검증 누수 가능성을 차단
                  </p>
                </article>
                <article>
                  <strong>Runtime optimization</strong>
                  <p>
                    SVR 처리시간을 35초에서 22초로 단축하고, 정확도 3%p 이내
                    대체 모델에서 6초 처리 가능성 검증
                  </p>
                </article>
              </div>
            </ResumeSection>
          </div>

          <aside className="a4-side-column">
            <ResumeSection title="Technical Skills">
              <dl className="a4-skill-groups">
                {skillGroups.map(([label, skills]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{skills}</dd>
                  </div>
                ))}
              </dl>
            </ResumeSection>

            <ResumeSection title="Education">
              <div className="a4-credential">
                <strong>국립부경대학교</strong>
                <span>시스템경영공학부 기술데이터공학전공 · 학사</span>
                <time>2019.03 - 2024.08</time>
                <p>데이터사이언스 · 딥러닝과 인공지능 · 데이터베이스응용</p>
              </div>
            </ResumeSection>

            <ResumeSection title="Certifications">
              <ul className="a4-simple-list">
                <li>
                  <strong>SQLD</strong>
                  <span>SQL 개발자 · 2025.04</span>
                </li>
                <li>
                  <strong>ADsP</strong>
                  <span>데이터분석 준전문가 · 2024.09</span>
                </li>
              </ul>
            </ResumeSection>

            <ResumeSection title="IP & Recognition">
              <ul className="a4-simple-list dense">
                <li>
                  <strong>등록특허 10-2967312 · 발명자</strong>
                  <span>전열관 결함 심각도 분석 및 위험구간 탐지 · 2026.05</span>
                </li>
                <li>
                  <strong>DEEP-NDT 수명평가 시스템</strong>
                  <span>한국저작권위원회 제C-2025-036843호</span>
                </li>
                <li>
                  <strong>LINC3.0 글로벌 창업 캠프 우수상</strong>
                  <span>Team Keepu · 2024.08</span>
                </li>
              </ul>
            </ResumeSection>

            <ResumeSection title="Working Principles">
              <ul className="a4-principles">
                <li>Problem first, model second</li>
                <li>Facility / subject-level validation</li>
                <li>Metric-driven and documented</li>
              </ul>
            </ResumeSection>
          </aside>
        </div>

        <footer className="a4-resume-footer">
          <span>AI ENGINEER RESUME · 2026</span>
          <p>Python · PyTorch · FastAPI · Data Quality · Model Reliability</p>
        </footer>
      </main>
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function ResumeSection({ title, children }) {
  return (
    <section className="a4-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
