<script lang="ts">
  import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
  import { onMount } from "svelte";
  import { db } from "../../client";
  import ResultCard from "$lib/components/ResultCard.svelte";

  type Transaction = {
    location: string;
    amount: number;
    date: string;
  };

  let transactions: Array<Transaction> = [];
  let loading = true;

  onMount(async () => {
    try {
      const q = query(collection(db, "transactions"));
      onSnapshot(q, (querySnapshot) => {
        transactions = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Transaction),
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
  <ResultCard
    location={transaction.location}
    date={transaction.date}
    amount={transaction.amount}
  />
{/each}
