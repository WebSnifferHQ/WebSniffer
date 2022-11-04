<script>
    import SiteUrlForm from "$lib/components/lookup/SiteUrlForm.svelte"
    import {page} from "$app/stores"

    const currentPath = $page.url.pathname;
    const serverParameterName = "url";

    let data = undefined;

    async function checkSite(urlToCheck) {
        const fetchUrl = currentPath + `?${serverParameterName}=${urlToCheck}`;
        const response = await fetch(fetchUrl);
        data = (await response.json()).data;
    }
</script>


<h1><a href="/lookup/domain-age" style="text-decoration: none;">Domain Age</a></h1>

<SiteUrlForm
    label="Enter a site to see when it was first registered"
    submit_button_text="whois"
    on_submit={checkSite} />

<p>{data}</p>