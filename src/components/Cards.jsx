export function Cards() {
  const species = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      family: "Araceae",
      status: "Saludable",
      img: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      name: "Ficus Lyrata",
      family: "Moraceae",
      status: "Necesita Riego",
      img: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      name: "Calathea Orbifolia",
      family: "Marantaceae",
      status: "Crítico",
      img: "https://via.placeholder.com/300x200",
    },
    {
      id: 4,
      name: "Sansevieria",
      family: "Asparagaceae",
      status: "Saludable",
      img: "https://via.placeholder.com/300x200",
    },
    {
      id: 5,
      name: "Pothos Aureum",
      family: "Araceae",
      status: "Saludable",
      img: "https://via.placeholder.com/300x200",
    },
    {
      id: 6,
      name: "Alocasia Polly",
      family: "Araceae",
      status: "Necesita Riego",
      img: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <section
      id="especies"
      className="max-w-7xl mx-auto px-4 py-16 bg-ash-grey-50"
    >
      <div className="mb-10 text-center lg:text-center">
        <h2 className="text-3xl font-bold text-charcoal-blue-900 uppercase">
          Inventario de Especies
        </h2>
        <div className="h-1 w-20 bg-muted-teal-500 mt-2 mx-auto "></div>
        <p className="text-muted-teal-600 font-medium mt-4 italic">
          Seleccion de especies de plantas de interes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {species.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-ash-grey-200 hover:shadow-2xl transition-all group"
          >
            <div className="h-48 bg-charcoal-blue-800 relative overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-charcoal-blue-900 uppercase">
                {item.status}
              </div>
            </div>

            <div className="p-6">
              <span className="text-muted-teal-600 text-xs font-bold uppercase tracking-widest">
                {item.family}
              </span>
              <h3 className="text-xl font-bold text-charcoal-blue-900 mt-1 mb-3">
                {item.name}
              </h3>

              <div className="space-y-2 mb-6">
                <div className="h-2 w-full bg-ash-grey-100 rounded"></div>
                <div className="h-2 w-3/4 bg-ash-grey-100 rounded"></div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-ash-grey-100">
                <button className="text-sm font-bold text-muted-teal-500 hover:text-muted-teal-700 transition-colors">
                  Ver detalles
                </button>
                <div className="flex gap-2">
                  <div className="h-8 w-8 bg-ash-grey-50 rounded-lg flex items-center justify-center text-ash-grey-400 hover:bg-muted-teal-50 hover:text-muted-teal-500 cursor-pointer transition-all">
                    ✎
                  </div>
                  <div className="h-8 w-8 bg-ash-grey-50 rounded-lg flex items-center justify-center text-ash-grey-400 hover:bg-red-50 hover:text-red-500 cursor-pointer transition-all">
                    🗑
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;
