<script lang="ts">
  import { page } from "$app/state";

  let { children } = $props();
</script>

<div class="header">
  <div>
    <span>BUDGETTALISERING</span>
  </div>
  {#if page.url.pathname !== "/"}
    <nav class="nav-container">
      <a href="/expenses">Utgifter</a>
      <a href="/settings">TEMP</a>
    </nav>
  {/if}
</div>

<main>
  {@render children()}
</main>

<style>
  :global(body) {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #fef9f2;
  }
</style>
