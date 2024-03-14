import { useState } from "react";

const SignUp = ({ signUp }) => {
  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState();
  return (
    <div className="flex justify-center">
      <div className="w-[400px] p-[15px] mt-[90px] rounded-md shadow-sm border-2">
        <h1 className="text-center text-[25px] text-[#3D1CE3] font-[600]">
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
            placeholder="User"
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
              signUp(username, password, email, name,image);
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
