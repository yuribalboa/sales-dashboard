import { useContext } from 'react'
import { CardComponents, Header, StyledButton } from '@/components'
import { AppThemeContext } from '@/contexts/AppThemeContext'

function Profile() {
  const themeContext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <CardComponents>
        <StyledButton className="primary" onClick={themeContext?.toggleTheme}>
          Trocar para tema{' '}
          {themeContext?.appTheme === 'light' ? 'escuro' : 'claro'}
        </StyledButton>
      </CardComponents>
      <h1>Profile</h1>
    </>
  )
}

export default Profile
