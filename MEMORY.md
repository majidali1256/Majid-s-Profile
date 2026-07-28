# Project Memory: Majid's Profile (Portfolio)

## 📌 Project Overview
This is a personal portfolio website for **Majid Ali** (Web, Android & ML Developer). It showcases professional details, educational background, technical skills, and featured projects.

## 🛠️ Tech Stack & Architecture
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons (Fa, Si sets)
- **Deployment**: Configured as a static web app (`npm run build`).

## 📁 Key File Structure
- `src/App.jsx`: The main single-page application component. It contains the entire UI structure including the Nav, Hero, About, Education, Skills, Projects, and Contact form sections.
- `src/assets/`: Directory containing static assets.
- `package.json`: Contains project metadata, dependencies, and Vite scripts.

## 🔄 Recent Important Changes
1. **`ProjectCard` Image Support**: 
   - Modified the `ProjectCard` component in `src/App.jsx` to accept an optional `image` prop. 
   - If an image is provided, it replaces the colored placeholder block with an `<img>` tag.
   - *Example implementation in code:*
     ```jsx
     const ProjectCard = ({ color, title, description, tags, link, image }) => (
       ...
       {image ? (
         <div className="h-40 w-full overflow-hidden">
           <img src={image} alt={title} className="w-full h-full object-cover" />
         </div>
       ) : (
         <div className={`h-40 ${color} flex items-center justify-center relative`}>
           <div className="w-12 h-12 bg-white rounded-full shadow-lg"></div>
         </div>
       )}
       ...
     ```
2. **Projects Grid Order**: 
   - Ordered exactly as requested:
     1. Hostel Hub WebApp
     2. Hostel Hub Mobile App
     3. A.N-Capital
     4. Dezan Digitizing
     5. Health Tracker App
     6. Dast Store
     7. Majid's Profile 1
     8. FlowFit
3. **Enhanced Tech Tags**: 
   - All projects have been updated with comprehensive technology tags covering frontend, backend, databases, and frameworks.

## 📝 Pending Tasks / Future Work
- **Add Original Project Images**: Replace the colored placeholder blocks with real project screenshots.
  - **How to do this**: 
    1. Drop your images into the `src/assets/` folder.
    2. Import them at the top of `src/App.jsx` (e.g., `import myImage from './assets/my-image.png';`).
    3. Pass the imported variable to the respective `ProjectCard` using the `image` prop (e.g., `image={myImage}`).
- **Contact Form Backend**: The contact form currently uses a `mailto:` link fallback. It may need to be wired up to a proper backend or a service like Formspree in the future.
