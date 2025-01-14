import { useState } from "react";
import Input from "../components/InputField";
import Button from "../components/Button";
import flag from "../assets/indonesia.png";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlelogin = () => {
    // const data = getFormData
    navigate(`/`)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation here
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords tidak sama!");
      return;
    }
    // Handle register logic here
    console.log("Register data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Full Name"
        type="text"
        name="name"
        placeholder="Enter your full name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1 border p-2 bg-white">
          <img src={flag} className="h-4" />
          <span>+62</span>
        </div>
        <input
          className="flex-grow border p-2"
          type="tel"
          label="no hp"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      {/* <Input
        label= "No Hp"
        type='tel'
        name="noHp"
        placeholder=""
        value={formData.noHp}
        onChange={handleChange}
      /> */}
      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleChange}
      />
      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <Button type="submit" color="green" onClick={handlelogin}>
        Masuk
      </Button>
      <Button type="submit" onClick={handlelogin} >
        Daftar
      </Button>
      <div className="flex items-center mt-4">
        <span className="flex-grow border-t border-gray-400"></span>{" "}
        <span className="px-4 text-gray-600">Atau</span>{" "}
        <span className="flex-grow border-t border-gray-400"></span>{" "}
      </div>
      <Button type="button" color="white">
        <FcGoogle className="inline-block mr-2" />
        Google
      </Button>
    </form>
  );
};

export default RegisterForm;
