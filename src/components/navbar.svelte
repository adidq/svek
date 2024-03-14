<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">SVEK</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">about</a>
        </li>
        {#if $page.data.session}
          <li class="nav-item">
            <a href="/profile"><strong>{$page.data.session.user?.email ?? $page.data.session.user?.name}</strong></a>
          </li>
        {:else}
          <li class="nav-item">
            <SignIn />
          </li>
        {/if}
      </ul>
    </div>
  </div>
</nav>
<script>
  import { page } from "$app/stores"
  import { SignIn, SignOut } from "@auth/sveltekit/components"
</script>