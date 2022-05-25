import React from 'react';

const Login = () => {
    const google = () => {
        window.open("oauth-login-backend.herokuapp.com", "_self");
      };
    
      const github = () => {
        window.open("oauth-login-backend.herokuapp.com", "_self");
      };
    
      const facebook = () => {
        window.open("oauth-login-backend.herokuapp.com", "_self");
      };

    return(
        <div className='logincontainer'>
        <div className='login'>
                <h1 className='title'>Sign in using</h1>
          <div className='wrapper'>
            <div className='loginBtn google' onClick={google}>
              Google
            </div>
            <div className='loginBtn facebook' onClick={facebook}>
              Facebook
            </div>
            <div className='loginBtn github'onClick={github}>
              GitHub
            </div>
          </div>
        </div>
        </div>
      )
}

export default Login