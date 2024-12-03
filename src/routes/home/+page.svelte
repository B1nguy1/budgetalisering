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
    onSnapshot,
    query,
    where,
  } from "firebase/firestore";
  import type { SavingsType } from "../../types";

  let monthlyAmount: number = 0;
  let saveAmount: number = 0;
  let currentUser: User | null = null;
  let isSubmitted: boolean = false;
  let savedData: { monthlyAmount: number; saveAmount: number } = {
    monthlyAmount: 0,
    saveAmount: 0,
  };

  const unSubscribe = user.subscribe((value) => {
    currentUser = value;
  });

  const getSavingsUser = async () => {
    if (!currentUser) return;

    const q = query(
      collection(db, "savings"),
      where("userID", "==", currentUser.uid)
    );

    onSnapshot(q, (qs) => {
      const data = qs.docs.map((doc) => {
        const docData = doc.data() as SavingsType;
        return {
          id: doc.id,
          ...docData,
        };
      });

      if (data.length > 0) {
        savedData = {
          monthlyAmount: data[0].monthlyAmount,
          saveAmount: data[0].saveAmount,
        };
      }
    });
  };

  onMount(() => {
    getSavingsUser();
    return () => {
      unSubscribe();
    };
  });

  const handleSubmit = async () => {
    if (
      monthlyAmount === null ||
      saveAmount === null ||
      monthlyAmount <= 0 ||
      saveAmount <= 0
    ) {
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
        return;
      }

      await addDoc(collection(db, "savings"), {
        userID: auth.currentUser?.uid,
        monthlyAmount: monthlyAmount,
        saveAmount: saveAmount,
      });

      savedData = { monthlyAmount, saveAmount };

      monthlyAmount = 0;
      saveAmount = 0;
      isSubmitted = false;
    } catch (error) {
      console.error(error);
      isSubmitted = false;
    }
  };
</script>

{#if $isLoggedIn == true}
  <div class="wrapper">
    {#if currentUser}
      <h1>
        Hello, {capitalize(getEmailName(currentUser.email!!))}
      </h1>
    {/if}

    <TextField
      label="Hvor mye har du denne måneden?"
      bind:value={monthlyAmount}
      type="number"
      placeholder="Skriv beløp"
    />

    <TextField
      label="Hvor mye ønsker du å sette til sparing?"
      bind:value={saveAmount}
      type="number"
      placeholder="Skriv beløp"
    />

    <Button text="Submit" onClick={handleSubmit} />

    {#if savedData.monthlyAmount !== null && savedData.saveAmount !== null}
      <div class="result">
        <span
          >Du har satt av {savedData.saveAmount} til sparing denne måneden.</span
        >
        <br />
        <span>Månedsbeløp: {savedData.monthlyAmount}</span>
      </div>
    {/if}
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

  .result {
    margin-top: 20px;
    font-weight: bold;
    font-size: 1.2em;
  }
</style>
