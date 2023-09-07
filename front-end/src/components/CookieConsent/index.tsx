import Cookies from 'js-cookie';
import { MouseEvent, useEffect, useState } from 'react';

const USER_CONSENT_COOKIE_KEY = 'cookie_consent_is_true';
const USER_CONSENT_COOKIE_EXPIRE_DATE = new Date().getTime() + 365 * 24 * 60 * 60;

const CookieConsent = () => {
  const [cookieConsentIsTrue, setCookieConsentIsTrue] = useState(true);

  useEffect(() => {
    const consentIsTrue = Cookies.get(USER_CONSENT_COOKIE_KEY) === 'true';
    setCookieConsentIsTrue(consentIsTrue);
  }, []);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!cookieConsentIsTrue) {
      Cookies.set(USER_CONSENT_COOKIE_KEY, 'true', {
        expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
      });
      setCookieConsentIsTrue(true);
    }
  };

  if (cookieConsentIsTrue) {
    return null;
  }

  return (
    <section className="fixed bottom-0 left-0 w-full py-2 md:py-4 z-50">
      <div
        className="flex flex-col items-start px-5 py-3 space-y-2 bg-gray-200 
        md:flex-row md:space-y-0 md:items-stretch md:space-x-2"
      >
        <div className="flex items-center flex-grow text-gray-900">
          <p className="text-sm font-medium">
            Este site usa cookies para garantir que você obtenha a melhor experiência. Ao
            continuar a navegar no site, você está concordando com nosso uso de cookies.
          </p>
        </div>
        <div className="flex items-center">
          <button
            className="ml-4 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={onClick}
          >
            Entendi
          </button>
        </div>
      </div>
    </section>
  );
};

export default CookieConsent;
