/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// COMPONENTS
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

//HOOKS
import { useFormValidation, usePost } from '@/hooks'

//REDUX
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux'
import { setProfileData, setMessage } from '@/redux/slices/createProfile'

//TYPES
import { CreateProfileData, InputProps } from '@/types'

function Registration() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { email } = useSelector((state: RootState) => state.createProfile)

  const { data, loading, error, postData } = usePost<string, CreateProfileData>(
    'profile/create'
  )

  // FORM STEP1
  const step1Inputs: InputProps[] = [
    { name: 'name', type: 'text', placeholder: 'Nome', required: true },
    { name: 'email', type: 'email', placeholder: 'Email' },
    { name: 'phone', type: 'tel', placeholder: 'Telefone', required: true },
  ]

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(
      setProfileData({
        email: String(step1FormValues[1]),
      })
    )
  }

  const {
    formValues: step1FormValues,
    formValid: step1FormValid,
    handleChange: step1FormHandleChange,
  } = useFormValidation(step1Inputs)

  // FORM STEP2
  const step2Inputs: InputProps[] = [{ type: 'password', placeholder: 'Senha' }]

  const handleStep2 = async (e: React.FormEvent) => {
    e.preventDefault()
    await postData({
      name: String(step1FormValues[0]),
      email: String(step1FormValues[1]),
      phone: String(step1FormValues[2]),
      password: String(step2FormValues[0]),
    })
  }

  const {
    formValues: step2FormValues,
    formValid: step2FormValid,
    handleChange: step2FormHandleChange,
  } = useFormValidation(step2Inputs)

  const handleStepInputs = email ? step2Inputs : step1Inputs

  useEffect(() => {
    if (data !== null) {
      dispatch(setMessage('Usuario criado com sucesso!'))
      navigate('/')
    } else if (error)
      alert(
        `Não foi possível realizar a operação. Entre em contato com nosso suporte (${error})`
      )
  }, [data, error, navigate])

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
                <StyledH1>
                  {email ? 'Defina sua senha' : 'Faça seu cadastro'}
                </StyledH1>
                <StyledP>
                  {email
                    ? 'Sua senha deve ter:'
                    : 'Primeiro, diga-nos quem você é'}
                </StyledP>
                {email && (
                  <StyledUl>
                    <li>Entre 8 e 16 caracteres;</li>
                    <li>Pelo menos uma letra maiúscula;</li>
                    <li>Pelo menos um caracter especial;</li>
                    <li>Pelo menos um número;</li>
                  </StyledUl>
                )}
              </Box>

              <FormComponent
                inputs={handleStepInputs.map((input, index) => ({
                  type: input.type,
                  placeholder: input.placeholder,
                  value: email
                    ? step2FormValues[index] || ''
                    : step1FormValues[index] || '',
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    email
                      ? step2FormHandleChange(
                          index,
                          (e.target as HTMLInputElement).value
                        )
                      : step1FormHandleChange(
                          index,
                          (e.target as HTMLInputElement).value
                        ),
                }))}
                buttons={[
                  {
                    className: 'primary',
                    disabled: email
                      ? !step2FormValid || loading
                      : !step1FormValid,
                    onClick: email ? handleStep2 : handleStep1,
                    type: 'submit',
                    children: email ? 'Enviar' : 'Próximo',
                  },
                ]}
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
