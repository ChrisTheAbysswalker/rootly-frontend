import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-charcoal-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex items-center">
            <div className="bg-muted-teal-500 h-10 w-32 rounded-md flex items-center justify-center font-bold text-sm">
              Rootly
            </div>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a href="#especies" className="text-ash-grey-100 hover:text-muted-teal-400 transition-colors">Especies</a>
            <a href="#analisis" className="text-ash-grey-100 hover:text-muted-teal-400 transition-colors">Analisis</a>
            <a href="#staff" className="text-ash-grey-100 hover:text-muted-teal-400 transition-colors">Nosotros</a>
            <button className="bg-muted-teal-500 hover:bg-muted-teal-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg">
              Login
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-ash-grey-100 hover:text-white focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-charcoal-blue-800 border-t border-charcoal-blue-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-ash-grey-100 hover:bg-charcoal-blue-700 rounded-md">Dashboard</a>
            <a href="#" className="block px-3 py-2 text-ash-grey-100 hover:bg-charcoal-blue-700 rounded-md">Empleados</a>
            <a href="#" className="block px-3 py-2 text-ash-grey-100 hover:bg-charcoal-blue-700 rounded-md">Reportes</a>
            <div className="pt-4 pb-2 border-t border-charcoal-blue-700">
              <button className="w-full bg-muted-teal-500 text-white px-3 py-2 rounded-md font-medium">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;