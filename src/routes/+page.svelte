<script lang="ts">
  import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import { goto } from "$app/navigation";
  import { isLoggedIn } from "../stores/userStore";
  import { auth } from "../client";

  let name: string = $state("");
  let password: string = $state("");

  const signUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        name,
        password
      );
      if (userCredential) {
        goto("/home", { replaceState: true });
        isLoggedIn.set(true);
      } else {
        isLoggedIn.set(false);
      }
    } catch (error) {
      alert(error);
    }
  };

  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        name,
        password
      );
      if (userCredential) {
        goto("/home", { replaceState: true });
        sessionStorage.setItem("userID", JSON.stringify(auth.currentUser?.uid));
        if (sessionStorage.getItem("userID") !== null) {
          isLoggedIn.set(true);
        }
      } else {
        isLoggedIn.set(false);
      }
    } catch (error) {
      alert(error);
    }
  };
</script>

<div class="wrapper">
  <h1>Budgettalisering</h1>

  <div class="inputClass">
    <form>
      <input bind:value={name} type="email" placeholder="E-post" />
      <input bind:value={password} type="password" placeholder="passord" />
      <button type="submit" onclick={signUp}>Registrer bruker</button>
      <button type="submit" onclick={signIn}>Logg inn </button>
    </form>
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .inputClass {
    width: 10rem;
  }
  input {
    padding: 0.5em;
    margin-bottom: 24px;
  }
</style>
