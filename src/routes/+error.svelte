<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  export let status: string;

  onMount(() => {
    if (status === "404") {
      window.location.href = "/";
    }
  });
</script>

<h1>Page not found</h1>
<p>Redirect: <a href="/">click here to go back to the home page</a></p>
