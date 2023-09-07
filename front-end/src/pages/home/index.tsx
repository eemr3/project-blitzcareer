import dynamic from 'next/dynamic';
import Board from '../../components/Board';
import Page from '../../components/template/Page';
import { http } from '../../service/api';
import { DataTasks } from '../../shared/interface/data-tasks';
import { withAuthServerSideProps } from '../../hoc/withAuth';

const NoSSR = dynamic(() => import('../../components/NavBar'), { ssr: false });

export interface HomeProps {
  data: DataTasks[];
}

function Home(props: HomeProps) {
  return (
    <Page>
      <NoSSR />
      <Board data={props.data} />
    </Page>
  );
}

export default Home;

export const getServerSideProps = withAuthServerSideProps(
  async (ctx: any, cookies: any, payload: any) => {
    const { data } = await http.get('/tasks', {
      headers: {
        Authorization: `Bearer ${cookies.access_token}`,
      },
    });

    return {
      props: { data },
    };
  },
);
