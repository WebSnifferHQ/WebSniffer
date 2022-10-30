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

<h1><a href="/whois" style="text-decoration: none;">WHOIS Lookup</a></h1>

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
            <div style="background-color:#dcdcdc;border:1px solid grey;padding:5px;border-radius:5px;">
                {#each Object.entries(singleWhoisServer.data) as item}
                <p>{item}</p>
                {/each}
            </div>
        {/each}
    {/if}

</div>

<p>&laquo; <a href="/">WebSniffer</a></p>
