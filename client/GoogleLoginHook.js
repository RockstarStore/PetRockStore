import React, { useRef, useEffect, useState } from 'react';
import { useGoogleLogin } from 'react-google-login';
import GoogleLogin from 'react-google-login';
import refreshTokenSetup from './auth_tok/refreshTokenSetup';

const { CLIENT_ID } = process.env;
const clientId = CLIENT_ID;

const GoogleLoginHook = () => {
  const [user, setUser] = useState(null);
  const onSuccess = async (res) => {
    try {
      const { profileObj } = res;
      console.log('Login successful: currentuser: ', profileObj);
      const { email, name, imageUrl } = profileObj;
      const user = { email, name, imageUrl };
      setUser(user);
      document.cookie = 'email=' + email.split('@')[0];
      await refreshTokenSetup(res);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const onFailure = (res) => {
    console.log('Login failed: res: ', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });

  return (
    <div id="sign-in">
      {/* <Login /> */}
      {!user && <GoogleLogin clientId={clientId} onSuccess={onSuccess} />}
      {user && (
        <>
          <p>Welcome to RockStar, {user.name}</p>
          <img src={user.imageUrl} alt="user-pfp" />
          {/* <button onClick={signIn} className="button">
                        <span className="buttonText"></span>
                    </button> */}
        </>
      )}
    </div>
  );
};

export default GoogleLoginHook;
