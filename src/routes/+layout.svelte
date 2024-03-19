<div>
  <ProgressBar color="#FFF" />
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>
<script>
  import Header from "$components/header.svelte";
  import Footer from "$components/footer.svelte";
  import { ProgressBar } from "@prgm/sveltekit-progress-bar";
</script>
<style>
  main{
    margin: 10px;
  }

</style>