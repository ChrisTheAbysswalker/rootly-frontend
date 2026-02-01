import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  const handleRegister = () => {
    navigate("/register");
  };

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", credentials);
      localStorage.setItem("token", response.token);

      const decoded = jwtDecode(response.token);
      localStorage.setItem("user", decoded.nombre);
      localStorage.setItem("rol", decoded.rol_id);

      if (Number(decoded.rol_id) === 1) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <span className="text-5xl">🌿</span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 tracking-tight">
            Rootly
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Ingresa para gestionar tu ecosistema digital
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-xl border border-gray-100 sm:rounded-2xl sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo electrónico
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                    placeholder="admin@rootly.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-muted-teal-500 hover:bg-muted-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
                >
                  Entrar al Vivero
                </button>
              </div>
            </form>

            <div className="mt-6 flex flex-col space-y-3">
              <div className="flex items-center justify-between space-x-4">
                <button
                  onClick={handleHome}
                  className="w-1/2 flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all"
                >
                  ← Regresar
                </button>

                <button
                  onClick={handleRegister}
                  className="w-1/2 flex justify-center py-2 px-4 border border-emerald-100 rounded-lg shadow-sm text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all"
                >
                  Crear cuenta
                </button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Sistema de gestión botánica v1.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
