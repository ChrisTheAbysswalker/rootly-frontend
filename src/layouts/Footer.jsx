function Footer() {
  return (
    <footer className="bg-charcoal-blue-900 text-ash-grey-100 border-t border-charcoal-blue-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="text-white font-bold text-lg mb-4 flex items-center">
              <div className="bg-muted-teal-500 h-6 w-6 rounded mr-2"></div>
              Rootly
            </div>
            <p className="text-sm text-ash-grey-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Nulla facilisi. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Amet rem enim, placeat dolorum animi
              reprehenderit unde perferendis deleniti consequatur hic officiis
              culpa fugiat exercitationem est quia aliquid, facilis cum
              doloribus?
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Recursos
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-muted-teal-400 transition-colors"
                >
                  Documentación
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-muted-teal-400 transition-colors"
                >
                  Guías de API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-muted-teal-400 transition-colors"
                >
                  Soporte
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Compañía
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-muted-teal-400 transition-colors"
                >
                  Cultura
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-muted-teal-400 transition-colors"
                >
                  Misión y Visión
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-muted-teal-400 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-ash-grey-400">
            © 2026 Rootly. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <div className="h-5 w-5 bg-ash-grey-700 rounded-full hover:bg-muted-teal-500 transition-colors cursor-pointer"></div>
            <div className="h-5 w-5 bg-ash-grey-700 rounded-full hover:bg-muted-teal-500 transition-colors cursor-pointer"></div>
            <div className="h-5 w-5 bg-ash-grey-700 rounded-full hover:bg-muted-teal-500 transition-colors cursor-pointer"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
