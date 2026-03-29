import type { ProjectItem } from "@/data/types";

export const projectItems: ProjectItem[] = [
  {
    slug: "honours-research-optical-flow-reliability-prediction",
    title: "Honours Research: Optical Flow Reliability Prediction",
    shortTitle: "Optical Flow Reliability",
    summary: "Machine learning pipeline for predicting optical flow reliability from motion metadata in TFRecord-based video datasets.",
    tags: ["Research", "Machine Learning", "Computer Vision"],
    tech: ["Python", "PyTorch", "TensorFlow", "OpenCV"],
    image: "/images/optical-flow-car.jpg",
    imageAlt: "Motion and scene-analysis visual for the optical flow reliability research project.",
    heroEyebrow: "Honours research",
    sections: [
      {
        title: "Context",
        paragraphs: [
          "Built as an honours research project focused on predicting whether optical flow outputs would remain reliable across video frame pairs.",
          "The workflow used TFRecord-based datasets and engineered motion features from camera translation, rotation, and object dynamics."
        ]
      },
      {
        title: "Build",
        paragraphs: [
          "Implemented data ingestion and decoding workflows for frame pairs and ground-truth flow, then evaluated both classical and deep optical flow estimators.",
          "Computed per-pixel Endpoint Error (EPE) to derive sequence-level reliability targets and trained predictive models on top of those measurements."
        ],
        bullets: [
          "TensorFlow, PyTorch, OpenCV, scikit-learn, and Streamlit",
          "Linear Regression, Random Forest, and Gradient Boosting experiments",
          "Streamlit demo with flow visualizations, EPE heatmaps, and analysis tools"
        ]
      },
      {
        title: "Takeaway",
        paragraphs: [
          "Achieved strong predictive performance with R² up to 0.90 while keeping the work grounded in measurable reliability targets."
        ]
      }
    ]
  },
  {
    slug: "movie-recommender-system",
    title: "Movie Recommender System",
    shortTitle: "Movie Recommender",
    summary: "Recommendation pipeline combining content-based filtering, clustering, and collaborative filtering on user-item rating data.",
    tags: ["Recommender Systems", "Machine Learning", "Data"],
    tech: ["Python", "NumPy", "scikit-learn", "Surprise"],
    image: "/images/movie-recommendation.jpg",
    imageAlt: "Cinematic movie-themed visual for the recommender system project.",
    heroEyebrow: "Recommendation system",
    sections: [
      {
        title: "Context",
        paragraphs: [
          "Built as a movie recommendation system that combined collaborative signals with clustering and content-aware similarity scoring.",
          "The project emphasized measurable ranking quality and efficient data representation."
        ]
      },
      {
        title: "Build",
        paragraphs: [
          "Developed a recommendation pipeline over user-item rating data and engineered a sparse CSR utility matrix for memory-efficient matrix factorization.",
          "Implemented masked-entry validation by holding out 10 percent of known interactions to evaluate recommendation quality more realistically."
        ],
        bullets: [
          "Content-based filtering, clustering, and collaborative filtering",
          "KMeans and DBSCAN for user and item segmentation",
          "Cosine similarity, Jaccard similarity, SVD, MSE, Precision@k, and MRR"
        ]
      },
      {
        title: "Takeaway",
        paragraphs: [
          "A practical recommender build grounded in evaluation, efficient matrix operations, and clearer user-preference modeling."
        ]
      }
    ]
  },
  {
    slug: "pcsurmesure-role-based-mobile-ordering-system",
    title: "PCSurMesure: Role-Based Mobile Ordering System",
    shortTitle: "PCSurMesure",
    summary: "Multi-role Android ordering application with authentication, order lifecycle management, and API-driven backend workflows.",
    tags: ["Android", "Mobile", "Backend"],
    tech: ["Java", "Android Studio", "Supabase", "REST APIs"],
    image: "/images/backend-hotels.jpg",
    imageAlt: "Mobile ordering and backend systems visual for the PCSurMesure project.",
    heroEyebrow: "Mobile ordering system",
    sections: [
      {
        title: "Context",
        paragraphs: [
          "Built as a multi-role Android application for customized PC order management.",
          "The project centered on role-aware workflows, backend integration, and maintainable mobile architecture."
        ]
      },
      {
        title: "Build",
        paragraphs: [
          "Implemented role-based authentication, order lifecycle management, and permission-controlled workflows for different user roles.",
          "Replaced SQLite with Supabase and integrated API-driven backend interactions to support a more connected application architecture."
        ],
        bullets: [
          "Java Android application built in Android Studio",
          "Supabase-backed persistence and REST API interaction",
          "MVC architecture for maintainability and scalability"
        ]
      },
      {
        title: "Takeaway",
        paragraphs: [
          "A clean mobile systems project tying authentication, backend communication, and maintainable application structure together."
        ]
      }
    ]
  }
];
