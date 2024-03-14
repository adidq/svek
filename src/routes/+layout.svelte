<div>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>
<script>
  import Header from "$components/header.svelte";
  import Footer from "$components/footer.svelte";
</script>
<style>
  main{
    margin: 10px;
  }

</style>