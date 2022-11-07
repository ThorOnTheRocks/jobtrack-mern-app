import { useState, useEffect, SetStateAction, ChangeEvent } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

export interface IRegisterState {
  name: string;
  email: string;
  password: string;
  isMember: boolean;
  showAlert: boolean;
}

const initialState: IRegisterState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState<IRegisterState>(initialState);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues(event.target.value);
  };

  const handleToggleMember = () => setValues({ ...values, isMember: !values.isMember });

  const onSubmit = (event: { preventDefault: () => void; target: any }) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {values.showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type='name'
            name='name'
            value={values.name}
            handleChange={handleChange}
            labelText={''}
          />
        )}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
          labelText={''}
        />
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
          labelText={''}
        />

        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={handleToggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
