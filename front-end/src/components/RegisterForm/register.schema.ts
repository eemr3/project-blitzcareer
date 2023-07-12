import * as yup from 'yup';
export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'O nome deve ter no mínimo 3 caracteres')
    .max(70, 'O nome deve ter no máximo 70 caracteres')
    .required('O nome é obrigatório'),
  email: yup
    .string()
    .email('O e-mail de ser um email valído')
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'O e-mail de ser um email valído',
    )
    .required('O e-mail é obrigatório'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'A senha deve ter uma letra minúscula')
    .matches(/\w*[A-Z]\w*/, 'A senha deve ter letra maiúscula')
    .matches(/\d/, 'A senha deve ter um número')
    .matches(/[!+@#$%^&*()\-_"=+{}; :,<.>]/, 'A senha deve ter um caractere especial')
    .min(8, ({ min }) => `A senha deve conter pelo menos ${min} caracteres`)
    .max(20, ({ max }) => `A senha deve ter no máximo ${max} caracteres`)
    .required('A senha é obrigatória'),
});
