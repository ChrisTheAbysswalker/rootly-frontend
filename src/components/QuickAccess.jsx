function QuickAccess() {
  const features = [
    { title: "Monitoreo", desc: "Estado de salud en tiempo real" },
    { title: "Inventario", desc: "Control total de existencias" },
    { title: "Reportes", desc: "Analítica detallada de crecimiento" },
  ];

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 -mt-12 sm:-mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-muted-teal-500 p-6 rounded-xl shadow-2xl transform transition-all hover:scale-105 hover:bg-muted-teal-400 cursor-pointer flex flex-col items-center text-center"
          >
            <div className="h-10 w-10 bg-white/20 rounded-lg mb-4"></div>

            <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-white/80 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickAccess;
