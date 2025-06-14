
# Learning Support Provider Directory

A React-based web application that helps parents find qualified learning support professionals for children with learning difficulties. Built as part of the Habot Connect DMCC platform.

## Features

- **Provider Listing**: Browse all available learning support providers
- **Search & Filter**: Search by name, specialization, or location
- **Detailed Provider Pages**: View comprehensive information about each provider
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Simulated API**: Realistic API simulation with loading states and error handling

## Technologies Used

- **React 18** with TypeScript
- **Vite** for development and building
- **Tailwind CSS** for styling
- **Shadcn/ui** for component library
- **React Router** for navigation
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd learning-support-directory
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Building for Production

```bash
npm run build
```

The built application will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ProviderCard.tsx    # Provider listing card
│   ├── SearchBar.tsx       # Search functionality
│   ├── LoadingSpinner.tsx  # Loading indicator
│   └── ErrorMessage.tsx    # Error display
├── pages/              # Page components
│   ├── ProviderList.tsx    # Main listing page
│   ├── ProviderDetail.tsx  # Provider detail page
│   └── NotFound.tsx        # 404 page
├── services/           # API simulation
│   └── providerService.ts  # Provider data operations
├── data/              # Static data
│   └── providers.json     # Provider data
└── App.tsx            # Main application component
```

## API Simulation

The application uses simulated API calls that mimic real backend behavior:

- **Fetch Providers**: Loads all providers with simulated delay
- **Search Providers**: Filters providers by name, specialization, or location
- **Fetch Provider by ID**: Retrieves individual provider details
- **Error Handling**: Simulates network errors and loading states

## Key Features

### Provider Listing
- Grid layout responsive to different screen sizes
- Search functionality with real-time filtering
- Rating display with star visualization
- Specialization badges and location information

### Provider Details
- Comprehensive provider information
- Contact details with clickable email and phone links
- Professional rating and specialization display
- Responsive sidebar layout

### User Experience
- Loading states for all data operations
- Error handling with retry functionality
- Smooth transitions and hover effects
- Mobile-first responsive design

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

The project follows modern React best practices:
- TypeScript for type safety
- Functional components with hooks
- Proper error boundaries and loading states
- Responsive design principles
- Clean, maintainable code structure

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is part of Habot Connect DMCC assessment and is intended for evaluation purposes.
