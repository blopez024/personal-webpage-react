# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

# Personal Webpage (React)

This is a personal portfolio website built with React and Vite. It showcases your profile, projects, and contact information in a modern, responsive design.

## Features

- **Home**: Introduction and profile picture
- **Header**: Navigation bar for easy access to sections
- **Projects**: Display of your work and achievements
- **Contact**: Email and other contact details
- **Assets**: SVG icons, profile image, and resume PDF

## Project Structure

```
frontend/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── assets/
│   └── components/
│       ├── Contact.jsx
│       ├── Header.jsx
│       ├── Home.jsx
│       └── Projects.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/) (or use npm/yarn)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/blopez024/personal-webpage-react.git
    cd personal-webpage-react/frontend
    ```
2.  Install dependencies:
    ```bash
    pnpm install
    # or
    npm install
    # or
    yarn install
    ```

### Running Locally

Start the development server:

```bash
pnpm run dev
# or
npm run dev
# or
yarn dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
pnpm run build
# or
npm run build
# or
yarn build
```

The output will be in the `dist/` folder.

## Customization

- Update your profile info, projects, and contact details in the respective components in `src/components/`.
- Replace assets in `src/assets/` as needed.

## License

This project is licensed under the MIT License.
