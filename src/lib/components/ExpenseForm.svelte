<script lang="ts">
  import { supabase } from "$lib/supabaseClient.js";
  import { categories } from "$lib/utils/categories.js";

  let note = $state("");
  let amount = $state(0);
  let category = $state("");
  let date = $state("");

  async function submitForm() {
    await supabase.from("expenses").insert([
      {
        note: note,
        category: category,
        amount: amount,
        date: date,
      },
    ]);
  }
</script>

<form onsubmit={submitForm}>
  <label for="category"> Kategori </label>
  <select id="category" bind:value={category} placeholder="Velg en kategori">
    {#each categories as cat}
      <option value={cat}>
        {cat}
      </option>
    {/each}
  </select>
  <label for="amount"> Beløp </label>
  <input id="amount" placeholder="100" type="number" bind:value={amount} />
  <label for="date">Dato</label>
  <input id="date" type="date" bind:value={date} />
  <label for="note">Notater</label>
  <textarea id="note" placeholder="Legg til detaljer" bind:value={note}
  ></textarea>

  <div>
    <button type="submit">Lagre</button>
  </div>
</form>
