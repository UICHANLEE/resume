export const companyProfiles = [
  {
    slug: "ksa",
    aliases: ["한국표준협회"],
    company: "한국표준협회",
    role: "AI융합추진단 · AI R&D 사업기획 및 운영관리",
    employment: "파견계약직 1년",
    deadline: "상시채용 표시 · 상세요강에는 2026.07.07 마감 기재",
    sourceUrl: "http://saram.in/s/cVLtixfsLj",
    sourceLabel: "사람인 원문",
    headline: "AI 기술을 이해하고, 정부사업의 언어로 구조화하는 실행자",
    positioning:
      "산업 AI 모델을 직접 개발한 경험과 UIPA 사업·TTA·KTL·ISO 29110 대응 경험을 함께 보유했습니다. 기술 내용을 과제계획, 운영 근거, 위험관리 문서로 바꾸는 역량을 전면에 배치했습니다.",
    jobSummary:
      "AI·데이터 국가연구개발사업 기획 및 운영, 제조데이터·데이터 스페이스 연구 지원, 제조 AI 솔루션 기획, 정보 조사·분석과 행정 지원이 핵심인 비개발 중심 직무입니다.",
    keywords: ["정부 R&D", "제조데이터", "AI 사업기획", "과제 운영", "정보 조사", "문서화"],
    fitPoints: [
      { value: "UIPA", label: "정부사업 경험", detail: "울산정보산업진흥원 사업 맥락의 품질체계 진단 및 산출물 대응" },
      { value: "4종", label: "표준·인증 연결", detail: "TTA, KTL, ISO 29110, ISO/IEC 23894 요구사항 매핑" },
      { value: "50K+", label: "산업 AI 데이터", detail: "제조·검사 현장의 데이터 품질 기준과 운영 흐름 이해" },
    ],
    requirements: [
      { requirement: "AI·데이터 R&D 사업 기획·운영", evidence: "UIPA 사업의 품질체계 진단, 위험관리계획서, 시스템 설명서와 인증 산출물을 실제 개발 흐름에 맞춰 정리", signal: "핵심 강점" },
      { requirement: "제조데이터·제조 AI 솔루션 이해", evidence: "IRIS 비파괴검사 데이터 50,000건 이상 구축, 결함 탐지 98%, 수명예측 R2 0.966 제품화 경험", signal: "핵심 강점" },
      { requirement: "정보 조사·분석 및 문서작성", evidence: "표준 요구사항을 데이터·모델·개발문서·위험관리 항목으로 분해하고 기관 심사 근거로 구성", signal: "직접 경험" },
      { requirement: "행정 및 이해관계자 조율", evidence: "개발·품질·인증 요구를 하나의 추적표로 정리한 경험은 있으나 예산 집행·정산 경험은 지원 전 보완 필요", signal: "보완 명시" },
    ],
    stories: [
      {
        title: "UIPA 사업의 인증 요구를 실행 가능한 산출물로 전환",
        problem: "TTA 신뢰성, KTL 마크, ISO 29110, AI 위험관리 요구가 서로 다른 문서와 담당자에게 흩어져 개발 결과와 심사 근거가 연결되지 않았습니다.",
        action: "기관별 요구사항을 먼저 분해하고 데이터, 모델, 개발문서, 위험관리 문서의 책임 위치를 매핑했습니다. ISO/IEC 23894 기반 위험관리계획서와 위험관리대장을 실제 결함 탐지 시스템의 미검출·환경 변화·설명 가능성 이슈에 맞춰 작성했습니다.",
        result: "2025년 8월 TTA 신뢰성 중간심사를 통과했고, UIPA 품질체계 진단과 KTL·ISO 29110 대응에서 산출물의 정합성과 추적 근거를 강화했습니다.",
        tags: ["UIPA", "TTA", "ISO 29110", "KTL"],
      },
      {
        title: "복잡한 수명평가 기술을 사업 설명 구조로 정리",
        problem: "기존 공식, 고객사 방식, 극치해석, AI 예측 모델이 섞여 있어 비개발 이해관계자에게 각 방식의 역할과 한계를 설명하기 어려웠습니다.",
        action: "기존 방식과 SK·GS·DEEPAI 3개 평가 방식을 분리하고 입력값, 계산식, 적용 조건, 한계를 비교표와 LifeEvaluator 구조로 정리했습니다.",
        result: "R2 0.966 모델과 FastAPI, LLM 검사계획을 하나의 제품 흐름으로 연결해 기술개발 성과를 과제·사업 관점에서 설명할 수 있게 했습니다.",
        tags: ["기술기획", "LifeEvaluator", "FastAPI", "LLM"],
      },
      {
        title: "제조 AI의 성능 문제를 데이터 운영 문제로 재정의",
        problem: "결함 기준이 작업자마다 달라 오탐과 미탐의 원인이 모델인지 라벨인지 구분하기 어려웠습니다.",
        action: "결함 유형을 학습 단위로 재정의하고 라벨링, 검수, 재라벨링이 같은 기준을 사용하도록 데이터 품질 운영 규칙을 만들었습니다.",
        result: "50,000건 이상의 데이터셋을 구축하고 라벨 오류를 약 15% 줄여 결함 탐지 정확도 98% 달성에 기여했습니다.",
        tags: ["제조데이터", "Data QA", "YOLOv8-seg"],
      },
    ],
    coverLetters: [
      {
        title: "지원동기와 직무 적합성",
        body: "저는 AI를 개발하는 사람과 사업을 운영하는 사람 사이에서 기술의 의미가 손실되지 않도록 구조를 만드는 역할에 강점이 있습니다. 비파괴검사 AI 기업에서 결함 탐지와 수명예측을 수행하며 모델 성능뿐 아니라 데이터 기준, API, 위험관리, 인증 산출물까지 연결했습니다. 특히 UIPA 사업 맥락에서 TTA·KTL·ISO 29110 요구사항을 실제 시스템 근거와 매핑한 경험은 한국표준협회의 AI R&D 사업기획·운영 업무와 직접 맞닿아 있습니다. 제조데이터의 생성 과정과 AI 모델의 한계를 이해하는 실무자로서 과제 참여기관의 기술 내용을 빠르게 파악하고, 조사·분석·운영 문서로 명확하게 전환하겠습니다.",
      },
      {
        title: "문제를 구조화해 성과를 만든 경험",
        body: "TTA 신뢰성 인증과 ISO 29110 품질체계 대응 당시 가장 큰 문제는 문서의 양이 아니라 요구사항과 개발 근거의 연결이 끊겨 있다는 점이었습니다. 저는 심사 항목을 데이터, 모델, 개발 산출물, 위험관리로 분해하고 각 항목의 책임 근거를 추적표로 만들었습니다. 결함 미검출, 환경 변화, 설명 가능성과 같은 AI 위험을 ISO/IEC 23894 형식에 맞춰 시스템의 실제 운영 조건과 연결했습니다. 그 결과 TTA 중간심사를 통과했고, UIPA 품질체계 진단에서도 산출물의 정합성을 높였습니다. 이 경험을 바탕으로 국가 R&D 사업에서도 일정과 문서를 관리하는 수준을 넘어 기술 목표와 평가 근거가 일치하도록 운영하겠습니다.",
      },
    ],
    skills: ["정부사업 산출물", "AI 위험관리", "Python", "산업 데이터 QA", "기술 조사", "한글·MS Office"],
    applicationNote: "공고 본문은 SW 개발이 주요 평가대상이 아니라고 명시합니다. 이 페이지는 코딩 역량보다 정부사업·표준·문서화와 제조 AI 이해를 앞세웠습니다.",
  },
  {
    slug: "nis",
    aliases: ["국정원", "국가정보원"],
    company: "국가정보원",
    role: "2026년 하반기 정기공채 · 과학기술(AI)",
    employment: "특정직 7급",
    deadline: "2026.07.31 16:00",
    sourceUrl: "https://career.nis.go.kr:4017/apply/detail?id=3555",
    sourceLabel: "국가정보원 채용 원문",
    headline: "검증 가능한 AI를 만들고, 판단 근거를 끝까지 남기는 엔지니어",
    positioning:
      "공개된 공고는 과학기술(AI) 분야와 전형·자격 정보 중심이므로 세부 업무를 추정하지 않았습니다. Python·PyTorch 기반 모델링, 데이터 누수 방지, AI 위험관리 경험을 중심으로 구성했습니다.",
    jobSummary:
      "2026년 하반기 과학기술(AI) 특정직 7급 정기공채입니다. 필기시험, 체력검정, 코딩테스트(CBT·C·C++·Java·Python 중 택1), 1·2차 면접을 거치는 전형입니다.",
    keywords: ["과학기술 AI", "Python", "모델 검증", "데이터 무결성", "AI 신뢰성", "책임감"],
    fitPoints: [
      { value: "98%", label: "Vision AI", detail: "산업 결함 탐지 정확도와 데이터 품질 개선" },
      { value: "0.966", label: "예측 모델", detail: "시설 단위 검증을 거친 수명예측 모델" },
      { value: "23894", label: "AI 위험관리", detail: "ISO/IEC 23894 기반 위험 식별·통제 문서화" },
    ],
    requirements: [
      { requirement: "AI 모델 개발 역량", evidence: "YOLOv8-seg 결함 탐지, FT-Transformer 수명예측, 3D Point Cloud와 스포츠 이벤트 모델링", signal: "핵심 강점" },
      { requirement: "Python 코딩 및 데이터 처리", evidence: "Python 기반 학습·평가 파이프라인, FastAPI 서비스, 크롤링·전처리·분석 프로젝트 다수", signal: "직접 경험" },
      { requirement: "검증과 데이터 무결성", evidence: "facility + 파일명 매핑으로 중복·누수를 확인하고 공통 103개 facility 기준 hold-out 평가 수행", signal: "차별점" },
      { requirement: "보안·정보기관 도메인", evidence: "공개 가능한 범위의 AI 품질·위험관리 경험은 있으나 정보보안 실무 경력은 별도로 주장하지 않음", signal: "보완 명시" },
    ],
    stories: [
      {
        title: "높은 점수보다 먼저 데이터 누수를 의심하다",
        problem: "수명예측 데이터에서 동일 facility와 유사 파일명이 서로 다른 폴더에 존재해 학습과 검증이 섞일 위험이 있었습니다.",
        action: "facility와 파일명 6자리 기준 매핑 테이블을 만들고 차수 간 공통 facility 103개만 선별했습니다. 이후 시설 단위 hold-out으로 분할 기준을 고정하고 실험 로그를 남겼습니다.",
        result: "모델 점수의 과대평가 가능성을 줄이고 R2 0.966 결과를 재현 가능한 평가 절차와 함께 제시했습니다.",
        tags: ["Data Leakage", "Facility Split", "Reproducibility"],
      },
      {
        title: "현장 결함 기준을 학습 가능한 데이터 규칙으로 전환",
        problem: "IP·IC·EP·EC 결함 기준이 작업자마다 달라 모델이 일관된 패턴을 학습하기 어려웠습니다.",
        action: "결함 유형별 가이드와 검수 기준을 만들고 CVAT·ROBOFLOW 기반 라벨링-검수-재라벨링 루프를 운영했습니다.",
        result: "50,000건 이상 데이터에서 라벨 오류를 약 15% 줄이고 결함 탐지 정확도 98% 달성에 기여했습니다.",
        tags: ["Computer Vision", "Data QA", "PyTorch"],
      },
      {
        title: "AI 위험을 성능 수치 밖에서 관리",
        problem: "산업 AI는 평균 정확도가 높아도 미검출, 환경 변화, 설명 부족이 실제 운영 위험으로 남았습니다.",
        action: "ISO/IEC 23894 관점에서 위험을 식별하고 원인, 영향, 통제, 모니터링 항목을 위험관리대장으로 구조화했습니다.",
        result: "TTA 신뢰성 중간심사를 통과하고 모델 성능과 운영 위험을 함께 설명하는 근거 체계를 만들었습니다.",
        tags: ["AI Reliability", "Risk Management", "TTA"],
      },
    ],
    coverLetters: [
      {
        title: "지원동기와 국가관",
        body: "AI가 중요한 판단에 활용될수록 성능 수치보다 데이터의 출처, 평가 방식, 실패 조건을 명확히 설명할 수 있어야 한다고 생각합니다. 저는 산업용 AI를 개발하며 데이터 누수 가능성을 먼저 확인하고, 시설 단위 검증과 위험관리 문서화를 통해 결과의 신뢰성을 확보해 왔습니다. 국가정보원의 과학기술(AI) 분야에서 제가 기여할 수 있는 지점은 화려한 모델을 빠르게 도입하는 데 있지 않습니다. 주어진 정보를 정확히 구조화하고, 검증 가능한 실험을 설계하며, 결과와 한계를 근거로 남기는 태도입니다. 국가의 안전과 이익을 다루는 조직에 필요한 책임감과 보안 의식을 업무의 기본 조건으로 삼겠습니다.",
      },
      {
        title: "어려운 문제를 해결한 경험",
        body: "열교환기 수명예측 모델의 초기 R2가 음수로 떨어졌을 때 모델 구조부터 바꾸지 않았습니다. 먼저 facility 중복, feature 정의, 차수별 데이터 불일치, 분할 기준을 분리해 확인했습니다. 공통 facility 103개를 선별하고 시설 단위 hold-out을 적용한 뒤, 입력 feature와 하이퍼파라미터를 단계적으로 수정했습니다. 그 결과 R2를 0.847에서 0.966까지 높였고 RMSE 2.57을 달성했습니다. 이 경험을 통해 복잡한 AI 문제일수록 가설을 작게 나누고 데이터와 평가 체계를 먼저 검증해야 한다는 원칙을 체득했습니다.",
      },
    ],
    skills: ["Python", "PyTorch", "Computer Vision", "FT-Transformer", "데이터 무결성", "AI 위험관리"],
    applicationNote: "세부 직무기술은 공개 페이지에서 확인되지 않아 정보수집·보안업무를 임의로 작성하지 않았습니다. 제출 전 실제 지원서 문항과 공개 직무안내에 맞춰 표현을 조정해야 합니다.",
  },
  {
    slug: "bnk-system",
    aliases: ["bnk", "bnksystem", "BNK시스템"],
    company: "BNK시스템",
    role: "2026년도 하반기 신입 · IT개발",
    employment: "정규직",
    deadline: "2026.07.19 23:59",
    sourceUrl: "https://bnksys.recruiter.co.kr/app/jobnotice/view?systemKindCode=MRS2&jobnoticeSn=259197",
    sourceLabel: "BNK시스템 채용 원문",
    headline: "데이터 모델을 운영 가능한 웹 서비스로 끝까지 연결하는 개발자",
    positioning:
      "Python·Vue.js 요구사항에 직접 대응하고, FastAPI·React·Node.js·MariaDB 기반의 제품 구현 경험과 데이터 분석 역량을 금융 IT 운영 관점으로 재구성했습니다.",
    jobSummary:
      "Python, Java, Vue.js, Oracle·MS-SQL 등 요소기술을 활용하는 신입 IT개발 직무입니다. 웹·앱 개발, 데이터 분석, 프레젠테이션 역량과 금융권 개발·운영 경험을 우대합니다.",
    keywords: ["Python", "Vue.js", "웹 개발", "데이터 분석", "DB", "안정적 운영"],
    fitPoints: [
      { value: "3-Layer", label: "서비스 구현", detail: "프론트엔드·API·DB를 연결한 풀스택 프로젝트" },
      { value: "FastAPI", label: "운영 API", detail: "AI 평가 결과를 REST 엔드포인트로 제품화" },
      { value: "SQLD", label: "데이터 기반", detail: "SQL 자격과 관계형 DB 활용 프로젝트" },
    ],
    requirements: [
      { requirement: "Python·Vue.js 요소기술", evidence: "Python ML·API 실무와 Vue.js·Node.js·MariaDB 기반 취업정보 사이트 팀 프로젝트", signal: "직접 경험" },
      { requirement: "웹·앱 개발", evidence: "React·Next.js·Vue.js 프론트엔드와 FastAPI·Node.js 백엔드를 연결한 다수의 서비스 MVP", signal: "핵심 강점" },
      { requirement: "Oracle·Spring 등 금융 IT 스택", evidence: "RDBMS·REST API 경험은 있으나 Oracle·Spring 실무는 없어 학습 계획과 전환 가능성을 명시", signal: "보완 명시" },
      { requirement: "금융권 개발·운영", evidence: "직접 금융권 경력은 없으며 다채널 이커머스 운영과 산업용 AI 제품 운영 경험을 안정성 사례로 제시", signal: "보완 명시" },
    ],
    stories: [
      {
        title: "모델 결과를 현장 사용 가능한 API로 전환",
        problem: "수명평가 모델이 노트북 실험에 머물러 현장 사용자가 반복 조회하거나 검사계획에 반영하기 어려웠습니다.",
        action: "LifeEvaluator로 3가지 평가 방식을 모듈화하고 FastAPI 엔드포인트, 시각화 모듈, LLM 검사계획 로직을 연결했습니다.",
        result: "R2 0.966 모델을 REST API 기반 DEEP-NDT 수명평가 서비스 흐름으로 확장했습니다.",
        tags: ["Python", "FastAPI", "REST API"],
      },
      {
        title: "Vue.js 기반 팀 웹서비스 완성",
        problem: "취업 준비자는 여러 사이트에 흩어진 채용정보를 직접 확인하고 관심 공고를 별도로 관리해야 했습니다.",
        action: "Vue.js, Node.js, MariaDB로 프론트엔드·서버·DB 역할을 분리하고 GitHub 협업으로 수집·관리·추적 기능을 구현했습니다.",
        result: "작동하는 취업정보 웹사이트를 완성해 발표하고 팀 단위 버전관리와 풀스택 개발 과정을 경험했습니다.",
        tags: ["Vue.js", "Node.js", "MariaDB"],
      },
      {
        title: "데이터 처리 병목을 운영 지표로 개선",
        problem: "자동평가 파이프라인의 SVR 처리 시간이 길어 반복 QA 속도가 떨어졌습니다.",
        action: "정확도와 처리 시간을 분리해 병목을 측정하고 파라미터 튜닝과 대체 모델을 비교했습니다.",
        result: "기준 처리시간을 35초에서 22초로 줄였고 대체 모델에서 6초까지 단축 가능성을 확인했습니다.",
        tags: ["Performance", "Data Pipeline", "Operations"],
      },
    ],
    coverLetters: [
      {
        title: "지원동기와 입사 후 기여",
        body: "BNK시스템의 IT개발 직무는 코드를 작성하는 능력과 함께 금융 서비스가 안정적으로 운영되도록 데이터, 화면, 서버, 데이터베이스를 연결하는 역량이 필요하다고 생각합니다. 저는 Python 기반 AI 모델을 FastAPI로 서비스화하고, Vue.js·Node.js·MariaDB로 팀 웹서비스를 완성했습니다. 특히 산업 현장의 평가 결과를 API와 화면으로 전달하며 성능뿐 아니라 재현성, 처리시간, 문서화를 함께 관리했습니다. 금융 IT 경험은 아직 없지만, 오류의 영향이 큰 산업용 AI를 다루며 익힌 검증 습관과 SQLD 기반 데이터 역량으로 BNK금융그룹의 안정적인 서비스를 빠르게 학습하고 기여하겠습니다.",
      },
      {
        title: "협업으로 서비스를 완성한 경험",
        body: "취업정보 사이트 프로젝트에서 팀원마다 프론트엔드, 서버, 데이터베이스에 대한 이해 수준이 달라 인터페이스 변경이 반복됐습니다. 저는 화면 기능을 API 요청·응답과 DB 스키마 단위로 나누고, GitHub 이슈와 커밋 기준을 맞추는 데 집중했습니다. Vue.js 화면, Node.js 서버, MariaDB 데이터가 같은 계약을 사용하도록 조정한 결과 채용정보 수집·관리·추적 흐름을 완성해 발표했습니다. 입사 후에도 맡은 기능만 구현하는 데 그치지 않고 인접 시스템과의 계약을 먼저 확인해 운영 장애 가능성을 줄이겠습니다.",
      },
    ],
    skills: ["Python", "Vue.js", "FastAPI", "Node.js", "MariaDB", "SQLD"],
    applicationNote: "금융 IT·Oracle·Spring 경험은 사실과 다르게 포장하지 않았습니다. 대신 웹·API·DB 연결 경험과 안정적 운영 관점을 전면에 배치했습니다.",
  },
  {
    slug: "vueron",
    aliases: ["뷰런", "뷰런테크놀로지"],
    company: "뷰런테크놀로지",
    role: "E2E 자율주행 AI Engineer · Junior",
    employment: "정규직",
    deadline: "잡코리아 페이지 기준 마감 표시",
    sourceUrl: "https://m.jobkorea.co.kr/Recruit/GI_Read/49403461?sc=622&utm_source=chatgpt.com",
    sourceLabel: "잡코리아 원문",
    headline: "현장 데이터의 불확실성을 모델 성능과 검증 체계로 바꾸는 Vision AI 엔지니어",
    positioning:
      "직접적인 자율주행·VLM/VLA 경력 대신 YOLO 기반 산업 Vision AI, 3D Point Cloud, 대규모 데이터 QA, 시설 단위 검증 경험을 E2E 모델 개발의 전이 가능한 역량으로 정직하게 연결했습니다.",
    jobSummary:
      "VLM·MLLM·VLA 기반 E2E 자율주행 모델 연구개발, SFT·RFT·GRPO 계열 학습법, 데이터 생성, 시뮬레이션·실차 성능 검증을 수행하는 포지션입니다. Junior는 Python·Rust, PyTorch·JAX 경험과 협업 역량을 요구합니다.",
    keywords: ["E2E Autonomous", "VLM/VLA", "PyTorch", "Vision AI", "3D Data", "Evaluation"],
    fitPoints: [
      { value: "50K+", label: "학습 데이터", detail: "복잡한 현장 신호의 라벨링·검수·재학습 루프" },
      { value: "98%", label: "Vision 성능", detail: "YOLOv8-seg 기반 산업 결함 탐지" },
      { value: "3D", label: "공간 데이터", detail: "Point Cloud 객체 인식 데이터셋 구축" },
    ],
    requirements: [
      { requirement: "Python·PyTorch 모델 개발", evidence: "YOLOv8-seg와 FT-Transformer 학습·평가, feature·split·hyperparameter 실험", signal: "직접 경험" },
      { requirement: "대규모 데이터 생성·정제", evidence: "50,000건 이상 결함 데이터의 라벨 기준, 검수, 재라벨링 루프 운영", signal: "핵심 강점" },
      { requirement: "시뮬레이션·실환경 검증", evidence: "시설별 분포 차이와 현장 환경 변수를 반영한 hold-out 검증 경험은 있으나 실차 검증 경험은 없음", signal: "전이 가능" },
      { requirement: "VLM·MLLM·VLA / SFT·RFT", evidence: "Transformer·LLM API 활용 경험은 있으나 E2E 자율주행 멀티모달 학습 경험은 추가 확보 필요", signal: "보완 명시" },
    ],
    stories: [
      {
        title: "현장 신호의 불확실성을 데이터 품질 루프로 해결",
        problem: "IRIS 검사 신호는 설비와 작업 조건마다 품질이 달라 같은 결함도 다른 패턴으로 나타났습니다.",
        action: "결함 유형을 학습 단위로 재정의하고 50,000건 이상의 라벨에 대해 가이드, 검수, 재라벨링 루프를 운영했습니다.",
        result: "라벨 오류율을 약 15% 줄이고 YOLOv8-seg 결함 탐지 정확도 98% 달성에 기여했습니다.",
        tags: ["YOLOv8-seg", "PyTorch", "Data Centric AI"],
      },
      {
        title: "분포 차이를 고려한 모델 평가 체계 구축",
        problem: "facility가 학습과 검증에 섞이면 새로운 설비에서의 일반화 성능을 과대평가할 수 있었습니다.",
        action: "공통 facility 103개를 식별하고 시설 단위 hold-out으로 분할해 feature와 모델 실험을 단계적으로 비교했습니다.",
        result: "데이터 누수를 줄인 조건에서 FT-Transformer R2 0.966을 달성하고 평가의 재현성을 확보했습니다.",
        tags: ["Generalization", "Hold-out", "Transformer"],
      },
      {
        title: "2D를 넘어 3D 공간 데이터로 확장",
        problem: "Point Cloud는 객체 위치, 공간 관계, 노이즈를 함께 고려해야 해 2D 이미지보다 라벨 일관성을 유지하기 어려웠습니다.",
        action: "객체 단위 분류·태깅 기준을 정리하고 전처리와 검수 단계를 분리해 데이터셋 구축 흐름을 설계했습니다.",
        result: "3D 객체 인식 학습 데이터 경험을 확보해 이미지·산업 신호·공간 데이터로 데이터 도메인을 확장했습니다.",
        tags: ["Point Cloud", "3D Data", "QA"],
      },
    ],
    coverLetters: [
      {
        title: "지원동기와 전이 가능한 역량",
        body: "저는 자율주행 모델을 직접 개발한 경력보다, 현실의 불완전한 데이터를 모델이 학습하고 검증할 수 있는 형태로 바꾸는 경험을 가지고 있습니다. 산업용 비파괴검사 데이터 50,000건 이상을 구축하며 라벨 기준과 검수 루프를 만들었고, YOLOv8-seg 결함 탐지 정확도 98% 달성에 기여했습니다. 또한 facility 단위 hold-out으로 분포 차이와 데이터 누수를 통제했습니다. 뷰런의 E2E 자율주행은 멀티모달 모델 자체뿐 아니라 시나리오 데이터의 품질과 실환경 일반화 검증이 핵심이라고 이해했습니다. PyTorch 기반 모델링과 데이터 중심 문제 해결 경험을 바탕으로 VLM·VLA 학습 방법을 빠르게 확보하겠습니다.",
      },
      {
        title: "모델 성능을 개선한 경험",
        body: "초기 수명예측 모델은 facility별 분포 차이와 feature 정의 문제로 R2가 음수까지 떨어졌습니다. 저는 모델 구조를 무작정 변경하지 않고 데이터 중복, 분할 기준, feature, sampling, hyperparameter를 독립 변수로 나눴습니다. 공통 facility 103개를 기준으로 hold-out을 재구성하고 실험 로그를 축적한 결과 R2를 0.847에서 0.966까지 개선했습니다. 이 경험은 E2E 자율주행에서도 복합적인 실패를 데이터·학습·평가 축으로 분리하고, 실차 일반화에 영향을 주는 원인을 추적하는 데 활용할 수 있습니다.",
      },
    ],
    skills: ["Python", "PyTorch", "YOLOv8-seg", "Transformers", "3D Point Cloud", "Data QA"],
    applicationNote: "VLM/VLA·자율주행 실차 경험의 공백을 숨기지 않았습니다. 지원 시에는 관련 공개 데이터셋 미니 프로젝트나 논문 재현 결과를 추가하는 것이 필요합니다.",
  },
  {
    slug: "kb-bank",
    aliases: ["kb", "kbbank", "KB국민은행"],
    company: "KB국민은행",
    role: "데이터마케팅부 · 마이데이터 서비스 기획·운영",
    employment: "경력직 연봉계약직",
    deadline: "2026.07.20 23:59",
    sourceUrl: "https://zighang.com/recruitment/841c0e2e-af49-44b9-8c05-b013ce96424e",
    sourceLabel: "직행 공고",
    headline: "데이터를 분석하고, 사용자가 반복해서 쓰는 서비스 흐름으로 연결하는 기획자",
    positioning:
      "마이데이터·금융 경력은 없지만 데이터 분석, 서비스 MVP, 다채널 운영, 기관 커뮤니케이션 경험을 기획·운영 직무의 전이 가능한 근거로 구성했습니다.",
    jobSummary:
      "마이데이터 서비스 기획·운영, 데이터 분석 기반 인사이트 도출, 부서 간 협업이 핵심입니다. 서비스 출시·운영 경험과 SQL·Excel, 금융 IT 또는 대외기관 커뮤니케이션 경험을 우대합니다.",
    keywords: ["마이데이터", "서비스 기획", "운영", "데이터 분석", "협업", "SQL"],
    fitPoints: [
      { value: "5+", label: "제품 MVP", detail: "문제 정의부터 웹서비스·API 구현과 운영 흐름 설계" },
      { value: "95%+", label: "운영 품질", detail: "다채널 상품 분류 일관성 개선" },
      { value: "SQLD", label: "데이터 활용", detail: "관계형 DB·SQL 기반 데이터 정제와 비교 분석" },
    ],
    requirements: [
      { requirement: "서비스 기획부터 출시·운영", evidence: "SOTA Hub, 취얼업, 수명평가 API 등 사용자 문제 정의부터 기능·데이터·운영 흐름까지 구현", signal: "전이 가능" },
      { requirement: "데이터 분석·인사이트 도출", evidence: "산업 데이터 feature engineering, 웹 크롤링 비교 분석, 이커머스 카테고리 운영 개선", signal: "핵심 강점" },
      { requirement: "부서·기관 커뮤니케이션", evidence: "개발·품질·인증 요구를 조율하고 UIPA·TTA·KTL 대응 산출물로 연결", signal: "직접 경험" },
      { requirement: "마이데이터·금융 플랫폼 경력", evidence: "직접 경험이 없어 공고의 경력직 요건과는 간극이 있으며 데이터 제품·운영 경험으로만 연결", signal: "적합도 위험" },
    ],
    stories: [
      {
        title: "사용자 문제를 데이터 구조 개선으로 해결",
        problem: "여러 판매채널의 상품명·속성·카테고리 기준이 달라 중복 등록과 검색 품질 저하가 반복됐습니다.",
        action: "채널별 기준을 바로 맞추기보다 공통 상품 속성과 카테고리 계층을 정의하고 중복·모호 항목을 재분류했습니다.",
        result: "중복 카테고리를 약 30% 줄이고 분류 일관성을 95% 이상으로 높여 운영 효율과 검색 품질을 개선했습니다.",
        tags: ["Service Operations", "Taxonomy", "Data Analysis"],
      },
      {
        title: "분석 결과를 반복 사용 가능한 제품으로 전환",
        problem: "수명평가 결과가 개별 분석과 리포트에 머물러 현장 사용자가 반복 조회하고 다음 검사계획에 반영하기 어려웠습니다.",
        action: "평가 로직을 API로 구조화하고 시각화, 결과 리포트, LLM 검사계획 추천을 하나의 사용자 흐름으로 설계했습니다.",
        result: "R2 0.966 모델을 반복 조회 가능한 수명평가 서비스로 확장했습니다.",
        tags: ["Product Planning", "API", "Insight Delivery"],
      },
      {
        title: "합격자 데이터를 수집해 의사결정 정보로 가공",
        problem: "지원자가 자신의 경쟁력을 비교하려면 합격자 데이터가 필요했지만 공개 정보가 흩어져 있었습니다.",
        action: "BeautifulSoup과 Selenium으로 데이터를 수집하고 비교 가능한 항목으로 정제해 분석·시각화 흐름을 구성했습니다.",
        result: "사용자의 지원 판단을 돕는 데이터 제품을 캡스톤 프로젝트로 완성했습니다.",
        tags: ["Crawling", "SQL", "Data Product"],
      },
    ],
    coverLetters: [
      {
        title: "지원동기와 서비스 관점",
        body: "마이데이터 서비스의 가치는 많은 데이터를 보유하는 데 있지 않고, 고객이 자신의 금융 상태를 이해하고 다음 행동을 결정할 수 있도록 정보를 연결하는 데 있다고 생각합니다. 저는 산업 데이터 분석 결과를 API, 시각화, 검사계획 추천으로 제품화했고, 이커머스 운영에서는 서로 다른 채널의 상품 데이터를 공통 구조로 재분류해 운영 품질을 높였습니다. 금융·마이데이터 직접 경력은 없지만 데이터 구조의 불일치를 찾아 기준을 만들고, 분석 결과를 반복 사용 가능한 서비스로 전환해 온 경험이 있습니다. KB국민은행에서도 고객 관점의 문제를 데이터 항목과 운영 프로세스로 구체화하는 기획자가 되겠습니다.",
      },
      {
        title: "협업과 문제 해결 경험",
        body: "TTA·KTL·ISO 29110 대응 과정에서 개발팀이 사용하는 기술 언어와 기관이 요구하는 심사 언어가 달라 같은 시스템을 두고도 이해가 엇갈렸습니다. 저는 요구사항을 데이터, 모델, 개발문서, 위험관리로 분해하고 각 담당자의 근거를 하나의 매핑표로 연결했습니다. 그 결과 TTA 중간심사를 통과하고 UIPA 품질체계 진단의 문서 정합성을 높였습니다. 마이데이터 운영에서도 개발, 마케팅, 준법, 외부기관의 관점을 기능과 데이터 기준으로 번역해 의사결정 지연을 줄이겠습니다.",
      },
    ],
    skills: ["서비스 기획", "데이터 분석", "SQLD", "Python", "FastAPI", "운영 프로세스"],
    applicationNote: "이 공고는 경력직이며 마이데이터·금융 플랫폼 경험을 우대합니다. 현재 경험만으로는 직접 적합도가 낮아 지원서에서는 전이 역량을 강조하되 경력을 과장하지 않아야 합니다.",
  },
  {
    slug: "korea-asset-pricing",
    aliases: ["kap", "koreaassetpricing", "한국자산평가"],
    company: "한국자산평가",
    role: "지수사업본부 · 신입 인턴",
    employment: "전환형 인턴",
    deadline: "2026.07.19 23:59",
    sourceUrl: "https://zighang.com/recruitment/6fa0a3c9-de28-4f85-8c12-634fb7ad9598",
    sourceLabel: "직행 공고",
    headline: "복잡한 시계열 데이터를 정제하고, 예측 모델과 서비스로 연결하는 데이터 엔지니어",
    positioning:
      "7개 공고 중 기술 적합도가 가장 높습니다. Python 데이터 파이프라인, FT-Transformer, RDBMS·SQL, FastAPI, LLM 활용 경험을 지수 데이터·포트폴리오 시뮬레이션 업무에 직접 연결했습니다.",
    jobSummary:
      "주가지수 데이터 수집·전처리·정제·DB 파이프라인, 지수 산출 응용프로그램, AI 기반 주식 포트폴리오·시뮬레이터 개발을 수행합니다. Python 데이터 분석, RDBMS·SQL·Graph DB를 요구하며 REST API, LLM·RAG 경험을 우대합니다.",
    keywords: ["Python", "데이터 파이프라인", "Pandas", "SQL", "REST API", "LLM/RAG"],
    fitPoints: [
      { value: "430K+", label: "대규모 행 처리", detail: "차수 간 45만 행 규모 데이터 필터링·매핑" },
      { value: "0.966", label: "예측 성능", detail: "FT-Transformer 기반 산업 수명예측" },
      { value: "Full Stack", label: "분석 제품화", detail: "FastAPI·Next.js·SQLite·Ollama 플랫폼" },
    ],
    requirements: [
      { requirement: "데이터 수집·전처리·DB 파이프라인", evidence: "45만 행 규모 시설 데이터 매핑·정제, 크롤링 수집, 다중 소스 Collector 기반 SOTA 플랫폼", signal: "핵심 강점" },
      { requirement: "Python 분석 라이브러리", evidence: "feature engineering, scikit-learn·XGBoost·FT-Transformer 비교와 예측 파이프라인", signal: "직접 경험" },
      { requirement: "RDBMS·SQL", evidence: "SQLD, PostgreSQL·SQLite·MariaDB 기반 프로젝트", signal: "직접 경험" },
      { requirement: "LLM·RAG·REST API", evidence: "Ollama 분류·요약, PDF 분석, LLM 검사계획, FastAPI 엔드포인트", signal: "우대 대응" },
      { requirement: "Graph DB·Java REST", evidence: "Graph DB·Java 실무는 없고 Python REST와 관계형 DB 경험으로 전환 가능성 제시", signal: "보완 명시" },
    ],
    stories: [
      {
        title: "45만 행의 차수별 데이터를 신뢰 가능한 학습셋으로 정제",
        problem: "전차수와 현차수의 시설·전열관 위치가 완전히 일치하지 않아 그대로 결합하면 성장률 feature가 왜곡될 수 있었습니다.",
        action: "facility와 파일명을 기준으로 공통 103개 시설을 선별하고 1차 243,039행을 233,810행, 2차 229,953행을 205,804행으로 필터링했습니다.",
        result: "전열관별 결함 성장률과 최소두께를 예측할 수 있는 정합성 높은 데이터 기반을 구축했습니다.",
        tags: ["ETL", "Data Integrity", "Feature Engineering"],
      },
      {
        title: "도메인 feature와 평가 기준을 개선해 R2 0.966 달성",
        problem: "초기 모델은 시설 분포 차이와 feature 정의 문제로 R2가 낮거나 음수로 흔들렸습니다.",
        action: "시설 단위 hold-out을 적용하고 57개 feature, sampling, hyperparameter를 단계적으로 검증하며 FT-Transformer를 개선했습니다.",
        result: "33,300개 샘플에서 R2 0.966, RMSE 2.57, MAE 1.99를 달성했습니다.",
        tags: ["FT-Transformer", "Model Validation", "Tabular AI"],
      },
      {
        title: "다중 출처 데이터를 AI 리서치 플랫폼으로 통합",
        problem: "여러 출처의 논문, 모델, 벤치마크 정보를 한곳에서 비교하고 최신 상태로 관리하기 어려웠습니다.",
        action: "Hugging Face, ArXiv, GitHub 수집기를 Collector 패턴으로 구성하고 Next.js·FastAPI·SQLite·Ollama를 연결했습니다.",
        result: "모델 비교, PDF 분석, 분야 분류, 요약 생성을 제공하는 풀스택 플랫폼을 구현했습니다.",
        tags: ["FastAPI", "SQLite", "LLM", "Collector"],
      },
    ],
    coverLetters: [
      {
        title: "지원동기와 직무역량",
        body: "지수사업은 서로 다른 출처의 시장 데이터를 정확히 수집·정제하고, 산출 로직과 변경 이력을 재현 가능하게 관리해야 한다고 이해했습니다. 저는 열교환기 차수별 데이터 약 45만 행에서 공통 facility 103개를 선별하고 위치·파일 기준을 맞춰 학습 데이터의 정합성을 확보했습니다. 이후 57개 feature와 시설 단위 hold-out을 적용해 FT-Transformer R2 0.966을 달성했습니다. 또한 FastAPI·SQLite·Ollama 기반 SOTA 플랫폼을 구현해 수집부터 분석·서비스까지 연결했습니다. 이 경험을 바탕으로 주가지수 데이터 파이프라인의 정확성과 AI 포트폴리오 시뮬레이터의 검증 가능성을 함께 높이겠습니다.",
      },
      {
        title: "학습 경험과 향후 계획",
        body: "저는 새로운 도메인을 접하면 모델보다 먼저 데이터가 생성되는 규칙과 평가 기준을 학습합니다. 비파괴검사에서는 결함·두께·가동률을 feature로 바꾸었고, 축구 이벤트 데이터에서는 거리·각도·영역·선수 통계를 만들어 XGBoost와 FT-Transformer를 비교했습니다. 입사 후에는 주가지수 산출 규칙, corporate action 처리, 시계열 결측과 이상치 기준을 우선 학습하겠습니다. 이후 기존 Python·SQL·REST API 역량을 활용해 데이터 계보와 검증 로그를 남기는 파이프라인을 만들고, AI 포트폴리오 결과에는 baseline·거래비용·시점 분리 검증을 적용하겠습니다.",
      },
    ],
    skills: ["Python", "Pandas", "FT-Transformer", "SQLD", "FastAPI", "LLM/Ollama"],
    applicationNote: "Graph DB와 Java REST API는 직접 경험이 없습니다. 대신 Python REST·RDBMS와 다중 소스 수집 구조를 구체적인 증거로 제시했습니다.",
  },
  {
    slug: "kpfis",
    aliases: ["fis", "한국재정정보원"],
    company: "한국재정정보원",
    role: "일반직 5급 · 시스템운영",
    employment: "정규직",
    deadline: "2026.07.15 공고 마감 표시",
    sourceUrl: "https://zighang.com/recruitment/c486dab3-74b6-40e8-9677-3c62e2daea51",
    sourceLabel: "직행 공고",
    headline: "공공 시스템의 정확성·재현성·운영 안정성을 함께 책임지는 개발자",
    positioning:
      "소프트웨어 개발·운영 직무에 맞춰 API 제품화, 데이터 무결성, 성능 개선, ISO 29110 품질체계 경험을 강조했습니다. 공공기관 블라인드 지원을 고려해 학교·성별 등 편견 요소보다 직무 증거 중심으로 구성했습니다.",
    jobSummary:
      "일반직 5급 시스템운영은 소프트웨어 개발 및 운영을 담당합니다. 필기는 프로그래밍·운영체제·데이터베이스·소프트웨어공학, 실기는 코딩테스트이며 면접은 발표·경험상황 중심입니다.",
    keywords: ["시스템 운영", "소프트웨어 개발", "데이터베이스", "품질체계", "성능 개선", "공공성"],
    fitPoints: [
      { value: "API", label: "서비스 운영", detail: "모델 로직을 REST 서비스와 사용자 흐름으로 전환" },
      { value: "35→22s", label: "성능 개선", detail: "운영 파이프라인 병목 측정과 최적화" },
      { value: "ISO 29110", label: "개발 품질", detail: "산출물·위험·시스템 설명의 추적성 확보" },
    ],
    requirements: [
      { requirement: "소프트웨어 개발·운영", evidence: "FastAPI·React·Next.js·Vue.js·Node.js·RDBMS 기반 서비스 구현과 배포 경험", signal: "핵심 강점" },
      { requirement: "DB·소프트웨어공학", evidence: "SQLD, PostgreSQL·SQLite·MariaDB 사용, ISO 29110 품질체계 산출물 대응", signal: "직접 경험" },
      { requirement: "운영 안정성과 장애 예방", evidence: "데이터 누수 점검, 처리시간 최적화, AI 위험관리, API 모듈화 경험", signal: "차별점" },
      { requirement: "공공 재정 시스템 도메인", evidence: "직접 재정업무 경험은 없으며 공공사업 품질 대응과 데이터 시스템 운영 경험으로 연결", signal: "보완 명시" },
    ],
    stories: [
      {
        title: "실험 코드를 반복 사용 가능한 운영 서비스로 전환",
        problem: "수명평가 로직이 노트북과 개별 스크립트에 흩어져 버전 관리와 반복 실행이 어려웠습니다.",
        action: "LifeEvaluator 클래스로 3개 평가 방식을 분리하고 FastAPI, 시각화, 결과 리포트, 검사계획 모듈을 계약 기반으로 연결했습니다.",
        result: "수명평가 로직을 운영 가능한 REST 서비스 흐름으로 전환하고 변경 영향 범위를 줄였습니다.",
        tags: ["Software Design", "FastAPI", "Operations"],
      },
      {
        title: "운영 병목을 측정하고 처리시간 단축",
        problem: "자동평가 파이프라인의 SVR 처리 시간이 길어 QA 반복과 결과 제공이 지연됐습니다.",
        action: "정확도와 처리시간을 분리해 측정하고 n_jobs·epsilon·C 튜닝과 대체 모델을 비교했습니다.",
        result: "처리시간을 35초에서 22초로 줄이고 대체 모델에서는 6초까지 단축 가능성을 확인했습니다.",
        tags: ["Performance", "Monitoring", "Model Serving"],
      },
      {
        title: "품질 요구사항과 개발 산출물의 추적성 확보",
        problem: "품질·인증 요구가 개발 문서와 분리돼 시스템 변경 시 근거 누락 위험이 있었습니다.",
        action: "ISO 29110·ISO/IEC 23894 항목을 데이터, 모델, 소프트웨어 산출물, 위험 통제로 매핑했습니다.",
        result: "TTA 중간심사를 통과하고 공공사업 품질체계 진단에 필요한 문서 정합성을 높였습니다.",
        tags: ["ISO 29110", "Traceability", "Risk"],
      },
    ],
    coverLetters: [
      {
        title: "지원동기와 공공 시스템에 대한 관점",
        body: "재정정보 시스템은 많은 사용자가 동일한 기준으로 업무를 처리해야 하므로 기능 개발만큼 데이터 정확성, 변경 추적, 장애 예방이 중요하다고 생각합니다. 저는 산업용 AI 시스템을 개발하며 모델 로직을 FastAPI 서비스로 전환하고, 시설 단위 데이터 누수를 점검하며, 처리시간 병목을 개선했습니다. 또한 ISO 29110과 AI 위험관리 요구를 개발 산출물에 연결해 시스템의 근거를 문서로 남겼습니다. 한국재정정보원에서는 사용자가 신뢰할 수 있는 서비스를 만들기 위해 요구사항, 데이터, 코드, 운영 지표가 같은 기준으로 추적되도록 기여하겠습니다.",
      },
      {
        title: "직무 관련 문제 해결 경험",
        body: "수명평가 시스템의 초기 구조는 기존 공식, 고객사 기준, 극치해석, AI 모델이 서로 다른 코드와 문서에 흩어져 있었습니다. 저는 각 방식의 입력·계산·출력을 정의하고 LifeEvaluator 클래스로 모듈화했습니다. 이어 FastAPI 엔드포인트와 시각화, LLM 검사계획을 연결해 반복 실행 가능한 흐름을 만들었습니다. 그 결과 R2 0.966 모델이 단일 실험을 넘어 운영 가능한 서비스로 확장됐습니다. 이 경험을 바탕으로 재정정보 시스템에서도 복잡한 업무 규칙을 모듈 경계와 데이터 계약으로 명확히 나누겠습니다.",
      },
    ],
    skills: ["Python", "FastAPI", "SQLD", "React/Vue.js", "ISO 29110", "성능 최적화"],
    applicationNote: "공고의 블라인드 채용 원칙을 고려해 회사별 페이지에서는 직무 증거를 중심으로 구성했습니다. 실제 지원서에는 학교명·출신지 등 편견 요소가 노출되지 않도록 별도 점검이 필요합니다.",
  },
  {
    slug: "kakao-healthcare",
    aliases: ["kakaohealthcare", "카카오헬스케어"],
    company: "카카오헬스케어",
    role: "FHIR/의료데이터 플랫폼 개발자",
    employment: "정규직 · 경력 3년 이상",
    deadline: "상시채용",
    checkedAt: "2026.07.24",
    sourceUrl: "https://zighang.com/recruitment/9f7c36e8-9906-49c9-a62e-31e8f1e3ac18",
    sourceLabel: "직행 공고",
    headline: "복잡한 의료데이터를 검증 가능한 API와 표준화 흐름으로 연결하는 개발자",
    positioning:
      "HL7 FHIR 실무 경력을 보유했다고 과장하지 않았습니다. 대신 Python 기반 데이터 변환·검증, FastAPI 제품화, 의료영상·라이프로그 분석, ISO 29110·TTA 표준 대응 경험을 FHIR 플랫폼 개발에 전이 가능한 근거로 구성했습니다.",
    jobSummary:
      "EMR·CDW·연구 데이터를 FHIR Resource로 분석·매핑하고 Profile, Extension, ValueSet, CodeSystem을 정의하며 FHIR Server·API·데이터 변환 파이프라인을 개발하는 경력직입니다. Java·Kotlin·Python과 의료데이터 시스템 연계 경험을 요구합니다.",
    keywords: ["HL7 FHIR", "의료데이터", "Python", "REST API", "데이터 검증", "상호운용성"],
    fitPoints: [
      { value: "FastAPI", label: "데이터 API", detail: "산업 평가 로직을 검증·조회 가능한 REST 엔드포인트로 제품화" },
      { value: "2 Domains", label: "의료 AI 탐색", detail: "MRNet MRI 분류와 흉부 CT 데이터 분석 프로젝트" },
      { value: "4 Standards", label: "표준 대응", detail: "TTA·KTL·ISO 29110·ISO/IEC 23894 요구 추적 경험" },
    ],
    requirements: [
      { requirement: "FHIR 기반 데이터 교류·매핑", evidence: "FHIR Resource·Profile 실무는 없으나, 서로 다른 수명평가 입력·계산·출력을 공통 모델과 API 계약으로 통합한 경험", signal: "보완 명시" },
      { requirement: "백엔드·데이터 엔지니어링", evidence: "Python·FastAPI·Pydantic 기반 REST API, Pandas 전처리, PostgreSQL·SQLite·MariaDB 활용", signal: "핵심 강점" },
      { requirement: "의료데이터 시스템 이해", evidence: "Stanford MRNet MRI ACL 분류와 COVID 흉부 CT 탐색, ETRI 수면·라이프로그 예측 프로젝트", signal: "전이 가능" },
      { requirement: "표준 요구를 기술 설계로 전환", evidence: "ISO 29110·ISO/IEC 23894·TTA 요구사항을 데이터·모델·API·위험관리 산출물에 매핑", signal: "차별점" },
    ],
    stories: [
      {
        title: "서로 다른 평가 방식을 하나의 데이터 계약으로 통합",
        problem: "기존 공식, 고객사 기준, 극치해석, AI 예측이 서로 다른 입력과 결과 형식을 사용해 API 연계와 검증 기준을 일관되게 유지하기 어려웠습니다.",
        action: "각 방식의 입력·계산·출력을 먼저 정의하고 LifeEvaluator 클래스로 3개 평가 방식을 모듈화했습니다. Pydantic 스키마와 FastAPI 엔드포인트를 연결해 업로드, 평가, 결과 조회, 파일 생성 흐름을 분리했습니다.",
        result: "R2 0.966 예측 모델을 포함한 수명평가 로직을 반복 검증 가능한 REST 서비스로 전환하고, 변경 시 영향 범위를 데이터 계약 단위로 추적할 수 있게 했습니다.",
        tags: ["FastAPI", "Pydantic", "Data Contract", "Validation"],
      },
      {
        title: "의료영상 데이터를 모델 입력으로 구조화",
        problem: "MRI 검사는 시퀀스와 슬라이스 구조를 가지므로 일반 이미지처럼 한 장씩 처리하면 환자 단위 판단과 데이터 일관성을 유지하기 어렵습니다.",
        action: "Stanford MRNet 데이터를 대상으로 nibabel·pydicom·SimpleITK·OpenCV를 사용해 영상 구조를 확인하고, ResNet-18 기반 ACL 파열 분류와 앙상블 흐름을 구성했습니다.",
        result: "의료영상의 계층 구조와 환자 단위 검증 필요성을 학습했고, 데이터 형식과 임상 의미를 먼저 이해한 뒤 모델 입력을 설계하는 경험을 확보했습니다.",
        tags: ["Medical Imaging", "PyTorch", "DICOM", "ResNet-18"],
      },
      {
        title: "표준 요구사항을 구현·검증 근거에 연결",
        problem: "TTA 신뢰성, ISO 29110, AI 위험관리 요구가 각각 다른 문서에 있어 실제 시스템 구현과 심사 근거 사이의 추적성이 약했습니다.",
        action: "요구사항을 데이터, 모델, API, 개발 산출물, 위험 통제로 분해하고 미검출·환경 변화·설명 가능성 이슈를 ISO/IEC 23894 위험관리 항목에 연결했습니다.",
        result: "TTA 신뢰성 중간심사를 통과하고 UIPA 품질체계 진단에서 시스템과 산출물의 정합성을 높였습니다.",
        tags: ["ISO 29110", "TTA", "Traceability", "Risk"],
      },
    ],
    coverLetters: [
      {
        title: "지원동기와 직무 적합성",
        body: "의료데이터의 가치는 많은 데이터를 모으는 데서 끝나지 않고, 서로 다른 기관과 서비스가 같은 의미로 교환하고 검증할 수 있을 때 실현된다고 생각합니다. 저는 산업용 AI 시스템에서 흩어진 평가 방식과 데이터 구조를 공통 계약으로 정리하고 FastAPI 서비스로 제품화했습니다. 또한 MRI·CT 의료영상과 수면·라이프로그 데이터를 다루며 도메인 구조를 먼저 이해해야 모델과 서비스의 오류를 줄일 수 있다는 점을 배웠습니다. HL7 FHIR 실무 경력은 아직 없지만, 표준 요구사항을 구현 근거로 바꾼 ISO 29110·TTA 대응 경험과 Python 데이터 엔지니어링 역량을 바탕으로 FHIR Resource와 Terminology를 빠르게 학습하고 카카오헬스케어 서비스의 상호운용성과 데이터 품질 향상에 기여하겠습니다.",
      },
      {
        title: "표준과 제품을 연결한 문제 해결 경험",
        body: "수명평가 시스템은 기존 공식, 고객사 방식, 극치해석, AI 예측이 서로 다른 입력과 결과를 사용해 하나의 서비스로 연결하기 어려웠습니다. 저는 각 방식의 필수 필드와 계산 책임을 분리하고 LifeEvaluator와 Pydantic 스키마로 공통 계약을 정의했습니다. 이어 업로드, 평가, 결과 조회, 파일, LLM 검사계획 API를 구성해 데이터가 들어와 검증되고 결과가 전달되는 흐름을 명확히 했습니다. 그 결과 R2 0.966 모델을 단발성 실험이 아닌 반복 사용 가능한 서비스로 전환했습니다. FHIR 개발에서도 의료기관별 데이터를 무리하게 하나로 맞추기보다 Resource, Profile, Terminology와 검증 규칙의 책임을 구분하고 변경 가능한 연계 구조를 만들겠습니다.",
      },
    ],
    skills: ["Python", "FastAPI/Pydantic", "PyTorch", "Medical Imaging", "ISO 29110", "데이터 검증"],
    applicationNote: "이 공고는 FHIR·EMR/CDW 연계 실무를 요구하는 3년 이상 경력직입니다. HL7 FHIR Certification과 실제 FHIR Server 구축 경험은 없으므로 지원 전 HAPI FHIR 또는 Firely 기반 미니 연계 프로젝트로 공백을 보완해야 합니다.",
  },
  {
    slug: "injewelme",
    aliases: ["인절미", "인졀미"],
    company: "인졀미",
    role: "서비스 운영·SW 개발자 · DHV 자사 서비스 담당",
    employment: "6개월 계약직 · 경력 4년 이하",
    deadline: "D-25 · 2026.07.24 확인",
    checkedAt: "2026.07.24",
    sourceUrl: "https://zighang.com/recruitment/77abcc2c-7ccb-4127-a8df-5c40b45f9e17",
    sourceLabel: "직행 공고",
    headline: "서비스 상태를 관찰하고, 반복되는 운영 문제를 코드로 줄이는 개발자",
    positioning:
      "DeepHealthVision 웹·앱 운영 지원에 맞춰 API·데이터 흐름 이해, Git 협업, Docker·Vercel·Fly.io 배포, 로그 기반 성능 개선과 반복 업무 자동화 경험을 중심으로 구성했습니다.",
    jobSummary:
      "비접촉 생체신호 측정 서비스 DHV의 접속·데이터 수집·서버/API·앱 상태를 모니터링하고 이슈를 정리합니다. 이후 관리자 기능, 프론트엔드·백엔드 수정, 테스트, 운영 자동화와 유지보수로 역할을 확장하는 포지션입니다.",
    keywords: ["서비스 운영", "모니터링", "REST API", "GitHub", "자동화", "Docker"],
    fitPoints: [
      { value: "35→22s", label: "운영 개선", detail: "처리시간 병목을 측정하고 파이프라인 응답 지연 개선" },
      { value: "Full Stack", label: "웹 구조 이해", detail: "React·Next.js·Vue.js와 FastAPI·Node.js·DB 연결" },
      { value: "3 Deploys", label: "배포 경험", detail: "Vercel·Fly.io·Docker 기반 서비스 배포" },
    ],
    requirements: [
      { requirement: "웹·앱 구조와 API 데이터 흐름", evidence: "React·Next.js·Vue.js 프론트엔드와 FastAPI·Node.js·PostgreSQL·MariaDB를 연결한 프로젝트", signal: "핵심 강점" },
      { requirement: "서비스 상태 점검·이슈 기록", evidence: "AI 자동평가 파이프라인의 정확도·처리시간 병목을 분리 측정하고 실험 로그와 인증 문서로 관리", signal: "직접 경험" },
      { requirement: "Git 기반 협업과 코드 수정", evidence: "GitHub 팀 프로젝트와 IRIS 모델 26회 버전 흐름 중 샘플링 로직·파라미터 코드 기여", signal: "직접 경험" },
      { requirement: "AWS·운영 모니터링", evidence: "Docker·Vercel·Fly.io 배포 경험은 있으나 AWS 운영과 관측 도구 실무는 추가 학습 필요", signal: "보완 명시" },
    ],
    stories: [
      {
        title: "느린 평가 파이프라인의 병목을 수치로 분리",
        problem: "자동평가 파이프라인에서 SVR 처리 시간이 길어 운영자가 결과를 반복 확인하고 QA하는 속도가 떨어졌습니다.",
        action: "정확도와 처리시간을 별도 지표로 기록하고 n_jobs·epsilon·C 조정과 KernelRidge·FastPoly 대체 모델을 같은 조건에서 비교했습니다.",
        result: "기준 처리시간을 35초에서 22초로 줄였고, 대체 모델에서는 25초에서 6초까지 단축 가능성을 확인해 운영 선택지를 제시했습니다.",
        tags: ["Monitoring", "Performance", "Issue Log"],
      },
      {
        title: "촬영 웹앱을 배포 가능한 서비스로 완성",
        problem: "카메라 촬영, 합성, QR 공유를 한 흐름에서 제공하려면 브라우저 권한, 클라이언트 상태, 업로드 서버와 배포 환경을 함께 맞춰야 했습니다.",
        action: "React·TypeScript·PWA로 촬영 화면을 구성하고 Node.js·Express 업로드 서버를 연결했습니다. Docker·Fly.io와 Vercel로 실행 환경을 분리해 배포했습니다.",
        result: "촬영부터 이미지 합성·업로드·QR 공유까지 동작하는 네컷 부스 웹앱을 완성해 프론트엔드와 API의 운영 경계를 경험했습니다.",
        tags: ["React", "TypeScript", "Express", "Docker"],
      },
      {
        title: "반복 수집 업무를 자동화 파이프라인으로 전환",
        problem: "앱 리뷰와 상품 데이터를 반복해서 수집·정리하는 과정은 누락과 형식 불일치가 잦아 분석 전에 많은 수작업이 필요했습니다.",
        action: "Python·Node.js 수집기를 만들고 데이터 정제, Excel 산출, 감성·키워드 분석 흐름을 모듈화했습니다. 오류가 발생한 단계와 입력 조건을 확인할 수 있도록 실행 결과를 구분했습니다.",
        result: "반복 수집부터 분석용 파일 생성까지의 수작업을 줄이고, 동일 조건으로 다시 실행할 수 있는 운영 도구를 만들었습니다.",
        tags: ["Automation", "Python", "Node.js", "Data Pipeline"],
      },
    ],
    coverLetters: [
      {
        title: "지원동기와 서비스 운영 관점",
        body: "AI 서비스의 신뢰는 모델 점수만으로 만들어지지 않습니다. 접속 상태, 데이터 수집, API 응답, 오류 기록이 안정적으로 이어져야 연구와 실제 사용자가 같은 결과를 얻을 수 있습니다. 저는 산업용 AI 제품에서 모델을 FastAPI로 서비스화하고, 처리시간 병목을 35초에서 22초로 개선했으며, 데이터 품질과 오류 원인을 문서로 추적했습니다. React·TypeScript·Node.js 기반 웹앱을 Docker·Vercel·Fly.io에 배포한 경험도 있습니다. DHV 운영에서는 체크리스트를 단순 반복하는 데 그치지 않고 상태와 오류를 재현 가능한 형태로 기록하고, 반복되는 조치를 테스트와 자동화 코드로 전환하겠습니다.",
      },
      {
        title: "운영 문제를 개선한 경험",
        body: "자동평가 파이프라인의 응답이 느려질 때 처음부터 모델을 교체하지 않았습니다. 처리 단계별 시간을 분리하고 정확도와 지연시간을 같은 실험표에 기록했습니다. 이후 기존 SVR의 병렬 처리와 파라미터를 조정하고 대체 모델을 동일 조건에서 비교했습니다. 그 결과 기준 처리시간을 35초에서 22초로 줄였고, 대체안에서는 6초까지 단축 가능성을 확인했습니다. 이 경험을 바탕으로 DHV에서도 접속, 데이터 수집, API, 앱 동작을 구간별로 관찰하고 재현 조건과 영향 범위를 명확히 공유하겠습니다.",
      },
    ],
    skills: ["React/TypeScript", "FastAPI", "Node.js", "GitHub", "Docker/Vercel", "운영 자동화"],
    applicationNote: "공고 본문에는 '인턴 포지션' 표현이 있으나 상단 채용 유형은 6개월 계약직으로 표시됩니다. 지원 전 고용형태를 확인하고, AWS·로그 모니터링 도구 경험 공백은 배포 프로젝트의 운영 기록으로 보완하는 편이 좋습니다.",
  },
  {
    slug: "medibible",
    aliases: ["메디바이블", "medibible"],
    company: "메디바이블",
    role: "피부과 업무 프로세스 효율화 프로그램 개발",
    employment: "정규직 · 신입 지원 가능",
    deadline: "상시채용",
    checkedAt: "2026.07.24",
    sourceUrl: "https://zighang.com/recruitment/40f237ab-fa57-4ebc-bb90-c3d51b30b86b",
    sourceLabel: "직행 공고",
    headline: "현장의 반복 업무를 AI와 웹 제품으로 빠르게 바꾸는 풀스택 실행자",
    positioning:
      "Next.js·React·TypeScript, FastAPI·Node.js, PostgreSQL·Redis, Docker·Vercel 배포와 AI 기반 자동화 프로젝트를 병원 예약·응대·교육·운영 도구 개발에 직접 연결했습니다.",
    jobSummary:
      "Claude Code·Codex 기반 웹 개발, 병원 예약·응대 자동화, AI Agent 자료수집·커뮤니케이션 시스템, AWS 배포·CI/CD·DB·로그·장애·보안 운영을 함께 맡는 폭넓은 풀스택 포지션입니다.",
    keywords: ["AI Agent", "Next.js", "React", "업무 자동화", "DevOps", "병원 운영"],
    fitPoints: [
      { value: "15+", label: "제품 프로젝트", detail: "AI·웹·자동화 MVP를 직접 설계하고 구현" },
      { value: "25 Devices", label: "실사용 운영", detail: "동시 참여형 웹앱과 Redis 상태 동기화" },
      { value: "Full Stack", label: "공고 스택", detail: "Next.js·React·Node.js·PostgreSQL·Vercel" },
    ],
    requirements: [
      { requirement: "AI 도구 기반 웹 개발", evidence: "Codex·LLM을 활용한 React·Next.js·FastAPI 제품 구현, PDF 분석·분류·요약·검사계획 자동화", signal: "핵심 강점" },
      { requirement: "병원 업무 자동화·AI Agent", evidence: "다중 소스 Collector, 앱 리뷰·이커머스 수집 자동화, Google Sheets 기반 실시간 관리 도구", signal: "전이 가능" },
      { requirement: "실서비스 배포·운영", evidence: "Vercel·Fly.io·Docker·Upstash Redis 기반 웹앱 배포와 동시 사용자 상태 관리", signal: "직접 경험" },
      { requirement: "AWS·CI/CD·보안 운영", evidence: "Docker·Vercel 운영 경험은 있으나 AWS EC2와 정식 온콜·권한관리 실무는 추가 확보 필요", signal: "보완 명시" },
    ],
    stories: [
      {
        title: "25대 기기의 동시 진행 상태를 웹으로 통합",
        problem: "행사 참가자 25명이 각 휴대폰에서 같은 시나리오를 진행하려면 화면 전환 시점과 상태가 어긋나지 않아야 했습니다.",
        action: "Vanilla JavaScript 화면과 Vercel Serverless API, Upstash Redis를 연결해 진행 상태를 서버에서 공유하고 기기별 화면이 같은 순서를 따르도록 구성했습니다.",
        result: "별도 앱 설치 없이 25대 휴대폰이 동시에 참여하는 행사 웹앱을 운영해 다중 사용자 상태와 장애 영향을 고려한 제품 경험을 만들었습니다.",
        tags: ["Vercel", "Serverless", "Redis", "Operations"],
      },
      {
        title: "명단 선택과 관리자 집계를 하나의 업무 도구로 구현",
        problem: "참여자 선택 결과를 수기로 취합하면 중복·누락을 확인하기 어렵고 관리자가 실시간 현황을 파악할 수 없었습니다.",
        action: "Next.js·React·TypeScript·SWR·Zod로 입력과 검증을 구성하고 Google Sheets API를 데이터 저장·집계 흐름에 연결했습니다.",
        result: "사용자 입력과 관리자 실시간 집계를 한 서비스로 연결해 반복 취합 업무와 데이터 확인 단계를 줄였습니다.",
        tags: ["Next.js", "TypeScript", "SWR", "Zod"],
      },
      {
        title: "다중 소스 자료수집을 AI 리서치 플랫폼으로 자동화",
        problem: "최신 AI 모델과 논문 정보가 Hugging Face, ArXiv, GitHub에 흩어져 있어 수집·비교·요약을 반복해야 했습니다.",
        action: "Collector 패턴으로 소스별 수집 책임을 분리하고 Next.js·FastAPI·SQLite·Ollama를 연결해 PDF 분석, 분야 분류, 요약 생성 흐름을 구현했습니다.",
        result: "자료수집부터 AI 분석과 화면 제공까지 이어지는 SOTA 모델 관리 플랫폼을 완성해 에이전트형 업무 자동화의 기반을 만들었습니다.",
        tags: ["AI Automation", "FastAPI", "Ollama", "Collector"],
      },
    ],
    coverLetters: [
      {
        title: "지원동기와 제품 실행력",
        body: "병원 업무의 효율화는 거대한 시스템을 한 번에 만드는 일보다 예약, 응대, 교육, 재고처럼 반복되는 불편을 정확히 찾고 작동하는 도구로 빠르게 바꾸는 과정이라고 생각합니다. 저는 Next.js·React·TypeScript와 FastAPI·Node.js로 여러 웹 제품을 만들고 Vercel·Docker·Fly.io·Redis 환경에 배포했습니다. 25대 휴대폰이 동시에 사용하는 행사 앱, Google Sheets 기반 실시간 관리자 도구, 다중 소스 AI 리서치 자동화 플랫폼을 직접 구현하며 사용자 흐름부터 데이터와 운영까지 연결했습니다. 메디바이블에서도 AI 도구를 코드 생성에만 사용하지 않고 문제 정의, 테스트, 문서화, 운영 자동화까지 이어지는 개발 환경을 만들겠습니다.",
      },
      {
        title: "복잡한 운영 흐름을 단순화한 경험",
        body: "25명이 각자 휴대폰으로 참여하는 행사에서는 화면 전환이 한 번만 어긋나도 전체 진행이 멈출 수 있었습니다. 저는 클라이언트마다 상태를 따로 보관하지 않고 Vercel Serverless API와 Upstash Redis를 통해 공통 진행 상태를 관리했습니다. 참가자는 별도 설치 없이 웹에 접속했고, 운영자는 중앙에서 흐름을 제어할 수 있었습니다. 그 결과 25대 기기에서 같은 시나리오를 안정적으로 운영했습니다. 병원 업무 도구에서도 예약·응대·교육의 상태와 책임 위치를 먼저 정의하고, 실패 시 복구 가능한 작은 기능부터 배포하겠습니다.",
      },
    ],
    skills: ["Next.js/React", "TypeScript", "FastAPI/Node.js", "PostgreSQL/Redis", "Docker/Vercel", "AI 자동화"],
    applicationNote: "피부과·성형외과 근무와 AWS EC2 운영 경력은 없습니다. 의료영상 프로젝트와 웹 제품 운영 경험은 관련 관심의 근거로만 사용하고, 환자정보·예약 데이터에는 최소권한·감사로그·비식별화 원칙을 별도로 준비해야 합니다.",
  },
  {
    slug: "khis",
    aliases: ["한국보건의료정보원", "korea-health-information-service"],
    company: "한국보건의료정보원",
    role: "전산직 6급 · 정보화사업기획 및 시스템개발·운영(AI 활용)",
    employment: "일반직 · 정규직",
    deadline: "D-12 · 2026.07.24 확인",
    checkedAt: "2026.07.24",
    sourceUrl: "https://zighang.com/recruitment/e8516e8b-a987-473a-a6bc-34cc1e303905",
    sourceLabel: "직행 공고",
    headline: "AI 기술과 공공사업 품질을 함께 이해하는 보건의료 정보화 실무자",
    positioning:
      "전산직 6급 AI 활용 분야의 사업기획·운영지원, 시스템 모니터링, 기초 데이터 정리·품질점검에 맞춰 UIPA 사업, 산업 AI 데이터 QA, FastAPI 운영, SQLD와 의료 AI 프로젝트를 연결했습니다.",
    jobSummary:
      "보건의료정보 AI 활용사업과 플랫폼의 기획·관리·운영을 지원하고, AI 서비스 운영 현황 모니터링, 의료데이터 기초 정리·품질점검, 정보화사업 구축·품질관리를 수행하는 일반직 전산직 6급입니다.",
    keywords: ["보건의료정보", "AI 활용사업", "정보화사업", "데이터 품질", "시스템 운영", "공공기관"],
    fitPoints: [
      { value: "UIPA", label: "공공사업", detail: "품질체계 진단과 인증 산출물 대응 경험" },
      { value: "50K+", label: "데이터 품질", detail: "라벨링·검수·재학습 기준을 운영한 산업 AI 데이터" },
      { value: "SQLD", label: "전산 역량", detail: "Python·SQL·API·RDBMS 기반 시스템 구현" },
    ],
    requirements: [
      { requirement: "AI 활용사업 기획·운영지원", evidence: "UIPA 사업 맥락에서 AI 시스템 목표·위험·품질 요구를 산출물과 인증 일정에 연결", signal: "핵심 강점" },
      { requirement: "AI 서비스 모니터링·관리", evidence: "모델 성능, 데이터 오류, 처리시간, 환경 영향과 운영 위험을 지표·로그·위험관리대장으로 관리", signal: "직접 경험" },
      { requirement: "의료데이터 정리·품질점검", evidence: "50,000건 산업 AI 데이터 QA와 MRI·CT·수면 라이프로그 의료데이터 프로젝트", signal: "전이 가능" },
      { requirement: "공공기관 정보화사업·클라우드", evidence: "공공사업 품질 대응은 있으나 공공기관 발주·예산·조달 및 클라우드 구축 실무는 추가 학습 필요", signal: "보완 명시" },
    ],
    stories: [
      {
        title: "UIPA 사업의 AI 품질 요구를 추적 가능한 체계로 전환",
        problem: "TTA 신뢰성, KTL, ISO 29110, AI 위험관리 요구가 서로 다른 문서와 일정에 흩어져 개발 결과와 공공사업 평가 근거가 연결되지 않았습니다.",
        action: "기관별 요구사항을 데이터, 모델, 소프트웨어 산출물, 위험 통제로 분해하고 ISO/IEC 23894 위험관리계획서·대장과 시스템 설명서를 실제 구현 근거에 매핑했습니다.",
        result: "2025년 8월 TTA 신뢰성 중간심사를 통과하고 UIPA 품질체계 진단과 KTL·ISO 29110 대응에서 산출물 정합성을 높였습니다.",
        tags: ["UIPA", "TTA", "ISO 29110", "Quality"],
      },
      {
        title: "데이터 품질 문제를 AI 성능 개선으로 연결",
        problem: "결함 유형과 라벨 기준이 작업자마다 달라 오탐·미탐의 원인이 데이터인지 모델인지 구분하기 어려웠습니다.",
        action: "IP·IC·EP·EC 결함 기준을 학습 단위로 재정의하고 CVAT·ROBOFLOW 기반 라벨링, 검수, 재라벨링 절차가 같은 규칙을 사용하도록 운영했습니다.",
        result: "50,000건 이상의 데이터에서 라벨 오류를 약 15% 줄이고 결함 탐지 정확도 98% 달성에 기여했습니다.",
        tags: ["Data Quality", "Monitoring", "YOLOv8-seg"],
      },
      {
        title: "의료·라이프로그 데이터의 개인 차이를 검증 설계에 반영",
        problem: "수면·활동 데이터는 같은 사람의 기록이 학습과 검증에 섞이면 실제 신규 사용자 성능보다 결과가 높게 나타날 수 있었습니다.",
        action: "ETRI 라이프로그 프로젝트에서 시간대별 활동 윈도우 feature를 구성하고 피험자 단위 GroupKFold로 LightGBM·XGBoost·CatBoost 앙상블을 비교했습니다.",
        result: "의료·생활 데이터에서 개인 단위 분할과 재현 가능한 검증이 중요하다는 원칙을 확보하고 산업 데이터의 facility 분할 경험을 사람 중심 데이터로 확장했습니다.",
        tags: ["Lifelog", "GroupKFold", "Data Governance"],
      },
    ],
    coverLetters: [
      {
        title: "지원동기와 직무수행 방향",
        body: "보건의료 AI 서비스는 기술을 도입하는 것보다 데이터 품질과 운영 상태를 지속적으로 확인하고, 공공사업의 목표와 성과 근거를 연결하는 일이 중요하다고 생각합니다. 저는 UIPA 사업 맥락에서 TTA·KTL·ISO 29110 요구를 AI 시스템의 데이터, 모델, 위험관리, 개발 산출물에 매핑했습니다. 또한 50,000건 이상의 산업 데이터를 운영하며 라벨 오류를 줄였고 FastAPI 서비스와 처리시간 지표를 관리했습니다. 한국보건의료정보원에서는 사업 요구사항을 기술 언어로 구체화하고, 의료데이터 품질 기준과 AI 서비스 운영 지표를 추적해 국민이 신뢰할 수 있는 보건의료 정보화 기반을 만드는 데 기여하겠습니다.",
      },
      {
        title: "직무 관련 문제 해결 경험",
        body: "AI 신뢰성 인증을 준비할 때 문제는 문서의 부족이 아니라 심사 요구와 실제 구현 근거가 연결되지 않는 것이었습니다. 저는 요구사항을 데이터 품질, 모델 성능, 소프트웨어 산출물, 운영 위험으로 나누고 각 근거의 책임 위치를 추적표에 정리했습니다. 결함 미검출, 환경 변화, 설명 가능성은 ISO/IEC 23894 위험관리 항목으로 구조화했습니다. 그 결과 TTA 중간심사를 통과하고 UIPA 품질체계 진단의 산출물 정합성을 높였습니다. 입사 후에도 정보화사업의 요구사항, 데이터, 시스템 상태, 성과지표가 같은 기준으로 관리되도록 지원하겠습니다.",
      },
      {
        title: "입사 후 계획",
        body: "초기에는 기관의 보건의료정보 사업 구조와 의료데이터 품질 기준, 개인정보보호·보안 지침, 사업관리 절차를 우선 학습하겠습니다. 이후 AI 서비스의 데이터 수집·정제·검증·배포·모니터링 단계를 지표로 정리하고, 장애와 품질 이슈가 사업 요구사항과 연결되도록 추적 체계를 만들겠습니다. Python·SQL·FastAPI 경험을 활용해 반복 점검은 자동화하되, 공공기관의 변경관리와 승인 절차를 준수하겠습니다. 장기적으로는 현장과 정책 담당자가 함께 이해할 수 있는 AI 활용사업의 성과·위험 관리 체계를 만드는 전산 실무자로 성장하겠습니다.",
      },
    ],
    skills: ["Python", "SQLD", "FastAPI", "데이터 품질", "UIPA·ISO 29110", "AI 위험관리"],
    applicationNote: "전산직 6급 AI 활용 분야를 기준으로 작성했습니다. 실제 지원서에는 학교명·성별·연령·출신지 등 블라인드 항목을 제거하고, 경력·자격증은 증빙 가능한 내용만 기재해야 합니다.",
  },
];

export function getCompanyProfile(pathname) {
  const parts = pathname
    .split("/")
    .filter(Boolean)
    .map((part) => decodeURIComponent(part));
  const route = parts.at(-1) || "";

  if (!route || route === "resume") return null;

  const normalizedRoute = route.toLowerCase();
  return companyProfiles.find(
    (profile) =>
      profile.slug.toLowerCase() === normalizedRoute ||
      profile.aliases.some((alias) => alias.toLowerCase() === normalizedRoute),
  );
}
