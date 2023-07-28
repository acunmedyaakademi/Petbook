import {Form, Formik} from 'formik'
import Button from '@/components/button'
import Input from '@/components/input'
import Or from '@/components/or'
import {modal} from '@/stores/modal/actions'
import {registerSchema} from '@/validations'
import ModalTitle from '../../header'

export default function RegisterModal({destroyAll}) {
  return (
    <div className='w-[500px] max-w-full'>
      <ModalTitle title='Hesap Aç' />
      <Formik
        validationSchema={registerSchema}
        initialValues={{
          username: '',
          password: '',
          email: '',
          rules: false,
        }}
        onSubmit={(values) => console.log('values', values)}
      >
        <Form className='grid gap-y-4 p-4'>
          <Input name='username' label='Kullanıcı Adı' />
          <Input name='email' type='email' label='E-posta' />
          <Input name='password' type='password' label='Parola' />
          <Button>Hesap Aç</Button>
          <Or label='Zaten üye misin?' />
          <Button
            variant='primary'
            onClick={() => {
              destroyAll()
              modal.append('auth.login')
            }}
          >
            Oturum Aç
          </Button>
        </Form>
      </Formik>
    </div>
  )
}
