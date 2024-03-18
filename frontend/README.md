## OPEN CAREER PROJECT - REACT + VITE DEVELOPMENT

## Table of contents

- [Overview](#overview)
    - [Introduction](#introduction)
- [Process + Development](#process-+-development)
    - [Install Node.js](#install-node.js)
    - [Creating a React App using Vite](#creating-react-app-using-vite)
- [Useful Resources](#useful-resources)
- [Author](#author)

## Introduction
- This section identifies the React code development. The templates have been modified to become reactive. 


## Process + Development

### Install Node.js
- Node.js installed on your computer. Download it from the official website.

### Creating a React App using Vite

```bash
# Terminal or command prompt.
npm create vite@latest
cd frontend
npm install
npm run dev -- --host

# Install tailwindcss via npm, and create your tailwind.config.js file.
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

npm install react-router-dom
npm i -D daisyui@latest
npm i @vercel/analytics

# Tailwind directives to your CSS.
@tailwind base;
@tailwind components;
@tailwind utilities;

# Add the paths to all of your template files in your tailwind.config.js file.
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F0B0B',
        secondary: '#FFBE42',
      },
    },
  },
  plugins: [require("daisyui")],
}

npm run dev -- --host
```

**Additional Directories + Files**

**vercel.json add in root directory**
```bash
#page to refresh without showing 404 error

{
  "rewrites": [
      {"source": "/(.*)", "destination": "/"}
  ]
}
```

**.env add in root directory**
```bash
#secure api urls and secret staff

VITE_API_CONTACT=https://url/

# in the react component
fetch(import.meta.env.VITE_API_CONTACT, {})
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Useful Resources
- [Tailwind Website](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Author
- Momanyi Brian - [Website](https://momanyi-brian-portfolio.vercel.app)
