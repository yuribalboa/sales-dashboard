import { useContext } from 'react'
import { AppThemeContext } from '@/contexts/AppThemeContext'

//COMPONENTS
import { CardComponents, Header, StyledButton, StyledH2 } from '@/components'
import { Card, Container, Grid } from '@mui/material'

//SERVICES
import { logout } from '@/services'

function Profile() {
  const themeContext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <CardComponents>Seus dados...</CardComponents>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardComponents>
              <StyledH2 className="mb-1">Definições de conta</StyledH2>
              <StyledButton
                className="primary mb-1"
                onClick={themeContext?.toggleTheme}
              >
                Trocar para tema{' '}
                {themeContext?.appTheme === 'light' ? 'escuro' : 'claro'}
              </StyledButton>
              <StyledButton className="alert" onClick={logout}>
                Logout
              </StyledButton>
            </CardComponents>
          </Grid>
        </Grid>
      </Container>
      <CardComponents></CardComponents>
      <h1>Profile</h1>
    </>
  )
}

export default Profile
