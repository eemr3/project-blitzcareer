import { ToastContainer } from 'react-toastify';
import CookieConsent from '../../components/CookieConsent';
import { LoginForm } from '../../components/LoginForm';
import LoginAndRegister from '../../components/template/LoginAndRegister';
import Page from '../../components/template/Page';

export default function Login() {
  return (
    <Page>
      <LoginAndRegister>
        <ToastContainer />
        <LoginForm />
      </LoginAndRegister>
      <CookieConsent />
    </Page>
  );
}
