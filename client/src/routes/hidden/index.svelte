<script>
    import { session } from '$app/stores';
    import { onMount } from 'svelte';

    let message = "";
    onMount(async () => {
        const response = await fetch("http://localhost:8080/hiddencontent",
        {
            method: 'GET',
            headers: {
                Authorization: "JWT " + $session.token
            },
        });
        const result = await response.json();
        message = result.message;
    });
</script>

<p>{message}</p>