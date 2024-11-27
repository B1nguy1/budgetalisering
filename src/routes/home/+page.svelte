<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import TextField from "$lib/components/TextField.svelte";
  import { onMount } from "svelte";
  import { isLoggedIn, user } from "../../stores/userStore";
  import { capitalize, getEmailName } from "../../utils/helperFunctions";
  import { type User } from "firebase/auth";
  import { auth, db } from "../../client";
  import {
    addDoc,
    collection,
    getDocs,
    query,
    where,
  } from "firebase/firestore";

  let monthlyAmount: number = $state(0);
  let saveAmount: number = $state(0);
  let currentUser: User | null = $state(null);
  let isSubmitted: boolean = false;

  const unSubscribe = user.subscribe((value) => {
    currentUser = value;
  });

  onMount(() => {
    return () => {
      unSubscribe();
    };
  });

  const handleSubmit = async () => {
    if (monthlyAmount <= 0 || saveAmount <= 0) {
      alert("Beløpene må være større enn 0.");
      return;
    }
    if (saveAmount > monthlyAmount) {
      alert("Sparebelopet kan ikke være høyere enn månedsbeløpet.");
      return;
    }

    isSubmitted = true;
    try {
      const q = query(
        collection(db, "savings"),
        where("userID", "==", auth.currentUser?.uid)
      );

      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        alert("Du har allerede loggført. Gå til statistikk for å endre.");
        isSubmitted = false;
      }
      if (q)
        await addDoc(collection(db, "savings"), {
          userID: auth.currentUser?.uid,
          monthlyAmount: monthlyAmount,
          saveAmount: saveAmount,
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
    <span> </span>
    <TextField
      label="Hvor mye har du denne måneden?"
      bind:value={monthlyAmount}
      type="number"
    />
    <TextField
      label="Hvor mye ønsker du å sette til sparing?"
      bind:value={saveAmount}
      type="number"
    />
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
