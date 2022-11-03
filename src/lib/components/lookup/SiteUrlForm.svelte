<script>
    export let label = "";
    export let submit_button_text = "";
    export let on_submit = (_urlToCheck) =>{};

    let urlToCheck = "";
</script>

<form on:submit|preventDefault={() => {on_submit(urlToCheck)}}>
    <label for="url">{label}</label>
    <input id="url" bind:value={urlToCheck}/>
        
    <button type="submit">{submit_button_text}</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
    }
</style>