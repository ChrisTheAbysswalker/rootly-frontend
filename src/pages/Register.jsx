import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    id_rol: 2,
  });

  const handleChange = (e) => {
    const value =
      e.target.name === "id_rol" ? parseInt(e.target.value) : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Registrando nuevo usuario en Rootly...", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <span className="text-5xl">🌱</span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 tracking-tight">
            Únete a Rootly
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Crea tu cuenta para empezar a monitorear tu jardín
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-xl border border-gray-100 sm:rounded-2xl sm:px-10">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre de usuario
                </label>
                <input
                  name="username"
                  type="text"
                  required
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  placeholder="ej. botanico_01"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  placeholder="usuario@rootly.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tipo de Perfil
                </label>
                <select
                  name="id_rol"
                  onChange={handleChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-lg"
                >
                  <option value={2}>Usuario (Consulta)</option>
                  <option value={1}>Administrador (Gestión)</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
                >
                  Registrar Cuenta
                </button>
              </div>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">¿Ya tienes cuenta? </span>
              <a
                href="/login"
                className="font-medium text-emerald-600 hover:text-emerald-500"
              >
                Inicia sesión aquí
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
