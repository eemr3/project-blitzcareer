import { Formik } from 'formik';
import Link from 'next/link';
import { useContext } from 'react';
import { TodoContext } from '../../context/todo.context';
import { loginSchema } from '../../pages/login/login.schema';
import InputText from '../Form/InputText';

export function LoginForm() {
  const { sigIn } = useContext(TodoContext);

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Faça login em sua conta
        </h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            sigIn(values);
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form noValidate className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <InputText
                  value={values.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@email.com"
                />
                {touched && errors.email && (
                  <span className="text-orange-600 text-xs">{errors?.email}</span>
                )}
              </div>
              <div>
                <InputText
                  value={values.password}
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                />
                {touched && errors.password && (
                  <span className="text-orange-600 text-xs">{errors?.password}</span>
                )}
              </div>
              <div className="flex items-center justify-between">
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
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Entrar
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Não tem uma conta ainda?{' '}
                <Link
                  href="/register-account"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Cadastre-se
                </Link>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}