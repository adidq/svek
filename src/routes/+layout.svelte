<div>
  <header>
    <Navbar />
    {#if $page.data.session}
      <!--signed in-->
    {:else}
      <div class="alert alert-primary" role="alert">Please <SignIn><strong>signin</strong></SignIn></div>
    {/if}
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <hr>
    <h3>footer</h3>
  </footer>
</div>
<script>
  import Navbar from "$components/navbar.svelte";
  import { page } from "$app/stores"
  import { SignIn } from "@auth/sveltekit/components"
</script>
<style>
  main{
    margin: 5px;
  }
</style>