import { useState, useEffect } from "react";
import { api } from "../api/api";

function EcosystemStats() {
  const [statsData, setStatsData] = useState([]);
  const [error, setError] = useState(null);

  const transformStats = (apiData) => {
    return [
      {
        label: "Salud del Vivero",
        value: `${apiData.salud_vivero}%`,
        detail:
          apiData.salud_vivero > 80 ? "Nivel excelente" : "Requiere revisión",
        icon: "🌱",
      },
      {
        label: "Sensores Activos",
        value: apiData.sensores_activos.toString(),
        detail: "Monitoreo en tiempo real",
        icon: "📡",
      },
      {
        label: "Humedad Promedio",
        value: `${apiData.humedad_promedio}%`,
        detail:
          apiData.humedad_promedio < 40 ? "Ambiente seco" : "Nivel óptimo",
        icon: "💧",
      },
      {
        label: "Especies en Alerta",
        value: apiData.especies_alerta.toString(),
        detail:
          apiData.especies_alerta > 0
            ? "Requieren atención"
            : "Todo bajo control",
        icon: "⚠️",
      },
    ];
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.get("/ecosistema/stats");
        const formatted = transformStats(data);
        setStatsData(formatted);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      id="analisis"
      className="max-w-7xl mx-auto px-4 py-16 bg-ash-grey-50"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-charcoal-blue-900 uppercase">
          Análisis del Ecosistema
        </h2>
        <div className="h-1 w-20 bg-muted-teal-500 mt-2 mx-auto"></div>
        <p className="text-muted-teal-600 font-medium mt-4 italic">
          Métricas de rendimiento y estado biológico en tiempo real.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="relative h-48 rounded-2xl bg-white border border-ash-grey-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="h-12 w-12 bg-muted-teal-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-muted-teal-500 group-hover:text-white transition-colors duration-300">
              {item.icon}
            </div>

            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-charcoal-blue-900 tracking-tighter">
                  {item.value}
                </span>
              </div>
              <p className="text-xs font-bold text-ash-grey-400 uppercase tracking-widest mt-1">
                {item.label}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-muted-teal-500 animate-pulse"></div>
              <p className="text-[11px] text-muted-teal-600 font-semibold italic">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EcosystemStats;
