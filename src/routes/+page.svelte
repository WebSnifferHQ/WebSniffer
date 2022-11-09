<script>
  import { Card, Center, Container, Grid } from "@svelteuidev/core";
</script>

<Container>
  <Center>
    <h1>WebSniffer</h1>
  </Center>
  <Grid justify="center" align="center">
    <Grid.Col span={4}>
      <Card override={{ backgroundColor: '$blue300', display: 'flex', justifyContent:'center', margin:'1rem' }}>
        <a href="/lookup/whois">WHOIS lookup</a>
      </Card>
    </Grid.Col>
    <Grid.Col span={4}>
      <Card override={{ backgroundColor: '$blue300', display: 'flex', justifyContent:'center', margin:'1rem' }}>
        <a href="/lookup/is-it-online">Is it online</a>
      </Card>
    </Grid.Col>
    <Grid.Col span={4}>
      <Card override={{ backgroundColor: '$blue300', display: 'flex', justifyContent:'center', margin:'1rem' }}>
        <a href="/lookup/domain-age">Domain age</a>
      </Card>
    </Grid.Col>
  </Grid>
</Container>

<style>
</style>
