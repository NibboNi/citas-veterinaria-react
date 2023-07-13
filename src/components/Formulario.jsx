function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded py-10 px-5 flex flex-col gap-5 mb-10">
        <div>
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input id="mascota" type="text" placeholder="Nombre de la Mascota"  className="border-2 w-full p-2 mt-2 placeholder-gray-400 placeholder:italic rounded-md"/>
        </div>
        <div>
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input id="propietario" type="text" placeholder="Nombre del Propietario"  className="border-2 w-full p-2 mt-2 placeholder-gray-400 placeholder:italic rounded-md"/>
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input id="email" type="email" placeholder="Email Contacto Propietario "  className="border-2 w-full p-2 mt-2 placeholder-gray-400 placeholder:italic rounded-md"/>
        </div>
        <div>
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input id="alta" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 placeholder:italic rounded-md"/>
        </div>
        <div>
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <textarea id="sintomas" placeholder="Describe los Sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 placeholder:italic rounded-md resize-none"/>
        </div>

        <input type="submit" value="Agregar Paciente" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" />
      </form>
    </div>
  )
}
export default Formulario