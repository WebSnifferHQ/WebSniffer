<script>
    import { enhance } from '$app/forms';

    export let form;

    $: message = getMessage(form);
     
    function getMessage(state) {
        let tempMessage = "";
        switch(state) {
            case true: {
                tempMessage = "The site is online";
                break;
            }
            case false: {
                tempMessage = "The site is offline";
                break;
            }
            default: {
                tempMessage = "Enter a site to check";
            }
        }
        return tempMessage;
    }
</script>

<div>
    <form method="post" use:enhance>
        <input name="url"/>
        <button type="submit">Check if online</button>
    </form>
    <p>{message}</p>
</div>