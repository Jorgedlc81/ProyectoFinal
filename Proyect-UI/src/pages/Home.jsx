import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import ContactUs from './ContactUs';

export default function Main() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:4500/api/services');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (Array.isArray(data)) { // Verifica si data es un array
          setServices(data);
        } else {
          console.error('Expected an array but received:', data);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="mt-20">
      <p> Qtalent</p>
      {/*Primer texto con imagen*/}
      <section className="mt-10 text-gray-600 body-font bg-white ">
        <div className="max-w-6xl pt-5 pb-5 mx-auto flex items-center rounded-md border-solid border-2 border-stone-200 rounded" >
          <div className="w-1/2 pl-6 mr-6">
            <h2 className="text-2xl font-bold mb-2">Capacitacion Industrial</h2>
            <p className="text-gray-700 mb-4 text-lg md:text-base sm:text-sm">
              En Quality Talent Consultant Services, nos dedicamos a proporcionar formación especializada en Salud y Seguridad Ocupacional, cumpliendo con los requisitos establecidos por la Secretaría del Trabajo y Previsión Social (STPS). Contamos con Agentes Capacitadores Certificados, lo que nos permite emitir constancias oficiales (DC-3 STPS).
            </p>
            <p className="text-gray-700 mb-4 text-lg md:text-base sm:text-sm">
              Entendemos que la capacitación en todos los niveles de la organización es una de las mejores inversiones en el Capital Humano y una fuente crucial de bienestar para el personal. Por ello, en Capacitación Industrial S.A. de C.V. nos enfocamos en diseñar material didáctico y programas de formación adaptados a las necesidades específicas de cada empresa.
            </p>
          </div>
          <div className="w-1/2 mr-6">
            <img src="http://localhost:4500/uploads/Home/ingenieria.jpg" alt="Safety Training" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
        {/*Servicios*/}
        <div className="pt-12 pb-24 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 ">
          {services.map(service => (
            <div key={service.id} className="text-center hover:scale-110">
              <img className="mx-auto mb-4 object-cover rounded-lg " src={service.heroImage} alt="Icon" />
              <h3 className="max-w-6xl text-xl font-bold mb-2">
                {service.title}
              </h3>
              <p className="mb-4 text-lg md:text-base sm:text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        {/*Mision, Vision y Objetivo*/}
        <section className="relative pt-20 pb-20 bg-yellow-400 mx-auto">
          <div className="w-full flex justify-center ">
            <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded shadow-lg text-center hover:bg-gray-600 hover:text-white transition duration-300">
                <h3 className="max-w-6xl text-xl font-bold mb-2">Misión</h3>
                <p className="mb-4 text-lg md:text-base sm:text-sm" >Proveer capacitación de alta calidad en Salud y Seguridad Ocupacional, ajustada a las necesidades específicas de cada empresa y promoviendo el desarrollo del capital humano mediante programas personalizados y certificados.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-lg text-center hover:bg-gray-600 hover:text-white transition duration-300">
                <h3 className="max-w-6xl text-xl font-bold mb-2">Visión</h3>
                <p className="mb-4 text-lg md:text-base sm:text-sm" >Ser reconocidos como líderes en la capacitación industrial a nivel nacional, destacándonos por nuestra excelencia , innovación en metodologías de enseñanza y compromiso con la seguridad y bienestar de los trabajadores.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-lg text-center hover:bg-gray-600 hover:text-white transition duration-300">
                <h3 className="max-w-6xl text-xl font-bold mb-2">Objetivo</h3>
                <p className="mb-4 text-lg md:text-base sm:text-sm" >Ofrecer programas de formación integral que abarquen todas las áreas de Salud y Seguridad Ocupacional, para mejorar la competencia y seguridad de los trabajadores, elevando así los estándares operativos de las empresas.</p>
              </div>
            </div>
          </div>
        </section>
        {/*Segundo texto con imagen*/}
        <section className="mt-10 max-w-6xl pt-5 pb-5 mx-auto flex items-center rounded-md border-solid border-2 border-stone-200 rounded" >
          <div className="w-1/2 ml-6">
            <img src="http://localhost:4500/uploads/Home/bg02.webp" alt="Safety Training" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="w-1/2 pl-6 mr-6">
            <h2 className="text-2xl font-bold mb-2">Instructores</h2>
            <p className="text-gray-700 mb-4">
              Cada curso y taller es cuidadosamente diseñado y desarrollado por nuestro equipo de instructores profesionales, teniendo en cuenta las necesidades específicas, procesos, materiales y condiciones operativas de tu empresa o taller. Al finalizar cada curso, emitimos una constancia firmada por los instructores y certificada.
            </p>
          </div>
        {/*Contact Us*/}
        </section>
        <section className="relative pb-4 bg-white">
          <ContactUs/>
        </section>
          {/*Footer*/}
          <Footer/>
      </section>
    </div>
  );
}
