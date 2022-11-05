<script>
  import SiteUrlForm from "$lib/components/lookup/SiteUrlForm.svelte";
  import { page } from "$app/stores";

  const currentPath = $page.url.pathname;
  const serverParameterName = "url";

  let regDate = "";
  let domainName = "";
  let age = "";
  let data = undefined;
  //   let dataParts = [];

  async function checkSite(urlToCheck) {
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
    var month_age = Math.floor(day_age / 30);
    day_age = day_age % 30;
    age = ` ${year_age} years, ${month_age} month(s), ${day_age} days`;
    domainName = urlToCheck;
  }
</script>

<div class="container">
  <h1>
    <a href="/lookup/domain-age" style="text-decoration: none;">Domain Age</a>
  </h1>

  <SiteUrlForm
    label="Enter a site to see when it was first registered"
    submit_button_text="Get Information"
    on_submit={checkSite}
  />

  <!-- if no data, nothing is displayed -->
  {#if regDate}
    <div class="results">
      <p> <span class="info-label">Domain Name: </span> {domainName}</p>
      <p> <span class="info-label">Registered on: </span> {regDate}</p>
      <p> <span class="info-label">The Age of the site is: </span> {age}</p>
    </div>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
  .results {
    max-width: 736px;
    margin-top: 1rem;
    font-size: 1rem;
  }
  .info-label {
    font-weight: bold;

  }
</style>
