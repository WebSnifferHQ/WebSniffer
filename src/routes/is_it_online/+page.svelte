<script>
    import { page } from '$app/stores';
    import  getMessage from './usecases/getMessage.js';

    const currentPath = $page.url.pathname;
    const serverParameterName = "url";

    let message = "";
    let urlToCheck = "";
     

    async function checkSite() {
        const fetchUrl = currentPath + `?${serverParameterName}=${urlToCheck}`;

        const response = await fetch(fetchUrl);
        const responseJson = await response.json();

        const isOnlineMessage = getMessage(responseJson.is_alive);
        message = `${responseJson.url_to_check} ${isOnlineMessage}`;
    }
</script>

<div>
    <form on:submit|preventDefault={checkSite}>
        <label value="Enter a site to check if it's online or not">
            <input bind:value={urlToCheck}/>
        </label>
        <button type="submit">Check if online</button>
    </form>
    <p>{message}</p>
</div>