import { ToastContainer } from 'react-toastify';
import CookieConsent from '../../components/CookieConsent';
import { LoginForm } from '../../components/LoginForm';
import LoginAndRegister from '../../components/template/LoginAndRegister';
import Page from '../../components/template/Page';
import RedirectIfAuthenticated from '../../components/RedirectIfAuthenticated';

export default function Login() {
  return (
    <Page>
      <LoginAndRegister>
        <ToastContainer />
        <RedirectIfAuthenticated>
          <LoginForm />
        </RedirectIfAuthenticated>
      </LoginAndRegister>
      <CookieConsent />
    </Page>
  );
}
