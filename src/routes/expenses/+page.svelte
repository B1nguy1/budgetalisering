<script>
  import ExpenseList from "$lib/components/ExpenseList.svelte";
</script>

<main class="container">
  <h1 class="header">Oversikt over forbruk</h1>
  <ExpenseList />
</main>

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
