

import { useNavigate } from 'react-router-dom'
import { Theme } from '../../themeComponent/Theme/Theme'
import { PageOneStyle } from './formPageStyle'
import {useForm , FormAction} from "../../components/contexts/FormContext"
import { ChangeEvent , useEffect } from 'react'



export const FormPageOne= ()=> {
  const history = useNavigate();
  const {state, dispatch } = useForm();

  useEffect(()=>{
    dispatch({
      type : FormAction.setCurrentStep,
      payload: 1
    })
  },[]);
/* acima usamos o useEffect para assim que a pagina carregar, ser 
mostrado em qual passo estamos. o state esta sendo usado no PageOneStyle
porem essa informaçâo de qual passo estamos, só sera utilizada posteriormente
no side bar do site */



  const handleNextStep = () =>{
    if(state.name !== ''){
     
        history("/FormPageTwo")
     
    }else{
      
        alert("Digite seu nome para avançar.")
     
    }
      
  }
  
  
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
      /* essa funçâo vai pegar os dados que estâo sendo digitados e usar o dispatch
      para fazer uma açâo  */
      dispatch({
        type: FormAction.setName,
        payload: e.target.value
      });
  }
   
  return (
    <Theme>
      <PageOneStyle>
        <p>passo 1 de 3 </p>
        <h1>Vamos começar com seu nome.</h1>
        <p>preencha os campos abaixo com seu nome completo:</p>
        <hr/> 
        {/* hr é um codigo que adicio na uma linha horizontal na tela,
        esse codigo é do HTML */}
      <label>
        seu nome completo
        <input
          type= "text"
          value= {state.name}
          autoFocus
          onChange={handleNameChange}
          /* autoFocus serve pra quando a tela for carregada, o umput ja vai estar selecionado */
        />
      </label>
      <button onClick={handleNextStep}>Proximo</button>
      </PageOneStyle>
    </Theme>
  )
}

export default FormPageOne
