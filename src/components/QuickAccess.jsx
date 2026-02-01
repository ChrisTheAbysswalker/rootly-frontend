import { Activity, Leaf, BarChart } from "lucide-react";

function QuickAccess() {
  const features = [
    {
      title: "Monitoreo",
      desc: "Estado de salud en tiempo real",
      icon: <Activity className="text-white w-6 h-6" />,
    },
    {
      title: "Inventario",
      desc: "Control total de existencias",
      icon: <Leaf className="text-white w-6 h-6" />,
    },
    {
      title: "Reportes",
      desc: "Analítica detallada de crecimiento",
      icon: <BarChart className="text-white w-6 h-6" />,
    },
  ];

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 -mt-12 sm:-mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-muted-teal-500 p-8 rounded-xl shadow-2xl transform transition-all hover:scale-105 hover:bg-muted-teal-400 cursor-pointer flex flex-col items-center text-center group"
          >
            {/* Contenedor del Icono */}
            <div className="h-14 w-14 bg-white/20 rounded-lg mb-4 flex items-center justify-center transition-colors group-hover:bg-white/30">
              {item.icon}
            </div>

            <h3 className="text-white font-bold text-lg mb-2 uppercase tracking-wider">
              {item.title}
            </h3>
            <p className="text-white/80 text-sm font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickAccess;
