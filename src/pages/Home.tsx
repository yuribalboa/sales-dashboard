import {
  AvatarList,
  CardComponents,
  CustomChart,
  CustomTable,
  Header,
} from '@/components'
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

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [
        <span>Nome 1</span>,
        <span>nome1@email.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Nome 2</span>,
        <span>nome2@email.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Nome 3</span>,
        <span>nome3@email.com</span>,
        <button>ACTION</button>,
      ],
    ],
  }

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponents>CARD</CardComponents>

        <CardComponents>
          <AvatarList listData={mockListData} />
        </CardComponents>

        <CardComponents>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponents>

        <CardComponents>
          <CustomChart
            labels={['Jan', 'Fev', 'Mar', 'Abr', 'Mai']}
            data={[1000.12, 2456.66, 432.56, 988.55, 1234.56]}
            type="line"
          />
        </CardComponents>
      </Container>
      <h1>Home</h1>
    </>
  )
}

export default Home
