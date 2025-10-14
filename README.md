# Tourista - Tourist Guidance QR-based App

A React + Vite application for tourist guidance using QR codes.

## Features

- QR code scanning for tourist information
- Interactive tourist guidance
- Modern, responsive UI with Tailwind CSS

## Development

### Prerequisites

- Node.js (version 20 or higher recommended)
- npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/Priya394/Tourista-Tourist-Guidance-QR-based-App.git
cd Tourista-Tourist-Guidance-QR-based-App
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Build the project for deployment

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

### Automatic Deployment

1. Push your changes to the `main` branch:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

2. GitHub Actions will automatically build and deploy your app
3. Your site will be available at: `https://priya394.github.io/Tourista-Tourist-Guidance-QR-based-App/`

### Manual Setup (One-time)

To enable GitHub Pages for this repository:

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under "Build and deployment", select:
   - **Source**: GitHub Actions
4. The workflow will automatically deploy on the next push to `main`

## Technologies Used

- **React** - UI framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **html5-qrcode** - QR code scanning library
- **qrcode.react** - QR code generation
- **React Router** - Client-side routing
- **ESLint** - Code linting

## Project Structure

```
Tourista-Tourist-Guidance-QR-based-App/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment workflow
├── src/                      # Source files (to be added)
├── index.html                # HTML entry point
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── package.json              # Project dependencies
└── README.md                 # This file
```

## License

This project is open source and available under the MIT License.

