<header>
  <Navbar />
  <div class="signbanner">
    {#if $page.data.session}
      <!--signed in-->
    {:else}
      <div class="alert alert-primary" role="alert">Please <strong><a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="/auth/signin">SignIn</a></strong></div>
    {/if}
  </div>
</header>

<style>
.signbanner {
  margin: 10px;
}
</style>
<script>
  import { page } from "$app/stores"
  import Navbar from "$components/navbar.svelte";
</script>