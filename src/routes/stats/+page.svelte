<script lang="ts">
  import { collection, onSnapshot, query, where } from "firebase/firestore";
  import { onMount } from "svelte";
  import { db } from "../../client";
  import ResultCard from "$lib/components/ResultCard.svelte";
  import { getAuth } from "firebase/auth";
  import type { TransactionType } from "../../types";

  const userID = getAuth().currentUser?.uid;

  let transactions: Array<TransactionType> = $state([]);

  let loading = true;

  onMount(async () => {
    try {
      const q = query(
        collection(db, "transactions"),
        where("userID", "==", userID)
      );
      onSnapshot(q, (querySnapshot) => {
        transactions = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as TransactionType),
        }));
      });
    } catch (e) {
      console.error(e);
    } finally {
      loading = false;
    }
  });
</script>

{#each transactions as transaction}
  <div class="container">
    <ResultCard
      location={transaction.location}
      date={transaction.date}
      amount={transaction.amount}
    />
  </div>
{/each}

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: row;
  }
</style>
