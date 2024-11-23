<script lang="ts">
  export let href: string;
</script>

<a {href}>
  <slot></slot>
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
