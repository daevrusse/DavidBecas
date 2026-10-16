import { useState, useMemo, useEffect} from 'react';
import {dbCalculadora} from '../data/db';
import { dbSeleccion, dbModalidad } from '../data/dbSeleccion';
export const useCalculator = () =>{

   const [modalidad] = useState(dbCalculadora[0])
   const [sisfoh, setSisfoh] = useState(dbCalculadora[1])
   const [transicion] = useState(dbCalculadora[2])
   const [extra] = useState(dbCalculadora[3])
   const [priorizable] = useState(dbCalculadora[4])
   const [lengua] = useState(dbCalculadora[5])
   const [score, setScore] = useState({examen:0,sisfoh:0,transicion:0,extra:0,priorizable:0,lengua:0})
   const scoreTotal = useMemo( () => Object.values(score).reduce( (total, item) => total + item, 0 ), [score])
   const MAX_SCORE = 170
   /**********+* */
   const [ies] = useState(dbSeleccion)
   const [scorePreSeleccion, setScorePreSeleccion] = useState(0)
   const [selectedType, setSelectedType] = useState(["DEFAULT", "DEFAULT", "DEFAULT"])
   const [divIes, setDivIEs] = useState({ies2:false,ies3:false})
   const [resultIes, setResultIes] = useState([])
   const [scoreMod, setScoreMod] = useState(dbModalidad)
   const [modSeleccion, setModSeleccion] = useState(0)
   useEffect(() => {
      handleButton();
    }, [divIes])
   //   const scoreTotalSeleccion = useMemo ( () => Object.values(scoreSeleccion).reduce( (total, item) => total + ite) )
   function getPuntajepCheck(elem){
      let pCheck = 0
      elem.forEach(input => { pCheck = pCheck + parseInt(input.value) });
     return pCheck
   }
   //const cartTotal = useMemo( () => cart.reduce( (total, item) => total + (item.quantity*item.price), 0 ), [cart])
   function EnviarFormulario(e, action){
      e.preventDefault()
      const iMod = document.querySelector('#modalidad')
      const pScoreNational = document.querySelector('#ScoreNational')
      const pSisfoh = document.querySelectorAll('input[type=radio]:checked')[0]
      const iQuintil = document.querySelector('#transicion')
      /*const iExtra = document.querySelectorAll('input[name="extra"]:checked')
      const iPriorizable = document.querySelectorAll('input[name="priorizable"]:checked')*/
      const pLengua = document.querySelector('#LenguaOriginaria')
      const resultado = document.querySelector('#resultado')

      if (action === 'Calcular') {
         if( iMod.value.trim() !== 'DEFAULT' ){
            if( pScoreNational.value.trim() !== '' && validarExamPre(pScoreNational.value)){
               if(typeof pSisfoh !== 'undefined'){
                  if(iQuintil.value.trim() !== 'DEFAULT'){
                     if ((iMod.value ==='EIB' && pLengua.value !== 'DEFAULT') ||
                        (iMod.value !== 'EIB' && pLengua.value === 'DEFAULT')){
                        
                        /*const pQuintil = transicion.items.filter( item => item.value === iQuintil.value )[0].score
                        const pExtra = getPuntajepCheck(iExtra)
                        const pPriorizable = getPuntajepCheck(iPriorizable)
                        console.log(pSisfoh)
                        console.log(' - Modalidad: '+iMod)
                        console.log(' - Puntaje Nacional: '+pScoreNational.value)
                        console.log(' - Sisfoh: ' + pSisfoh)
                        console.log(' - Quintil: '+iQuintil + ' p: '+ pQuintil)
                        console.log(' - Extra: '+iExtra + ' p: '+ pExtra)
                        console.log(' - Priorizable: '+iPriorizable + ' p: '+pPriorizable)
                        */
                        resultado.style.display = 'block'
                        GenerarReporte(iMod)
                        resultado.focus()
                        return;
                     } else pLengua.focus()
                     
                  } else iQuintil.focus()
               } else {
                  const _psisfoh = document.querySelectorAll('input[type=radio]')[1]
                  _psisfoh.focus()
               }
            } else pScoreNational.focus()
         } else iMod.focus()

      } else {
         const formulario = document.querySelector('#form-calculadora')
         formulario.reset()
         setScore({examen:0,sisfoh:0,transicion:0,extra:0,priorizable:0,lengua:0})
         
         const new_quintil = document.querySelector('#transicion-quintil')
         new_quintil.innerText = 'Quintil X'

         iMod.focus()
      }

      resultado.style.display = 'none'
   }
   function GenerarReporte(iMod){
      const iResult = document.querySelector('#result-point')
      iResult.innerText = scoreTotal + ' puntos'

      const labels = document.querySelectorAll('span[id*="result_"]')
      labels.forEach( (item) => {
         const name = item.getAttribute('name')
         const _score = score[name]
         item.innerHTML = '+'+_score+' puntos'
      })

      const grafico = document.querySelector('#grafico')
      const process_text = document.querySelector('#progress')
      const progress = Math.round((scoreTotal/(MAX_SCORE+((iMod.value === 'EIB')? 10:0)))*100)
      grafico.setAttribute('stroke-dashoffset', 100-progress)
      process_text.innerText = progress+'%'
      const result_modalidad = document.querySelector('#result_modalidad')
      const modalidad_name = modalidad.items.filter(item => (item.value==iMod.value) )
      result_modalidad.innerText = 'Modalidad '+modalidad_name[0].nombre_corto+': Máx '+(MAX_SCORE+((iMod.value === 'EIB')? 10:0)) +' puntos'
      const mensaje = document.querySelector('#result-message')
      const recomendacion = document.querySelector('#result-recomendacion')
      
      mensaje.innerText = (scoreTotal>= 100)?  'Felicidades tienes un alto puntaje  🎉':'Felicidades tienes un buen puntaje 🎉'
      recomendacion.innerText = (scoreTotal>=100)? 
         'Postula a la beca en una IES que otorgue un puntaje alto de preferencia y así aumentar tus probabilidades de ganar la beca.'
         :'Postula a la beca con una IES que otorgue un puntaje alto para maximizar tus probabilidades de ser becado.'
   }
   function validarExamPre(e){
      const val = parseInt(e)
      const alert = document.querySelector('#examen-alert')
      //console.log('Validando examPre: '+val)
      if (!isNaN(val)){
         if(val>=0 && val<=120){
            if(val%2 == 0){
               alert.innerText = ''
               return true
            } else {
               alert.innerText = 'Ingrese un número par válido'
               //console.log('Ingrese un número par válido')
            }
         }else{
            alert.innerText = 'Ingrese un número entre 0 y 120'
            //console.log('Ingrese un número entre 0 y 120')
         }
      } else {
         alert.innerText = 'Debe ingresar un número válido'
         //console.log('Debe ingresar un número válido')
      }
      return false
   }
   const updateItemScore = (itemId, newScore) => {
      setSisfoh((prevSisfoh) => {
         return {
            ...prevSisfoh,
            items: prevSisfoh.items.map((item) =>
            item.id === itemId ? { ...item, score: newScore } : item
            ),
         }
      })
   }
   function changeModalidad(e) {
      const lo = document.querySelector('#LO')
      const lo_sel = document.querySelector('#LenguaOriginaria')
      const df = document.querySelector('#DF-li-checkbox')
      const df_check = document.querySelector('#DF-checkbox')  
      const ia = document.querySelector('#IA-li-checkbox')
      const ia_check = document.querySelector('#IA-checkbox')  
      const or = document.querySelector('#OR-li-checkbox')
      const or_check = document.querySelector('#OR-checkbox')  

      const mod = document.querySelector("#modalidad").value
      //console.log('changeModalidad: ' + mod)

      const result_content_lengua = document.querySelector('#result_content_lengua')

      result_content_lengua.style.display = ( mod === 'EIB') ? 'flex' : 'none'
      lo.style.display = ( mod === 'EIB') ? 'block' : 'none'
      
      if (mod !== 'EIB'){
         lo_sel.value = 'DEFAULT'
         setScore( prev => ({ ...prev, lengua:0}))
      } 
      
      df.style.display = ( mod === 'PROTECCION') ? 'block': 'none'
      df_check.checked = false

      or.style.display = ( mod === 'PROTECCION') ? 'none': 'block'
      //console.log(or.style.display )
      or_check.checked = (or.style.display === 'none') ? false : or_check.checked

      ia.style.display = ( mod === 'CNA_PA') ? 'none': 'block'
      ia_check.checked = (ia.style.display === 'none') ? false : ia_check.checked

      changePriorizable()
      
      updateItemScore(2,(mod !== 'ORDINARIA')? 2:0 )
      const PobrezaCheck = document.querySelector('#P-lst-radio')
      
      if (PobrezaCheck.checked) updatePoint( (mod === 'ORDINARIA') ? '0': '2' , 'sisfoh') 
      
      const NoPobre = document.querySelector('#NP-list')
      const NoPobreCheck = document.querySelector('#NP-lst-radio')
      NoPobre.style.display = (mod === 'ORDINARIA') ? 'none' : 'block' 
      if (mod === 'ORDINARIA' && NoPobreCheck.checked){
         NoPobreCheck.checked = false
      }
      
   }
   function changeTransicion(e) {
      //console.log(e)
      const elem = transicion.items.filter( item =>( item.value === e))[0]
      const new_point = document.querySelector('#transicion-point')
      const new_quintil = document.querySelector('#transicion-quintil')
      new_point.innerHTML = '+'+ elem.score +' puntos'
      new_quintil.innerHTML = 'Quintil '+elem.quintil
      setScore(prev => ({ ...prev, transicion:elem.score}))
   }
   // Actualizar State de examen, sisfoh, lengua
   function updatePoint(e,id) {
      const new_point = document.querySelector(`#${id}-point`)
      new_point.innerHTML = '+'+ e +' puntos'
      if(id === 'examen')
         setScore(prev => ({ ...prev, examen:parseInt(e)}))
      else if(id === 'sisfoh')
         setScore(prev => ({ ...prev, sisfoh:parseInt(e)}))
      else if(id === 'lengua')
         setScore(prev => ({ ...prev, lengua:parseInt(e)}))
   }
   function changeExtra(e){
      const check = document.querySelector(`#${e}-checkbox`)
      //console.log(e)
      if(check.checked){
         if (e === 'CE'){
            const check2 = document.querySelector('#CEP-checkbox')
            check2.checked = !check.checked
         }else if(e === 'CEP'){
            const check2 = document.querySelector('#CE-checkbox')
            check2.checked = !check.checked
         } else if(e === 'JD'){
            const check2 = document.querySelector('#JDP-checkbox')
            check2.checked = !check.checked
         } else if(e === 'JDP'){
            const check2 = document.querySelector('#JD-checkbox')
            check2.checked = !check.checked
         }
      }
      const iExtra = document.querySelectorAll('input[name="extra"]:checked')
      const alertExtra = document.querySelector('#extra-point')
      const pExtra = getPuntajepCheck(iExtra)

      alertExtra.innerText = '+'+pExtra+ ' puntos'
      setScore(prev => ({ ...prev, extra:pExtra}))
   }
   function changePriorizable(e=null){
      const iPriorizable = document.querySelectorAll('input[name="priorizable"]:checked')
      const alertPriorizable = document.querySelector('#priorizable-point')
      const pPriorizable = getPuntajepCheck(iPriorizable)
      const df = document.querySelector("#DF-checkbox").checked
      //console.log('changePriorizable : e = '+e )
      const MAX = (df)? 30 : 25
      if (pPriorizable<=MAX){
         alertPriorizable.innerText = '+'+pPriorizable+ ' puntos'
         setScore(prev => ({ ...prev, priorizable:pPriorizable}))
      } else {
         alertPriorizable.innerText = '+'+MAX+' puntos'
         setScore(prev => ({ ...prev, priorizable:MAX}))
      }
   }
   function handleSubmit(event){
      event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
   }
   function handleTypeChange(index, value){
      //console.log('Cambio[handleTypeChange]._.'+index+ ' | '+value+' |')
      const updateTypes = [...selectedType];
      updateTypes[index] = value
      setSelectedType(updateTypes)
      //handleIesChange(parseInt(index)+1, 0)
      const selectIes = document.querySelector(`#idIes${parseInt(index)+1}`)
      selectIes.value = 'DEFAULT'
      removeIesResult(parseInt(index)+1)
   }
   function handleIesChange(index,value){
      //console.log('Change IEs::::> '+index)
      //const itemExist = ies.find(item => item.id === item.id)
      setScoreSeleccion( (prev)=>({
         ...prev,
         [`scoreIes${index}`]:parseInt(value)
      }))
   }
   function handleDivChange(index){
         setDivIEs( (prev)=>({
            ...prev, 
            [`ies${index}`]: ((index === '2' && index!=='1')? !prev.ies2 : !prev.ies3) 
         }) )
         handleTypeChange(parseInt(index)-1, 'DEFAULT')
         const resetSelect = document.querySelector(`#typeIes${index}`)
         resetSelect.value = 'DEFAULT'
         const resetSelectIes = document.querySelector(`#idIes${index}`)
         resetSelectIes.value = 'DEFAULT'
         removeIesResult(index)
   }
   function removeIesResult(index){
      const indexExists = resultIes.filter((item) => item.index === index);
      if (indexExists){
         const updateIES = resultIes.filter( item => item.index != index)
         setResultIes(updateIES)
      }
   }
   function handleButton(){
      const btnIes1 = document.querySelector('#btn-ies1')
      if(btnIes1!== null){

         
         btnIes1.style.display = (divIes.ies2) ? 'none': 'block'
         const hrIes1 = document.querySelector('#separador-ies1')
         hrIes1.style.display = (!divIes.ies2) ? 'none': 'block'
         const iconAdd2 = document.querySelector('#icon-add-2')
         const iconRemove2 = document.querySelector('#icon-remove-2')
         
         iconAdd2.style.display = (divIes.ies3)? 'none':'block'
         iconRemove2.style.display = (divIes.ies3)? 'none': 'block'
         const hrIes2 = document.querySelector('#separador-ies2')
         hrIes2.style.display = (!divIes.ies3) ? 'none': 'block'
      }
   }
   function SendCalcSeleccion(e, action=''){
      e.preventDefault()
      const resultado = document.querySelector('#resultado')

      if (action === 'Calcular') {
         if (modSeleccion!==0){
            if(validarPuntajePre()){
               if(resultIes.length !==0){
                  resultado.style.display = 'block'
               }
            }
         }else{
            const mod = document.querySelector('#modalidad')
            mod.focus()
         }
      } else {
         resultado.style.display = 'none'
         setScorePreSeleccion(0)
         setResultIes([])
         handleDivChange('1')
         if (divIes.ies2) { handleDivChange('2') }
         if (divIes.ies3) { handleDivChange('3') }
      }

   }
   function addIes(index, id){
      // Verificar si el índice ya existe en resultIes
      const indexExists = resultIes.some((item) => item.index === index);

      const filterIES = ies.find((i) => i.idIES === parseInt(id)); 
      if (!filterIES) {
         console.error("No se encontró el IES con el ID:", id);
         return;
      }

      if (indexExists) {
         // Actualizar el objeto existente en resultIes
         const updateIES = resultIes.map((item) =>
            item.index === index ? { ...item, ...filterIES } : item
         );
         setResultIes(updateIES);
      } else {
         // Agregar un nuevo elemento con el índice
         const newItem = { index, ...filterIES };
         setResultIes((prev) => [...prev, newItem]);
      }  
   }
   function validarPuntajePre(e){
      const PreSeleccion = document.querySelector('#inPuntajePS')
      const val = PreSeleccion.value
      const alert = document.querySelector('#examen-alert')
      //console.log('Validando examPre: '+val)
      if (!isNaN(val)) {
         if(val>=8 && val<=131) {
               setScorePreSeleccion(val)
               alert.innerText = ''
               return true
         } else {
            alert.innerText = 'Ingrese un número entre 8 y 131'
         }
      } else {
         alert.innerText = 'Debe ingresar un número válido'
      }
      setScorePreSeleccion(0)
      PreSeleccion.focus()
      console.log('enfocando preseleccion')
      return false
   }
   function updateModSeleccion(val){
      setModSeleccion(val)
   }

   return {
      modalidad,
      sisfoh,
      transicion,
      extra, 
      priorizable,
      lengua,
      score,
      ies,
      scorePreSeleccion,
      selectedType,
      divIes,
      resultIes,
      scoreMod,
      modSeleccion,
      EnviarFormulario,
      validarExamPre,
      changeModalidad,
      changeTransicion,
      updatePoint,
      changeExtra,
      changePriorizable,
      handleSubmit,
      handleTypeChange,
      handleIesChange,
      handleDivChange,
      SendCalcSeleccion,
      addIes,
      validarPuntajePre,
      updateModSeleccion
   }
}