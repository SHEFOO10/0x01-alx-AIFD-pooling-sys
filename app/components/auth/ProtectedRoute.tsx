"use client"

import { useAuth } from "@/providers";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/auth/signin");
    }
  }, [user, loading, router]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (!user) return null;
  return <>{children}</>;
}
