import { supabase } from "./supabaseClient";
import { User } from "./types";

// Supabase-based authentication functions
export async function signIn(email: string, password: string): Promise<User | null> {
  const { data, error } = await supabase.auth.signInWithPassword({ email: email, password: password });
  if (error || !data.user) return null;

  return {
    id: data.user.id,
    email: data.user.email!,
    name: data.user.user_metadata?.name || "",
    createdAt: new Date(data.user.created_at),
  };
}

export async function signUp(name: string, email: string, password: string): Promise<User | null> {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: { name: name }
    }
  });
  if (error || !data.user) return null;
  return {
    id: data.user.id,
    email: data.user.email!,
    name: name,
    createdAt: new Date(data.user.created_at),
  };
}

export async function signOut(): Promise<void> {
  await supabase.auth.signOut();
}

export async function getCurrentUser(): Promise<User | null> {
  const { data, error } = await supabase.auth.getUser();
  console.log("Current user data:", data)
  if (error || !data.user) return null;
  return {
    id: data.user.id,
    email: data.user.email!,
    name: data.user.user_metadata?.name || "",
    createdAt: new Date(data.user.created_at),
  };
}

export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser();
  return user !== null;
}
