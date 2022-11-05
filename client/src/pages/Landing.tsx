import styled from 'styled-components';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/Testing';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Im baby slow-carb vibecession hot chicken quinoa direct trade master cleanse man bun
            scenester yes plz stumptown humblebrag fanny pack jianbing. Synth literally edison bulb,
            la croix vibecession blue bottle taiyaki green juice man braid tumblr pour-over tbh
            prism try-hard.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
