<script>
    import { session } from '$app/stores';
</script>

<style>
    .container {
        padding: 10%;
    }
</style>

<!-- login header -->
<div class="container">
    <div class="level-item has-text-centered">
        {#if $session.user}
        <a href="/hidden" class="button is-primary is-large is-rounded">go to hidden content</a>
        {:else}    
            <a href="/login" class="button is-primary is-large is-rounded">login to see things</a>
        {/if}
    </div>
</div>
