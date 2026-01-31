function Hero() {
  return (
    <div className="relative w-full bg-charcoal-blue-900 overflow-hidden min-h-[60vh] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="https://imagenes.elpais.com/resizer/v2/DJIACSUO55GQDHWHDB2DZ37JKY.jpg?auth=bad7a9ad13187cfd19d862d52c3b2c64d220aae6c099147c775df1fb753bb2f1&width=1000"
          alt="Fondo de hojas botánicas"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-blue-950 via-charcoal-blue-900/60 to-charcoal-blue-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="text-center flex flex-col items-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block mb-1">Rootly:</span>
            <span className="block text-muted-teal-400">Jerarquía Natural</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-ash-grey-200 leading-relaxed font-light">
            Transformamos el monitoreo vegetal a través de la sabiduría animal.
            Gestión de inventarios botánicos con inteligencia impulsada por
            guardianes del hábitat.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <a
              href="#inventario"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold rounded-xl text-white bg-muted-teal-500 hover:bg-muted-teal-600 transition-all shadow-xl transform hover:scale-105"
            >
              Explorar Especies
            </a>
            <a
              href="#registro"
              className="inline-flex items-center justify-center px-8 py-3 border border-ash-grey-700 text-sm font-bold rounded-xl text-ash-grey-100 bg-charcoal-blue-800/40 backdrop-blur-md hover:bg-charcoal-blue-700 transition-all transform hover:scale-105"
            >
              Nuevo Registro
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
