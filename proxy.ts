import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import type { CookieOptions } from "@supabase/ssr/dist/module/types";
import { env } from "@/lib/env";

type SupabaseCookieToSet = {
  name: string;
  value: string;
  options: CookieOptions;
};

const INTERNAL_PREFIXES = [
  "/dashboard", "/crm", "/casos", "/protocolos",
  "/processos", "/negociacoes", "/relatorios", "/documentos",
];
const CLIENT_PREFIXES = ["/portal/cliente"];
const BANK_PREFIXES = ["/portal/banco"];
const AUTH_PREFIXES = ["/auth"];

export async function proxy(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: SupabaseCookieToSet[]) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // IMPORTANT: always call getUser() to refresh the session
  const { data: { user } } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  const isInternal = INTERNAL_PREFIXES.some((p) => pathname.startsWith(p));
  const isClient  = CLIENT_PREFIXES.some((p) => pathname.startsWith(p));
  const isBank    = BANK_PREFIXES.some((p) => pathname.startsWith(p));
  const isAuth    = AUTH_PREFIXES.some((p) => pathname.startsWith(p));

  // Unauthenticated → redirect to login
  if (!user && (isInternal || isClient || isBank)) {
    const url = request.nextUrl.clone();
    url.pathname = "/auth/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  // Already authenticated → skip login page
  if (user && isAuth) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
