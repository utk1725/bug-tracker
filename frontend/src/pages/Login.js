import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/login", form);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.user.role);
    setUser({ token: res.data.token, role: res.data.user.role });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" />
      <input type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
