import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "./App.css";
function App() {
  const onSuccess = (response) => {
    axios
      .post("http://localhost:3000/register-google-user", response)
      .then((res) => {
        console.log(res.data);
      });
  };

  const onFailure = (response) => {
    console.log(response);
  };
  return (
    <div className="App">
      <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
      <button>Login With Apple</button>
    </div>
  );
}

export default App;
