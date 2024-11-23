<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import DatePicker from "$lib/components/DatePicker.svelte";
  import TextField from "$lib/components/TextField.svelte";
  import { onMount } from "svelte";
  import { isLoggedIn, user } from "../../stores/userStore";
  import { capitalize, getEmailName } from "../../utils/helperFunctions";
  import type { User } from "firebase/auth";
  import Header from "$lib/components/Header.svelte";

  let location = "";
  let date = "";
  let amount = 0;
  let currentUser: User | null = null;

  const unSubscribe = user.subscribe((value) => {
    //updates the user
    currentUser = value;
  });

  let results: { location: string; date: string; amount: number }[] = [];

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    results = [...results, { location, date, amount }];
  };

  onMount(() => {
    return () => {
      unSubscribe();
    };
  });
</script>

<!-- Initial page -->
{#if $isLoggedIn == true}
  <Header />
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

  {#if results}
    <div style="text-align:center">
      <ul>
        {#each Object.entries(results.reduce((acc, entry) => {
              (acc[entry.date] ||= []).push(entry);
              return acc;
            }, {} as Record<string, { location: string; amount: number; date: string }[]>)) as [date, items]}
          <li>
            <strong>{date}</strong>
            <ul>
              {#each items as item}
                <li>Location: {item.location}, Amount: {item.amount}</li>
              {/each}
            </ul>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
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
  ul {
    margin-top: 1em;
    list-style-type: disc;
    padding-left: 20px;
  }
  li {
    font-size: 1.2em;
    margin: 0.5em 0;
  }
</style>
