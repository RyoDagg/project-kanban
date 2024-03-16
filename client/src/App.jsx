import { Routes, Route, useNavigate } from "react-router-dom";

import axios from "axios";
import Login from "./components/auth/Login.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import Home from "./components/Home.jsx";

function App() {

  const navigateTo = useNavigate();

  const login = async (username, password) => {
    try {
      const { data, status } = await axios.post(
        "http://127.0.0.1:3000/api/auth/signin",
        { username, password }
      );
      if (status == 200) {
        localStorage.setItem("x-token", data);
        navigateTo("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = async (username, password, email, fullName, image) => {
    try {
      const formValues = { username, password, email, fullName, image }
      const formData = new FormData();
      for (const key in formValues) {
        formData.append(key, formValues[key])
      }

      const { status } = await axios.post(
        "http://127.0.0.1:3000/api/auth/signup",
        formData
      );

      if (status == 200) {
        navigateTo("/login");
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Routes>

        <Route path="/login" element={<Login login={login} />} />
        <Route path="/signup" element={<SignUp signUp={signUp} />} />

        <Route path="/*" element={<Home />} />

      </Routes>
    </>
  );
}

export default App;
