import { supabase } from "@/lib/supabaseClient";

export async function GET() {
  // Try to fetch the current session (will be null if not signed in)
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ success: true, session: data.session }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
