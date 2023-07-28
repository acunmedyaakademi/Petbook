import {Formik, Form} from 'formik'
import Button from '@/components/button'
import Input from '@/components/input'
import ModalTitle from '../../header'
import Or from '@/components/or'
import {modal} from '@/stores/modal/actions'
import {loginSchema} from '@/validations'

export default function LoginModal() {
  return (
    <>
      <ModalTitle title='Giriş yap' />
      <Formik
        validationSchema={loginSchema}
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={(values) => {
          console.log('gonderilen degerler', values)
        }}
      >
        <Form className='grid gap-y-4 p-4'>
          <Input label='Kullanıcı Adı' name='username' />
          <Input label='Parola' name='password' type='password' />
          <Button type='submit'>Giris yap</Button>
          <Or />
          <Button variant='primary' type='button' onClick={() => modal.append('auth.register')}>
            Hesap Aç
          </Button>
        </Form>
      </Formik>
    </>
  )
}
