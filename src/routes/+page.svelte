<script>
  import { Center, Container } from "@svelteuidev/core";
</script>

<Container>
  <Center>
    <h1>WebSniffer</h1>
  </Center>
  <ul>
    <li><a href="/lookup/whois">WHOIS lookup</a></li>
    <li><a href="/lookup/is-it-online">Is it online</a></li>
    <li><a href="/lookup/domain-age">Domain age</a></li>
  </ul>
</Container>

<style>
  ul li {
    text-decoration: none;
    font: 1em sans-serif;
    list-style-type: none;
    margin: .5rem;
    font-weight: 400;
  }
</style>
