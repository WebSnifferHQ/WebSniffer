<script>
    import { page } from '$app/stores';
    import SiteUrlForm from '$lib/components/lookup/SiteUrlForm.svelte';

    const currentPath = $page.url.pathname;
    const serverParameterName = "url";

    let data = undefined;

    async function checkSite(urlToCheck) {
        const fetchUrl = currentPath + `?${serverParameterName}=${urlToCheck}`;
        const response = await fetch(fetchUrl);
        data = (await response.json()).formattedData;
    }
</script>

<h1><a href="/lookup/whois" style="text-decoration: none;">WHOIS Lookup</a></h1>

<div>
    <SiteUrlForm
    label="Enter a site to check it's WHOIS records"
    submit_button_text="whois"
    on_submit={checkSite} />

    {#if data}
        {#each data as singleWhoisServer}
            <h2>WHOIS server: {singleWhoisServer.server}</h2>
            <div class="whois_lookup_output">
                {#each Object.entries(singleWhoisServer.data) as item}
                <p>{item}</p>
                {/each}
            </div>
        {/each}
    {/if}

</div>

<style>
    .whois_lookup_output {
        background-color:#dcdcdc;
        border:1px solid grey;
        padding:5px;
        border-radius:5px;
    }
</style>
