import React from "react";
export function StaffFaunaSection() {
  const staff = [
    {
      name: "Sr. Búho",
      role: "Director de Analítica Avanzada",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Uhu-muc.jpg",
      isCenter: false,
    },
    {
      name: "Arq. Castor",
      role: "Jefe de Infraestructura y Desarrollo",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/250px-American_Beaver.jpg",
      isCenter: true,
    },
    {
      name: "Coord. Abeja",
      role: "Líder de Redes y Comunicación",
      img: "https://www.velasresorts.com.mx/resourcefiles/blogsmallimages/gvrm-meliponarius.jpg",
      isCenter: false,
    },
  ];

  return (
    <section id="staff" className="max-w-7xl mx-auto px-4 py-20 bg-ash-grey-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-charcoal-blue-900 uppercase tracking-tight">
          Profesionales al Mando
        </h2>
        <div className="h-1 w-20 bg-muted-teal-500 mt-2 mx-auto rounded-full"></div>
        <p className="text-muted-teal-600 font-medium mt-4 italic">
          Nuestra jerarquía organizacional bio-inteligente
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-12 md:gap-20">
        {staff.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group"
          >
            <div
              className={`
              ${member.isCenter ? "md:h-52 md:w-52" : "md:h-40 md:w-40"} 
              h-40 w-40 
              bg-charcoal-blue-900 rounded-full mb-6 border-4 border-muted-teal-500 
              shadow-2xl overflow-hidden relative transition-all duration-500 transform group-hover:scale-105
            `}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-muted-teal-900/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            <h3 className="text-xl font-black text-charcoal-blue-900 uppercase tracking-tighter">
              {member.name}
            </h3>
            <p className="text-muted-teal-600 font-bold text-xs uppercase tracking-widest mt-1">
              {member.role}
            </p>

            <div className="h-1 w-8 bg-muted-teal-500 mt-4 rounded-full scale-x-50 group-hover:scale-x-125 transition-transform duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StaffFaunaSection;
