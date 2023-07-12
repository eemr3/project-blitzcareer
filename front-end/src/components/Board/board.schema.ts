import * as yup from 'yup';

export const boardSchema = yup.object().shape({
  title: yup.string().required('O título é obrigatório'),
  description: yup.string().required('A descrição é obrigatória'),
});
