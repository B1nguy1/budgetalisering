<script lang="ts">
  import { goto } from "$app/navigation";
  import { getAuth, signOut } from "firebase/auth";
  import { isLoggedIn } from "../../stores/userStore";
  import Button from "./Button.svelte";
  import Link from "./Link.svelte";
  import { auth } from "../../client";

  let routes = [
    { link: "/home", page: "Hjem" },
    { link: "/statistikk", page: "Statistikk" },
  ];

  const navigateToStartPage = () => {
    signOut(auth)
      .then(() => {
        goto("/", { replaceState: true });
        isLoggedIn.set(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };
</script>

<nav>
  <span class="title"> Budsjettalisering </span>
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
    <Button on:click={navigateToStartPage} text={"Logg ut"} />
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
</style>
