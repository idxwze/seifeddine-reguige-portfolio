# Portfolio Content — Source of Truth

Last reconciled: July 2026, against `Seifeddine-Reguige-Resume-2.pdf` and the live LinkedIn profile.
Everything below is canonical. If the site disagrees with this file, the site is wrong.

---

## Identity

- **Name:** Seifeddine Reguige
- **Location:** Ottawa, Ontario, Canada
- **Email:** sregu043@uottawa.ca
- **Phone:** [REDACTED — do not commit to public repo]
- **LinkedIn:** https://www.linkedin.com/in/seifeddine-reguige-4164bb251
- **GitHub:** _(fill in)_
- **Portfolio:** _(this site)_

**Headline / tagline:**
> Computer Science @ uOttawa | Backend & Systems | Cybersecurity | Networking | Data/ML

---

## About / Bio

This is the text currently live on LinkedIn. The site should say the same thing in the same voice.

Computer Science student at the University of Ottawa, graduating August 2026 (BSc, Co-op), specializing in backend development, systems programming, networking, and applied machine learning. I enjoy breaking down complex technical problems, building reliable systems, and understanding how software and networks behave under real-world constraints.

My experience spans Linux systems, backend engineering (Java, C++, Python), database design, network protocols (TCP/IP, DNS, DHCP, VLANs), packet analysis, and cybersecurity tooling (Suricata, Wireshark, pfSense, Splunk). I have built projects in C++, Java, Go, PHP, SQL, and Python, including recommender systems, computer vision pipelines, and Android applications.

I currently work as a Research Assistant / Data Scientist with the Faculty of Social Sciences at uOttawa, contributing to a secure digital research infrastructure for sensitive public health and policy data — covering legacy data migration, cleaning, normalization, metadata documentation, and the preparation of analysis-ready datasets.

**Short version** (for a hero section, meta description, or card):
> Computer Science student at uOttawa graduating August 2026. Backend, systems, networking, and applied ML. Currently building secure research data infrastructure at the Faculty of Social Sciences.

---

## Education

**University of Ottawa** — Ottawa, ON
**Bachelor of Science in Computer Science (Co-op)**
Jan 2023 – Aug 2026 (expected)

- Dean's Honour List (three semesters)
- Relevant coursework: Artificial Intelligence, Data Science, Databases, Operating Systems, Software Engineering, Data Structures and Algorithms, Computer Networks, Secure Systems Design, Advanced C++

---

## Experience

### Research Assistant / Data Scientist
**University of Ottawa — Faculty of Social Sciences** · Ottawa, ON
Summer 2026 – Present

- Contributing to the development of a secure digital research infrastructure for sensitive public health and policy research data, supporting collection, organization, analysis, and controlled data management workflows.
- Supporting legacy data migration and dataset structuring through CSV exports, data cleaning, normalization, metadata documentation, quality validation, and preparation of analysis-ready datasets.
- Collaborating with researchers, technical staff, and infrastructure teams to define data models, document variables, organize scholarly resources, and support future relational database integration.
- Applying computer science and data science practices to improve data governance, secure storage, research documentation, and future analysis and visualization workflows.

### Exam Proctor
**University of Ottawa — Adapted Exams Centre** · Ottawa, ON
Jan 2026 – Present

- Invigilate accommodated exams for students with disabilities, applying individual accommodation plans exactly as approved and upholding university academic integrity policies.
- Prepare rooms and adaptive equipment ahead of student arrival, conduct regular room walks, and provide time reminders across concurrent exam sessions.
- Document irregularities through incident reports, affidavits, and contact error forms; escalate to coordinators in real time via Microsoft Teams.
- Maintain strict confidentiality protocols around sensitive accommodation information; support students in English and French.

### IT Support
**University of Ottawa — Adapted Exams Centre** · Ottawa, ON
Sept 2025 – Mar 2026

- Resolved 95% of technical issues across 100+ Linux/Windows workstations (OS failures, network outages, misconfigurations, account issues).
- Performed system hardening, environment validation, and pre-exam reliability checks to ensure secure and stable operation.
- Troubleshot DNS/DHCP issues, routing problems, corrupted profiles, and unauthorized processes.
- Created documentation covering incident procedures, baseline configurations, and system workflows.

### IT Systems Developer
**University of Ottawa — Faculty of Health Sciences** · Ottawa, ON
Oct 2024 – Apr 2025

- Developed and maintained web-based systems and data-driven interfaces using Java, PHP, JavaScript, HTML, and CSS for faculty platforms serving 10,000+ monthly users.
- Worked with backend logic, API interactions, and structured data processing to support research and operational workflows across academic and healthcare environments.
- Built responsive interfaces, optimized front-end performance through JavaScript refactoring and debugging, and improved usability for faculty members, staff, and researchers.
- Collaborated with stakeholders to gather requirements, troubleshoot technical issues, document workflows, and deliver maintainable system improvements.

