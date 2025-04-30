<script lang="ts">
  import ExpenseList from "$lib/components/ExpenseList.svelte";
  import { categories } from "$lib/utils/categories.js";

  let { data } = $props();

  let selectedCategory: string | null = $state(null);

  const filterCategory = (category: string) => {
    selectedCategory = selectedCategory === category ? null : category;
  };

  const filterExpenses = $derived(
    selectedCategory
      ? data.expenses.filter((expense) => expense.category === selectedCategory)
      : data.expenses
  );

  const totalExpenses = $derived(
    filterExpenses.reduce((sum, expense) => sum + expense.amount, 0)
  );
</script>

<div class="container">
  <h1 class="header">Oversikt over forbruk</h1>
  <div>
    {#each categories as category}
      <label>
        <input
          type="checkbox"
          checked={selectedCategory === category}
          onchange={() => filterCategory(category)}
        />
        {category}
      </label>
    {/each}
  </div>
  <ExpenseList expenses={filterExpenses} />
  <span>
    Total: {totalExpenses}
  </span>
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
</style>
