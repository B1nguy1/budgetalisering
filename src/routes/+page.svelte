<script>
  import { goto } from "$app/navigation";
</script>

<div class="main">
  <h1>BUDGETTALISERING</h1>
  <p>En webapp der man kan tracke utgifter</p>
  <div>
    <button onclick={() => goto("/home")}> Gå videre </button>
  </div>
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  p {
    font-style: italic;
  }
  button {
    margin-top: 20px;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 600;
    color: white;
    background-color: #4da6ff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
</style>
