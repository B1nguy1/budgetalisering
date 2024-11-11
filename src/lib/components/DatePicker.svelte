<script lang="ts">
    export let date: string;
</script>

<div>
    <label for="date">Velg en dato:</label>
    <input
      id="date"
      type="date"
      bind:value={date}
      placeholder="YYYY-MM-DD"
    />
</div>