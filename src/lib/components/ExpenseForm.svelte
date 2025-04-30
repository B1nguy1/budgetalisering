<script lang="ts">
  import { enhance } from "$app/forms";
  import { supabase } from "$lib/supabaseClient.js";
  import { categories } from "$lib/utils/categories.js";

  let note = $state("");
  let amount = $state<number>();
  let category = $state("");
  let date = $state("");
  let isAdded = $state(false);

  async function submitForm() {
    try {
      await supabase.from("expenses").insert([
        {
          note: note,
          category: category,
          amount: amount,
          date: date,
        },
      ]);
      isAdded = true;
      setTimeout(() => {
        isAdded = false;
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  }
</script>

<form onsubmit={submitForm} use:enhance>
  {#if isAdded}
    <div class="alert alert-success">
      <span>Utgift lagt til!</span>
    </div>
  {/if}
  <label for="category"> Kategori </label>
  <select
    id="category"
    bind:value={category}
    placeholder="Velg en kategori"
    required
  >
    {#each categories as cat}
      <option value={cat}>
        {cat}
      </option>
    {/each}
  </select>
  <label for="amount"> Beløp </label>
  <input
    id="amount"
    placeholder="100"
    type="number"
    bind:value={amount}
    required
  />
  <label for="date">Dato</label>
  <input id="date" type="date" bind:value={date} required />
  <label for="note">Notater</label>
  <textarea id="note" placeholder="Legg til detaljer" bind:value={note} required
  ></textarea>
  <div>
    <button type="submit">Lagre</button>
  </div>
</form>

<style>
  form {
    margin: 40px auto;
    padding: 24px;
    border-radius: 6px;
    max-width: 500px;
  }
  label {
    display: block;
    margin-top: 24px;
  }
  input,
  select,
  textarea {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    box-sizing: border-box;
  }

  button {
    margin-top: 20px;
    padding: 12px 24px;
    background-color: #4da6ff;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  button:hover {
    background-color: #3d96ff;
  }
  .alert {
    padding: 12px 16px;
    border-radius: 6px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-weight: 500;
  }
  .alert-success {
    background-color: #e6f7ef;
    color: #0d8050;
    border: 1px solid #c2ebd6;
  }
</style>
