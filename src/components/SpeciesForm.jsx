import { useState, useEffect } from "react";
import { api } from "../api/api";

function SpeciesForm({ onCancel, onSubmit, initialData }) {
  const [estados, setEstados] = useState([]);
  const [familias, setFamilias] = useState([]);

  const [formData, setFormData] = useState({
    nombre_comun: initialData?.nombre_comun || "",
    nombre_cientifico: initialData?.nombre_cientifico || "",
    id_familia: initialData?.id_familia || "",
    id_estado: initialData?.id_estado || "",
    imagen_url: initialData?.imagen_url || "",
  });

  useEffect(() => {
    const cargarCatalogos = async () => {
      try {
        const [resFamilias, resEstados] = await Promise.all([
          api.get("/familias"),
          api.get("/estados"),
        ]);
        setFamilias(resFamilias);
        setEstados(resEstados);

        if (!initialData) {
          setFormData((prev) => ({
            ...prev,
            id_familia: resFamilias[0]?.id || "",
            id_estado: resEstados[0]?.id || "",
          }));
        }
      } catch (error) {
        console.error("Error cargando catálogos:", error);
      }
    };
    cargarCatalogos();
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name.includes("id_") ? parseInt(value) || "" : value,
    });
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-8 border border-gray-200 animate-fadeIn">
      <h3 className="text-xl font-bold text-gray-800 mb-6">
        {initialData ? "Editar Especie" : "Registrar Nueva Especie"}
      </h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formData);
        }}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre Común
            </label>
            <input
              type="text"
              name="nombre_comun"
              value={formData.nombre_comun}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Ej. Monstera Deliciosa"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre Científico
            </label>
            <input
              type="text"
              name="nombre_cientifico"
              value={formData.nombre_cientifico}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Ej. Monstera deliciosa"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Familia Botánica
            </label>
            <select
              name="id_familia"
              value={formData.id_familia}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white focus:ring-indigo-500"
              required
            >
              <option value="">Selecciona una familia</option>
              {familias.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.nombre_familia}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Estado de Salud
            </label>
            <select
              name="id_estado"
              value={formData.id_estado}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white focus:ring-indigo-500"
              required
            >
              <option value="">Selecciona un estado</option>
              {estados.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.nombre_estado}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              URL de la Imagen
            </label>
            <input
              type="url"
              name="imagen_url"
              value={formData.imagen_url}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500"
              placeholder="https://ejemplo.com/foto.jpg"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-4 border-t">
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-600 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-muted-teal-500 text-white px-6 py-2 rounded-lg hover:bg-muted-teal-700 shadow-md transition-all font-medium"
          >
            {initialData ? "Actualizar Registro" : "Guardar Registro"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SpeciesForm;
