import { Formik } from 'formik';
import Link from 'next/link';
import React, { useContext } from 'react';
import InputText from '../Form/InputText';
import { TodoContext } from '../../context/TodoContext';
import { useRouter } from 'next/router';
import { registerSchema } from './register.schema';

export function RegisterForm() {
  const { createAccount } = useContext(TodoContext);
  const router = useRouter();
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Criar conta
        </h1>
        <Formik
          initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
          validationSchema={registerSchema}
          onSubmit={(values, { resetForm }) => {
            createAccount({
              name: values.name,
              email: values.email,
              password: values.password,
            });
            resetForm();
            router.push('/login');
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
              <div>
                <InputText
                  label="Seu Nome"
                  value={values.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nome completo"
                />
                {touched && errors.name && (
                  <span className="text-orange-600 text-xs">{errors?.name}</span>
                )}
              </div>
              <div>
                <InputText
                  label="Seu Email"
                  value={values.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                {touched && errors.email && (
                  <span className="text-orange-600 text-xs">{errors?.email}</span>
                )}
              </div>
              <div>
                <InputText
                  label="Sua Senha"
                  value={values.password}
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Senha"
                />
                {touched && errors.password && (
                  <span className="text-orange-600 text-xs">{errors?.password}</span>
                )}
              </div>
              {/* <div>
                <InputText
                  label="Confirmar sua Senha"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirmar Senha"
                />              
              </div> */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    Eu aceito os{' '}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Termos e Condições
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Criar conta
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                já tem uma conta?{' '}
                <Link
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Clique aqui
                </Link>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
