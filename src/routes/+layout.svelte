<div>
  <header>
    <Navbar />
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <h1>footer</h1>
  </footer>
</div>
<script>
  import Navbar from "$components/navbar.svelte";
</script>