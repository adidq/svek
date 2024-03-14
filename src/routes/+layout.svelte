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
    <p>powerd by <strong class="graSvelte">SvelteKit</strong></p>
  </footer>
</div>
<script>
  import Navbar from "$components/navbar.svelte";
  import Header from "$components/header.svelte";
</script>
<style>
  main{
    margin: 10px;
  }
  footer{
    margin: 5px;
  }
</style>