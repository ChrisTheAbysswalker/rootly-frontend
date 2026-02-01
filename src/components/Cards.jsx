import { useState, useEffect } from "react";
import { api } from "../api/api";

function Cards() {
  const [speciesData, setSpeciesData] = useState([]);
  const [error, setError] = useState(null);

  const [selectedFamily, setSelectedFamily] = useState("Todas");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.get("/especies");
        setSpeciesData(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  const filteredItems =
    selectedFamily === "Todas"
      ? speciesData
      : speciesData.filter(
          (item) => item.familia.nombre_familia === selectedFamily,
        );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const families = [
    "Todas",
    ...new Set(speciesData.map((item) => item.familia.nombre_familia)),
  ];

  const handleFilterChange = (family) => {
    setSelectedFamily(family);
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.getElementById("especies").scrollIntoView({ behavior: "smooth" });
  };

  if (error) return <div className="text-red-500">{error.message}</div>;
  if (!speciesData.length)
    return <div className="py-20 text-center">Cargando especies...</div>;

  return (
    <section
      id="especies"
      className="max-w-7xl mx-auto px-4 py-16 bg-ash-grey-50"
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-charcoal-blue-900 uppercase tracking-tighter">
          Inventario de Especies
        </h2>
        <div className="h-1 w-20 bg-muted-teal-500 mt-2 mx-auto"></div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {families.map((family) => (
            <button
              key={family}
              onClick={() => handleFilterChange(family)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                selectedFamily === family
                  ? "bg-muted-teal-500 text-white border-muted-teal-500 shadow-md"
                  : "bg-white text-charcoal-blue-600 border-ash-grey-300 hover:border-muted-teal-500"
              }`}
            >
              {family}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 min-h-[400px]">
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-ash-grey-200 hover:shadow-2xl transition-all group"
            >
              <div className="h-48 bg-charcoal-blue-800 relative overflow-hidden">
                <img
                  src={item.imagen_url}
                  alt={item.nombre_comun}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
                />
                <div
                  className="absolute top-4 right-4 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase shadow-sm"
                  style={{
                    backgroundColor: item.estado.color_hex || "#6B7280",
                  }}
                >
                  {item.estado.nombre_estado}
                </div>
              </div>

              <div className="p-6">
                <span className="text-muted-teal-600 text-xs font-bold uppercase tracking-widest">
                  {item.familia.nombre_familia}
                </span>
                <h3 className="text-xl font-bold text-charcoal-blue-900 mt-1 mb-3">
                  {item.nombre_comun}
                </h3>
                <p className="text-sm text-charcoal-blue-600 font-medium line-clamp-2 mb-6">
                  {item.familia.descripcion}
                </p>

                <div className="flex justify-between items-center pt-4 border-t border-ash-grey-100">
                  <button className="text-sm font-bold text-muted-teal-500 hover:text-muted-teal-700 transition-colors">
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-500 italic">
            No se encontraron especies en esta categoría.
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 gap-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              currentPage === 1
                ? "text-gray-300 cursor-not-allowed"
                : "text-muted-teal-600 hover:bg-muted-teal-50"
            }`}
          >
            ←
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`h-10 w-10 rounded-full font-bold transition-all ${
                currentPage === index + 1
                  ? "bg-muted-teal-500 text-white shadow-md"
                  : "text-charcoal-blue-600 hover:bg-ash-grey-200"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              currentPage === totalPages
                ? "text-gray-300 cursor-not-allowed"
                : "text-muted-teal-600 hover:bg-muted-teal-50"
            }`}
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}

export default Cards;
