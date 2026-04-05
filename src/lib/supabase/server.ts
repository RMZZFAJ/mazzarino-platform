import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import type { CookieOptions } from "@supabase/ssr/dist/module/types";
import { env } from "@/lib/env";

type SupabaseCookieToSet = {
  name: string;
  value: string;
  options: CookieOptions;
};

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: SupabaseCookieToSet[]) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        },
      },
    },
  );
}
