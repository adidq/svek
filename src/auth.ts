import { SvelteKitAuth } from "@auth/sveltekit"
import Google from "@auth/sveltekit/providers/google"
import Discord from "@auth/sveltekit/providers/discord"
import type { Handle } from "@sveltejs/kit";
import { AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET, AUTH_DISCORD_ID, AUTH_DISCORD_SECRET, AUTH_SECRET } from "$env/static/private"

const scopes = ['identify', 'email']

export const { handle, signIn, signOut } = SvelteKitAuth({
  theme: {
    logo: "https://sveltekit-supabase-dashboard.vercel.app/svelte.png",
  },
  providers: [
    Google({ clientId: AUTH_GOOGLE_ID, clientSecret: AUTH_GOOGLE_SECRET }),
    Discord({ clientId: AUTH_DISCORD_ID, clientSecret: AUTH_DISCORD_SECRET, authorization: {params: {scope: scopes.join(' ')}} })
  ],
  secret: AUTH_SECRET,
  trustHost: true
}) satisfies Handle;