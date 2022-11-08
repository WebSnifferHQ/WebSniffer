<script>
  import SiteUrlForm from "$lib/components/lookup/SiteUrlForm.svelte";
  import { page } from "$app/stores";
  import { Card, Center, Group, Container, Text } from "@svelteuidev/core";

  const currentPath = $page.url.pathname;
  const serverParameterName = "url";

  let regDate = "";
  let domainName = "";
  let age = "";
  let data = "";
  let error = "";
  //   let dataParts = [];

  async function checkSite(urlToCheck) {
    try {
      const fetchUrl = currentPath + `?${serverParameterName}=${urlToCheck}`;
      const response = await fetch(fetchUrl);
      data = (await response.json()).data;
      let dataParts = data.split("T");
      regDate = dataParts[0];

      let today = new Date();
      let dateOfReg = new Date(regDate);

      //calculate the difference in the dates
      var diffInMillisecond = today.valueOf() - dateOfReg.valueOf();

      //convert the difference in milliseconds to years and months and days
      var year_age = Math.floor(diffInMillisecond / 31536000000);
      var day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);
      age = ` ${year_age} years, ${day_age} days`;
      domainName = urlToCheck;
      error = '';
    } catch (err) {
      alert("Unable to resolve  >> " + urlToCheck + " <<  Try again later");
    }
  }
</script>

<Container>
  <Center>
    <h1>
      <a href="/lookup/domain-age" style="text-decoration: none;">Domain Age</a>
    </h1>
  </Center>

  <SiteUrlForm
    label="Enter a site to see when it was first registered"
    submit_button_text="Get Information"
    on_submit={checkSite}
  />

  <!-- if no data, nothing is displayed -->
  {#if regDate}
    <Card shadow="sm" mt="1rem">
      <Group m="md">
        <Text weight={500} pr="xl">Domain name:</Text>
        <Text weight={400} pl="xl">{domainName}</Text>
      </Group>
      <Group m="md">
        <Text weight={500} pr="xl">Registered:</Text>
        <Text weight={400} pl="xl">{regDate}</Text>
      </Group>
      <Group m="md">
        <Text weight={500} pr="xl">Age:</Text>
        <Text weight={400} pl="xl">{age}</Text>
      </Group>
    </Card>
  {/if}
</Container>
