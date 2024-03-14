<div>
  <header>
    <Navbar />
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <hr/>
    <p>footer</p>
  </footer>
</div>
<script>
  import Navbar from "$components/navbar.svelte";
</script>