<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><b>NAVBAR</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
          <a class="nav-link active" aria-current="page" href="/profile">Profile</a>
        </li>
        {#if $page.data.session}
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <strong>{$page.data.session.user?.email ?? $page.data.session.user?.name}</strong>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/profile">Profile</a></li>
              <li><a class="dropdown-item" href="/auth/signout">SignOut</a></li>
            </ul>
          </li>
        {:else}
          <li class="nav-item">
            <a class="nav-link" href="/auth/signin">SignIn</a>
          </li>
        {/if}
      </ul>
    </div>
  </div>
</nav>
<script>
  import { page } from "$app/stores"
</script>
