<nav>
  <div class="signedInStatus">
    <div class="nojs-show loaded">
      <img alt="User avatar" src={$page.data?.session?.user?.image ?? "https://source.boringavatars.com/marble/120"} class="avatar"/>
      {#if $page.data.session}
        <span class="signedInText">
          {$page.data.session.user?.email ?? $page.data.session.user?.name}
        </span>
        <SignOut>
          <div slot="submitButton" class="buttonPrimary">Sign out</div>
        </SignOut>
      {:else}
        <SignIn>
          <div slot="submitButton" class="buttonPrimary">Sign in</div>
        </SignIn>
      {/if}
    </div>
  </div>
</nav>
<script>
  import { page } from "$app/stores"
  import { SignIn, SignOut } from "@auth/sveltekit/components"
</script>
<style scoped>
  nav {
    display: flex;
  }
  img {
    size: auto;
  }
</style>
