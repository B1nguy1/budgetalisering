<script lang="ts">
  import { page } from "$app/state";

  let { children } = $props();
</script>

{#if page.url.pathname !== "/"}
  <div class="header">
    <div>
      <span>BUDGETTALISERING</span>
    </div>
    <nav class="nav-container">
      <a href="/expenses">Utgifter</a>
      <a href="/home">Hjem</a>
    </nav>
  </div>
{/if}

<main>
  {@render children()}
</main>

<style>
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 24px;
  }
  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
  nav a {
    text-decoration: none;
    margin-left: 24px;
    color: black;
    font-weight: 500;
  }
  :global(body) {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #fef9f2;
  }
</style>
