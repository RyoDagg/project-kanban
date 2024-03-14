import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProjectsList from "./components/project/ProjectsList.jsx";
import axios from "axios";
import Navbar from "./components/Navbar.jsx";
import Kanban from "./components/tasks/Kanban.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
function App() {

  const [user, setUser] = useState(null)

  const navigateTo = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('x-token')
    if (token) {
      getUser(token)
      navigateTo('/');
    } else {
      navigateTo('/login');
    }
  }, [])

  useEffect(() => {
    if (user) {
      navigateTo('/');
    } else {
      navigateTo('/login');
    }
  }, [user])

  const getUser = (token) => {
    axios.get('http://127.0.0.1:3000/api/user/mydata', {
      headers: {
        'x-token': token,
      }
    })
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }

  const login = async (username, password) => {
    try {
      const { data, status } = await axios.post('http://127.0.0.1:3000/api/auth/signin', { username, password })
      if (status == 200) {
        localStorage.setItem('x-token', data)
        navigateTo('/')
      }

    } catch (error) {
      console.error(error)
      alert('makech mawjoud')
    }
  }

  const signUp = async (username, password, email, fullName) => {
    try {
      const { status } = await axios.post('http://127.0.0.1:3000/api/auth/signup', { username, password, email, fullName })
      if (status == 200) {
        navigateTo('/login')
      }

    } catch (error) {
      console.error(error)
      alert('famma error')
    }
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/signup" element={<SignUp signUp={signUp} />} />
        <Route path="/" element={<ProjectsList user={user} />} />
        <Route path="/project" element={<Kanban />} />
      </Routes>
    </>
  );
}

export default App;
