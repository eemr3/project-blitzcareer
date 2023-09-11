import { Formik } from 'formik';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { loginSchema } from './login.schema';
// import InputText from '../Form/CustomInput/InputRoot';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';
import { Input } from '../Form/CustomInput';
import Loading from '../Loading';

export function LoginForm() {
  const { sigIn, loading, setLoading } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Faça login em sua conta
        </h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={async (values) => {
            const loginRes = await sigIn(values);

            if (loginRes?.statusCode === 200) {
              return toast.success('Login realizado com sucesso', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
              });
            }
            if (loginRes?.response?.status === 401) {
              setLoading(false);
              return toast.error('Usuário ou senha inválidos', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
              });
            }
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form noValidate className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <Input.Root>
                  <Input.Label text="Email" htmlFor="email" />
                  <Input.CustomInput
                    value={values.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email@email.com"
                  />
                </Input.Root>
                {touched && errors.email && (
                  <span className="text-orange-600 text-xs">{errors?.email}</span>
                )}
              </div>
              <div>
                <Input.Root>
                  <Input.Label text="Senha" htmlFor="password" />
                  <Input.Password>
                    <Input.CustomInput
                      type={showPassword ? 'text' : 'password'}
                      placeholder="********"
                      id="pasword"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    {showPassword ? (
                      <EyeSlashIcon
                        className="h-6 w-6 absolute z-20 mr-2 cursor-pointer text-gray-100"
                        onClick={() => setShowPassword && setShowPassword(!showPassword)}
                      />
                    ) : (
                      <EyeIcon
                        className="h-6 w-6 absolute z-20 mr-2 cursor-pointer text-gray-100"
                        onClick={() => setShowPassword && setShowPassword(!showPassword)}
                      />
                    )}
                  </Input.Password>
                </Input.Root>

                {touched && errors.password && (
                  <span className="text-orange-600 text-xs">{errors?.password}</span>
                )}
              </div>
              {/* <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Lembrar
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-white"
                >
                  Esqueceu sua senha?
                </a>
              </div> */}
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 
                  focus:ring-4 focus:outline-none 
                    focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800
                  :disabled:bg-gray-400 dark:disabled:bg-gray-600"
                disabled={loading}
              >
                {loading ? <Loading /> : 'Entrar'}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Não tem uma conta ainda?{' '}
                <Link
                  href="/register-account"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Cadastre-se agora
                </Link>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
