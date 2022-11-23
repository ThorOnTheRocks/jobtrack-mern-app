import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to='add-job'>add job</Link>
        <Link to='all-jobs'>all jobs</Link>
        <Link to='stats'>stats</Link>
        <Link to='profile'>profile</Link>
      </nav>
    </Wrapper>
  );
};

export default SharedLayout;
