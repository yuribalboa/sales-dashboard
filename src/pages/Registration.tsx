import { Box, Container, Grid } from '@mui/material'
import {
  BannerImage,
  FormComponent,
  StyledH1,
  StyledP,
  StyledUl,
  Logo,
} from '@/components'
import { pxToRem } from '@/assets/utils'

function Registration() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
          >
            <Container maxWidth="sm">
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <Logo height={41} width={100} />
              </Box>

              <Box sx={{ marginBottom: pxToRem(24) }}>
                <StyledH1>Faça seu cadastro</StyledH1>
                <StyledP>Primeiro, diga-nos quem você é</StyledP>
                <StyledUl>
                  <li>Entre 8 e 16 caracteres;</li>
                  <li>Pelo menos uma letra maiúscula;</li>
                  <li>Pelo menos um caracter especial;</li>
                  <li>Pelo menos um número;</li>
                </StyledUl>
              </Box>

              <FormComponent
                inputs={[
                  { type: 'email', placeholder: 'Email' },
                  { type: 'password', placeholder: 'Senha' },
                ]}
                buttons={[
                  { className: 'primary', type: 'submit', children: 'Login' },
                ]}
                message={{
                  msg: 'Sucesso!!!',
                  type: 'success',
                }}
              />
            </Container>
          </Grid>

          <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Container maxWidth="sm">
              <BannerImage />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Registration
