export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  datasetScale: string;
  architecture: string[];
  pipeline: string[];
  systemDesign: string[];
  challenges: string[];
  metrics: string[];
  screenshots: string[];
  stack: string[];
  links: {
    github?: string;
    demo?: string;
  };
};

export const roles = [
  "AI/ML Engineer",
  "Applied AI Engineer",
  "Backend ML Systems Engineer",
  "Data Scientist",
];

export const projects: Project[] = [
  {
    slug: "fda-maude-platform",
    title: "FDA MAUDE Data Processing Platform",
    summary:
      "ETL platform that ingests FDA MAUDE reports, validates data quality, and powers analytics with traceable lineage.",
    problem:
      "FDA MAUDE data arrives as noisy, irregular text with inconsistent fields. The goal was to normalize ingestion, enforce validation, and enable reliable downstream analysis.",
    datasetScale:
      "Millions of device event records, daily incremental updates, 50+ schema fields with strict validation rules.",
    architecture: [
      "Ingestion workers fetch daily MAUDE archives",
      "Schema validation + retry queue with structured logging",
      "PostgreSQL storage + materialized views for analytics",
      "Audit trail for every transform and rejection",
    ],
    pipeline: [
      "Download → Parse → Normalize → Validate",
      "Deduplicate → Enrich → Store",
      "Aggregate → Analytics-ready views",
    ],
    systemDesign: [
      "FastAPI ingestion service for control plane",
      "Celery workers for parallel ETL",
      "Redis-backed task queue and caching",
      "PostgreSQL with partitioned tables",
    ],
    challenges: [
      "Handling malformed entries without breaking ingestion",
      "Ensuring idempotent pipeline re-runs",
      "Keeping validation latency under 500ms per batch",
    ],
    metrics: [
      "99.2% valid record rate after normalization",
      "40% reduction in reprocessing time",
      "3x faster analytics query response",
    ],
    screenshots: [
      "Ingestion monitoring dashboard with validation status",
      "Schema compliance report with error breakdown",
      "Analytics view of device event trends",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Celery", "Docker"],
    links: {
      github: "https://github.com/Devarsh009",
    },
  },
  {
    slug: "ai-document-agent",
    title: "AI Document Processing Agent",
    summary:
      "RAG + agentic workflow that extracts structured insights from large PDF corpora and answers queries with citations.",
    problem:
      "Teams needed accurate, auditable answers across large document sets without manual triage or brittle keyword search.",
    datasetScale:
      "Thousands of PDFs, average 40-80 pages each, indexed for vector search and chunk-level retrieval.",
    architecture: [
      "Document loader → chunking → embedding pipeline",
      "Vector store retrieval + hybrid reranking",
      "Agentic orchestration for tool selection",
      "Citations and validation against sources",
    ],
    pipeline: [
      "Ingest → Clean → Chunk → Embed",
      "Retrieve → Rerank → Generate",
      "Validate → Cite → Respond",
    ],
    systemDesign: [
      "FastAPI inference gateway",
      "LangGraph orchestration for agent steps",
      "FAISS vector index with metadata filters",
      "Batch ingestion for cost efficiency",
    ],
    challenges: [
      "Reducing hallucinations with citation constraints",
      "Balancing recall vs. precision in retrieval",
      "Latency under 1.5s for common queries",
    ],
    metrics: [
      "+28% answer accuracy with reranking",
      "1.3s median response time",
      "98% source-attributed responses",
    ],
    screenshots: [
      "Document ingestion pipeline with chunking status",
      "Agent trace timeline showing tool calls",
      "Response panel with citation highlights",
    ],
    stack: ["Python", "LangGraph", "FAISS", "FastAPI", "PyTorch"],
    links: {
      github: "https://github.com/Devarsh009",
    },
  },
  {
    slug: "finops-portal",
    title: "FinOps Cost Optimization Portal",
    summary:
      "Analytics portal that tracks cloud spend, flags anomalies, and recommends cost-saving actions.",
    problem:
      "Engineering teams lacked visibility into cost spikes and underutilized resources across cloud services.",
    datasetScale:
      "Daily billing exports, 12+ services, multi-account aggregation with trend analysis.",
    architecture: [
      "ETL layer transforms billing exports",
      "Anomaly detection pipeline + rule-based alerts",
      "Dashboard API with cached aggregates",
      "Role-based access for team reporting",
    ],
    pipeline: [
      "Extract billing data → Normalize → Aggregate",
      "Detect anomalies → Notify → Report",
      "Surface recommendations → Track savings",
    ],
    systemDesign: [
      "FastAPI backend with async endpoints",
      "Redis caching for dashboards",
      "PostgreSQL analytics tables",
      "Dockerized deployment",
    ],
    challenges: [
      "Reducing noisy alerts for short-lived spikes",
      "Keeping dashboards under 200ms p95",
      "Aligning cost tags across teams",
    ],
    metrics: [
      "25% faster anomaly detection",
      "18% monthly savings identified",
      "200ms p95 dashboard latency",
    ],
    screenshots: [
      "Cost anomaly heatmap by service",
      "Optimization recommendations view",
      "Monthly savings report dashboard",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    links: {
      github: "https://github.com/Devarsh009",
    },
  },
];

export const researchPosts = [
  {
    slug: "rag-optimization-playbook",
    title: "RAG Optimization Playbook",
    summary:
      "A practical blueprint for improving retrieval quality, reranking, and source attribution in RAG systems (aka making answers stop hallucinating politely).",
    date: "2024-12-10",
    readTime: "7 min",
    content: [
      "RAG systems live or die by retrieval quality. I start with query analysis, then tune chunking and embeddings before touching the generator. If the retriever is bad, the generator just makes the wrong answer sound confident — which is not the vibe.",
      "A hybrid retriever (BM25 + dense) with reranking boosts recall and precision. I prefer a lightweight cross-encoder when latency allows and fall back to score fusion when it does not.",
      "For production, I enforce citation grounding and evaluation loops. Answer quality only improves when you track attribution coverage and feedback signals, not when you add more prompt magic.",
      "If you’re not logging false positives, you’re just collecting nice-looking metrics. Ask me how I know.",
    ],
    bullets: [
      "Chunk by semantic boundaries, not fixed tokens.",
      "Use metadata filters to shrink the candidate pool.",
      "Rerank for high precision and cite evidence spans.",
      "Measure latency and coverage on every release.",
      "Don’t ship without a negative set (unless you enjoy support tickets).",
    ],
  },
  {
    slug: "vector-search-tradeoffs",
    title: "Vector Search Tradeoffs for Production",
    summary:
      "How to choose between ANN libraries, index sizes, and metadata filters when latency matters and budgets are pretending to be infinite.",
    date: "2024-11-03",
    readTime: "6 min",
    content: [
      "Vector search is a balance between recall, latency, and storage. Index choice and dimensionality directly impact infrastructure cost, which is a polite way of saying it can get expensive fast.",
      "For production, I prefer offline index builds, strict metadata filtering, and incremental refreshes that avoid downtime. Live rebuilds are great until they aren’t.",
      "When recall must stay high, I tune the search depth and cache hot queries aggressively to reduce median latency.",
      "If you don’t measure drift, your index will quietly get worse while everyone blames the model.",
    ],
    bullets: [
      "Measure recall with real queries, not synthetic ones.",
      "Filter before similarity search to cut cost.",
      "Cache high-frequency queries and results.",
      "Monitor index drift and re-embed on schedule.",
      "Don’t overfit benchmarks — your users won’t read them.",
    ],
  },
  {
    slug: "scaling-fastapi-inference",
    title: "Scaling FastAPI for Inference",
    summary:
      "Concurrency patterns, batching strategies, and caching to keep inference under 1s without setting the server on fire.",
    date: "2024-10-15",
    readTime: "5 min",
    content: [
      "Low-latency inference depends on batching, proper async IO, and fast serialization. I treat the API as a performance-critical system — because it is.",
      "Caching is non-negotiable for repeated queries. Redis with TTLs and request deduplication reduces p95 latency materially.",
      "I profile CPU/GPU utilization and scale horizontally using containerized workers behind a thin API gateway.",
      "Also: if you don’t cap payload sizes, someone will inevitably try to upload the internet.",
    ],
    bullets: [
      "Batch requests when the model allows it.",
      "Use async endpoints and avoid blocking calls.",
      "Cache embeddings and frequent responses.",
      "Instrument p50/p95 latency for regressions.",
      "Protect your API from creative input sizes.",
    ],
  },
  {
    slug: "evaluating-llm-reliability",
    title: "Evaluating LLM Reliability (Without the Drama)",
    summary:
      "A framework for measuring hallucinations, attribution quality, and regressions that actually matter in production.",
    date: "2025-01-05",
    readTime: "6 min",
    content: [
      "Reliability starts with defining failure modes. I separate factual errors, source mismatches, and refusal gaps before any scoring begins.",
      "A/B tests are useful, but only if you track error types. Otherwise you’ll ship a regression with better vibes.",
      "Evaluation sets need real user questions, messy inputs, and adversarial cases. Synthetic prompts are fine for sanity checks — not for decisions.",
      "If your model can’t say “I don’t know,” it will invent the rest. That’s not intelligence; that’s confidence.",
    ],
    bullets: [
      "Track error categories, not just overall scores.",
      "Use real production queries in evaluation.",
      "Citations must be checked for alignment.",
      "Reject answers that lack evidence.",
    ],
  },
  {
    slug: "rag-guardrails",
    title: "RAG Guardrails That Don’t Ruin UX",
    summary:
      "Guardrails should reduce risk without making users wait 12 seconds for a refusal.",
    date: "2024-09-02",
    readTime: "5 min",
    content: [
      "Guardrails are a UX problem as much as a safety problem. Users don’t care why it failed — they care that it did.",
      "I add lightweight checks: source overlap, confidence thresholds, and per-domain safety filters. Heavy policy checks happen asynchronously.",
      "If you block too aggressively, people will route around your system. If you don’t block at all, support will route around you.",
    ],
    bullets: [
      "Keep blocking deterministic and explainable.",
      "Fail fast and offer alternatives.",
      "Log every refusal reason.",
      "Don’t punish normal user behavior.",
    ],
  },
];

export const experience = [
  {
    role: "AI Engineering Intern",
    company: "Neujin Solutions",
    period: "2024",
    highlights: [
      "Built FDA MAUDE ETL pipelines with retries, validation, and structured logging.",
      "Designed RAG pipelines to answer compliance and safety questions with citations.",
      "Hardened ingestion with idempotent workflows and audit trails.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Yo4GIS",
    period: "2023",
    highlights: [
      "Developed FastAPI services powering geospatial workflows.",
      "Introduced Redis caching and reduced response latency by 35%.",
      "Improved performance with async IO and query optimization.",
    ],
  },
];

export const skillsMatrix = [
  {
    group: "ML + LLM",
    skills: [
      { name: "PyTorch", level: 85 },
      { name: "NLP", level: 82 },
      { name: "RAG Systems", level: 88 },
      { name: "LangGraph", level: 80 },
    ],
  },
  {
    group: "Data Engineering",
    skills: [
      { name: "ETL Pipelines", level: 86 },
      { name: "SQL", level: 84 },
      { name: "Data Validation", level: 82 },
      { name: "Analytics", level: 78 },
    ],
  },
  {
    group: "Backend",
    skills: [
      { name: "FastAPI", level: 88 },
      { name: "Redis", level: 80 },
      { name: "PostgreSQL", level: 82 },
      { name: "Docker", level: 78 },
    ],
  },
  {
    group: "Cloud + Tools",
    skills: [
      { name: "AWS", level: 72 },
      { name: "GitHub Actions", level: 70 },
      { name: "Linux", level: 76 },
      { name: "Observability", level: 74 },
    ],
  },
];

export const contactLinks = {
  email: "mailto:devarshradadia2580@gmail.com",
  github: "https://github.com/Devarsh009",
  linkedin: "https://www.linkedin.com/in/devarsh-radadia-79220b251",
  calendly: "",
};
