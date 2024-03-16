import { useLayoutEffect, useState, createContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import ProjectsList from "./components/project/ProjectsList.jsx";
import axios from "axios";
import Navbar from "./components/Navbar.jsx";
import Kanban from "./components/tasks/Kanban.jsx";
import Login from "./components/auth/Login.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import EditProject from "./components/project/EditProject.jsx";
import Index from "./components/project/Index.jsx";

export const GlobalContext = createContext()

function App() {


  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const navigateTo = useNavigate();

  useLayoutEffect(() => {
    const token = localStorage.getItem("x-token");
    if (token) {
      getUser(token);
    } else {
      navigateTo("/login");
    }
  }, []);

  useLayoutEffect(() => {
    if (user) {
      navigateTo("/");
      setLoading(false)
    } else {
      navigateTo("/login");
    }
  }, [user]);


  const getUser = (token) => {
    axios
      .get("http://127.0.0.1:3000/api/user/mydata", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  };

  const login = async (username, password) => {
    try {
      const { data, status } = await axios.post(
        "http://127.0.0.1:3000/api/auth/signin",
        { username, password }
      );
      if (status == 200) {
        localStorage.setItem("x-token", data);
        getUser(data);
      }
    } catch (error) {
      console.error(error);
      alert("makech mawjoud");
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
      alert("famma error");
    }
  };

  return (
    <>
      <GlobalContext.Provider value={user}>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/signup" element={<SignUp signUp={signUp} />} />
          <Route path="/" element={
            !loading ?
              <ProjectsList /> :
              <div className="flex justify-center mt-[100px]">
                <div className="w-[200px]">
                  <img src="https://1b-f.s3.eu-west-1.amazonaws.com/a/9695-39637E35-BE2B-43F5-82FE-8B735F0B00A9-0-1474608235.gif" alt="" />
                </div>
              </div>
          } />
          <Route path="/project/*" element={<Index />} />
        </Routes>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
