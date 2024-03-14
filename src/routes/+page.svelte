<script lang="ts">
    import { page } from "$app/stores"
</script>
{#if $page.data.session}
<p>{$page.data.session}</p>
{:else}
<h1>please login</h1>
<p>
    <a href="/auth/signin"> You must be signed in to view this page </a>
</p>
{/if}