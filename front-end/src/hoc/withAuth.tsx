import { getPayload, isTokenExpired } from '../shared/auth';
import { parseCookies } from '../shared/cookies';

export function withAuthServerSideProps(handler: any) {
  return async (context: any) => {
    const { req, res } = context;
    const cookies = parseCookies(req);

    // Verifica se não há um token de acesso ou se ele expirou
    if (!cookies.access_token || isTokenExpired(cookies.access_token)) {
      return {
        redirect: {
          permanent: false,
          destination: '/login',
        },
      };
    }

    const payload = getPayload(cookies.access_token);
    // console.log(context.resolvedUrl);

    // Chama o handler da página passando o contexto, cookies e payload
    const result = await handler(context, cookies, payload);

    if ('props' in result) {
      result.props = {
        payload,
        ...result.props,
      };
    }

    return result;
  };
}
