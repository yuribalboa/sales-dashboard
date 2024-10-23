import { CardComponents, Header } from '@/components'
import { Container } from '@mui/material'

function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponents>CARD</CardComponents>
      </Container>
      <h1>Home</h1>
    </>
  )
}

export default Home
