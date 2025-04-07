<script lang="ts">
  interface Props {
    category: string;
    amount: number;
    note?: string;
    date: string;
  }

  let { category, amount, note, date }: Props = $props();
</script>

<div class="expense-details">
  <span class="category">
    {category}
  </span>
  <span class="amount">
    {amount}
  </span>
  <span class="date">
    {date}
  </span>
  {#if note}
    <span class="note">{note}</span>
  {/if}
</div>

<style>
  .expense-details {
    flex: 1;
  }

  .category {
    font-weight: bold;
  }

  .amount {
    font-size: 1.2rem;
    color: green;
  }

  .date {
    font-size: 0.9rem;
    color: #666;
  }
  .note {
    font-style: italic;
    color: #555;
  }
</style>
