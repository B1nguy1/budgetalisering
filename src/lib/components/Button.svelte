<script lang="ts">
    export let text: string;
  </script>
  
  <button 
    on:click
    >
    {text}
</button>
  
  <style>
    button {
      padding: 0.5em 1em;
      font-size: 1em;
      background-color: #3498db;
      color: #fff;
      border: none;
      cursor: pointer;
      border-radius: 4px;
    }
    button:hover {
      background-color: #2980b9;
    }
  </style>