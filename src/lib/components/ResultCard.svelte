<script lang="ts">
  export let date: string;
  export let amount: number;
  export let location: string;
</script>

<div class="card">
  <div class="header">Result Details</div>
  <div class="detail">
    <span>Date:</span>
    {date}
  </div>
  <div class="detail">
    <span>Amount:</span> ${amount.toFixed(2)}
  </div>
  <div class="detail">
    <span>Location:</span>
    {location}
  </div>
</div>

<style>
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin: 8px;
    max-width: 300px;
    background-color: #fff;
    font-family: Arial, sans-serif;
  }

  .header {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .detail {
    font-size: 1rem;
    margin: 4px 0;
  }

  .detail span {
    font-weight: bold;
  }
</style>
