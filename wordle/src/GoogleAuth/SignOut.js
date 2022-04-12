// Import the functions you need from the SDKs you need
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";

function SignOut() {
  const history = useNavigate();

  const signOutGoogle = () => {
    auth.signOut().then((result) => {
      console.log(result);
      localStorage.clear();
      history("/");
    });
  };

  return (
    <div>
      <button onClick={signOutGoogle}>Sign Out</button>
    </div>
  );
}

export default SignOut;
