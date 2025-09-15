# 🤖 LLMs Database

A modern React dashboard for exploring and comparing Large Language Models (LLMs). Built with TypeScript, React, and Parcel for fast development and optimal performance.

## ✨ Features

- **Interactive Dashboard**: Clean, modern interface to browse LLM models
- **Tier-based Organization**: Models grouped by performance tiers
- **Vendor Mapping**: Visual organization by AI providers
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Fast Performance**: Optimized with React hooks and efficient rendering

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/herferjos/llms-database.git
cd llms-database

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:1234` to view the application.

### Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   └── ClusterCard.tsx  # Model cluster display
├── data/               # Data sources
│   └── llms.ts         # LLM models data
├── lib/                # Utility functions
│   ├── groupByTier.ts  # Tier grouping logic
│   └── vendorMap.ts    # Vendor mapping
├── App.tsx             # Main application
├── main.tsx            # Entry point
├── styles.css          # Global styles
└── types.ts            # TypeScript definitions
```

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Parcel 2
- **Styling**: CSS3 with modern features
- **Development**: Hot reload, TypeScript checking

## 📄 Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build in `dist/`
- `npm run preview` - Serve production build locally

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
