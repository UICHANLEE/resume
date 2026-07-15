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
import { CompanyResume } from "./CompanyResume.jsx";
import { companyProfiles, getCompanyProfile } from "./companyProfiles.js";

const navItems = [
  { id: "about", label: "About", icon: IdentificationBadge },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "lifespan", label: "Lifespan Deep Dive", icon: TrendUp },
  { id: "ip", label: "Intellectual Property", icon: Medal },
  { id: "products", label: "Product Suite", icon: Stack },
  { id: "archive", label: "SSD Project Archive", icon: FileCode },
  { id: "company-pages", label: "Company Pages", icon: Briefcase },
  { id: "cases", label: "Case Studies", icon: TrendUp },
  { id: "standards", label: "Standards", icon: ShieldCheck },
  { id: "certificates", label: "Certificates", icon: Certificate },
  { id: "awards", label: "Awards", icon: Medal },
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
      ["PointCloud", "3D 객체 인식 데이터셋"],
      ["Soccer AI", "패스 경로 예측 모델링"],
      ["ETRI", "라이프로그 지표 예측"],
    ],
  },
  {
    title: "Product MVP",
    items: [
      ["SOTA Hub", "논문·모델 비교 플랫폼"],
      ["cashlog", "사진 기반 지출 기록 MVP"],
      ["IMC", "Jira/Confluence 통합 PM 콘솔"],
      ["bread-recipe", "레시피 추천 풀스택 앱"],
      ["취얼업", "취업정보 사이트"],
    ],
  },
  {
    title: "Automation & Tools",
    items: [
      ["domeme", "이커머스 상품 자동화"],
      ["review_bot", "앱 리뷰 수집/분석 파이프라인"],
      ["Spec Compare", "합격자 스펙 크롤링 분석"],
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
  ["Next.js", "frontend"],
  ["React", "frontend"],
  ["Vue.js", "frontend"],
  ["Node.js", "backend"],
  ["PostgreSQL", "database"],
  ["SQLite", "database"],
  ["MariaDB", "database"],
  ["BeautifulSoup", "crawler"],
  ["Selenium", "crawler"],
  ["Docker", "infra"],
  ["Vercel", "deploy"],
];

const experienceStories = [
  {
    period: "2025.03 - 2025.12",
    role: "Machine Learning Engineer",
    company: "(주) 딥아이",
    title: "IRIS-Auto 결함 탐지 데이터 품질 개선",
    context:
      "초음파 IRIS B-scan/C-scan 기반 결함 탐지 모델의 성능은 라벨 품질과 결함 기준의 일관성에 직접 영향을 받았습니다.",
    problem:
      "현장별 신호 품질이 다르고 IP, IC, EP, EC 결함 기준이 사람마다 흔들려 미탐/오탐 원인을 모델 문제인지 데이터 문제인지 분리하기 어려웠습니다.",
    approach:
      "먼저 결함 유형을 모델 학습 단위로 재정의하고, 라벨링-검수-재라벨링이 같은 기준을 보도록 품질 기준을 데이터셋 운영 규칙으로 만들었습니다.",
    execution:
      "ROBOFLOW, CVAT로 50,000건 이상의 YOLO 포맷 라벨을 구축했고, 640x640 학습 데이터셋, 결함 유형별 가이드, 검수 기준, 재라벨링 루프를 운영했습니다.",
    result:
      "IRIS-Auto 탐지 정확도 98% 수준 달성에 기여했고, 라벨 오류율을 약 15% 줄여 모델 개선의 병목을 데이터 품질 단계에서 낮췄습니다.",
    impact: ["98% detection accuracy", "50K+ labels", "15% label error reduction"],
    tags: ["YOLOv8-seg", "CVAT", "ROBOFLOW", "Data QA"],
  },
  {
    period: "2025.04 - 2025.10",
    role: "FT-Transformer & API Contributor",
    company: "(주) 딥아이",
    title: "IRIS-Life 수명평가 체계 고도화",
    context:
      "열교환기 수명평가는 단순 회귀 문제가 아니라 기존 공식 기반 평가, 고객사 기준, 극치해석, AI 예측 모델을 함께 설명해야 하는 산업 예측 문제였습니다.",
    problem:
      "기존 수명평가 방식은 기준과 계산 흐름이 흩어져 있었고, 초기 AI 모델은 facility별 분포 차이와 feature 정의 문제로 R2가 음수로 떨어지는 실험도 있어 신뢰성을 설명하기 어려웠습니다.",
    approach:
      "모델 구조만 바꾸기보다 기존 수명평가, SK/GS/DEEPAI 3방식, EVA 극치해석, AI 예측 모델을 분리해 각 방식의 역할과 한계를 먼저 정리했습니다.",
    execution:
      "LifeEvaluator 클래스로 3가지 평가 방식을 구조화하고, 33,300개 샘플, 57개 feature, 37개 facility 기준의 FT-Transformer 학습과 FastAPI 수명평가 엔드포인트까지 연결했습니다.",
    result:
      "R2 0.966, RMSE 2.57, MAE 1.99, MAPE 4.24% 성능을 달성했고 수명평가 REST API와 LLM 검사계획 기능까지 제품 흐름으로 연결했습니다.",
    impact: ["3-method LifeEvaluator", "R2 0.966", "RMSE 2.57", "FastAPI delivery"],
    tags: ["LifeEvaluator", "FT-Transformer", "EVA", "FastAPI", "LLM Plan"],
  },
  {
    period: "2025.07 - 2025.09",
    role: "Quality & Reliability Documentation",
    company: "(주) 딥아이",
    title: "TTA 신뢰성·ISO 29110 품질체계 대응",
    context:
      "산업용 AI는 정확도만 높아서는 도입되기 어렵고, 소프트웨어 품질체계와 AI 위험관리 근거를 문서로 설명할 수 있어야 했습니다.",
    problem:
      "TTA 신뢰성 인증과 ISO 29110 기반 품질체계 대응에서는 모델 성능, 위험관리, 개발 산출물, 현장 QA 근거를 하나의 추적 가능한 체계로 묶어야 했습니다.",
    approach:
      "TTA, KTL, UIPA 사업 맥락에서 요구되는 인증/진단 항목을 먼저 분해한 뒤, 각 요구사항이 실제 시스템의 데이터, 모델, 개발 문서, 위험관리 문서 중 어디에 대응되는지 매핑했습니다.",
    execution:
      "울산정보산업진흥원(UIPA) 사업 과제 맥락에서 ISO/IEC 23894 기반 위험관리계획서·위험관리대장을 작성하고, ISO 29110 소프트웨어 품질체계와 KTL 마크 인증 대응을 위한 시스템 설명서와 산출물 정합성을 정리했습니다.",
    result:
      "2025.08.05 TTA 신뢰성 중간심사를 통과했고, UIPA 품질체계진단·KTL/ISO 29110 대응 과정에서 문서 완성도와 위험도 커스터마이징 측면의 근거를 강화했습니다.",
    impact: ["TTA mid-review passed", "UIPA 사업", "ISO 29110", "KTL 대응"],
    tags: ["TTA", "UIPA", "ISO 29110", "ISO/IEC 23894", "KTL"],
  },
  {
    period: "2022.05 - Present",
    role: "E-commerce Operator",
    company: "구매대행 온라인 쇼핑몰",
    title: "상품 카테고리 표준화와 운영 자동화",
    context:
      "쇼핑몰 운영은 상품명, 속성, 카테고리의 작은 불일치가 노출 품질과 반복 업무량으로 바로 이어지는 데이터 운영 문제였습니다.",
    problem:
      "여러 판매 채널의 상품명, 속성, 카테고리 기준이 달라 중복 등록과 검색 정확도 저하가 반복됐습니다.",
    approach:
      "채널별 기준을 그대로 맞추기보다, 공통 상품 속성과 카테고리 계층을 먼저 정의해 중복과 모호성을 줄이는 방향으로 접근했습니다.",
    execution:
      "토스쇼핑, 스마트스토어, 쿠팡윙, ESM+ 운영 데이터를 비교하며 중복/모호 카테고리를 재분류하고, 자동 등록/수집 파이프라인 아이디어로 확장했습니다.",
    result:
      "중복 카테고리를 약 30% 줄이고 분류 일관성을 95% 이상으로 끌어올려 운영 효율과 검색 품질을 개선했습니다.",
    impact: ["30% duplicate reduction", "95%+ consistency", "multi-channel ops"],
    tags: ["Commerce", "Taxonomy", "Automation", "Operations"],
  },
];

const caseStudies = [
  {
    title: "Data Integrity & Facility Split",
    problem: "동일 facility와 파일명이 서로 다른 폴더에 중복되어 학습/검증 데이터가 섞일 위험이 있었습니다.",
    action: "데이터 누수를 먼저 의심하고 facility + 파일명 6자리 기준 매핑 테이블을 만들어 공통 facility 103개만 필터링했습니다.",
    result: "데이터 누수를 줄이고 수명예측 모델 평가를 facility 단위 hold-out 기준으로 안정화했습니다.",
    metric: "103 facilities",
  },
  {
    title: "SVR Performance Optimization",
    problem: "자동평가 파이프라인에서 SVR 처리 시간이 길어 현장 QA 반복 속도가 떨어졌습니다.",
    action: "성능 병목을 모델 정확도와 처리 시간으로 나누고 n_jobs, epsilon, C 튜닝과 KernelRidge/FastPoly 대체 모델을 비교했습니다.",
    result: "기준 처리 시간을 35초에서 22초로 줄였고, 대체 모델에서는 25초에서 6초까지 단축 가능성을 확인했습니다.",
    metric: "35s -> 22s",
  },
  {
    title: "FT-Transformer Model Recovery",
    problem: "초기 모델은 facility 편차와 feature 품질 문제로 R2가 낮거나 음수로 흔들렸습니다.",
    action: "모델만 교체하지 않고 feature 정의, 샘플링, 분할 기준, 하이퍼파라미터를 순서대로 분리해 실험 로그를 축적했습니다.",
    result: "R2 0.847에서 0.966까지 끌어올려 산업 데이터 예측 모델로 설명 가능한 성능을 만들었습니다.",
    metric: "R2 0.966",
  },
];

const projectArchive = [
  {
    period: "2025",
    source: "/Volumes/SSD/포트폴리오",
    title: "3D Point Cloud 데이터셋 구축",
    problem:
      "2D 이미지 라벨링과 달리 3D Point Cloud는 객체의 위치, 공간 관계, 노이즈를 함께 봐야 해서 학습 데이터 품질을 일관되게 유지하기 어렵습니다.",
    approach:
      "3D 공간 데이터의 객체 단위 분류와 태깅 기준을 먼저 정리하고, 모델 학습에 필요한 형태로 전처리와 검수 흐름을 분리했습니다.",
    result:
      "3D 객체 인식 모델 학습용 고품질 데이터셋 구축 경험을 확보했고, 2D 이미지·IRIS 신호·3D 공간 데이터까지 다른 데이터 형태를 다룬 경험으로 확장했습니다.",
    tags: ["3D Point Cloud", "Data Labeling", "Preprocessing", "QA"],
  },
  {
    period: "2026",
    source: "/Volumes/SSD/SOTA",
    title: "SOTA 모델 관리 플랫폼",
    problem:
      "PaperWithCode 종료 이후 여러 출처의 최신 모델, 논문, 리뷰, 벤치마크 정보를 한곳에서 비교하기 어려웠습니다.",
    approach:
      "Next.js 프론트엔드와 FastAPI 백엔드를 분리하고, Hugging Face, ArXiv, GitHub 등 다중 소스를 Collector 패턴으로 수집하는 구조를 설계했습니다.",
    result:
      "모델 조회·비교, 논문 PDF 분석, Ollama 기반 분야 분류와 블로그 요약 생성까지 연결한 풀스택 AI 리서치 플랫폼으로 구현했습니다.",
    tags: ["Next.js", "FastAPI", "SQLite", "Ollama", "PDF Analysis"],
  },
  {
    period: "2026",
    source: "/Volumes/SSD/soccer",
    title: "축구 패스 경로 예측 모델",
    problem:
      "경기 이벤트 데이터만으로 패스 종료 지점을 예측하려면 좌표, 시간, 선수, 팀, 이전 액션 맥락을 모델이 이해할 수 있는 feature로 바꿔야 했습니다.",
    approach:
      "거리, 각도, 경기장 영역, 골대까지의 거리, 시간, 선수별 패스 통계, 팀별 패턴을 feature로 만들고 선형 모델, 트리 모델, XGBoost, FT-Transformer를 비교했습니다.",
    result:
      "패스 종료 좌표 예측 파이프라인과 시각화 흐름을 구성했고, 산업 데이터에서 사용한 FT-Transformer 경험을 스포츠 이벤트 데이터로 확장했습니다.",
    tags: ["FT-Transformer", "XGBoost", "Feature Engineering", "Sports Analytics"],
  },
  {
    period: "2023.07 - 2023.09",
    source: "부경대학교 Bootcamp",
    title: "취얼업 취업정보 사이트",
    problem:
      "취업 준비 과정에서는 채용정보를 흩어진 사이트에서 확인해야 해, 관심 공고를 추적하고 관리하는 흐름이 불편했습니다.",
    approach:
      "Vue.js, Node.js, MariaDB 기반으로 프론트엔드, 서버, 데이터베이스 역할을 나누고 팀 단위 GitHub 협업으로 기능을 구현했습니다.",
    result:
      "채용정보 수집·관리·추적 기능을 갖춘 웹사이트를 완성하고 발표하며, 첫 풀스택 팀 프로젝트와 버전관리 협업 경험을 쌓았습니다.",
    tags: ["Vue.js", "Node.js", "MariaDB", "GitHub", "Team Project"],
  },
  {
    period: "2025.03 - 2025.06",
    source: "부경대학교 캡스톤 디자인",
    title: "자소서 합격자 스펙 비교 시스템",
    problem:
      "지원자가 자신의 스펙을 객관적으로 비교하려면 합격자 데이터가 필요하지만, 공개 자료가 흩어져 있어 직접 수집하고 구조화해야 했습니다.",
    approach:
      "BeautifulSoup과 Selenium으로 합격자 스펙 데이터를 수집하고, 비교 가능한 항목으로 정제한 뒤 분석·시각화 흐름을 구성했습니다.",
    result:
      "웹 크롤링 기반 데이터 수집, 정제, 비교 분석을 캡스톤 프로젝트로 완성했고, 사용자 의사결정을 돕는 데이터 제품 경험을 만들었습니다.",
    tags: ["Python", "BeautifulSoup", "Selenium", "Data Analysis", "Capstone"],
  },
];

const lifespanTasks = [
  {
    label: "TASK 1",
    title: "수명평가 정확도 향상 / 최소두께 추정",
    problem:
      "기존 수명평가는 표본 검사와 공식 기반 판단에 의존해 열교환기 전체의 실제 최소두께를 과소 또는 과대 추정할 위험이 있었고, 이로 인해 불필요한 교체나 검사 비용이 발생할 수 있었습니다.",
    approach:
      "기존 SK 방법론, 딥아이 내부 극치해석 방법론, 균등 부식 방법론을 비교 축으로 두고 C/W, 결함 종류와 깊이, 가동률 등 손상유발 메커니즘을 AI가 학습할 수 있는 feature 후보로 정리했습니다.",
    execution:
      "전수조사 데이터를 기준으로 열교환기 단위 최소두께 추정 모델을 설계하고, top 1/2/3 tube의 max_depth_rate, 결함 label, 최대·평균·중간 깊이, group_count, sector, MRT, 사용기간 같은 입력 구조를 정리했습니다.",
    result:
      "추정치와 전수조사 실제 최소값을 비교하는 검증 관점을 세웠고, 과소·과대 추정 방지, 표본 검사 수 감소, 비용 낭비 제거라는 기대효과를 기술적으로 설명할 수 있게 했습니다.",
    evidence: ["전수조사 데이터", "최소두께 추정", "SK/EVA/균등부식", "C/W·가동률"],
  },
  {
    label: "TASK 2",
    title: "전열관 별 결함 성장률 예측 / 데이터 피처 설정",
    problem:
      "무작위 표본으로 최소두께를 판별하는 방식은 전열관별 결함 성장 속도를 추적하기 어렵고, 후차수 검사에서 어떤 전열관을 우선 확인해야 하는지 근거가 부족했습니다.",
    approach:
      "전차수와 현차수의 전열관 위치를 일치시킨 뒤 두께 차이를 결함 성장률의 핵심 신호로 보고, facility가 섞여 평가가 왜곡되지 않도록 공통 facility만 사용하는 기준을 세웠습니다.",
    execution:
      "1st 112개 facility와 2nd 105개 facility를 비교해 공통 103개 facility를 선별했고, 1st 데이터는 243,039행에서 233,810행, 2nd 데이터는 229,953행에서 205,804행으로 필터링했습니다. 이후 mdr/gc top 1/2/3, 설계압력, 설계온도, MRT, 사용기간을 예측 feature로 정리했습니다.",
    result:
      "전열관별 predict_max_depth_rate를 예측하는 Task2 데이터 기반을 만들었고, 유지보수가 필요한 시점 예측과 후차수 검사 전열관 후보군 선정으로 이어지는 문제 해결 흐름을 만들었습니다.",
    evidence: ["공통 facility 103개", "233,810 / 205,804 rows", "predict_max_depth_rate", "후차수 후보군"],
  },
  {
    label: "TASK 3",
    title: "AI 수명평가 서비스 전환 / 검사계획 추천",
    problem:
      "Task1과 Task2의 모델 결과가 노트북 실험이나 단일 리포트에 머무르면 현장에서 수명평가 결과를 반복적으로 조회하고 검사계획에 반영하기 어렵습니다.",
    approach:
      "AI로 전환하는 수명평가라는 기대효과를 실제 사용 흐름으로 만들기 위해, 모델 결과를 API, 시각화, 결과 리포트, LLM 검사계획 추천으로 나누어 제품화 축을 설계했습니다.",
    execution:
      "vis_main, vis_life, vis_exchanger_module, vis_tube_module 4개 모듈을 정리하고, LifeEvaluator의 SK/GS/DeepAI 결과 확인, Weibull/Gumbel 분석, FastAPI `/iris-lifetime` 계열 엔드포인트, Phase1 30% + Phase2 70% 기반 검사계획 로직을 연결했습니다.",
    result:
      "수명평가 모델을 현장 사용 가능한 DEEP-NDT 수명평가 시스템 흐름으로 확장했고, 저작권 등록, API 프로토타입, LLM 검사계획까지 이어지는 제품화 경험으로 정리할 수 있게 되었습니다.",
    evidence: ["4 modules", "FastAPI", "LLM 검사계획", "저작권 등록"],
  },
];

const lifespanDeepDive = [
  {
    label: "00",
    title: "기존 수명평가 방식의 한계 정리",
    problem:
      "기존 방식은 잔여수명 공식과 고객사별 판단 기준이 산출물 곳곳에 흩어져 있어, 같은 데이터라도 어떤 기준으로 평가했는지 재현하고 설명하기 어려웠습니다.",
    approach:
      "먼저 기존 수명평가가 어떤 입력값을 쓰고 어떤 공식으로 결과를 내는지 분해했습니다. 검사두께, 교체두께, 부식율, MRT 같은 핵심 변수를 분리하고 기준별 차이를 비교 가능한 형태로 정리했습니다.",
    execution:
      "잔여수명 공식 `(검사두께 - 교체두께) / 부식율`, MRT 계산, 결함 깊이/두께 기반 판단 흐름을 코드와 문서 기준으로 재정리하고 이후 1/2/3 방식의 baseline 역할로 연결했습니다.",
    result:
      "기존 수명평가를 단순 과거 방식이 아니라 비교 가능한 기준선으로 만들었고, AI 모델 결과가 기존 기준과 어떻게 다른지 설명할 수 있는 자소서용 문제 해결 재료가 생겼습니다.",
    essayPoint:
      "저는 먼저 기존 수명평가가 왜 설명과 재현이 어려운지 확인하고, 공식을 기준선으로 재정리해 이후 AI 모델의 개선 효과를 비교할 수 있는 출발점을 만들었습니다.",
    evidence: ["잔여수명 공식", "MRT", "기존 방식 baseline"],
  },
  {
    label: "01",
    title: "수명평가 1: SK 방식",
    problem:
      "고객사 기준이 반영된 방식은 현장 의사결정에는 익숙하지만, 모델/서비스 안에서는 기준이 명시적으로 분리되지 않으면 결과 해석이 모호해질 수 있었습니다.",
    approach:
      "SK 방식은 AI 예측 결과와 섞지 않고 독립된 평가 branch로 두어, 고객사 기준 기반 결과와 AI 기반 결과를 같은 입력에서 비교할 수 있게 접근했습니다.",
    execution:
      "LifeEvaluator 안에서 방식별 입력, 계산, 출력 구조를 분리하고, 결과 리포트와 시각화에서 어떤 방식으로 계산된 값인지 드러나도록 수명평가 흐름을 모듈화했습니다.",
    result:
      "고객사 기준을 유지하면서도 코드상 재현성과 비교 가능성을 확보했고, 현장 기준과 AI 모델 기준을 함께 설명할 수 있는 평가 체계를 만들었습니다.",
    essayPoint:
      "SK 방식에서는 현장 기준을 그대로 존중하되, 서비스 안에서 독립된 평가 흐름으로 분리해 고객사 기준과 AI 결과를 혼동하지 않도록 만들었습니다.",
    evidence: ["LifeEvaluator", "고객사 기준", "비교 가능성"],
  },
  {
    label: "02",
    title: "수명평가 2: GS 방식과 극치해석",
    problem:
      "단순 평균이나 단일 회귀선만으로는 열교환기 전열관의 위험 구간을 설명하기 어렵고, 극단 결함이나 심각도 높은 구간을 보수적으로 해석할 필요가 있었습니다.",
    approach:
      "GS 방식은 Gumbel/Weibull 기반 EVA(극치해석)와 연결해, 설비 전체의 평균적 예측이 아니라 위험도가 큰 결함 구간을 평가하는 기준으로 정리했습니다.",
    execution:
      "Gumbel·Weibull 극치해석, 결함 깊이 분포, MRT 계산 흐름을 수명평가 로직과 연결하고, 전열관/모듈 단위 시각화에서 위험 구간을 설명할 수 있도록 구성했습니다.",
    result:
      "수명평가가 단순 점수 산출이 아니라 위험 구간 탐지와 유지보수 우선순위 판단으로 이어지게 되었고, 특허의 위험구간 탐지 서사와도 연결되는 근거가 생겼습니다.",
    essayPoint:
      "GS 방식에서는 평균값 중심 평가의 한계를 보완하기 위해 극치해석 관점을 연결했고, 위험 구간을 설명 가능한 유지보수 판단 근거로 바꾸는 데 집중했습니다.",
    evidence: ["Gumbel/Weibull", "EVA", "위험구간"],
  },
  {
    label: "03",
    title: "수명평가 3: DEEPAI AI 예측 방식",
    problem:
      "기존 공식 기반 방식만으로는 운영환경 변수와 facility별 편차를 충분히 반영하기 어려웠고, 초기 AI 모델은 데이터 분할과 feature 정의 문제로 성능이 불안정했습니다.",
    approach:
      "facility 단위 hold-out으로 데이터 누수를 줄이고, 운영환경 변수를 포함한 57개 feature와 33,300개 샘플을 기준으로 AI 예측 방식을 기존 방식과 분리해 검증했습니다.",
    execution:
      "FT-Transformer를 학습·최적화하고 샘플링 로직을 보강했으며, 37개 facility와 273 epoch early stopping 기준으로 모델 성능을 검증했습니다.",
    result:
      "R2 0.966, RMSE 2.57, MAE 1.99, MAPE 4.24%를 달성해 기존 방식의 한계를 보완하는 AI 기반 수명평가 방식으로 제시할 수 있게 되었습니다.",
    essayPoint:
      "DEEPAI 방식에서는 모델 구조보다 먼저 데이터 분할과 feature 정의 문제를 의심했고, facility 단위 검증과 FT-Transformer 최적화를 통해 신뢰 가능한 성능으로 회복시켰습니다.",
    evidence: ["FT-Transformer", "R2 0.966", "57 features", "33,300 samples"],
  },
  {
    label: "04",
    title: "제품화: API, 시각화, LLM 검사계획",
    problem:
      "수명평가 모델이 좋아도 현장에서 쓰려면 파일 업로드, 결과 조회, 리포트, 검사계획 추천까지 연결되어야 했습니다.",
    approach:
      "모델 결과를 노트북이나 단발성 스크립트에 두지 않고 FastAPI 엔드포인트, 시각화 모듈, LLM 검사계획으로 나누어 제품 흐름으로 설계했습니다.",
    execution:
      "`POST /iris-lifetime`, upload/result/file/llm 엔드포인트를 설계하고, vis_main, vis_life, vis_exchanger_module, vis_tube_module 시각화와 Phase1 30% + Phase2 70% 기반 검사계획 로직을 연결했습니다.",
    result:
      "DEEP-NDT 수명평가 시스템 저작권 등록과 API 프로토타입으로 이어졌고, 모델 성능·설명·현장 사용성을 한 흐름으로 보여줄 수 있는 대표 프로젝트가 되었습니다.",
    essayPoint:
      "마지막으로 수명평가 결과를 API, 시각화, LLM 검사계획으로 연결해 모델이 실험 결과에 머무르지 않고 현장 사용 흐름으로 이어지게 만들었습니다.",
    evidence: ["FastAPI", "LLM Inspection Plan", "4 visualization modules", "저작권 등록"],
  },
];

const certificates = [
  {
    name: "ADsP",
    fullName: "데이터분석 준전문가",
    date: "2024.09.06",
    note: "데이터 분석 기본기와 통계/모델링 기반 역량을 검증한 자격입니다.",
  },
  {
    name: "SQLD",
    fullName: "SQL 개발자",
    date: "2025.04.05",
    note: "데이터 모델링, SQL 작성, 관계형 데이터베이스 이해를 검증한 자격입니다.",
  },
];

const awards = [
  {
    name: "2024 동남권 LINC3.0 글로벌 창업 노마드 캠프 우수상",
    team: "Keepu",
    date: "2024.08.28 - 2024.08.31",
    note: "창업 아이디어를 팀 단위로 구체화하고 발표해 우수상으로 인정받았습니다.",
  },
];

const standards = [
  {
    name: "ISO 29110",
    title: "소프트웨어 품질체계 / KTL 마크 인증 대응",
    organization: "울산정보산업진흥원(UIPA) 사업 · KTL 품질체계/마크 인증 대응",
    context:
      "울산정보산업진흥원(UIPA) 사업 과제와 KTL 마크 인증 대응 맥락에서, 소규모 조직·프로젝트의 소프트웨어 개발 프로세스와 산출물 체계를 점검하는 표준으로 학습·문서화했습니다.",
    contribution:
      "시스템 설명서, 개발 산출물, 품질관리 관점의 문서 정합성을 확인하고 AI 제품이 모델 결과뿐 아니라 개발 프로세스 기준으로도 설명될 수 있도록 정리했습니다.",
    evidence: ["UIPA 사업", "UIPA 품질체계진단", "KTL 마크 인증 대응", "ISO 29110"],
  },
  {
    name: "ISO/IEC 23894",
    title: "AI 위험관리",
    organization: "TTA AI 신뢰성 인증 대응",
    context:
      "AI 시스템의 위험 식별, 평가, 통제, 모니터링 관점에서 TTA 신뢰성 인증 대응 문서를 구성할 때 기준으로 활용했습니다.",
    contribution:
      "위험관리계획서와 위험관리대장을 작성하고 결함 미검출 원인, XAI 근거, 환경 영향 모니터링 항목을 인증 요구사항과 연결했습니다.",
    evidence: ["TTA", "위험관리계획서", "위험관리대장", "AI 신뢰성"],
  },
  {
    name: "ISO 9712 / NDT",
    title: "비파괴검사 도메인 이해",
    organization: "DEEPAI IRIS/NDT 솔루션 개발 업무",
    context:
      "IRIS 검사 데이터와 열교환기 전열관 결함 도메인을 이해하기 위해 NDT 표준과 결함 판정 맥락을 함께 학습했습니다.",
    contribution:
      "결함 유형, 검사 데이터 흐름, 현장 QA 이슈를 모델링과 문서화 과정에 반영해 단순 이미지 모델이 아닌 도메인 기반 AI 시스템으로 설명했습니다.",
    evidence: ["IRIS", "NDT", "현장 QA"],
  },
];

function PortfolioApp() {
  const [active, setActive] = useState("about");
  const [query, setQuery] = useState("");
  const companyPathPrefix = window.location.pathname.startsWith("/resume") ? "/resume/" : "/";

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
              <h2>Problem Solving Stories</h2>
              <p>각 경험을 문제, 접근, 실행, 결과로 분해해 판단 과정과 성과가 바로 보이도록 정리했습니다.</p>
            </div>
            <span>Problem → Result</span>
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
                  <strong>{entry.context}</strong>
                </div>

                <div className="problem-strip">
                  <span>Core Problem</span>
                  <p>{entry.problem}</p>
                </div>

                <div className="pasr-grid">
                  <StoryStep label="Approach" title="어떻게 접근했나" text={entry.approach} />
                  <StoryStep label="Execution" title="무엇을 실행했나" text={entry.execution} />
                  <StoryStep label="Result" title="어떤 결과를 냈나" text={entry.result} highlight />
                </div>

                <div className="impact-row" aria-label={`${entry.title} outcomes`}>
                  {entry.impact.map((item) => (
                    <span key={item}>{item}</span>
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

        <section className="section-panel lifespan-section" id="lifespan">
          <div className="section-heading">
            <div>
              <h2>IRIS-Life Deep Dive</h2>
              <p>수명평가 TASK 1/2/3과 평가 방식 1/2/3을 분리해, 과제 구조와 기술 방법론이 각각 보이도록 정리했습니다.</p>
            </div>
            <span>task track → method track</span>
          </div>

          <div className="task-track" aria-label="IRIS-Life task breakdown">
            <div className="track-label">
              <span>Project Tasks</span>
              <strong>수명평가 과제 흐름</strong>
            </div>
            <div className="task-list">
              {lifespanTasks.map((task) => (
                <article className="task-card" key={task.label}>
                  <div className="task-head">
                    <span>{task.label}</span>
                    <h3>{task.title}</h3>
                  </div>
                  <div className="task-body">
                    <StoryStep label="Problem" title="무엇이 문제였나" text={task.problem} />
                    <StoryStep label="Approach" title="어떻게 접근했나" text={task.approach} />
                    <StoryStep label="Execution" title="무엇을 실행했나" text={task.execution} />
                    <StoryStep label="Result" title="어떤 결과를 냈나" text={task.result} highlight />
                  </div>
                  <div className="impact-row compact" aria-label={`${task.label} evidence`}>
                    {task.evidence.map((evidence) => (
                      <span key={evidence}>{evidence}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="track-label method-track-label">
            <span>Evaluation Methods</span>
            <strong>기존 수명평가와 방식 1/2/3</strong>
          </div>

          <div className="lifespan-map">
            {lifespanDeepDive.map((item) => (
              <article className="lifespan-card" key={item.title}>
                <div className="lifespan-head">
                  <span>{item.label}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.essayPoint}</p>
                  </div>
                </div>

                <div className="problem-strip lifespan-problem">
                  <span>Problem</span>
                  <p>{item.problem}</p>
                </div>

                <div className="lifespan-grid">
                  <StoryStep label="Approach" title="어떻게 접근했나" text={item.approach} />
                  <StoryStep label="Execution" title="무엇을 실행했나" text={item.execution} />
                  <StoryStep label="Result" title="어떤 결과를 냈나" text={item.result} highlight />
                </div>

                <div className="impact-row compact" aria-label={`${item.title} evidence`}>
                  {item.evidence.map((evidence) => (
                    <span key={evidence}>{evidence}</span>
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

        <section className="section-panel archive-section" id="archive">
          <div className="section-heading">
            <div>
              <h2>SSD Project Archive</h2>
              <p>/Volumes/SSD에서 확인한 추가 프로젝트를 문제 해결 경험으로 정리했습니다.</p>
            </div>
            <span>additional experience</span>
          </div>

          <div className="archive-grid">
            {projectArchive.map((project) => (
              <article className="archive-card" key={project.title}>
                <div className="archive-head">
                  <span>{project.period}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.source}</p>
                  </div>
                </div>

                <div className="archive-steps">
                  <StoryStep label="Problem" title="무엇이 문제였나" text={project.problem} />
                  <StoryStep label="Approach" title="어떻게 접근했나" text={project.approach} />
                  <StoryStep label="Result" title="어떤 결과를 냈나" text={project.result} highlight />
                </div>

                <div className="tag-row archive-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-panel company-index-section" id="company-pages">
          <div className="section-heading">
            <div>
              <h2>Company Tailored Resume</h2>
              <p>채용공고의 요구사항과 실제 경험을 연결한 회사별 이력서·자기소개서입니다.</p>
            </div>
            <span>7 applications</span>
          </div>

          <div className="company-index-grid">
            {companyProfiles.map((profile) => (
              <a
                className="company-index-card"
                href={`${companyPathPrefix}${encodeURIComponent(profile.slug)}`}
                key={profile.slug}
              >
                <span>{profile.company.slice(0, 2)}</span>
                <div>
                  <strong>{profile.company}</strong>
                  <p>{profile.role}</p>
                </div>
                <ArrowSquareOut size={16} weight="bold" />
              </a>
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
                  <StoryStep label="Problem" title="무엇이 문제였나" text={study.problem} />
                  <StoryStep label="Approach" title="어떻게 접근했나" text={study.action} />
                  <StoryStep label="Result" title="결과는 무엇인가" text={study.result} highlight />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-panel standards-section" id="standards">
          <div className="section-heading">
            <div>
              <h2>Standards & Quality System</h2>
              <p>업무 중 학습하고 문서화에 반영한 품질·신뢰성 표준 대응 경험입니다.</p>
            </div>
            <span>quality</span>
          </div>

          <div className="standards-grid">
            {standards.map((standard) => (
              <article className="standard-card" key={standard.name}>
                <div className="standard-head">
                  <span>{standard.name}</span>
                  <div>
                    <h3>{standard.title}</h3>
                    <p>{standard.organization}</p>
                  </div>
                </div>
                <div className="standard-body">
                  <div>
                    <strong>Context</strong>
                    <p>{standard.context}</p>
                  </div>
                  <div>
                    <strong>Contribution</strong>
                    <p>{standard.contribution}</p>
                  </div>
                </div>
                <div className="impact-row compact">
                  {standard.evidence.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-panel credentials-section" id="certificates">
          <div className="section-heading">
            <div>
              <h2>Certificates</h2>
              <p>데이터 분석과 SQL 역량을 검증한 자격증입니다.</p>
            </div>
            <span>verified</span>
          </div>

          <div className="credential-grid">
            {certificates.map((certificate) => (
              <article className="credential-card" key={certificate.name}>
                <span>{certificate.date}</span>
                <h3>{certificate.name}</h3>
                <strong>{certificate.fullName}</strong>
                <p>{certificate.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-panel credentials-section" id="awards">
          <div className="section-heading">
            <div>
              <h2>Awards</h2>
              <p>팀 프로젝트와 창업 아이디어 실행력을 인정받은 수상 이력입니다.</p>
            </div>
            <span>achievement</span>
          </div>

          <div className="award-list">
            {awards.map((award) => (
              <article className="award-card" key={award.name}>
                <div>
                  <span>{award.date}</span>
                  <h3>{award.name}</h3>
                  <strong>Team {award.team}</strong>
                </div>
                <p>{award.note}</p>
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
              <span>데이터사이언스 · 딥러닝과 인공지능 · ISO 29110/23894 업무 연계 학습</span>
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

export function App() {
  const profile = getCompanyProfile(window.location.pathname);
  return profile ? <CompanyResume profile={profile} /> : <PortfolioApp />;
}

function StoryStep({ label, title, text, highlight = false }) {
  return (
    <div className={highlight ? "story-step highlight" : "story-step"}>
      <span>{label}</span>
      {title ? <strong>{title}</strong> : null}
      <p>{text}</p>
    </div>
  );
}
