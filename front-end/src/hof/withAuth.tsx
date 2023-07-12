import { getPayload, isTokenExpired } from '../shared/auth';
import { parseCookies } from '../shared/cookies';

export function withAuth(func: any) {
  return async (ctx: any) => {
    const cookies = parseCookies(ctx.req);

    if (!cookies.access_token || isTokenExpired(cookies.access_token)) {
      return {
        redirect: {
          permanent: false,
          destination: '/login',
        },
      };
    }

    const payload = getPayload(cookies.access_token);

    const result = await func(ctx, cookies, payload);
    if ('props' in result) {
      result.props = {
        payload,
        ...result.props,
      };
    }

    return result;
  };
}
