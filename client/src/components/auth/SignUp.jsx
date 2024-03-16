import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = ({ signUp }) => {
  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState();

  const img = 'https://images.hdqwalls.com/download/yellow-dark-minimal-abstract-5k-2i-1280x2120.jpg'

  return (

    <>
      <div className='grid grid-cols-[1fr_2fr] '>
        <div
          className='h-screen opacity-90 shadow'
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover'
          }}
        >
        </div>

        <div className='mr-[120px]'>
          <div className='text-center font-[800] text-[55px] mx-1 mb-2 mt-5'>
            <span className='text-[#E3E31C]'>
              Kan
            </span>
            <span className='text-[#180B5B]'>
              -Do
            </span>
          </div>
          <div className="flex justify-center">
            <div className="w-[400px] p-[15px] mt-[30px] rounded-md shadow border-2">
              <h1 className="text-center text-[25px] text-[#1F0E71] font-[600]">
                Register
              </h1>
              <div className="py-[5px] my-[5px]">
                <label className="text-[#3116B6] text-[17px]" htmlFor="">
                  Full Name
                </label>
                <input
                  className="form-control"
                  placeholder="Name"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  type="text"
                />
              </div>
              <div className="py-[5px] my-[5px]">
                <label className="text-[#3116B6] text-[17px]" htmlFor="">
                  Email
                </label>
                <input
                  className="form-control"
                  placeholder="Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  type="email"
                />
              </div>
              <div className="py-[5px] my-[5px]">
                <label className="text-[#3116B6] text-[17px]" htmlFor="">
                  Image
                </label>
                <input
                  className="form-control"
                  onChange={(event) => {
                    setImage(event.target.files[0]);
                  }}
                  type="file"
                  accept="image/*"
                />
              </div>
              <div className="py-[5px] my-[5px]">
                <label className="text-[#3116B6] text-[17px]" htmlFor="">
                  Username
                </label>
                <input
                  className="form-control"
                  placeholder="Username"
                  onChange={(event) => {
                    setUser(event.target.value);
                  }}
                  type="text"
                />
              </div>
              <div className="py-[5px] my-[5px]">
                <label className="text-[#3116B6] text-[17px]" htmlFor="">
                  Password
                </label>
                <input
                  className="form-control"
                  placeholder="Password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  type="password"
                />
              </div>
              <div className="text-center my-2">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    signUp(username, password, email, name, image);
                  }}
                >
                  Register
                </button>
              </div>
              <hr />
              <div className='text-[#3116B6] text-center mt-[10px]'>Already Have an account?</div>
              <div className='text-center my-2'>
                <Link to='/login' className='btn btn-primary' >Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
