<script lang="ts">
    import { page } from "$app/stores"
</script>
{#if $page.data.session}
<h1 class="gra1">Hello <strong>{$page.data.session.user?.name}</strong>?</h1>
  <p class="placeholder-wave">
    <span class="placeholder col-12"></span>
  </p>
  <p class="placeholder-wave">
    <span class="placeholder col-12"></span>
  </p>
{:else}
<h1>please login</h1>
<p>
    <a href="/auth/signin"> You must be signed in to view this page </a>
</p>
{/if}
<style scoped>
  .gra1 {
    font-size: 50px;
    font-weight: bolder;

    background-image: linear-gradient(to right, blue, skyblue);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
</style>