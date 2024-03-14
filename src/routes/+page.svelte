<script lang="ts">
    import { page } from "$app/stores"
</script>
{#if $page.data.session}
<h1>Hello <strong>{$page.data.session.user?.name}</strong>?</h1>
{:else}
<h1>please login</h1>
<p>
    <a href="/auth/signin"> You must be signed in to view this page </a>
</p>
{/if}