import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { useApi } from '../../context/apiContext';
import { setUser } from '../../redux-store/actions/actions';

import { LoginFormWrapper } from './styled';

const LoginForm = () => {
  const { loginUser } = useApi();
  const dispatch = useDispatch();

  const [ form, setForm ] = useState( {
    username: '',
    password: '',
  } );

  const changeHandler = ( event ) => {
    setForm( { ...form, [ event.target.name ]: event.target.value } );
  };
  const onLogin = async ( e ) => {
    e.preventDefault();

    await loginUser( form )
        .then( ( res ) => dispatch( setUser( res ) ) )
        .catch( ( err ) => console.error( err ) );
  };

  return (
    <LoginFormWrapper>
      <form>
        <h1 className='title'>Вхід в адмінку:</h1>

        <input
          type="text"
          name='username'
          placeholder='login'
          onChange={ ( e ) => changeHandler( e ) }
          required={ true }
        />

        <input
          type="password"
          name='password'
          placeholder='password'
          onChange={ ( e ) => changeHandler( e ) }
          required={ true }
        />

        <button
          onClick={ ( e ) => onLogin( e ) }
          type='button'
          className='form_btn'
        >
          Ввійти
        </button>
      </form>
    </LoginFormWrapper>
  );
};

export default LoginForm;