### Volunteer Math & Computer Science Tutor
Independent · Ottawa, ON
Sept 2024 – Present

- One-on-one tutoring, adapting explanations to individual learning styles, in English and French.

---

## Projects

### Metadata-Based Optical Flow Reliability Predictor
`Python` `PyTorch` `TensorFlow` `OpenCV` `scikit-learn` `Streamlit`

Predicts whether optical flow will be reliable on a given scene from scenario metadata alone — before running expensive vision models.

- Built an end-to-end ML pipeline using TFRecord-based video datasets, with engineered motion features from camera and object dynamics.
- Evaluated Farneback and RAFT error labels using Endpoint Error (EPE), then compared Linear Regression, Random Forest, and Gradient Boosting under scenario-holdout validation.
- Created a Streamlit explorer with plots, exported media, flow visualizations, EPE heatmaps, and qualitative analysis tools for model interpretation.
- **Result:** Random Forest performed best overall — R² ≈ 0.80 on the classical estimator vs 0.69 on RAFT, Spearman ≈ 0.85.
- Honours project, with Nassym Ait Chitt.
- Repo: _(fill in)_

### Movie Recommender System
`Python` `Pandas` `NumPy` `scikit-learn` `Surprise`

- Built and compared content-based filtering, clustering, and collaborative filtering approaches on The Movies Dataset and user-item rating data.
- Engineered sparse utility matrices for memory-efficient matrix factorization; evaluated with SVD, MSE, Precision@K, and Mean Reciprocal Rank.
- Applied Cosine and Jaccard similarity with KMeans and DBSCAN to capture user/item preference patterns and reduce popularity bias.
- Repo: _(fill in)_

### PCSurMesure — Role-Based Mobile Ordering System
`Java` `Android Studio` `Supabase` `REST APIs`

- Led development of a multi-role Android ordering application with authentication, permission-controlled workflows, order lifecycle management, and API-driven backend interactions.
- Migrated local SQLite storage to Supabase and applied MVC architecture to improve scalability, maintainability, and separation of concerns.
- Repo: _(fill in)_

### Traveling Salesman Problem Heuristics Visualizer
`C++` `Python` `Flask` `Algorithms` `Data Visualization`

- Implemented and compared constructive and local-search heuristics — Nearest Neighbor, Insertion, Random, 2-OPT, and 3-OPT — for approximate TSP optimization.
- Built a lightweight visualization workflow to export city coordinates and route results, enabling comparison of path quality and algorithm behavior.
- Repo: _(fill in)_

---

## Technical Skills

**Languages:** Python, Java, JavaScript, PHP, SQL, Bash, HTML/CSS, XML

**Data Science & ML:** Pandas, NumPy, scikit-learn, PyTorch, TensorFlow, regression, clustering, recommender systems, feature engineering, model evaluation, data visualization

**Backend & Databases:** REST APIs, Supabase, SQLite, relational data modeling, ETL pipelines, CSV/JSON/XML processing, metadata documentation, data quality validation

**Software & Tools:** Git, GitHub, Docker, Streamlit, Jupyter, VS Code, Android Studio, Chrome DevTools, Linux/Unix, technical documentation

**Computer Vision:** OpenCV, optical flow, RAFT, Farneback, Endpoint Error (EPE), motion metadata analysis

**IT Support:** workstation troubleshooting, system configuration, assistive technology, monitoring software, hardware/software diagnostics

**Languages spoken:** English (fluent), French (fluent)

---

## Open items — resolve before publishing

**Resolved (July 2026):**
- Dean's Honour List: three semesters, dates omitted deliberately. Do not print year ranges anywhere.
- IT Support: Sept 2025 – Mar 2026, ended. Use the bullets in this file, not the ones currently on the site.

**Still open:**
1. **GitHub URLs.** Profile link plus four repo links. The site currently has zero GitHub links anywhere — highest-priority content gap.
2. **Resume file.** Confirm `/files/Seifeddine-Reguige-Resume.pdf` is the technical resume, and that the LinkedIn URL printed on it is `linkedin.com/in/seifeddine-reguige-4164bb251`.
3. **React** appears in the site's stack but not in the resume. Add to resume or drop from site.
4. **Go and Splunk** appear in the LinkedIn About but not the resume. Same decision.
5. **C++** appears in projects and the About text but not under resume "Languages." Add it.
6. **Positioning.** The site sells "Backend & Data/ML"; LinkedIn also claims Cybersecurity and Networking. Pick one story and use it in both places.
7. **CGPA 7.77/10** appears only on the site. Keep or drop deliberately.
8. **RA start month.** Resume says "Summer 2026"; LinkedIn says May 2026. Confirm and align.
