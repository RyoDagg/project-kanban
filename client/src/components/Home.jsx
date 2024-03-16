import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react';

import Navbar from './Navbar'
import Index from './project/Index'
import ProjectsList from './project/ProjectsList';

export const GlobalContext = createContext()


const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigateTo = useNavigate();

  const token = localStorage.getItem("x-token");

  useEffect(() => {
    if (token) {
      getUser(token);
    } else {
      navigateTo("/login");
    }
  }, []);

  useEffect(() => {
    if (user) {
      setLoading(false)
    }
  }, [user]);


  const getUser = async (token) => {
    try {
      const { data } = await axios
        .get("http://127.0.0.1:3000/api/user/mydata", {
          headers: {
            "x-token": token,
          },
        })
      setUser(data)
    } catch (error) {
      localStorage.removeItem('x-token')
      navigateTo('/login')
      console.error(error)
    }
  };


  return (
    <div>
      <>
        <GlobalContext.Provider value={user}>
          {!loading ? <>
            <Navbar />
            <Routes>
              <Route path="/" element={
                <ProjectsList />
              } />
              <Route path="/project/*" element={<Index />} />
            </Routes>
          </> :
            <div className="flex justify-center mt-[100px]">
              <div className="w-[200px]">
                <h1 className='text-center text-[50px] font-[800] mb-0'>
                  <span className='text-[#E3E31C]'>
                    Kan
                  </span>
                  <span className='text-[#180B5B]'>
                    -Do
                  </span>
                </h1>
                <img src="https://1b-f.s3.eu-west-1.amazonaws.com/a/9695-39637E35-BE2B-43F5-82FE-8B735F0B00A9-0-1474608235.gif" alt="" />
              </div>
            </div>
          }
        </GlobalContext.Provider>

      </>
    </div >
  )
}

export default Home
