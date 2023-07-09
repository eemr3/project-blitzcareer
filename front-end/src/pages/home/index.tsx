import Board from '../../components/Board';
import NavBar from '../../components/NavBar';
import Page from '../../components/template/Page';
import { withAuth } from '../../hof/withAuth';
import { useAuthHttp } from '../../hooks/useAuthHttp';

function Home() {
  const { data: user, error } = useAuthHttp('users');
  return user ? (
    <Page>
      <NavBar />
      <Board />
    </Page>
  ) : null;
}

export const getServerSideProps = withAuth(
  async (ctx: any, cookies: any, payload: any) => {
    // const { data } = await http.get("test-auth", {
    //   headers: {
    //     Authorization: `Bearer ${cookies.token}`,
    //   },
    // });
    return {
      props: {},
    };
  },
);

export default Home;
