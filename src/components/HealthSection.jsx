import { useState } from "react";
import { api } from "../api/api";

function HealthSection({ species, records, onRecordAdded, onUpdate }) {
  const [loading, setLoading] = useState(false);
  const [healthFormData, setHealthFormData] = useState({
    humedad: "",
    temperatura: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      const payload = {
        id_especie: species.id,
        humedad: parseFloat(healthFormData.humedad),
        temperatura: parseFloat(healthFormData.temperatura),
      };

      await api.put(`/registro_salud/${species.id}`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setHealthFormData({ humedad: "", temperatura: "" });
      onRecordAdded();
    } catch (err) {
      alert("Error al actualizar monitoreo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 bg-white rounded-xl border-2 border-indigo-50 p-6 shadow-sm animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Historial de Salud: {species.nombre_comun}
          </h3>
          <p className="text-sm text-gray-500 italic">
            {species.nombre_cientifico}
          </p>
        </div>
        <button
          onClick={onUpdate}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕ Cerrar
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100"
      >
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
            Humedad (%)
          </label>
          <input
            type="number"
            step="0.01"
            required
            value={healthFormData.humedad}
            onChange={(e) =>
              setHealthFormData({ ...healthFormData, humedad: e.target.value })
            }
            className="w-full p-2 border rounded border-gray-300 outline-none focus:ring-2 focus:ring-muted-teal-500"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
            Temperatura (°C)
          </label>
          <input
            type="number"
            step="0.01"
            required
            value={healthFormData.temperatura}
            onChange={(e) =>
              setHealthFormData({
                ...healthFormData,
                temperatura: e.target.value,
              })
            }
            className="w-full p-2 border rounded border-gray-300 outline-none focus:ring-2 focus:ring-muted-teal-500"
          />
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-muted-teal-500 text-white font-bold py-2 rounded-lg hover:bg-muted-teal-600 transition-all shadow-md"
          >
            {loading ? "Actualizando..." : "Actualizar Estado"}
          </button>
        </div>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="text-gray-400 border-b">
            <tr>
              <th className="py-2 px-4">Última Actualización</th>
              <th className="py-2 px-4">Humedad</th>
              <th className="py-2 px-4">Temperatura</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {records?.map((r) => (
              <tr key={r.id}>
                <td className="py-3 px-4 font-medium text-gray-700">
                  {new Date(r.fecha_monitoreo).toLocaleString()}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded font-bold ${r.humedad === 0 ? "bg-gray-100 text-gray-400" : "bg-blue-50 text-blue-700"}`}
                  >
                    {r.humedad}%
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded font-bold ${r.temperatura === 0 ? "bg-gray-100 text-gray-400" : "bg-orange-50 text-orange-700"}`}
                  >
                    {r.temperatura}°C
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default HealthSection;
