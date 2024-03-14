<script lang="ts">
    import { page } from "$app/stores"
</script>
{#if $page.data.session}
<h1><strong class="gra1">Hello</strong> <strong>{$page.data.session.user?.name}</strong></h1>
  <p class="placeholder-wave">
    <span class="placeholder col-12"></span></p>
{:else}
<h1>please login</h1>
<p>
    <a href="/auth/signin"> You must be signed in to view this page </a>
</p>
{/if}