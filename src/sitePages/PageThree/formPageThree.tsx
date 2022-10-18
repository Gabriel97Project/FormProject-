

import { useNavigate } from 'react-router-dom'
import { Theme } from '../../themeComponent/Theme/Theme'
import { PageThreeStyle } from './formPageThreeStyle'
import { useForm, FormAction } from "../../components/contexts/FormContext"
import { ChangeEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'



export const FormPageThree = () => {
  const history = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {

    if (state.name === '') {
      history('/')
    } else {
      dispatch({
        type: FormAction.setCurrentStep,
        payload: 3
      })
    }
  }, []);
  /* acima usamos o useEffect para assim que a pagina carregar, ser 
  mostrado em qual passo estamos. o state esta sendo usado no PageOneStyle
  porem essa informaçâo de qual passo estamos, só sera utilizada posteriormente
  no side bar do site */



  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {

      history('/FormPageFour')

      /* no formPageThree so devemos confirmar se ainda a temos o nome
      do usuario preenchido na pagina 1 , pois na pagina 2, a opçâo ja começa selecionada, dessa forma n
      precisa ser feito a verificaçâo se algo deixou de ser clicado na pagina
      anterior (sou programador ou sou iniciante)... basicamente o nome vai continuar sendo nosso
      parametro de verificaçâo para o usuario prosseguir */

    } else {

      alert("Preencha os campos para avançar.")

    }

  }


  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {

    dispatch({
      type: FormAction.setEmail,
      payload: e.target.value
    });
  }
  const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {

    dispatch({
      type: FormAction.setGithub,
      payload: e.target.value
    });
  }


  return (
    <Theme>
      <PageThreeStyle>
        <p>passo 3 de 3 </p>
        <h2>Legal {state.name}, como te encontramos?</h2>
        <p>preencha os campos abaixo com seus contatos:</p>
        <hr />
        {/* hr é um codigo que adicio na uma linha horizontal na tela,
        esse codigo é do HTML */}

        <label>
          Qual seu e-mail?
          <input
            type="email"
            name="email"
             required
            value= {state.email}
            onChange= {handleEmailChange}

            
          />
        </label>

        <label>
          Qual seu GitHub?
          <input 
            type= "url"
            name="url"
            pattern="https?://.+"
             required
            value= {state.github}
            onChange= {handleGitHubChange}
          />
        </label>


        <Link to="/FormPageTwo" className='backButtonTwo'>Voltar</Link>
        <button onClick={handleNextStep}>Finalizar cadastro</button>
      </PageThreeStyle>
    </Theme>
  )
}

export default FormPageThree
