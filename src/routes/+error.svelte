<script lang="ts">
  import { onMount } from "svelte";

  interface Props {
    status: string;
  }

  let { status }: Props = $props();

  onMount(() => {
    if (status === "404") {
      window.location.href = "/";
    }
  });
</script>

<h1>Page not found</h1>
<p>Redirect: <a href="/">click here to go back to the home page</a></p>
