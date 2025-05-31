# AI Infographic Website

A modern, interactive web application that explains AI concepts, their real-world impact, and provides learning resources. This project serves as an educational resource for understanding artificial intelligence from basics to business applications.

## Project Overview

This website provides:
- Clear explanations of AI concepts (Artificial Intelligence, Large Language Models, AI Models, Model Context Protocol)
- Real-world impact of AI in various domains (Marketing, Customer Support, Software Development)
- Learning resources for different skill levels
- Internal company resources for AI adoption

## Technologies Used

This project is built with:

- [Vite](https://vitejs.dev/) - Fast build tool and development server
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Reusable UI components
- [React Router](https://reactrouter.com/) - Client-side routing
- [Lucide React](https://lucide.dev/) - Icon library
- [React Query](https://tanstack.com/query/latest) - Data fetching library

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or [bun](https://bun.sh/) package manager

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd ai-infographic
   ```

2. Install dependencies:
   ```sh
   npm install
   # or if using bun
   bun install
   ```

### Development

Start the development server:

```sh
npm run dev
# or
bun run dev
# or using make
make dev
```

This will start the development server at [http://localhost:8080](http://localhost:8080).

### Building for Production

Build the project for production:

```sh
npm run build
# or
bun run build
# or using make
make build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```sh
npm run preview
# or
bun run preview
# or using make
make preview
```

### Using the Makefile

This project includes a Makefile to simplify common development tasks:

```sh
# Install dependencies
make install

# Start development server
make dev

# Build for production
make build

# Preview production build
make preview

# Clean build artifacts
make clean

# Show all available commands
make help
```

For bun users, there are also bun-specific commands:

```sh
# Install dependencies with bun
make install-bun

# Start development server with bun
make dev-bun

# Build with bun
make build-bun
```

## Project Structure

```
ai-infographic/
├── .github/             # GitHub configuration
│   └── workflows/       # GitHub Actions workflows
│       └── deploy.yml   # Deployment workflow for GitHub Pages
├── public/              # Static assets
│   └── 404.html         # Custom 404 page for GitHub Pages
├── src/                 # Source code
│   ├── components/      # React components
│   │   ├── ui/          # UI components from shadcn/ui
│   │   ├── ConceptCard.tsx
│   │   ├── DomainImpactCard.tsx
│   │   └── Header.tsx
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   │   ├── Index.tsx    # Main page
│   │   └── NotFound.tsx # 404 page
│   ├── App.tsx          # Main application component
│   ├── App.css          # Global styles
│   ├── index.css        # Entry CSS file
│   └── main.tsx         # Entry point
├── .eslintrc.js         # ESLint configuration
├── Makefile             # Build automation
├── package.json         # Project dependencies and scripts
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Key Components

- **ConceptCard**: Displays AI concept information with title, icon, and details
- **DomainImpactCard**: Shows the impact of AI in different domains
- **Header**: Main navigation component

## Deployment

### Using Lovable

The easiest way to deploy this project is through the Lovable platform:

1. Open [Lovable](https://lovable.dev/projects/6c76c8e6-6ecd-48e3-99fa-696980a24054)
2. Click on Share -> Publish

### Manual Deployment

You can also deploy the built files to any static hosting service:

1. Build the project: `npm run build`
2. Deploy the contents of the `dist` directory to your hosting provider

Popular hosting options include:
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

### GitHub Pages Deployment

This project includes a GitHub Actions workflow for automatic deployment to GitHub Pages:

1. Push your changes to the `main` branch
2. The GitHub Action will automatically:
   - Build the project
   - Deploy it to the `gh-pages` branch
   - Make it available at `https://[your-username].github.io/ai-infographic/`

The workflow configuration is located in `.github/workflows/deploy.yml` and uses the Makefile for building the project, ensuring consistency between local development and CI/CD processes.

**Note**: This project is configured for GitHub Pages deployment with:

1. **HashRouter**: The project uses HashRouter for client-side routing, which is compatible with GitHub Pages. The URLs will have the format `https://[your-username].github.io/ai-infographic/#/route`.

2. **404 Redirect**: A custom 404.html page is included that redirects to the main application, allowing direct navigation to routes.

3. **Base Path**: The Vite configuration includes a conditional base path (`/ai-infographic/`) for production builds, ensuring assets are loaded correctly on GitHub Pages.

## Custom Domain

To connect a custom domain to your Lovable project:

1. Navigate to Project > Settings > Domains
2. Click Connect Domain
3. Follow the instructions to set up DNS records

For more information, see [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide).

## Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
