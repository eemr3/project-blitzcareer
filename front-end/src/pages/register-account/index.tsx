import LoginAndRegister from '../../components/template/LoginAndRegister';
import { RegisterForm } from '../../components/RegisterForm';
import { ToastContainer } from 'react-toastify';

export default function RegisterAccount() {
  return (
    <LoginAndRegister>
      <ToastContainer />
      <RegisterForm />
    </LoginAndRegister>
  );
}
