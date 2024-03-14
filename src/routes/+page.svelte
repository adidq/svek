<script lang="ts">
    import { page } from "$app/stores"
</script>
{#if $page.data.session}
<div class="p-3 mb-2 bg-transparent text-body">.bg-transparent</div>
<h1><strong class="gra1">Hello</strong> <strong>{$page.data.session.user?.name}</strong></h1>
{/if}
<div>
</div>