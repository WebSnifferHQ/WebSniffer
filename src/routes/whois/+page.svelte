<script>
    import { page } from '$app/stores';

    const currentPath = $page.url.pathname;
    const serverParameterName = "url";

    let urlToCheck = "";
    let data = undefined;

    async function checkSite() {
        const fetchUrl = currentPath + `?${serverParameterName}=${urlToCheck}`;
        const response = await fetch(fetchUrl);
        data = (await response.json()).data;
        console.log(data);
    }
</script>

<div>
    <form on:submit|preventDefault={checkSite}>
        <label value="Enter a site to check it's WHOIS records">
            <input bind:value={urlToCheck}/>
        </label>
        <button type="submit">whois</button>
    </form>

    {#if data}
        {#each data as singleWhoisServer}
            <h2>WHOIS server: {singleWhoisServer.server}</h2>
            {#each Object.entries(singleWhoisServer.data) as item}
                <pre>{item}</pre>
            {/each}
        {/each}
    {/if}

</div>
