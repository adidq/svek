<script lang="ts">
    import { page } from "$app/stores"
</script>
{#if $page.data.session}
<h1><strong class="gra1">Hello</strong> <strong>{$page.data.session.user?.name}</strong></h1>
{/if}
<div>
<h1>home</h1>
</div>