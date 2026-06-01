# Clinton Asoh-Itambi — Portfolio

Personal portfolio website for Clinton Asoh-Itambi, AI/ML Engineer, Data Scientist and Researcher.

**Live site:** [clintonasoh.github.io](https://clintonasoh.github.io)

---

## Overview

A fully custom static portfolio built with vanilla HTML, CSS, and JavaScript — no frameworks or dependencies beyond Google Fonts and Font Awesome. Deployed via GitHub Pages.

The layout uses a **fixed left sidebar** (photo, name, stats, section nav, theme toggle) alongside a **scrollable right main content** panel, giving visitors instant access to key information while browsing all sections.

---

## Features

- **Two-panel layout** — fixed sidebar + scrollable content
- **Dark / Light mode** — toggle with localStorage persistence
- **Typing animation** — cycles through AI/ML Engineer → Data Scientist → Researcher
- **Scroll progress bar** — thin gradient bar at the top of the page
- **Animated counters** — stats count up on scroll into view
- **Project filter tabs** — filter by All / Deep Learning / Data Science / Research
- **Staggered reveal animations** — sections animate in as you scroll
- **Back-to-top button** — appears after scrolling 400px
- **Mobile responsive** — sidebar collapses to a slide-out panel via hamburger menu
- **Favicon** — logo shown in browser tab

---

## Sections

| Order | Section           | Description                                             |
| ----- | ----------------- | ------------------------------------------------------- |
| 1     | **About**         | Bio and professional summary                            |
| 2     | **Projects**      | 7 featured projects with filter tabs and hover overlays |
| 3     | **Skills**        | 6 skill categories with tag pills                       |
| 4     | **Experience**    | 8 professional roles on an interactive timeline         |
| 5     | **Publications**  | 2 peer-reviewed papers (IEEE & Springer)                |
| 6     | **Education**     | PhD, MSc, BEng                                          |
| 7     | **Certifications**| 8 professional certifications                           |
| 8     | **Contact**       | Contact info panel + message form                       |

---

## Projects

| Project                                                | Category      |
| ------------------------------------------------------ | ------------- |
| Neural Probability Models as Arithmetic Coding Engines | Research      |
| Stroke Detection in Brain CT Scans                     | Deep Learning |
| Recipe Website Traffic Prediction                      | Data Science  |
| Cyclistic Bike-Share Analysis                          | Data Science  |
| Climate Change and Impacts in Africa                   | Data Science  |
| CIFAR-10 Image Classifier                              | Deep Learning |
| Optimizing Sales Strategy for New Product Line         | Data Science  |

---

## Skills

- **Deep Learning & AI** — PyTorch, TensorFlow, Keras, Transfer Learning, Computer Vision, Neural Networks, ViTs, Mamba (SSMs), TorchIO / MONAI
- **Data Science** — Machine Learning, Statistical Analysis, Predictive Modeling, Feature Engineering, Model Evaluation
- **Programming** — Python, R, SQL, Scala, PySpark, HTML, CSS, JavaScript, Jupyter, Git, GitHub, Data Wrangling
- **Agentic AI** — LangChain, LangGraph, Function Calling, SFT, RLHF, Agent Architecture
- **MLOps & Tools** — Pandas & NumPy, Scikit-learn, Plotly, Matplotlib, Seaborn, Docker, FastAPI, Business Intelligence, Cloud Platforms
- **Research** — LaTeX, Literature Review, Experimental Design, Scientific Writing, Hypothesis Testing, Fact-Checking

---

## Tech Stack

| Layer         | Technology                                          |
| ------------- | --------------------------------------------------- |
| Markup        | HTML5                                               |
| Styling       | CSS3 (custom properties, flexbox, grid, animations) |
| Interactivity | Vanilla JavaScript (ES6+)                           |
| Fonts         | Google Fonts — Inter, Space Grotesk                 |
| Icons         | Font Awesome 6.5                                    |
| Hosting       | GitHub Pages                                        |

---

## Run Locally

```bash
git clone https://github.com/clintonasoh/clintonasoh.github.io.git
cd clintonasoh.github.io
python3 -m http.server 8000
# Visit http://localhost:8000
```

> Opening `index.html` directly in a browser also works since the site has no build step.

---

## File Structure

```text
.
├── index.html          # All markup and content
├── styles.css          # Styling, theming, responsive layout
├── script.js           # Interactivity (theme, typing, filters, animations)
├── logo.png            # Favicon and sidebar logo
├── profile-picture.png # Profile photo
└── projects/           # Project thumbnail images
```

---

## Deployment

The site publishes automatically from the `main` branch via GitHub Pages. To update:

```bash
git add .
git commit -m "Your message"
git push origin main
```

Changes are live within ~1 minute.

---

## Contact

Clinton Asoh-Itambi — [clintonasoh@gmail.com](mailto:clintonasoh@gmail.com)
