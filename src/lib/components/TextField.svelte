<script lang="ts">    
    export let placeholder: string = ""
    export let value: string | number;
    export let label: string;
    export let type: "text" | "number" = "text";
</script>

<div class="input-group">
    <label for={String(Math.random()*120)}>
        {label}
    </label>
    <input
        type={type}
        bind:value
        placeholder={placeholder}
    />
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
