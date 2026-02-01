import { useState, useEffect } from "react";
import Layout from "../layouts/Layout";
import { api } from "../api/api";
import SpeciesForm from "../components/SpeciesForm";
import HealthSection from "../components/HealthSection";

function Dashboard() {
  const [speciesData, setSpeciesData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingSpecies, setEditingSpecies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [healthRecords, setHealthRecords] = useState(null);

  const handleViewHealth = async (species) => {
    try {
      const data = await api.get(`/registro_salud/${species.id}`);

      setHealthRecords(Array.isArray(data) ? data : [data]);
      setSelectedSpecies(species);
      setShowForm(false);
    } catch (err) {
      if (err.response?.status === 404) {
        setHealthRecords([]);
        setSelectedSpecies(species);
      } else {
        alert("Error al obtener registros de salud");
      }
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await api.get("/especies");
      setSpeciesData(data);
    } catch (err) {
      setError("Error al cargar las especies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEditClick = async (id) => {
    try {
      const data = await api.get(`/especies/${id}`);
      setEditingSpecies(data);
      setShowForm(true);
    } catch (err) {
      alert("Error al obtener los datos");
    }
  };

  const handleSave = async (formData) => {
    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      if (editingSpecies) {
        await api.put(`/especies/${editingSpecies.id}`, formData, config);
      } else {
        await api.post("/especies", formData, config);
      }
      setShowForm(false);
      setEditingSpecies(null);
      fetchData();
    } catch (err) {
      alert("Error al guardar");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro?")) {
      try {
        const token = localStorage.getItem("token");
        await api.delete(`/especies/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSpeciesData(speciesData.filter((item) => item.id !== id));
      } catch (err) {
        alert("Error al eliminar");
      }
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              {showForm
                ? editingSpecies
                  ? "Editar Especie"
                  : "Nueva Especie"
                : selectedSpecies
                  ? "Estado de Salud"
                  : "Panel de Administración"}
            </h2>
            {!showForm && !selectedSpecies && (
              <button
                onClick={() => setShowForm(true)}
                className="bg-muted-teal-500 text-white px-4 py-2 rounded-lg font-medium shadow-sm"
              >
                + Nuevo Registro
              </button>
            )}
          </div>

          {showForm ? (
            <SpeciesForm
              initialData={editingSpecies}
              onCancel={() => setShowForm(false)}
              onSubmit={handleSave}
            />
          ) : selectedSpecies ? (
            <HealthSection
              species={selectedSpecies}
              records={healthRecords}
              onRecordAdded={() => handleViewHealth(selectedSpecies)}
              onUpdate={() => setSelectedSpecies(null)}
            />
          ) : (
            <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
              {loading ? (
                <div className="p-10 text-center text-gray-500 italic">
                  Cargando...
                </div>
              ) : (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                        ID
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                        Nombre
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                        Familia
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                        Estado
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {speciesData.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm text-gray-500">
                          #{item.id}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">
                            {item.nombre_comun}
                          </div>
                          <div className="text-xs text-gray-400 italic">
                            {item.nombre_cientifico}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {item.familia?.nombre_familia}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className="px-2 py-1 text-xs font-semibold rounded-full"
                            style={{ backgroundColor: item.estado?.color_hex }}
                          >
                            {item.estado?.nombre_estado}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right text-sm font-medium space-x-3">
                          <button
                            onClick={() => handleViewHealth(item)}
                            className="text-muted-teal-500 font-bold"
                          >
                            🩺 Monitorear
                          </button>
                          <button
                            onClick={() => handleEditClick(item.id)}
                            className="text-indigo-600"
                          >
                            Editar
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-red-600"
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
