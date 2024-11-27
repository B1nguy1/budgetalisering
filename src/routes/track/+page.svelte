<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import DatePicker from "$lib/components/DatePicker.svelte";
  import TextField from "$lib/components/TextField.svelte";
  import { isLoggedIn } from "../../stores/userStore";
  import { auth, db } from "../../client";
  import { addDoc, collection } from "firebase/firestore";

  let location = $state("");
  let date = $state("");
  let amount = $state(0);

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "transactions"), {
        userID: auth.currentUser?.uid,
        location: location,
        amount: amount,
        date: date,
      });
    } catch (error) {
      console.error(error);
    }
  };
</script>

{#if $isLoggedIn == true}
  <div class="wrapper">
    <h1>Loggfør hva du har kjøpt</h1>
    <TextField label="Hvor kjøpt" bind:value={location} type="text" />
    <TextField label="Beløp" bind:value={amount} type="number" />
    <DatePicker bind:date />
    <Button text="Submit" onClick={handleSubmit} />
  </div>
{/if}

<style>
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    max-width: fit-content;
    margin-inline: auto;
    gap: 24px;
  }
</style>
