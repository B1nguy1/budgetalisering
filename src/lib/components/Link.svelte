<script lang="ts">
  interface Props {
    href: string;
    children?: import('svelte').Snippet;
  }

  let { href, children }: Props = $props();
</script>

<a {href}>
  {@render children?.()}
</a>

<style>
  a {
    text-decoration: none;
  }
  a:hover {
    color: #0056b3;
    color: #007bff;
    font-size: 1rem;
  }
</style>
