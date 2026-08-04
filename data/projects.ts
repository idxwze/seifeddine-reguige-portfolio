import type { FeaturedProject, ProjectItem } from "@/data/types";

/* ── Featured projects — Work section (Organic design, 4 items) ──────── */
export const featuredProjects: FeaturedProject[] = [
  {
    index: "01",
    title: "Optical Flow Reliability Predictor",
    shortDescription:
      "Predicts optical-flow reliability from scenario metadata before running expensive vision models.",
    visual: "photo",
    photoSrc: "/images/optical-flow-reliability-cover.png",
    photoAlt: "Optical flow reliability predictor cover",
    repoHref: "https://github.com/idxwze/optical-flow-reliability-metadata.git",
  },
  {
    index: "02",
    title: "PropertyOps",
    shortDescription:
      "Cross-platform rental management app with role-based access and live dashboards.",
    visual: "house",
    // NOTE: repo link is a best-guess placeholder — confirm actual URL
    repoHref: "https://github.com/idxwze/property-ops",
  },
  {
    index: "03",
    title: "PCSurMesure",
    shortDescription:
      "Multi-role Android ordering app with Supabase-backed auth and order workflows.",
    visual: "box",
    // NOTE: repo link is a best-guess placeholder — confirm actual URL
    repoHref: "https://github.com/idxwze/PCSurMesure",
  },
  {
    index: "04",
    title: "Movie Recommender System",
    shortDescription:
      "Content-based, clustering, and collaborative filtering compared on The Movies Dataset.",
    visual: "film",
    repoHref:
      "https://github.com/idxwze/Movie-Recommendation-Analysis-Using-The-Movies-Dataset.git",
  },
];

