<script>
    import { enhance } from '$app/forms';
    export let form;
</script>

<form method="post" use:enhance>
    <input name="url"/>
    <button type="submit">Who Is</button>
    {#if form}
        {#each form as singleWhoisServer}
            <h3>{singleWhoisServer.server}</h3>
            {#each singleWhoisServer.data as item}
                <p>{item}</p>
            {/each}
        {/each}
    {/if}
</form>