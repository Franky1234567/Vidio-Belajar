import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/InputField";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";
// import { Navigate } from "react-router";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((datauser) => ({
      ...datauser,
      [name]: value,
    }));
  };

  const handleDaftar = () => {
    navigate(`/register`)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.email && formData.password) {
      console.log(formData);
      localStorage.setItem("datauser", JSON.stringify(formData));
      navigate('/home')
    }else{
      alert('Please enter your email address and password');
      
    }
  };

  return (

    <>
    
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        <p className="text-right mt-3">
          <a>Lupa password</a>
        </p>
        <Button type="submit" color="green" onClick={handleSubmit}>
          Masuk
        </Button>
      </form>
      <Button type="submit" onClick={handleDaftar}>
      Daftar
      </Button>
      <div className="flex items-center mt-4">
        <span className="flex-grow border-t border-gray-400"></span>{" "}
        <span className="px-4 text-gray-600">Atau</span>{" "}
        <span className="flex-grow border-t border-gray-400"></span>{" "}
      </div>
      <Button type="button" color="white" >
      <FcGoogle className="inline-block mr-2" />
        Google
      </Button>
    </>
  );
};

export default LoginForm;
