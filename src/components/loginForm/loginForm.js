import React from 'react';

const LoginForm = () => {
  const onSubmit = ( e ) => {
    const login = e.target.value.login;
    const password = e.target.value.password;

    if (
      login === process.env.REACT_APP_ADMIN_LOGIN
      && password === process.env.REACT_APP_ADMIN_PASSWORD
    ) {
      console.log( 'aloha' );
    }
  };

  return (
    <form>
      <input type="text" name='login'/>
      <input type="password" name='password'/>
      <button onClick={ ( e ) => onSubmit( e ) } type='button'>SIGN IN</button>
    </form>
  );
};

export default LoginForm;
