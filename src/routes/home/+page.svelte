<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import DatePicker from "$lib/components/DatePicker.svelte";
  import TextField from "$lib/components/TextField.svelte";
  import { onMount } from "svelte";
  import { isLoggedIn, user } from "../../stores/userStore";
  import { capitalize, getEmailName } from "../../utils/helperFunctions";
  import { type User } from "firebase/auth";
  import { auth, db } from "../../client";
  import { addDoc, collection } from "firebase/firestore";

  let location = "";
  let date = "";
  let amount = 0;
  let currentUser: User | null = null;

  const unSubscribe = user.subscribe((value) => {
    currentUser = value;
  });

  onMount(() => {
    return () => {
      unSubscribe();
    };
  });

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

<!-- Initial page -->
{#if $isLoggedIn == true}
  <div class="wrapper">
    {#if currentUser}
      <h1>
        Hello, {capitalize(getEmailName(currentUser.email!!))}
      </h1>
    {/if}
    <TextField label="Hvor kjøpt" bind:value={location} type="text" />
    <TextField label="Beløp" bind:value={amount} type="number" />
    <DatePicker bind:date />
    <Button text="Submit" on:click={handleSubmit} />
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
