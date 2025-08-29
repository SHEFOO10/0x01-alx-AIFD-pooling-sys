"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/providers";
import { supabase } from "@/lib/supabaseClient";


export default function Header() {
  const { user, loading, refreshUser } = useAuth();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    refreshUser();
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            ALX Polly
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/polls" className="text-sm font-medium hover:text-primary">
              Browse Polls
            </Link>
            {user && (
              <Link href="/polls/create" className="text-sm font-medium hover:text-primary">
                Create Poll
              </Link>
            )}
          </nav>
          
          <div className="flex items-center space-x-4">
            {loading ? (
              <div className="h-8 w-20 bg-gray-200 rounded animate-pulse" />
            ) : user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">
                  Welcome, {user.name || user.email}
                </span>
                <Button variant="outline" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/auth/login">
                  <Button variant="outline">Log In</Button>
                </Link>
                <Link href="/auth/signup">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
