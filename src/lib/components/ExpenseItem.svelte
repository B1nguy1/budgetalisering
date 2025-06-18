<script lang="ts">
  interface Props {
    category: string;
    amount: number;
    note?: string;
    date: string;
  }

  let { category, amount, note, date }: Props = $props();
</script>

<div class="expense-card">
  <div class="expense-header">
    <span class="category">{category}</span>
    <span class="amount">{amount}</span>
  </div>
  <div class="expense-footer">
    <span class="date">{date}</span>
    {#if note}
      <span class="note">{note}</span>
    {/if}
  </div>
</div>

<style>
  .expense-card {
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
    padding: 1.25rem 1.5rem;
    margin: 0.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition: box-shadow 0.2s;
  }
  .expense-card:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
  .expense-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .category {
    font-weight: 600;
    font-size: 1.1rem;
    color: #222;
    letter-spacing: 0.01em;
  }
  .amount {
    background: #e6f4ea;
    color: #219150;
    font-weight: 700;
    font-size: 1.15rem;
    padding: 0.3em 0.9em;
    border-radius: 1em;
    box-shadow: 0 1px 2px rgba(33, 145, 80, 0.07);
  }
  .expense-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.95rem;
    color: #888;
    gap: 1.5rem;
  }
  .date {
    font-size: 0.95em;
    color: #888;
  }
  .note {
    font-style: italic;
    color: #555;
    background: #f6f6f6;
    padding: 0.2em 0.7em;
    border-radius: 0.7em;
    margin-left: auto;
  }
</style>
