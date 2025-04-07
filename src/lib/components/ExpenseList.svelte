<script>
  import { Budget } from "$lib/budget.svelte.js";
  import ExpenseItem from "./ExpenseItem.svelte";

  const expenses = new Budget().getExpenses();
</script>

<div class="expense-list">
  <ul>
    {#each expenses as expense}
      <li class="expense-item">
        <ExpenseItem
          category={expense.category}
          amount={expense.amount}
          note={expense.note}
          date={expense.date}
        />
      </li>
    {/each}
  </ul>
</div>

<style>
  .expense-list {
    margin-top: 20px;
  }

  .expense-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
</style>
