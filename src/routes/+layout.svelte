<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import { signOut } from "firebase/auth";
  import { isLoggedIn } from "../stores/userStore";
  import { auth } from "../client";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();

  onMount(() => {
    $isLoggedIn = JSON.parse(sessionStorage.getItem("userID")!);
  });

  const navigateToStartPage = () => {
    signOut(auth)
      .then(() => {
        goto("/", { replaceState: true });
        isLoggedIn.set(false);
        sessionStorage.removeItem("userID");
      })
      .catch((error) => {
        console.error(error);
      });
  };
</script>

{#if $isLoggedIn == true}
  <Header onClick={navigateToStartPage} text={"Logg ut"} />
{/if}

{@render children?.()}
