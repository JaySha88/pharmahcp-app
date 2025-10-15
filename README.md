# Next.js + Supabase Application

A modern Next.js 15 application with Supabase authentication, TypeScript, Tailwind CSS, and Radix UI components, ready for deployment on Vercel.

## Features

- ⚡ **Next.js 15** with App Router and Turbopack
- 🔐 **Supabase Authentication** with SSR support
- 🎨 **Tailwind CSS** for styling
- 🧩 **Radix UI** components with shadcn/ui
- 📱 **Responsive Design** with mobile-first approach
- 🔒 **Type Safety** with TypeScript
- 🚀 **Vercel Ready** deployment configuration
- 🛡️ **Security** with environment variable management

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Database**: Supabase
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Authentication**: Supabase Auth
- **Type Safety**: TypeScript
- **Deployment**: Vercel

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Vercel account (for deployment)

## Getting Started

### 1. Clone and Install Dependencies

```bash
cd nextjs-app
npm install
```

### 2. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your project URL and anon key
3. Copy the service role key from the same page

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# Optional: Database URL for direct database connections
DATABASE_URL=your_database_url
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication routes
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── auth/              # Authentication components
│   └── ui/                # Reusable UI components
├── lib/                   # Utility functions and configurations
│   ├── supabase/          # Supabase client configurations
│   ├── types/             # TypeScript type definitions
│   └── utils.ts           # Utility functions
└── middleware.ts          # Next.js middleware for auth
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run preview` - Build and start production server locally

## Authentication

The application includes:

- **Sign In/Sign Up** pages with Supabase Auth
- **Server-side authentication** with middleware
- **Protected routes** that redirect unauthenticated users
- **Sign out** functionality

### Authentication Flow

1. Users can sign up or sign in on `/login` and `/signup` pages
2. Middleware protects routes and redirects to login if not authenticated
3. Server components can access user data via Supabase client
4. Client components use the browser client for auth operations

## Deployment on Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-github-repo-url
git push -u origin main
```

### 2. Deploy on Vercel

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_APP_URL` (set to your Vercel domain)
3. Deploy!

### Environment Variables for Production

Make sure to set these in your Vercel project settings:

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key
- `NEXT_PUBLIC_APP_URL` - Your production domain (e.g., `https://your-app.vercel.app`)

## Supabase Setup

### 1. Database Schema

You can extend the database schema in `src/lib/types/database.ts` to match your Supabase tables.

### 2. Row Level Security (RLS)

Enable RLS on your tables and create policies as needed:

```sql
-- Example: Enable RLS on a users table
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Example: Policy for users to see their own data
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid() = id);
```

### 3. Authentication Settings

In your Supabase dashboard:
1. Go to Authentication > Settings
2. Configure your site URL (your Vercel domain for production)
3. Add redirect URLs for your app

## Customization

### Adding New Pages

Create new pages in the `src/app/` directory following the App Router structure.

### Adding Components

- Place reusable components in `src/components/`
- Use the existing UI components as a foundation
- Follow the established patterns for styling with Tailwind CSS

### Database Integration

- Update `src/lib/types/database.ts` with your Supabase schema
- Use the Supabase client in server and client components
- Implement proper error handling and loading states

## Security Best Practices

- ✅ Environment variables are properly configured
- ✅ Supabase RLS is recommended for data protection
- ✅ Middleware handles authentication
- ✅ TypeScript provides type safety
- ✅ Input validation with Zod (ready to implement)

## Troubleshooting

### Common Issues

1. **Environment variables not loading**: Make sure `.env.local` is in the root directory
2. **Supabase connection issues**: Verify your URL and keys are correct
3. **Build errors**: Run `npm run type-check` to identify TypeScript issues
4. **Authentication not working**: Check your Supabase auth settings and redirect URLs

### Getting Help

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

## License

This project is open source and available under the [MIT License](LICENSE).