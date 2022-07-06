<script>
    let email = "";
    let fullName = "";
    let role = "";
    let password = "";
    let error = false;

    import { goto } from '$app/navigation';

    async function submit() {
        const response = await fetch("http://localhost:8080/register",
        {
            method: 'POST',
            body: new URLSearchParams({
                'fullName' : fullName,
                'email' : email,
                'role' : role,
                'password' : password,
            }),
        });
        if (response.status == 200) {
            goto('/');
        } else {
            error = true;
        }
    }
</script>

<style>
    .app {
        padding-top: 5%;
        padding-left: 25%;
        padding-right: 25%;
    }
    .container {
        padding: 5%;
    }
</style>

<div class="app">
    <!-- login header -->
    <div class="container">
        <div class="level-item has-text-centered">
            <h1 class="title">Rejestracja</h1>
        </div>
    </div>
    {#if error}
        <div class="notification is-danger">
            <button class="delete" on:click={function() {error = false}}></button>
            Something go wrong, probably account with this email exist.
        </div>
    {/if}

    <!-- fields for full name, email and password -->
    <input class="input is-rounded" type="text" bind:value={email} placeholder="Email" required>
    <input class="input is-rounded" type="text" bind:value={fullName} placeholder="full name" required>
    <input class="input is-rounded" type="password" bind:value={password} placeholder="Password" required>
    <!-- role choosing -->
    <div class="container">
        <nav class="level">
            <div class="level-left">
                <p>Choose your role: </p>
            </div>
            <div class="level-right has-text-centered">
                <div class="control">
                    <label class="radio">
                        <input type="radio" name="answer" bind:group={role} value={"normal"}>
                            normal
                    </label>
                    <label class="radio">
                        <input type="radio" name="answer" bind:group={role} value={"admin"}>
                            admin
                    </label>
                </div>
            </div>
        </nav>
        <!-- register button -->
        <div class="level-item has-text-centered">
            <button class="button is-primary is-large is-rounded" on:click={submit}>Register</button>
        </div>
    </div>
</div>