<script>
  import ExpenseList from "$lib/components/ExpenseList.svelte";

  let { data } = $props();
</script>

<div class="container">
  <h1 class="header">Oversikt over forbruk</h1>
  <ExpenseList expenses={data.expenses} />
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
