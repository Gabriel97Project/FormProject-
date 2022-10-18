import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { FormAction, useForm } from '../../components/contexts/FormContext'
import { Theme } from '../../themeComponent/Theme/Theme'
import { FormPageFourStyle } from './formPageFourStyle'

const FormPageFour = () => {
  const {state , dispatch} = useForm()
  const history = useNavigate()
  
  
  useEffect(()=>{
  if(state.name === ""){
    history('/')
  }else{
    
        dispatch({
          type : FormAction.setCurrentStep,
          payload: 4
        })
     
  }
   },[]);


  return (
    <Theme>
      <FormPageFourStyle>
        <div>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={"100px}"} height={"100px"}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
          <h2>Parabens {state.name} . <br/>Seus dados foram enviados,
          entraremos em contato.</h2>
        </div>
      </FormPageFourStyle>
    </Theme>
    
  )
}

export default FormPageFour
