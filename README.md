# ALX Polly - Polling App

A modern, full-featured polling application built with Next.js 15, TypeScript, and Shadcn UI components.

## Features

- **User Authentication**: Secure sign-up and sign-in with NextAuth.js
- **Poll Creation**: Create custom polls with multiple options and expiration dates
- **Poll Voting**: Interactive voting system with real-time results
- **Responsive Design**: Modern UI built with Tailwind CSS and Shadcn components
- **TypeScript**: Full type safety throughout the application

## Project Structure

```
app/
├── components/
│   ├── auth/           # Authentication components
│   │   ├── SignInForm.tsx
│   │   └── SignUpForm.tsx
│   ├── layout/         # Layout components
│   │   └── Header.tsx
│   ├── polls/          # Poll-related components
│   │   ├── PollCard.tsx
│   │   └── CreatePollForm.tsx
│   └── ui/             # Shadcn UI components
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── lib/                 # Utility functions and configurations
│   ├── auth.ts         # NextAuth configuration
│   ├── types.ts        # TypeScript type definitions
│   └── utils.ts        # Utility functions
├── auth/                # Authentication pages
│   ├── signin/
│   └── signup/
├── polls/               # Poll-related pages
│   ├── page.tsx        # Browse polls
│   └── create/
├── api/                 # API routes
│   └── auth/           # NextAuth API endpoints
├── layout.tsx           # Root layout
├── page.tsx            # Home page
└── providers.tsx       # NextAuth session provider
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alx-polly
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Create .env.local file
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Key Components

### Authentication System
- **NextAuth.js**: Handles user authentication with JWT strategy
- **SignInForm**: User login form with email/password
- **SignUpForm**: User registration form with validation

### Poll Management
- **CreatePollForm**: Form for creating new polls with dynamic options
- **PollCard**: Displays individual polls with voting functionality
- **Types**: Comprehensive TypeScript interfaces for polls, users, and votes

### UI Components
- **Shadcn Components**: Pre-built, accessible UI components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode Support**: Built-in dark/light theme switching

## Development

### Adding New Features

1. **New Components**: Place in appropriate subdirectory under `components/`
2. **New Pages**: Create in the `app/` directory following Next.js 15 conventions
3. **New Types**: Add to `lib/types.ts`
4. **New API Routes**: Create in `app/api/` directory

### Styling

- **Tailwind CSS**: Utility-first CSS framework
- **CSS Variables**: Design system tokens for consistent theming
- **Component Variants**: Use `class-variance-authority` for component variants

### State Management

- **React Hooks**: Local component state
- **NextAuth**: Global authentication state
- **Future**: Consider Zustand or Redux for complex state management

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Build command: `npm run build`
- **Railway**: Supports Next.js out of the box
- **Docker**: Use the provided Dockerfile

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Roadmap

- [ ] Database integration (PostgreSQL/MySQL)
- [ ] Real-time updates with WebSockets
- [ ] Advanced poll analytics
- [ ] Social sharing features
- [ ] Mobile app (React Native)
- [ ] API rate limiting
- [ ] Advanced user roles and permissions
