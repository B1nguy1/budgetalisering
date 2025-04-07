<script lang="ts">
  import { page } from "$app/state";

  let { children } = $props();
</script>

<div class="nav">
  {#if page.url.pathname !== "/"}
    <a href="/">Home</a>
    <a href="/expenses">Expenses</a>
    <a href="/settings">Settings</a>
  {/if}
</div>

<main>
  {@render children()}
</main>
