<script lang="ts">
  import Link from "./Link.svelte";

  let routes = [
    { link: "/home", page: "Hjem" },
    { link: "/statistikk", page: "Statistikk" },
  ];
</script>

<nav>
  <span class="title"> Budgettalisering </span>
  <div class="container">
    <ul>
      {#each routes as route}
        <li>
          <Link href={route.link}>
            {route.page}
          </Link>
        </li>
      {/each}
    </ul>
  </div>
  <div class="slot-container">
    <slot />
  </div>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
  }
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    margin: 0;
    padding: 0;
  }
  .container {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 1rem;
  }
  .slot-container {
    margin-left: 1rem;
  }
</style>
