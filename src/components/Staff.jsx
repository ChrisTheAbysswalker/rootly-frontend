import { useState, useEffect } from "react";
import { api } from "../api/api";

function StaffFaunaSection() {
  const [staffData, setStaffData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.get("/staff");
        setStaffData(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const centerIndex = Math.floor(staffData.length / 2);

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
        {staffData.map((member, index) => {
          const isCenter = index === centerIndex;

          return (
            <div
              key={member.id || index}
              className="flex flex-col items-center text-center group"
            >
              <div
                className={`
              ${isCenter ? "md:h-52 md:w-52" : "md:h-40 md:w-40"} 
              h-40 w-40 
              bg-charcoal-blue-900 rounded-full mb-6 border-4 border-muted-teal-500 
              shadow-2xl overflow-hidden relative transition-all duration-500 transform group-hover:scale-105
            `}
              >
                <img
                  src={member.avatar_url}
                  alt={member.nombre}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-muted-teal-900/20 group-hover:bg-transparent transition-colors"></div>
              </div>

              <h3 className="text-xl font-black text-charcoal-blue-900 uppercase tracking-tighter">
                {member.nombre}
              </h3>
              <p className="text-muted-teal-600 font-bold text-xs uppercase tracking-widest mt-1">
                {member.cargo.titulo_cargo}
              </p>

              <div className="h-1 w-8 bg-muted-teal-500 mt-4 rounded-full scale-x-50 group-hover:scale-x-125 transition-transform duration-300"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default StaffFaunaSection;
