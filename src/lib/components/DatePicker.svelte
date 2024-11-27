<script lang="ts">
  interface Props {
    date: string;
  }

  let { date = $bindable() }: Props = $props();
</script>

<div>
  <label for="date">Velg en dato:</label>
  <input id="date" type="date" bind:value={date} placeholder="YYYY-MM-DD" />
</div>
