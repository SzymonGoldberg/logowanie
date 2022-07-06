<script>
    let email = "";
    let password = "";
    let error = false;

    import { session } from "$app/stores";
    import { goto } from "$app/navigation";

    async function logIn() {
        const response = await fetch("http://localhost:8080/login",{
            method : 'POST',
            body : new URLSearchParams({
                "email" : email,
                "password" : password
            })
        });
        if (response.status != 200) { error = true;}

        const result = await response.json();
        if (result.user) {
                $session.user = result.user;
                $session.token = result.accessToken;
                goto('/hidden');
        }
    }
</script>

<style>
    .app {
        padding-top: 5%;
        padding-left: 25%;
        padding-right: 25%;
    }
    .title {
        padding: 10%;
    }
</style>

<div class="app">
    <!-- login header -->
    <div class="container">
        <div class="level-item has-text-centered">
            <h1 class="title">logowanie</h1>
        </div>
        {#if error}
        <div class="notification is-danger">
            <button class="delete" on:click={function() {error = false}}></button>
            Something go wrong, please check out login data.
        </div>
        {/if}

    </div>
    <!-- fields for email and password -->
    <input class="input is-rounded" type="text" bind:value={email} placeholder="Email" required>
    <input class="input is-rounded" type="password" bind:value={password} placeholder="Password" required>
    <!-- container -->
    <nav class="level">
        <!-- left -->
        <div class="level-left">
            <button class="button is-primary is-large is-rounded" on:click={logIn}>Login</button>
        </div>
        <!-- right -->
        <div class="level-right">
            <a href="/register" class="button is-dark is-large is-rounded">Register</a>
        </div>
    </nav>
</div>