<script>
  import { Card, Center, Container, Grid } from "@svelteuidev/core";
</script>

<Container>
  <Center>
    <h1><a href="/" style="text-decoration: none;">WebSniffer</a></h1>
  </Center>
  <Grid justify="center" align="center">
    <Grid.Col span={3}>
      <Card override={{ backgroundColor: '$blue300', display: 'flex', justifyContent:'center', margin:'1rem' }}>
        <a href="/whois">WHOIS lookup</a>
      </Card>
    </Grid.Col>
    <Grid.Col span={3}>
      <Card override={{ backgroundColor: '$blue300', display: 'flex', justifyContent:'center', margin:'1rem' }}>
        <a href="/is-it-online">Is it online</a>
      </Card>
    </Grid.Col>
    <Grid.Col span={3}>
      <Card override={{ backgroundColor: '$blue300', display: 'flex', justifyContent:'center', margin:'1rem' }}>
        <a href="/domain-age">Domain age</a>
      </Card>
    </Grid.Col>
    <Grid.Col span={3}>
      <Card override={{ backgroundColor: '$blue300', display: 'flex', justifyContent:'center', margin:'1rem' }}>
        <a href="/ip">IP lookup</a>
      </Card>
    </Grid.Col>
  </Grid>
</Container>

<style>
</style>
