<script>
  import { page } from "$app/stores";
  import SiteUrlForm from "$lib/components/lookup/SiteUrlForm.svelte";

  import { Card, Center, Paper, Container, Loader } from "@svelteuidev/core";

  const currentPath = $page.url.pathname;
  const serverParameterName = "url";

  $: data = undefined;
  $: loading = false;

  async function checkSite(urlToCheck) {
    data = undefined;
    loading = true;
    const fetchUrl = currentPath + `?${serverParameterName}=${urlToCheck}`;
    const response = await fetch(fetchUrl);
    data = (await response.json()).formattedData;
    loading = false;
  }
</script>

<Container>
  <Center>
    <h1>
      <a href="/lookup/whois" style="text-decoration: none;">WHOIS Lookup</a>
    </h1>
  </Center>
  <SiteUrlForm
    label="Enter a site to check it's WHOIS records"
    submit_button_text="whois"
    on_submit={checkSite}
  />

  {#if data}
    {#each data as singleWhoisServer}
      <Card bgColor="red" m="xs">
        <h2>WHOIS server: {singleWhoisServer.server}</h2>
        {#each Object.entries(singleWhoisServer.data) as item}
          <Paper shadow="sm" withBorder>{item}</Paper>
        {/each}
      </Card>
    {/each}
  {/if}

  <!-- loading, spinner is displayed -->

  {#if loading === true}
    <Card shadow="sm" mt="1rem">
      <Center>
        <Loader variant="dots" />
      </Center>
    </Card>
  {/if}
</Container>

<style>
</style>
