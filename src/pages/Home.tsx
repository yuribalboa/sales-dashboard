import { AvatarList, CardComponents, Header } from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/assets/utils'

function Home() {
  const mockListData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(4234.54),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(3234.54),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(2234.54),
    },
  ]
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponents>CARD</CardComponents>
        <CardComponents>
          <AvatarList listData={mockListData} />
        </CardComponents>
      </Container>
      <h1>Home</h1>
    </>
  )
}

export default Home
