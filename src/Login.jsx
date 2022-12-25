import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/user/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth?.user?.email,
                uid: userAuth?.user?.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((userAuth)=>{
      dispatch(login({
        email: userAuth?.user?.email,
        uid: userAuth?.user?.uid,
        displayName: userAuth?.user?.displayName,
        photoURL: userAuth?.user?.photoURL,
      }))
    }).catch((error) => {console.error(error);});
  };

  return (
    <div className="login">
      <img
        src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2022/08/Create-Linkedin-Cover.jpg"
        alt=""
      />
      <form action="">
        <input
          type="text"
          placeholder="Full name (required if resgistering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile pic URL (optional)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loginToApp}>Sign in</button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
}

export default Login;
