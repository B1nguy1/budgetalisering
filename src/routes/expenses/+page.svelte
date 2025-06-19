<script lang="ts">
  import ExpenseList from "$lib/components/ExpenseList.svelte";
  import { categories } from "$lib/utils/categories.js";

  let { data } = $props();
  let selectedCategory: string | null = $state(null);

  const filterCategory = (category: string | null) => {
    selectedCategory = selectedCategory === category ? null : category;
  };

  const filterExpenses = $derived(
    selectedCategory
      ? data.expenses.filter((expense) => expense.category === selectedCategory)
      : data.expenses,
  );

  const totalExpenses = $derived(
    filterExpenses.reduce((sum, expense) => sum + expense.amount, 0),
  );
</script>

<div class="container">
  <h1 class="header">Oversikt over forbruk</h1>
  <fieldset>
    <legend>Kategorier</legend>
    <button
      type="button"
      class="selectAllButton"
      onclick={() => filterCategory(null)}
    >
      Velg alle
    </button>
    <span class="categoryText">
      {#each categories as category}
        <label>
          <input
            type="radio"
            checked={selectedCategory === category}
            onchange={() => filterCategory(category)}
          />
          {category}
        </label>
      {/each}
    </span>
  </fieldset>
  <ExpenseList expenses={filterExpenses} />
  {#if totalExpenses > 0}
    <span>
      Total: {totalExpenses}
    </span>
  {/if}
</div>

<style>
  .container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .header {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  fieldset {
    border: none;
    margin: 0 0 1rem 0;
    padding: 0;
  }
  legend {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .selectAllButton {
    margin-right: 1rem;
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    background: #f5f5f5;
    cursor: pointer;
  }
  .categoryText {
    display: inline-flex;
    gap: 1rem;
    align-items: center;
  }
  label {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
  }
</style>
