import { SvelteKitAuth } from "@auth/sveltekit"
import Google from "@auth/sveltekit/providers/google"
import Naver from "@auth/sveltekit/providers/naver"
import type { Handle } from "@sveltejs/kit";
import { AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET, AUTH_NAVER_ID, AUTH_NAVER_SECRET, AUTH_SECRET } from "$env/static/private"

export const { handle, signIn, signOut } = SvelteKitAuth({
  theme: {
    logo: "https://sveltekit-supabase-dashboard.vercel.app/svelte.png",
  },
  providers: [
    Google({ clientId: AUTH_GOOGLE_ID, clientSecret: AUTH_GOOGLE_SECRET }),
    Naver({ clientId: AUTH_NAVER_ID, clientSecret: AUTH_NAVER_SECRET })
  ],
  secret: AUTH_SECRET,
  trustHost: true
}) satisfies Handle;