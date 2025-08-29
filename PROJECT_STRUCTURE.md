# PollApp Project Structure

This document outlines the folder structure and architecture of the Next.js polling application.

## 📁 Root Structure

alx-polly/
├── app/                    # Next.js 13+ app directory
├── components/            # Reusable UI components
├── lib/                  # Utility functions and services
├── public/               # Static assets
├── node_modules/         # Dependencies
├── package.json          # Project configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # Project documentation

```
alx-polly/
├── app/                    # Next.js 13+ app directory
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts
│   ├── auth/
│   │   ├── signin/
│   │   │   └── page.tsx
│   │   └── signup/
│   │       └── page.tsx
│   ├── components/
│   │   ├── auth/
│   │   │   ├── SignInForm.tsx
│   │   │   └── SignUpForm.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Navigation.tsx
│   │   ├── polls/
│   │   │   ├── CreatePollForm.tsx
│   │   │   └── PollCard.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       └── textarea.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── polls.ts
│   │   ├── types.ts
│   │   └── utils.ts
│   ├── page.tsx
│   ├── polls/
│   │   ├── create/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   └── providers.tsx
├── components/            # (empty or legacy, see /app/components)
├── lib/                  # (empty or legacy, see /app/lib)
├── public/               # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── node_modules/         # Dependencies
├── package.json          # Project configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── postcss.config.mjs    # PostCSS configuration
├── env.example           # Example environment variables
└── README.md            # Project documentation
```

## 🏗️ App Directory Structure

### `/app`
- **`layout.tsx`** - Root layout component
- **`page.tsx`** - Home page
- **`globals.css`** - Global styles
- **`providers.tsx`** - Context providers

### `/app/auth`
- **`signin/page.tsx`** - Sign in page
- **`signup/page.tsx`** - Sign up page

### `/app/polls`
- **`page.tsx`** - Browse all polls
- **`create/page.tsx`** - Create new poll

### `/app/api`
- **`auth/[...nextauth]/route.ts`** - NextAuth API routes
- **`polls/route.ts`** - Polls API endpoints


### `/app/components`
- **`ui/`** - Shadcn UI components (button, card, form, input, label, textarea)
- **`auth/`** - Authentication components (SignInForm, SignUpForm)
- **`polls/`** - Poll-related components (PollCard, CreatePollForm)
- **`layout/`** - Layout components (Footer, Header, Navigation)

## 🧩 Component Architecture


### UI Components (`/app/components/ui`)
- `button.tsx`, `card.tsx`, `form.tsx`, `input.tsx`, `label.tsx`, `textarea.tsx`

### Authentication Components (`/app/components/auth`)
- `SignInForm.tsx`, `SignUpForm.tsx`

### Poll Components (`/app/components/polls`)
- `PollCard.tsx`, `CreatePollForm.tsx`

### Layout Components (`/app/components/layout`)
- `Footer.tsx`, `Header.tsx`, `Navigation.tsx`

## 🔧 Services & Utilities (`/app/lib`)

### **`types.ts`**
- TypeScript interfaces for:
  - `User` - User data structure
  - `Poll` - Poll data structure
  - `PollOption` - Poll option data
  - `Vote` - Voting data
  - `CreatePollData` - Poll creation payload


### **`auth.ts`**
- Authentication utility functions:
  - `signIn()` - User authentication
  - `signUp()` - User registration
  - `signOut()` - User logout
  - `getCurrentUser()` - Get current user session
  - `isAuthenticated()` - Check auth status
  - `authOptions` - NextAuth.js options for authentication (added for NextAuth integration)

### **`polls.ts`**
- Poll management services:
  - `getPolls()` - Fetch all polls
  - `getPollById()` - Get specific poll
  - `createPoll()` - Create new poll
  - `voteOnPoll()` - Submit vote
  - `getUserPolls()` - Get user's polls
  - `deletePoll()` - Remove poll
  - `searchPolls()` - Search polls

### **`utils.ts`**
- Utility functions:
  - `cn()` - Class name merging utility

## 🎨 Styling & Design

### **Tailwind CSS**
- Utility-first CSS framework
- Custom color scheme and components
- Responsive design utilities

### **Shadcn/ui**
- Pre-built component library
- Consistent design system
- Accessible components

## 🔐 Authentication Flow

1. **Sign Up**: User creates account with name, email, password
2. **Sign In**: User authenticates with email/password
3. **Session Management**: JWT-based authentication
4. **Protected Routes**: Authentication-required pages

## 📊 Poll Management

1. **Create Poll**: Users can create polls with multiple options
2. **Vote**: Users can vote on active polls
3. **View Results**: Real-time poll results and statistics
4. **Manage**: Poll creators can edit/delete their polls

## 🚀 Getting Started

1. Install dependencies: `npm install`
2. Set up environment variables (see `.env.example`)
3. Run development server: `npm run dev`
4. Build for production: `npm run build`

## 🔮 Future Enhancements

- [ ] Real-time voting with WebSockets
- [ ] Poll sharing and social features
- [ ] Advanced analytics and charts
- [ ] Mobile app development
- [ ] API rate limiting and security
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] File uploads for poll images
- [ ] Email notifications
- [ ] Poll categories and tags
- [ ] User profiles and avatars

## 📝 Development Notes

- Uses Next.js 13+ App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Shadcn/ui for components
- Mock data for development
- Ready for database integration
- Responsive design
- Accessibility focused
