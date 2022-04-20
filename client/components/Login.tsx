import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Context } from '../Context';
import { connect } from 'react-redux';
import { setUser } from '../actions/actions';

// interface StateProps {
//   userID?: number;
// }

// interface DispatchProps {
//   setUser: (userID: any) => void;
// }
// type Props = StateProps & DispatchProps;

// const mapStateToProps = (state: any): StateProps => ({
//   userID: state.shop.userID,
// });

// const mapDispatchToProps = (dispatch: any): DispatchProps => ({
//   setUser: (userID: any) => dispatch(setUser(userID)),
// });

// type StateProps = ReturnType<typeof mapStateToProps>;
// type DispatchProps = typeof mapDispatchToProps;
//rename function Login, so we can connect at the end
//export default function
// function Login(props: any): JSX.Element
export default function (props: any) {
  const getFieldInputs = () => {
    const username = ($('#username')[0] as HTMLInputElement).value;
    const password = ($('#password')[0] as HTMLInputElement).value;
    if (!username || !password) {
      youMessedUp();
      return false;
    }
    return { username, password };
  };

  const youMessedUp = () => {
    ReactDOM.render(
      <div id="retry-login">
        <h4 style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}>
          Awwwww... Why don't we try this again with a valid username and
          password, ok?
        </h4>
        <a
          onClick={() => location.reload()}
          className="waves-effect waves-light btn valign-wrapper"
        >
          <i className="material-icons">refresh</i> Retry
        </a>
        <br></br>
        <img
          style={{ height: '400px' }}
          src="https://c.tenor.com/-CfhczC_cREAAAAC/angai313-spongebob-sad.gif"
        ></img>
      </div>,
      document.getElementById('login-form')
    );
  };

  const login = async () => {
    const inputs = getFieldInputs();
    if (!inputs) return;
    const optionsObject = {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify(inputs),
    };
    const loginAttempt = await fetch('/users/verify', optionsObject).then(
      (res) => res.json()
    );
    const { id } = loginAttempt;
    if (loginAttempt.err) youMessedUp();
    // props.setUser(id);
    console.log('successful login');
  };

  const signup = async () => {
    const inputs = getFieldInputs();
    if (!inputs) return;
    const optionsObject = {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify(inputs),
    };
    const signupAttempt = await fetch('/users/signup', optionsObject).then(
      (res) => res.json()
    );
    console.log(signupAttempt);
  };

  return (
    <div id="login-form" className="row">
      <form className="col s12 m8">
        <div className="row">
          <div className="input-field col s6">
            <input id="username" type="text" className="validate" />
            <label htmlFor="first_name">Username</label>
          </div>
          <div className="input-field col s6">
            <input id="password" type="password" className="validate" />
            <label htmlFor="last_name">Password</label>
          </div>
        </div>
        <div className="row">
          <a
            onClick={login}
            className="waves-effect waves-light btn valign-wrapper"
          >
            <i className="material-icons">login</i> Log In
          </a>
          <a
            onClick={signup}
            className="waves-effect waves-light btn valign-wrapper"
          >
            <i className="material-icons">person_add</i> Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}
// export default connect<StateProps, DispatchProps, Props>(
//   mapStateToProps,
//   mapDispatchToProps
// )(Login);
/*
import { connect } from 'react-redux'

interface StateProps {
  isOn: boolean
}

interface DispatchProps {
  toggleOn: () => void
}

interface OwnProps {
  backgroundColor: string
}

type Props = StateProps & DispatchProps & OwnProps

const mapState = (state: RootState) => ({
  isOn: state.isOn,
})

const mapDispatch = {
  toggleOn: () => ({ type: 'TOGGLE_IS_ON' }),
}

const MyComponent = (props: Props) => (
  <div style={{ backgroundColor: props.backgroundColor }}>
    <button onClick={props.toggleOn}>
      Toggle is {props.isOn ? 'ON' : 'OFF'}
    </button>
  </div>
)

// Typical usage: `connect` is called after the component is defined
export default connect<StateProps, DispatchProps, OwnProps>(
  mapState,
  mapDispatch
)(MyComponent)
*/
