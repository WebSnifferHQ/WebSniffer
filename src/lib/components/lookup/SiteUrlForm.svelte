<script>
  export let label = "";
  export let submit_button_text = "";
  export let on_submit = (_urlToCheck) => {};

  import { Button, TextInput } from "@svelteuidev/core";

  let urlToCheck = "";
</script>

<form
  on:submit|preventDefault={() => {
    on_submit(urlToCheck);
  }}
>
  <TextInput
    {label}
    placeholder={label}
    variant="filled"
    size="md"
    required={false}
    bind:value={urlToCheck}
  >
    <svelte:fragment slot="rightSection">
      <Button size="md" type='submit'>
        {submit_button_text}
      </Button>
    </svelte:fragment>
  </TextInput>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
