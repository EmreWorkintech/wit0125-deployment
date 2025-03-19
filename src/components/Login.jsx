import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { email: '' },
    mode: 'onChange',
  });
  const { setUser } = useContext(UserContext);
  const { push } = useHistory();

  const submitFn = (data) => {
    axios.post('https://reqres.in/api/users', data).then((res) => {
      console.log(res.data);
      setUser(res.data);
      push('/products');
    });
  };
  return (
    <form onSubmit={handleSubmit(submitFn)}>
      <input
        {...register('email', {
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Geçerli email adresi giriniz....',
          },
        })}
        placeholder="Email adresinizi giriniz"
      />
      {errors.email && <p>{errors.email.message}</p>}
      <button>Login</button>
    </form>
  );
}
