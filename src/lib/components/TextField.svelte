<script lang="ts">
  interface Props {
    placeholder?: string;
    value: string | number;
    label: string;
    type?: "text" | "number";
  }

  let {
    placeholder = "",
    value = $bindable(),
    label,
    type = "text"
  }: Props = $props();
</script>

<div class="input-group">
  <label for={String(Math.random() * 120)}>
    {label}
  </label>
  <input {type} bind:value {placeholder} />
</div>

<style>
  .input-group {
    width: 10rem;
  }
  label {
    display: block;
    margin-bottom: 0.5em;
  }
  input {
    padding: 0.5em;
    width: 100%;
    font-size: 1em;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
