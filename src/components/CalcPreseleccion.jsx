import { useCalculator } from '../hooks/useCalculator';
import AddsCalculators from './AddsCalculators'

const CalcPreseleccion = () => {

   const {modalidad,sisfoh,transicion,extra,
      priorizable,lengua,score,EnviarFormulario,
      validarExamPre,changeModalidad,changeTransicion,updatePoint,
      changeExtra,changePriorizable,handleSubmit} = useCalculator()

   return (
      <>
      <main className="font-cairo max-w-screen-md mx-auto mt-28 font-normal">
         <h2 className="font-varela-round text-3xl px-9 font-bold">Beca 18-2025</h2>
         <h1 className="font-varela-round text-3xl px-9 font-bold">Calcula tu puntaje de Preselección</h1>
         <div className='w-5/6 mx-auto mt-10 pb-3 text-left sm:text-center '>
            <span className='inline-block bg-[#F5C002] rounded-lg px-3 py-1 mx-2'>
               Puntaje de Preselección
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
               <span className='mr-1 px-3 py-1 rounded-lg bg-[#0AA6FF] text-white'>A</span>: Alto rendimiento 
            </div>
            <div className='sm:inline-block m-2'>
               <span className='sm:ml-5 mr-1 px-3 py-1 rounded-lg bg-[#0AA6FF] text-white'>B</span>: Condiciones priorizables
            </div>
         </div>
         <form id= 'form-calculadora' className="px-9 py-5" onSubmit={handleSubmit}>
            <label htmlFor="modalidad" 
               className="block uppercase font-bold mt-2 pt-6">
              {modalidad.title}
            </label>
            <select
              id="modalidad"
              type='text'
              onChange={(e)=>{changeModalidad(e)}}
              defaultValue='DEFAULT'
              className="w-full border-[#0AA6FF] border-b-2 border p-2 mt-2 placeholder-gray-400 rounded-md text-sm">
               <option key='0' value='DEFAULT' disabled >Selecciona tu modalidad</option>
               {modalidad.items.map(item => 
                  (<option key={item.id} value={item.value}>{item.nombre}</option>)
               )}
            </select>

            <div className='shadow-[0_25px_150px_-12px_rgba(0,0,0,0.25)] rounded-lg mt-10 border border-[#0AA6FF]'>
               <p 
                  className='uppercase px-6 py-2 rounded-t-md bg-[#0AA6FF] text-white text-left'> 
                  A : Alto rendimiento
               </p>
               <div className='p-6'>
                  <label htmlFor="ScoreNational" 
                     className="block uppercase font-bold  pt-2">
                     Puntaje del Examen Nacional de Preselección (0-120):
                  </label>
                  <div className="flex mt-2 mx-auto text-left">
                     <input 
                        type="number" placeholder="Múltiplo de 2"
                        step="2" min="0" max="120"
                        id="ScoreNational"
                        onChange={e => (validarExamPre(e.target.value) ? updatePoint(e.target.value, 'examen'):{})}
                        className="border-[#F5C002] border-b-2 border w-1/2 p-2 mt-2 placeholder-gray-400 rounded-md text-sm"         
                        />
                     <div className='h-auto w-1/2 content-center'>
                        <span id='examen-point'
                           className='block font-bold text-blue-500 text-center'>
                           {`+ ${score['examen']} puntos`}
                        </span>
                     </div>
                  </div>
               </div>
               <p id='examen-alert' className='text-red-500 font-medium pb-4'></p>
            </div>

            <div className='shadow-[0_25px_150px_-12px_rgba(0,0,0,0.25)] rounded-lg mt-10 border border-[#0AA6FF]'>
               <p className='uppercase px-6 py-2 rounded-t-md bg-[#0AA6FF] text-white text-left'> 
                  B : Condiciones priorizables
               </p>  
               <div className='p-6'>
                  <label className="block uppercase font-bold mt-2">
                     {sisfoh.name}
                  </label>
                  <div className='block sm:flex mt-3 mb-8 mx-auto text-left'>
                     <ul id='sisfohList' className="sm:w-1/2 bg-white text-sm">
                        {  
                           sisfoh.items.map(item => (
                              <li key={item.id} id={`${item.value}-list`} className="block rounded-md border-[#F5C002] border border-b-2 mb-4">
                                 <div className="flex items-center ps-3">
                                    <input 
                                       id={`${item.value}-lst-radio`} 
                                       key={item.id}
                                       type="radio" 
                                       value={ item.score } 
                                       name="list-radio" 
                                       onChange={ e => updatePoint(e.target.value, 'sisfoh') }
                                       className="w-4 h-4"/>
                                    <label 
                                       htmlFor={`${item.value}-lst-radio`}  
                                       className="w-full py-3 ms-2">
                                          {item.nombre}
                                    </label>
                                    <div className='px-5 text-gray-500'>+{item.score}</div>
                                 </div>
                              </li>
                           ))
                        }
                     </ul>
                     <div className='h-auto sm:w-1/2 content-center'>
                        <span id='sisfoh-point'
                           className='block font-bold text-blue-500 text-center'>
                           {`+ ${score['sisfoh']} puntos`}
                        </span>
                     </div>
                  </div>
                  <hr />
                  <label htmlFor="transicion" 
                     className="block uppercase font-bold mt-2 pt-6">
                     {transicion.title}
                  </label> 
                  <p className='text-xs mt-2'>Selecciona el departamento donde terminaste la secundaria.</p>
                  <div className='flex mt-4 mb-8 mx-auto text-left'>
                     <select 
                        id="transicion" type='text'
                        defaultValue='DEFAULT'
                        onChange={ e => changeTransicion(e.target.value)}
                        className="w-1/2 border-[#F5C002] border-b-2 border p-2 mt-2 placeholder-gray-400 rounded-md text-sm">
                        <option key='0' value='DEFAULT' disabled>Selecciona tu departamento</option>
                        {
                           transicion.items
                           .flatMap(item => item.departaments.map( dept => ({ quintil: item.quintil, value:item.value, departament:dept })))
                           .sort( (a,b) => a.departament.localeCompare(b.departament))
                           .map( item => (<option key={item.departament} value={item.value}>{item.departament}</option> ))
                        }
                     </select>
                     <div className='h-auto w-1/2 content-center text-center font-bold'>
                        <span id='transicion-quintil'
                           className='block'> 
                           Quintil X
                        </span>
                        <span id='transicion-point'
                           className='block text-blue-500'>
                           {`+ ${score['transicion']} puntos`}
                        </span>
                     </div>
                  </div>
                  <hr />

                  <label 
                     className="block uppercase font-bold mt-2 pt-6">
                     {extra.title}
                  </label> 
                  <div className='block mt-3 mb-8 mx-auto text-left'>
                     <ul className="bg-white border border-gray-200 rounded-lg text-sm">
                        {
                           extra.items.map( item => (
                              <li key={item.id} className="w-full border-b border-gray-200 rounded-t-lg ">
                                 <div className="flex items-center ps-3">
                                    <input id={`${item.value}-checkbox`} type="checkbox" name='extra' value={item.score} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" 
                                       onClick={() => changeExtra(item.value)}/>
                                    <label htmlFor={`${item.value}-checkbox`} className="w-full py-3 ms-2 ">{item.nombre}</label>
                                    <div className='px-5 text-gray-500'>+{item.score}</div>
                                 </div>
                              </li>
                           ))
                        }
                     </ul>
                     <div className='pt-5 w-full content-center'>
                        <span id='extra-point'
                           className='block font-bold text-blue-500 text-center'> 
                           {`+ ${score['extra']} puntos`}
                        </span>
                     </div>
                  </div>
                  <hr />
                  <label
                     className="block uppercase font-bold mt-2 pt-6">
                     {priorizable.title}
                  </label> 
                  <div className='block mt-3 mb-8 mx-auto text-left'>
                     <ul className=" text-gray-900 bg-white border border-gray-200 rounded-lg text-sm">
                        {
                           priorizable.items.map( item => (
                              <li key={item.id} id={`${item.value}-li-checkbox`} className="w-full border-b border-gray-200 rounded-t-lg ">
                                 <div className="flex items-center ps-3">
                                    <input id={`${item.value}-checkbox`} type="checkbox" name='priorizable' value={item.score} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                    onClick={ () => changePriorizable(item.value)}/>
                                    <label htmlFor={`${item.value}-checkbox`} className="w-full py-3 ms-2">{item.nombre}</label>
                                    <div className='px-5 text-gray-500'>+{item.score}</div>
                                 </div>
                              </li>
                           ))
                        }
                     </ul>
                     <div className='pt-5 w-full content-center'>
                        <span id='priorizable-point'
                           className='block font-bold text-blue-500 text-center'> 
                           {`+ ${score['priorizable']} puntos`}
                        </span>
                     </div>
                  </div>
                  <div id='LO' className='hidden'>
                     <label
                        className="block uppercase font-bold mt-2 pt-2">
                     {lengua.title}
                     </label>
                     <p className='text-xs mt-2'>Selecciona tu nivel de prioridad</p>
                     
                     <div className='flex my-2 mx-auto text-left'>
                        <select 
                           id={lengua.name} type='text'
                           onChange={ e => updatePoint(e.target.value,'lengua')}
                           defaultValue='DEFAULT'
                           className="w-1/2 border-[#F5C002] border-b-2 border p-2 mt-2 placeholder-gray-400 rounded-md text-sm">
                           <option key='0' value='DEFAULT' disabled>Selecciona tu lengua</option>
                           {
                              lengua.items
                              .map( item => (<option key={item.id} value={item.score}>{item.nombre}</option> ))
                           }
                        </select>
                        <div className='h-auto w-1/2 content-center'>
                           <span id='lengua-point'
                              className='block font-bold text-blue-500 text-center'> 
                              {`+ ${score['lengua']} puntos`}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className='my-5'>
               <button 
                  type="button" onClick={(e) => EnviarFormulario(e,'Calcular')}
                  className="focus:outline-none text-white bg-[#F5C002] hover:bg-yellow-500 rounded-lg px-5 py-2.5 m-2 ">
                     Calcular puntaje
               </button>
               <button 
                  type="button" onClick={(e) => EnviarFormulario(e,'')}
                  className="focus:outline-none text-white bg-gray-400 hover:bg-gray-500  rounded-lg px-5 py-2.5 m2 ">
                     Limpiar Formulario
               </button>
            </div>   

            <div id='resultado' tabindex='0' className='hidden shadow-[0_25px_150px_-12px_rgba(0,0,0,0.25)] bg-white rounded-lg mt-10 border border-[#F5C002] px-5 py-6'>     
               <h2 className="text-2xl font-bold">Puntaje Total: <span id='result-point' className="text-blue-500">120 puntos</span></h2>
               <p id='result_modalidad' className="text-sm mt-1">Modalidad Ordinaria: Máx 170 puntos</p>
               <div className='block md:flex'>
                  <div className="md:w-1/2 mt-6 space-y-2 sm:none">
                     <p className="flex justify-between">
                     <span>ENP:</span> <span id='result_examen' name='examen' >+54 puntos</span>
                     </p>
                     <p className="flex justify-between">
                     <span>SISFOH:</span> <span id='result_sisfoh' name='sisfoh'>+5 puntos</span>
                     </p>
                     <p className="flex justify-between">
                     <span>Tasa de transición:</span> <span id='result_transicion' name='transicion'>+7 puntos</span>
                     </p>
                     <p className="flex justify-between">
                     <span>Actividades extracurriculares:</span> <span id='result_extra' name='extra'>+10 puntos</span>
                     </p>
                     <p className="flex justify-between">
                     <span>Condiciones priorizables:</span> <span id='result_priorizable' name='priorizable'>+25 puntos</span>
                     </p>
                     <p id='result_content_lengua' className="flex justify-between">
                     <span>Lenguaje :</span> <span id='result_lengua' name='lengua'>+25 puntos</span>
                     </p>
                  </div>
               </div>
               <p id='result-message' className="mt-6 font-semibold">
                  ¡Felicidades tienes un alto puntaje!
               </p>
               <p className='mt-6 font-semibold'>
                  Recomendación: <span id='result-recomendacion' className='font-normal'>Postula a la beca en una IES que otorgue un puntaje alto de preferencia y así aumentar tus probabilidades de ganar la beca.</span>
               </p>
            </div>
            <AddsCalculators />
         </form>
      </main>
      </>
   )
}

export default CalcPreseleccion;