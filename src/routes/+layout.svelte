<div>
  <header>
    <Navbar />
    <Header />
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <hr>
    <p>footer</p>
    <p>powerd by <strong class="gra-svelte">SvelteKit</strong></p>
  </footer>
</div>
<script>
  import Navbar from "$components/navbar.svelte";
  import Header from "$components/header.svelte";
</script>
<style>
  main footer {
    margin: 10px;
  };
</style>