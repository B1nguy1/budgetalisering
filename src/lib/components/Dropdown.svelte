<script lang="ts">
  type DropDownOption = {
    label: string;
    value: string;
  };

  interface Props {
    label: string;
    options: DropDownOption[];
    selected: string;
    onChange: (value: string) => void;
  }

  let { label, options, selected, onChange }: Props = $props();

  const handleChange = (e: Event) => {
    selected = (e.target as HTMLSelectElement).value;
    onChange(selected);
  };
</script>

<div>
  <label for="dropdownOptions">{label}</label>
  <select id="dropdownOptions" onchange={handleChange} bind:value={selected}>
    {#each options as option}
      {option}
    {/each}
  </select>
</div>
