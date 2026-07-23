import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowSquareOut,
  Briefcase,
  CheckCircle,
  ClipboardText,
  Code,
  EnvelopeSimple,
  GithubLogo,
  IdentificationCard,
  LinkSimple,
  MapPin,
  ShieldCheck,
  Target,
  TrendUp,
  WarningCircle,
} from "@phosphor-icons/react";

export function CompanyResume({ profile }) {
  const homeHref = window.location.pathname.startsWith("/resume/") ? "/resume/" : "/";

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${profile.company} 맞춤 이력서 | 이의찬`;
    return () => {
      document.title = previousTitle;
    };
  }, [profile.company]);

  return (
    <div className="company-page">
      <header className="company-topbar">
        <a className="company-home" href={homeHref}>
          <ArrowLeft size={16} weight="bold" />
          <span>이의찬 포트폴리오</span>
        </a>
        <nav aria-label={`${profile.company} 맞춤 페이지 목차`}>
          <a href="#match">직무 매칭</a>
          <a href="#evidence">경험 근거</a>
          <a href="#cover-letter">자기소개서</a>
        </nav>
        <a className="company-mail" href="mailto:chaos391@naver.com" aria-label="이메일 보내기">
          <EnvelopeSimple size={17} weight="bold" />
        </a>
      </header>

      <main className="company-main">
        <section className="company-hero">
          <div className="company-kicker">
            <span>{profile.company.slice(0, 2)}</span>
            <p>TAILORED RESUME · 2026</p>
          </div>

          <div className="company-hero-grid">
            <div>
              <p className="company-role">{profile.company} · {profile.role}</p>
              <h1>{profile.headline}</h1>
              <p className="company-positioning">{profile.positioning}</p>

              <div className="company-actions">
                <a className="primary-btn" href="#cover-letter">
                  <ClipboardText size={15} weight="bold" />
                  자소서 보기
                </a>
                <a className="ghost-btn" href={profile.sourceUrl} rel="noreferrer" target="_blank">
                  <ArrowSquareOut size={15} weight="bold" />
                  {profile.sourceLabel}
                </a>
                <a className="ghost-btn" href="https://github.com/UICHANLEE" rel="noreferrer" target="_blank">
                  <GithubLogo size={15} weight="bold" />
                  GitHub
                </a>
              </div>
            </div>

            <aside className="company-job-brief" aria-label="공고 핵심 정보">
              <span>JOB BRIEF</span>
              <h2>{profile.role}</h2>
              <dl>
                <div>
                  <dt><Briefcase size={14} weight="bold" /> 고용형태</dt>
                  <dd>{profile.employment}</dd>
                </div>
                <div>
                  <dt><MapPin size={14} weight="bold" /> 지원기한</dt>
                  <dd>{profile.deadline}</dd>
                </div>
              </dl>
              <p>{profile.jobSummary}</p>
            </aside>
          </div>

          <div className="company-keywords" aria-label="공고 핵심 키워드">
            {profile.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
          </div>
        </section>

        <section className="company-section company-fit" id="match">
          <SectionTitle
            icon={Target}
            eyebrow="01 · ROLE MATCH"
            title="공고 요구를 경험 근거로 연결"
            description="공고 문구를 그대로 나열하지 않고, 실제 수행한 일과 남아 있는 간극을 함께 표시했습니다."
          />

          <div className="company-proof-grid">
            {profile.fitPoints.map((point) => (
              <article key={point.label}>
                <span>{point.label}</span>
                <strong>{point.value}</strong>
                <p>{point.detail}</p>
              </article>
            ))}
          </div>

          <div className="match-table" role="table" aria-label="직무 요구사항과 경험 매칭">
            <div className="match-row match-header" role="row">
              <span role="columnheader">공고 요구</span>
              <span role="columnheader">경험 근거</span>
              <span role="columnheader">판단</span>
            </div>
            {profile.requirements.map((item) => (
              <div className="match-row" role="row" key={item.requirement}>
                <strong role="cell">{item.requirement}</strong>
                <p role="cell">{item.evidence}</p>
                <span className={item.signal.includes("보완") || item.signal.includes("위험") ? "signal warning" : "signal"} role="cell">
                  {item.signal.includes("보완") || item.signal.includes("위험") ? (
                    <WarningCircle size={13} weight="fill" />
                  ) : (
                    <CheckCircle size={13} weight="fill" />
                  )}
                  {item.signal}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="company-section evidence-section" id="evidence">
          <SectionTitle
            icon={TrendUp}
            eyebrow="02 · PROBLEM / ACTION / RESULT"
            title="직무와 가장 가까운 경험"
            description="각 경험에서 어떤 문제가 있었고, 무엇을 바꿨으며, 결과가 어떻게 달라졌는지 중심으로 정리했습니다."
          />

          <div className="company-story-list">
            {profile.stories.map((story, index) => (
              <article className="company-story" key={story.title}>
                <header>
                  <span>CASE {String(index + 1).padStart(2, "0")}</span>
                  <h3>{story.title}</h3>
                </header>
                <div className="company-story-grid">
                  <StoryBlock label="Problem" text={story.problem} />
                  <StoryBlock label="Action" text={story.action} />
                  <StoryBlock label="Result" text={story.result} result />
                </div>
                <div className="company-story-tags">
                  {story.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="company-section cover-section" id="cover-letter">
          <SectionTitle
            icon={IdentificationCard}
            eyebrow="03 · COVER LETTER"
            title={`${profile.company} 자기소개서 초안`}
            description="지원동기와 문제 해결 경험을 공고의 언어로 다시 작성했습니다. 실제 지원서 글자 수에 맞춰 축약할 수 있는 원문입니다."
          />

          <div className="cover-letter-list">
            {profile.coverLetters.map((letter, index) => (
              <article className="cover-letter" key={letter.title}>
                <div className="cover-index">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{letter.title}</h3>
                  <p>{letter.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="company-section resume-summary">
          <div>
            <span>RESUME SUMMARY</span>
            <h2>{profile.headline}</h2>
            <p>{profile.positioning}</p>
          </div>
          <div className="company-skill-list" aria-label="맞춤 핵심 역량">
            <strong><Code size={16} weight="bold" /> 핵심 역량</strong>
            {profile.skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </section>

        <aside className="application-note">
          <ShieldCheck size={21} weight="duotone" />
          <div>
            <strong>지원 전 확인</strong>
            <p>{profile.applicationNote}</p>
          </div>
          <a href={profile.sourceUrl} rel="noreferrer" target="_blank">
            공고 다시 보기 <LinkSimple size={14} weight="bold" />
          </a>
        </aside>

        <footer className="company-footer">
          <div>
            <IdentificationCard size={18} weight="bold" />
            <strong>이의찬 · Machine Learning Engineer</strong>
          </div>
          <p>{profile.company} 맞춤 이력서 · 공고 확인 기준 {profile.checkedAt || "2026.07.15"}</p>
        </footer>
      </main>
    </div>
  );
}

function SectionTitle({ icon: Icon, eyebrow, title, description }) {
  return (
    <header className="company-section-title">
      <Icon size={20} weight="duotone" />
      <div>
        <span>{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </header>
  );
}

function StoryBlock({ label, text, result = false }) {
  return (
    <div className={result ? "company-story-block result" : "company-story-block"}>
      <span>{label}</span>
      <p>{text}</p>
    </div>
  );
}
