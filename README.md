# Noa Rabin Cohen Portfolio

This repository contains the source code for my personal portfolio website, developed with **React**, **TypeScript**, and **Vite**.  
It’s deployed to production via **GitHub Pages** and uses **Vercel** for staging / preview deployments.

## Technology Stack


* **React 19 + React DOM 19**
* **TypeScript 5.9**
* **Vite 7** (dev server + production builds)
* **Tailwind CSS 4 **(styling) + PostCSS / Autoprefixer
* **lucide-react** and **react-icons** for UI icons
* **gh-pages** for GitHub Pages deployment
* **Node.js 20+** (per engines)

## Development Commands

| Command | Description |
|----------|--------------|
| `yarn dev` | Launch the development server |
| `yarn build` | Run type checking and generate a production build |
| `yarn preview` | Serve the production build locally for verification |
| `yarn deploy` | Deploy the production build to GitHub Pages |

## Deployment

Production builds are generated in the `dist/` directory and published to the `gh-pages` branch using the `gh-pages` package.  
The live version of the site is available at [https://noarabincohen.com](https://noarabincohen.com).

Staging builds are deployed through Vercel from feature branches and pull requests, providing a preview URL for QA and SEO/social sharing checks.
