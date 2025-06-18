<script lang="ts">
  import type { Expense } from "$lib/types.ts";

  import ExpenseItem from "./ExpenseItem.svelte";

  interface Props {
    expenses: Expense[];
    onEdit: (expense: Expense) => void;
    onDelete: (expense: Expense) => void;
  }

  let { expenses, onEdit, onDelete }: Props = $props();
</script>

<div class="expense-list">
  <ul>
    {#if expenses.length > 0}
      {#each expenses as expense}
        <li class="expense-item">
          <ExpenseItem
            category={expense.category}
            amount={expense.amount}
            note={expense.note}
            date={expense.date}
          />
        </li>
        <div class="actions">
          <button onclick={() => onEdit(expense)}>Rediger</button>
          <button onclick={() => onDelete(expense)}>Fjern</button>
        </div>
      {/each}
    {:else}
      <span>Det finnes ingen forbruksdata.</span>
    {/if}
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
  .actions {
    display: flex;
    gap: 0.5rem;
  }
</style>