/* ── Full project detail data (kept for future detail pages) ─────────── */
export const projectItems: ProjectItem[] = [
  {
    slug: "optical-flow-reliability-predictor",
    title: "Predicting Optical Flow Reliability from Motion Scenario Metadata",
    shortTitle: "Optical Flow Reliability Predictor",
    summary:
      "R² ≈ 0.80 on the classical estimator vs 0.69 on RAFT, Spearman ≈ 0.85 — predicted from scenario metadata alone, before any expensive vision model runs.",
    tags: ["Applied ML", "Computer Vision", "Research"],
    tech: ["Python", "TensorFlow", "PyTorch", "OpenCV", "scikit-learn", "Streamlit"],
    image: "/images/optical-flow-reliability-cover.png",
    imageAlt: "Optical flow reliability predictor cover.",
    heroEyebrow: "CSI4900 course project",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This CSI4900 project explores whether optical-flow reliability can be predicted from metadata alone rather than image pixels.",
          "The goal was to forecast expected flow error before a heavy estimator is trusted or run across every scene at deployment time.",
        ],
      },
      {
        title: "Pipeline",
        paragraphs: [
          "Implemented TFRecord ingestion, video and quantized ground-truth flow decoding, metadata feature extraction, and tabular dataset generation for three targets: reliability_score, epe_mean, and epe_mean_raft.",
        ],
        bullets: [
          "TFRecord scenarios → decode video and quantized ground-truth flow → extract motion metadata features → build CSV tables → generate targets",
          "Linear Regression, Random Forest, and Gradient Boosting with random row splits, scenario-holdout, and 10-repeat scenario-holdout evaluation",
          "Saved artifact pipeline for metrics, predictions, plots, preview GIFs, and record-level Streamlit inspection",
        ],
      },
      {
        title: "Results",
        paragraphs: [
          "Random Forest reached R² = 0.7987 ± 0.1147 and Spearman = 0.8466 ± 0.0604 on Farneback EPE, and R² = 0.6935 ± 0.1057 with Spearman = 0.8505 ± 0.0599 on RAFT EPE.",
        ],
      },
    ],
    highlights: [
      "End-to-end optical-flow reliability pipeline from TFRecord ingestion to interactive Streamlit demo",
      "Metadata-based prediction across three targets including estimator-specific Farneback and RAFT EPE labels",
      "Random Forest reached R² = 0.7987 ± 0.1147 on Farneback EPE and R² = 0.6935 ± 0.1057 on RAFT EPE",
    ],
    links: [
      { label: "Repository", href: "https://github.com/idxwze/optical-flow-reliability-metadata.git" },
      { label: "Report", href: "https://github.com/idxwze/optical-flow-reliability-metadata/blob/main/REPORT.md" },
      { label: "Results", href: "https://github.com/idxwze/optical-flow-reliability-metadata/blob/main/RESULTS.md" },
    ],
    supportingMedia: [
      { src: "/images/optical-flow-reliability-metrics.png", alt: "Metrics dashboard showing MAE, RMSE, R-squared, Spearman.", label: "Metrics explorer" },
      { src: "/images/optical-flow-reliability-inspector.png", alt: "Three-panel Streamlit inspection view.", label: "Flow and heatmap inspector" },
      { src: "/images/optical-flow-reliability-preview.gif", alt: "Animated scenario preview GIF.", label: "Scenario preview GIF" },
    ],
  },
  {
    slug: "movie-recommender-system",
    title: "Movie Recommendation Analysis Using The Movies Dataset",
    shortTitle: "Movie Recommender System",
    summary:
      "Built and compared multiple recommendation approaches on The Movies Dataset, including content-based methods, clustering, and collaborative filtering with matrix factorization.",
    tags: ["Recommender Systems", "Machine Learning", "Data Analysis"],
    tech: ["Python", "pandas", "NumPy", "scikit-learn", "Matplotlib"],
    image: "/images/movie-recommender-cover.png",
    imageAlt: "Movie recommender system cover.",
    heroEyebrow: "CSI4142 Assignment 4",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This notebook-based project explores movie recommendation from several angles: metadata similarity, clustering, content-based recommendation, and collaborative filtering with matrix factorization.",
        ],
      },
      {
        title: "Methods",
        paragraphs: [
          "Cleaned movie metadata, extracted structured features, compared similarity measures, ran KMeans and DBSCAN clustering, and implemented collaborative filtering with SGD-trained matrix factorization.",
        ],
        bullets: [
          "movie metadata + ratings ingestion → cleaning → exploratory analysis → clustering → content-based → collaborative filtering → holdout evaluation → Top-N recommendations",
          "Used movies_metadata.csv, ratings_small.csv, and links_small.csv from The Movies Dataset",
          "Compared latent dimensions k = 10 and k = 30 using RMSE and MAE",
        ],
      },
      {
        title: "Results",
        paragraphs: [
          "k = 10 achieved RMSE = 0.9090 and MAE = 0.6997 on a 10% Gold Standard holdout. Generated personalized Top-10 recommendations for selected users.",
        ],
      },
    ],
    highlights: [
      "Multi-method recommendation combining similarity analysis, clustering, content-based filtering, and collaborative filtering",
      "Matrix factorization with SGD evaluated using a 10% Gold Standard holdout: RMSE 0.9090, MAE 0.6997",
      "Generated personalized Top-10 movie recommendations from real user ratings data",
    ],
    links: [
      { label: "Repository", href: "https://github.com/idxwze/Movie-Recommendation-Analysis-Using-The-Movies-Dataset.git" },
    ],
    supportingMedia: [
      { src: "/images/movie-recommender-evaluation.png", alt: "Collaborative filtering evaluation comparing k=10 and k=30.", label: "Matrix factorization evaluation" },
      { src: "/images/movie-recommender-top10.png", alt: "Top-10 personalized movie recommendations.", label: "Top-10 recommendation output" },
      { src: "/images/movie-recommender-clustering.png", alt: "KMeans clustering plot.", label: "KMeans clustering" },
    ],
  },
  {
    slug: "pcsurmesure-role-based-mobile-ordering-system",
    title: "PCSurMesure: Role-Based Mobile Ordering System",
    shortTitle: "PCSurMesure",
    summary:
      "Multi-role Android ordering application with authentication, order lifecycle management, and Supabase-backed API-driven backend workflows.",
    tags: ["Android", "Mobile", "Backend"],
    tech: ["Java", "Android Studio", "Supabase", "REST APIs"],
    image: "/images/movie-recommendation.jpg",
    imageAlt: "Mobile ordering and backend systems visual.",
    heroEyebrow: "Mobile ordering system",
    sections: [
      {
        title: "Context",
        paragraphs: [
          "Built as a multi-role Android application for customized PC order management, with role-aware workflows, backend integration, and maintainable mobile architecture.",
        ],
      },
      {
        title: "Build",
        paragraphs: [
          "Implemented role-based authentication, order lifecycle management, and permission-controlled workflows. Replaced SQLite with Supabase and integrated API-driven backend interactions.",
        ],
        bullets: [
          "Java Android application built in Android Studio",
          "Supabase-backed persistence and REST API interaction",
          "MVC architecture for maintainability and scalability",
        ],
      },
    ],
    links: [
      // NOTE: PCSurMesure repo link is a best-guess placeholder — confirm actual URL
      { label: "Repository", href: "https://github.com/idxwze/PCSurMesure" },
    ],
  },
];
