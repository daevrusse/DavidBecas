import { useCalculator } from "../hooks/useCalculator"
import AddsCalculators from "./AddsCalculators"

const CalcSeleccion = () => {

   const { 
      ies, 
      scorePreSeleccion, 
      selectedType, 
      divIes, 
      resultIes,
      scoreMod, 
      modSeleccion,
      handleSubmit, 
      handleTypeChange,
      handleDivChange, 
      SendCalcSeleccion, 
      addIes, 
      validarPuntajePre, 
      updateModSeleccion
   } = useCalculator()

   return (
   <>
      <main className="font-cairo max-w-screen-md mx-auto mt-28 font-normal">
         <h2 className="font-varela-round text-3xl px-9 font-bold">Beca 18-2025</h2>
         <h1 className="font-varela-round text-3xl px-9 font-bold">Calcula tu puntaje de Selección</h1>
         <div className='w-5/6 mx-auto mt-10 pb-3 text-left sm:text-center '>
            <span className='inline-block bg-[#F5C002] rounded-lg px-3 py-1 mx-2'>
               Puntaje de Selección
            </span>
            =
            <span className='inline-block bg-[#0AA6FF] rounded-lg text-white px-3 py-1 mx-1'>
               A
            </span>
            +
            <span className='inline-block bg-[#0AA6FF] rounded-lg text-white px-3 py-1 mx-1'>
               B
            </span>
         </div>
         <div className='w-5/6 mx-auto mt-4 text-left sm:text-center'>
            <div className='sm:inline-block m-2'>
               <span className='mr-1 px-3 py-1 rounded-lg bg-[#0AA6FF] text-white'>A</span>
               : Puntaje de PreSelección
            </div>
            <div className='sm:inline-block m-2'>
               <span className='sm:ml-5 mr-1 px-3 py-1 rounded-lg bg-[#0AA6FF] text-white'>B</span>
               : Puntaje de IES Elegibles
            </div>
         </div>
         <form id= 'form-calculadora' className="px-9 py-5" onSubmit={handleSubmit}>
            <label htmlFor="modalidad" 
               className="block uppercase font-bold mt-2 pt-6">
              MODALIDAD DE POSTULACIÓN
            </label>
            <select
              id="modalidad"
              type='text'
              onChange={(e)=>{updateModSeleccion(e.target.value)}}
              defaultValue='DEFAULT'
              className="w-full border-[#0AA6FF] border-b-2 border p-2 mt-2 placeholder-gray-400 rounded-md text-sm">
               <option key='0' value='DEFAULT' disabled >Selecciona tu modalidad</option>
               {scoreMod.map(item => 
                  (<option key={item.id} value={item.idMod}>{item.name}</option>)
               )}
            </select>

            <div className='shadow-[0_25px_150px_-12px_rgba(0,0,0,0.25)] rounded-lg mt-10 border border-[#0AA6FF]'>
               <p 
                  className='uppercase px-6 py-2 rounded-t-md bg-[#0AA6FF] text-white text-left'> 
                  A : Puntaje de Preselección
               </p>
               <div className='p-6'>
                  
                  <div className="flex mt-2 mx-auto text-left">
                     <input id="inPuntajePS"
                        type="number" placeholder="Ingresa tu puntaje"
                        step="2" min="0" max="120"
                        onChange={(e)=>validarPuntajePre()}
                        className="border-[#F5C002] border-b-2 border w-1/2 p-2 mt-2 placeholder-gray-400 rounded-md text-sm"         
                        />
                     <div className='h-auto w-1/2 content-center'>
                        <span id='examen-point'
                           className='block font-bold text-blue-500 text-center'>
                           +{scorePreSeleccion} puntos
                        </span>
                     </div>
                  </div>
               </div>
               <p id='examen-alert' className='text-red-500 font-medium pb-4'></p>
            </div>

            <div className='shadow-[0_25px_150px_-12px_rgba(0,0,0,0.25)] rounded-lg mt-10 border border-[#0AA6FF]'>
               <p className='uppercase px-6 py-2 rounded-t-md bg-[#0AA6FF] text-white text-left'> 
                  B. Puntaje de IES elegibles
               </p>  
               <div className='p-6'>
                  <p className="text-xs">IES: Institución de Educación Superior (Universidad/Instituto/Escuela Superior)</p>
                  <label className="block mt-2">
                     Elige una o agrega hasta 3 IES
                  </label>
                  <div id='ies1' className='grid grid-cols-3 gap-3 md:gap-2 mt-4 mb-8 mx-auto text-left'>
                     <select id="typeIes1"
                        defaultValue='DEFAULT'
                        className="w-full col-span-3 md:col-span-1 border-[#F5C002] border-b-2 border p-2 mt-2 placeholder-gray-400 rounded-md text-sm"
                        onChange={(e)=>handleTypeChange(0,e.target.value)}
                     >
                        <option value="DEFAULT">Selecciona Tipo de IES</option>
                        <option value="1">Universidad</option>
                        <option value="2">Instituto</option>
                        <option value="3">Escuela Superior</option>
                        </select>
                     <select id='idIes1'
                        defaultValue='DEFAULT'
                        className="w-full col-span-3 md:col-span-2 border-[#F5C002] border-b-2 border p-2 mt-2 placeholder-gray-400 rounded-md text-sm"
                        onChange={(e)=> {/*handleIesChange(1,e.target.value);*/ addIes(1,e.target.value)} }
                     >
                        <option key='0' value='DEFAULT' disabled>Selecciona la IES</option>
                        {
                           ies.filter(item =>  item.typeIES == selectedType[0])
                           .sort((a, b) => a.nameIES.localeCompare(b.nameIES)).map(item => (
                              <option key={item.idIES} value={item.idIES}>{ item.nameShortIES + ' - '+item.nameIES }</option>
                           ))
                        }
                     </select>
                     <div className='col-span-3 h-auto  content-center'>
                        <span id='ies-point1'
                           className='block font-bold text-blue-500 text-center'>
                           +{resultIes.find(item => item.index === 1)?.scoreIES || 0} puntos
                        </span>
                     </div>
                     <div className="col-span-3 flex justify-center items-center">
                        <button 
                           id="btn-ies1"
                           className="flex justify-center items-center"
                           onClick={() => (handleDivChange('2'))}
                        >
                           <svg id='icon-add-1' className="" width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="15.5" cy="15" r="15" fill="#F4B700"/>
                              <path d="M15.5 4V25" stroke="white" strokeWidth="4"/>
                              <path d="M25.5 15L4.5 15" stroke="white" strokeWidth="4"/>
                           </svg>
                        </button>
                        </div>
                     <hr className="col-span-3 mt-3" id="separador-ies1" />
                  </div>
                  <div id='ies2' className={`grid grid-cols-3 gap-3 md:gap-2 mt-4 mb-8 mx-auto text-left ${(divIes.ies2)?"block":"hidden"}`}>
                     <select id="typeIes2"
                        defaultValue='DEFAULT'
                        className="w-full col-span-3 md:col-span-1 border-[#F5C002] border-b-2 border p-2 mt-2 placeholder-gray-400 rounded-md text-sm"
                        onChange={(e)=> handleTypeChange(1,e.target.value)}
                     >
                        <option value="DEFAULT">Selecciona Tipo de IES</option>
                        <option value="1">Universidad</option>
                        <option value="2">Instituto</option>
                        <option value="3">Escuela Superior</option>
                     </select>
                     <select id='idIes2'
                        defaultValue='DEFAULT'
                        className="w-full col-span-3 md:col-span-2 border-[#F5C002] border-b-2 border p-2 mt-2 placeholder-gray-400 rounded-md text-sm"
                        onChange={(e)=>{/*handleIesChange(2,e.target.value),*/addIes(2,e.target.value)}}
                     >
                        <option key='0' value='DEFAULT' disabled>Selecciona la IES</option>
                     {
                        ies.filter(item =>  item.typeIES == selectedType[1])
                        .sort((a, b) => a.nameIES.localeCompare(b.nameIES)).map(item => (
                           <option key={item.idIES} value={item.idIES}>{item.nameShortIES + ' - '+item.nameIES }</option>
                         ))
                     }
                     </select>
                     <div className='col-span-3 h-auto  content-center'>
                        <span id='ies-point2'
                           className='block font-bold text-blue-500 text-center'>
                           +{resultIes.find(item => item.index === 2)?.scoreIES || 0} puntos
                        </span>
                     </div>
                     <div className="col-span-3 flex justify-center items-center">
                     <button 
                           id="btn-ies2"
                           className="flex justify-center items-center"
                           onClick={() => (handleDivChange('2'))}
                           >
                           <svg id='icon-remove-2' className='hidden' width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="15.5" cy="15" r="15" fill="#FF0000"/>
                              <path d="M25.5 15H5.5" stroke="white" stroke-width="4"/>
                           </svg>
                        </button>
                        <button 
                           id="btn-ies2"
                           className="flex justify-center items-center"
                           onClick={() => (handleDivChange('3'))}
                           >
                           <svg id="icon-add-2" width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="15.5" cy="15" r="15" fill="#F4B700"/>
                              <path d="M15.5 4V25" stroke="white" strokeWidth="4"/>
                              <path d="M25.5 15L4.5 15" stroke="white" strokeWidth="4"/>
                           </svg>
                        </button>
                     </div>
                     <hr className="col-span-3 mt-3" id="separador-ies2" />
                  </div>
                  
                  <div id='ies3' className={`grid grid-cols-3 gap-3 md:gap-2 mt-4 mb-8 mx-auto text-left ${(divIes.ies3)?"block":"hidden"}`}>
                     <select id="typeIes3"
                        defaultValue='DEFAULT'
                        className="w-full col-span-3 md:col-span-1 border-[#F5C002] border-b-2 border p-2 mt-2 placeholder-gray-400 rounded-md text-sm"
                        onChange={(e)=> handleTypeChange(2,e.target.value)}
                     >
                        <option value="DEFAULT">Selecciona Tipo de IES</option>
                        <option value="1">Universidad</option>
                        <option value="2">Instituto</option>
                        <option value="3">Escuela Superior</option>
                     </select>
                     <select id='idIes3'
                        defaultValue='DEFAULT'
                        className="w-full col-span-3 md:col-span-2 border-[#F5C002] border-b-2 border p-2 mt-2 placeholder-gray-400 rounded-md text-sm"
                        onChange={(e)=>{/*handleIesChange(3,e.target.value), */addIes(3,e.target.value)}}
                        >
                        <option key='0' value='DEFAULT' disabled>Selecciona la IES</option>
                     {
                        ies.filter(item =>  item.typeIES == selectedType[2])
                        .sort((a, b) => a.nameIES.localeCompare(b.nameIES))
                        .map(item => (
                           <option key={item.idIES} value={item.idIES}>{item.nameShortIES + ' - '+item.nameIES }</option>
                         ))
                     }
                     </select>
                     <div className='col-span-3 h-auto  content-center'>
                        <span id='ies-point3'
                           className='block font-bold text-blue-500 text-center'>
                           +{resultIes.find(item => item.index === 3)?.scoreIES | 0} puntos
                        </span>
                     </div>
                     <div className="col-span-3 flex justify-center items-center">
                        <button 
                           id="btn-ies3"
                           className="flex justify-center items-center"
                           onClick={()=>handleDivChange('3')}
                        >
                          <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="15.5" cy="15" r="15" fill="#FF0000"/>
                              <path className="stroke-[4]"  d="M25.5 15H5.5" stroke="white"/>
                           </svg>
                        </button>
                        </div>
                  </div>
               </div>
            </div>
            
            <div className='my-5'>
               <button 
                  type="button" onClick={(e) => {SendCalcSeleccion(e,'Calcular')}}
                  className="focus:outline-none text-white bg-[#F5C002] hover:bg-yellow-500 rounded-lg px-5 py-2.5 m-2 ">
                     Calcular puntaje
               </button>
               <button 
                  type="button" onClick={(e) => {SendCalcSeleccion(e, '')}}
                  className="focus:outline-none text-white bg-gray-400 hover:bg-gray-500  rounded-lg px-5 py-2.5 m2 ">
                     Limpiar Formulario
               </button>
            </div>   
            <div id='resultado' className='hidden shadow-[0_25px_150px_-12px_rgba(0,0,0,0.25)] bg-white rounded-lg mt-10 border border-[#F5C002] px-5 py-6'>     
               <h2 className="text-2xl font-bold">Resultado de simulación</h2>
               <table className="w-full mt-5 border-collapse overflow-hidden rounded-xl">
                  <thead className=" text-white bg-[#F5C002]/80 ">
                     <tr>
                        <th className="font-medium py-2">Puntaje PreSelec.</th>
                        <th className="font-medium py-2">IES</th>
                        <th className="font-medium py-2">Puntaje IES*</th>
                        <th className="font-medium py-2 bg-[#0AA6FF]">Puntaje total</th>
                     </tr>
                  </thead>
                  <tbody id="tbBody" className="">
                     {
                        resultIes.sort( (a,b) => b.scoreIES - a.scoreIES).map((item, index) => (
                           <tr className={`${index % 2 === 0 ? "bg-blue-300/30" : ""} ${
                              index === 0 ? "font-semibold text-xl text-gray-700" : "text-gray-600"
                              }`}>
                              <td className="py-3">{scorePreSeleccion}</td>
                              <td className="py-3 text-left">{item.nameIES}</td>
                              <td className="py-3">{item.scoreIES}</td>
                              <td className="py-3 text-xl bg-[#0AA6FF]/50">{parseInt(item.scoreIES)+parseInt(scorePreSeleccion)}</td>
                           </tr>
                        ))
                     }
                     <tr>
                     </tr>
                  </tbody>
               </table>
               {//console.log(modalidad)
               scoreMod
               .filter((item) => parseInt(item.idMod) == modSeleccion) // Filtra solo los que coincidan
               .map((item) => ( //(console.log(item)
                  <div className="text-sm mt-5 border-black border border-dashed p-2">
                     <ul>
                        <li>Para la modalidad de postulación 
                        <span className="text-[#0AA6FF] text-base">{' '+item.name}</span></li>
                        <li>El puntaje mínimo obtenido fue <span className="text-red-600 text-base">{item.ScoreMin} puntos</span></li> 
                        <li>El puntaje máximo obtenido fue <span className="text-red-600 text-base">{item.ScoreMax} puntos</span></li> 
                     </ul>
                  </div>
               ))
               }
              
               <p id='result-message' className="my-6 sm:px-6 text-xl font-semibold">
                  Tu mejor opción de postulación es 
                  {resultIes.sort( (a,b) => b.scoreIES - a.scoreIES).map((item, index)=>(
                     (index===0)?
                        ' '+item.nameIES
                        :' '
                  ))}
               </p>
               <p >*Para mayor detalle del cálculo del puntaje IES, consulta 
                  <a href="https://docs.google.com/spreadsheets/d/1r8D3aucgK2Zi5DN--L4F7q1KctpV16Ky/edit?gid=462354258#gid=462354258" 
                     target="_blank" 
                     className="text-blue-600">
                     Aquí
                  </a>
               </p>
            </div>
            <AddsCalculators/>
         </form>
      </main>
   </>
   )
}

export default CalcSeleccion
