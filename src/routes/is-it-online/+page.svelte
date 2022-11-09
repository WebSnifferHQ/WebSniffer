<script>
    import { page } from '$app/stores';
    import  getMessage from './usecases/getMessage.js';
    import SiteUrlForm from '$lib/components/lookup/SiteUrlForm.svelte';

    const currentPath = $page.url.pathname;
    const serverParameterName = "url";

    let message = "";
     

    async function checkSite(urlToCheck) {
        const fetchUrl = currentPath + `?${serverParameterName}=${urlToCheck}`;

        const response = await fetch(fetchUrl);
        const responseJson = await response.json();

        const isOnlineMessage = getMessage(responseJson.is_alive);
        message = `${responseJson.url_to_check} ${isOnlineMessage}`;
    }
</script>

<h1><a href="/is-it-online" style="text-decoration: none;">Is It Online</a></h1>

<div>
    <SiteUrlForm
    label="Enter a site to check if it's online or not"
    submit_button_text="Check if online"
    on_submit={checkSite} />

    <p>{message}</p>
</div>
