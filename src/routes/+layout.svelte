<div>
  <header>
    <Navbar />
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
</script>