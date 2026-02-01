import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-6">
      <div className="text-center">
        <p className="text-6xl font-black text-muted-teal-500 animate-bounce">
          404
        </p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-charcoal-blue-900 sm:text-5xl">
          Página no encontrada
        </h1>

        <p className="mt-6 text-base leading-7 text-gray-600">
          Lo sentimos, no pudimos encontrar la página que estás buscando o no
          tienes los permisos necesarios.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={() => navigate(-1)}
            className="rounded-full bg-charcoal-blue-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-charcoal-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all"
          >
            ← Volver atrás
          </button>

          <button
            onClick={() => navigate("/")}
            className="text-sm font-semibold text-charcoal-blue-900 hover:text-muted-teal-600 transition-colors"
          >
            Ir al inicio <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>

      <div className="mt-16 w-full max-w-sm opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#5F9EA0"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.1,73.1,41.5C64.8,53.8,53.8,64,40.9,71.2C28,78.4,14,82.5,-0.6,83.5C-15.1,84.5,-30.3,82.4,-43.8,75.5C-57.3,68.6,-69.2,56.9,-76.8,43.2C-84.4,29.5,-87.8,14.7,-86.6,0.7C-85.3,-13.3,-79.5,-26.6,-71.4,-39.4C-63.3,-52.2,-53,-64.4,-40.4,-72.5C-27.8,-80.6,-13.9,-84.5,0.7,-85.7C15.3,-86.9,30.6,-83.6,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
}

export default NotFound;
