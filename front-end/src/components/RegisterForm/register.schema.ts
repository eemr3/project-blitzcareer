import * as yup from 'yup';
export const registerSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('O e-mail de ser valído').required('O e-mail é obrigatório'),
  password: yup.string().required('A senha é obrigatória'),
});
