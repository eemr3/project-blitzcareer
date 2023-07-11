import CookieConsent from '../../components/CookieConsent';
import { LoginForm } from '../../components/LoginForm';
import LoginAndRegister from '../../components/template/LoginAndRegister';

export default function Login() {
  return (
    <>
      <LoginAndRegister>
        <LoginForm />
      </LoginAndRegister>
      <CookieConsent />
    </>
  );
}
