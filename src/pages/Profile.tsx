/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { AppThemeContext } from '@/contexts/AppThemeContext'
import Cookies from 'js-cookie'

//COMPONENTS
import {
  CardComponents,
  FormComponent,
  Header,
  StyledButton,
  StyledH2,
} from '@/components'
import { Container, Grid } from '@mui/material'

//HOOK
import { useFormValidation, useGet, usePut, useDelete } from '@/hooks'

//SERVICES
import { logout } from '@/services'

//TYPES
import {
  InputProps,
  ProfileData,
  ProfileEditableData,
  MessageProps,
} from '@/types'

function Profile() {
  const themeContext = useContext(AppThemeContext)

  //HOOKS
  const [updatedMessage, setUpdatedMessage] = useState<MessageProps>({
    type: 'success',
    msg: '',
  })

  const clearMessage = () => {
    setTimeout(() => {
      setUpdatedMessage({
        type: 'success',
        msg: '',
      })
    }, 3000)
  }

  const {
    data: profileData,
    loading: profileLoading,
    error: profileError,
  } = useGet<ProfileData>('profile')

  const {
    data: profileUpdatedData,
    putData: profilePutData,
    loading: profileUpdatedLoading,
    error: profileUpdatedError,
  } = usePut<ProfileEditableData>('profile/update')

  const { deleteData: profileDeleteData, loading: profileDeleteLoading } =
    useDelete('profile/delete')

  useEffect(() => {
    if (profileData) {
      handleChange(0, profileData.name)
      handleChange(1, profileData.email)
      handleChange(2, profileData.phone)
    }
  }, [profileData])

  //FORM
  const inputs: InputProps[] = [
    { name: 'name', type: 'text', placeholder: 'Nome', required: true },
    { name: 'email', type: 'email', placeholder: 'Email', disabled: true },
    { name: 'phone', type: 'tel', placeholder: 'Telefone', required: true },
  ]
  const { formValues, formValid, handleChange } = useFormValidation(inputs)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await profilePutData({
      name: String(formValues[0]),
      phone: String(formValues[2]),
    })
  }

  const handleDelete = async () => {
    if (
      confirm(
        'Tem certeza que deseja excluir sua conta? Se sim, certifique-se de deletar os seus leads antes.'
      ) === true
    ) {
      try {
        await profileDeleteData()
        alert('Perfil deletado com sucesso!')
        Cookies.remove('Authorization')
        window.location.href = '/'
      } catch (e) {
        alert(
          'Não foi possível realizar a operação. Entre em contato com nosso suporte.'
        )
      }
    }
  }

  useEffect(() => {
    if (profileUpdatedData !== null) {
      setUpdatedMessage({
        msg: 'Perfil atualizado com sucesso.',
        type: 'success',
      })
    } else if (profileUpdatedError) {
      setUpdatedMessage({
        msg: 'Não foi possível realizar a operação.',
        type: 'error',
      })
    }
    clearMessage()
  }, [profileUpdatedData, profileUpdatedError])

  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            {!profileError && (
              <CardComponents
                className={
                  profileLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''
                }
              >
                {!profileLoading && profileData && (
                  <>
                    <StyledH2 className="mb-1">Seus Dados</StyledH2>
                    <FormComponent
                      inputs={inputs.map((input, index) => ({
                        ...input,
                        type: input.type,
                        placeholder: input.placeholder,
                        value: formValues[index] || '',
                        onChange: (e: ChangeEvent<HTMLInputElement>) =>
                          handleChange(
                            index,
                            (e.target as HTMLInputElement).value
                          ),
                      }))}
                      buttons={[
                        {
                          className: 'primary',
                          disabled: !formValid || profileUpdatedLoading,
                          type: 'submit',
                          onClick: handleSubmit,
                          children: profileUpdatedLoading
                            ? 'Aguarde...'
                            : 'Atualizar meu perfil',
                        },

                        {
                          className: 'alert',
                          disabled: profileDeleteLoading,
                          type: 'button',
                          onClick: handleDelete,
                          children: profileDeleteLoading
                            ? 'Aguarde...'
                            : 'Excluir minha conta',
                        },
                      ]}
                      message={updatedMessage}
                    />
                  </>
                )}
              </CardComponents>
            )}
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
