# AgriSense — AI-Powered Crop Health Monitoring Platform

AgriSense is a modern, production-grade [Next.js](https://nextjs.org) application designed to empower farmers through AI-driven image-based crop disease diagnosis, yield estimation, and actionable reporting.

Built using [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) with the App Router and TypeScript.

---

## Getting Started

Clone the repository and install dependencies:

```
npm install
```
Run the development server:

```
npm run dev
```

Then open your browser at http://localhost:3000 to view the app.

## Features
1. Upload crop images for instant disease detection
2. AI-powered yield estimation
3. Timeline-based crop health tracking
4. Downloadable PDF diagnosis reports
5. Visual landing experience with 3D animations and parallax effects
6. Farmer testimonials and interactive UI

## Project Structure
* `app/`: Route-based layout with page.tsx, layout.tsx, and nested pages
* `components/`: Reusable UI and animation components (carousel, parallax, hero, etc.)
* `public/`: Static assets including images and videos
* `styles/`: Global Tailwind styles and custom CSS

## Tech Stack
* Next.js 14
* TypeScript
* Tailwind CSS
* Framer Motion for animations
* @tabler/icons-react for clean iconography
* @react-three/fiber + drei for 3D visualizations
* Chart.js for graphic insights

##  Development Notes
* Fonts are loaded and optimized using next/font, currently using Geist.
* All components are built with responsiveness in mind. Mobile-first design supported.
* Use `npm run build` and `npm start` to build and preview the production app.

## Project Demo
View the web app deployed on Vercel here:
https://agri-sense-platform.vercel.app/
