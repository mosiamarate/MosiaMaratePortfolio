# Portfolio Website

A personal portfolio website designed to showcase my skills, projects, and experience. Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/) for a fast and modern development experience.

## 🚀 Features

- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.
- **Project Showcase:** Display of recent work and coding projects.
- **About Me:** Section detailing professional background and skills.
- **Contact:** Information on how to get in touch.
- **Fast Performance:** Powered by Vite's lightning-fast HMR and build tooling.

## 🛠️ Tech Stack

- **Frontend:** React
- **Build Tool:** Vite
- **Linting:** ESLint
- **Languages:** Javascript, CSS & HTML5

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mosiamarate/Portfolio_Website
   cd MosiaMaratePortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open http://localhost:5173 to view it in the browser.

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```text
Portfolio_Website/
├── public/
│   ├── documents/
|   |   └── MG_Marate_CV.pdf
│   └── index.html         
├── src/
│   ├── assets/ 
|   |   ├── Mosia-Logo-NoBg.png
|   |   ├── Mosia_Profile.webp
|   |   ├── Mosia_Profile_JPG.jpg
|   |   └── Mosia_Logo.webp               
│   │   
│   ├── components/          
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.jsx
│   │   │   └── Sidebar.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   │    
│   ├── sections/            
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Skills/
│   │   │   ├── SkillBar.jsx
│   │   │   ├── SkillBar.css
│   │   │   ├── Skills.jsx
│   │   │   └── Skills.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.css
│   │   ├── Game/
│   │   │   ├── Game.jsx
│   │   │   └── Game.css
│   │   └──Contact/
│   │       ├── Contact.jsx
│   │       └── Contact.css
│   ├── pages/ 
│   │   ├── Certifications/
│   │   │   ├── Certifications.jsx
│   │   │   ├── CertificationCard.jsx
│   │   │   ├── Certifications.css
│   │   │   └── useInView.js
│   │   ├── Education/
│   │   │   ├── Education.jsx
│   │   │   └── Education.css
│   │   │   
│   │   ├── Experience/
│   │   │   ├── Experience.jsx
│   │   │   └── Experience.css
│   │   │   
│   │   └─── Projectss/
│   │      ├── Projects.jsx
│   │      └── Projects.css 
│   ├── utils/
|   |   └──data/
|   |      └──data.js
│   ├── App.jsx              // Main application component
│   ├── main.jsx             // React entry point
│   └── index.css            // Global styles
├── .gitignore
├── package.json
└── vite.config.js
```
