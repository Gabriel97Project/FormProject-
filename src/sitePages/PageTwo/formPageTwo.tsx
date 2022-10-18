import React from 'react'
import { Theme } from '../../themeComponent/Theme/Theme'
import { PageTwoStyle } from './formPageTwoStyle'
import { useNavigate } from 'react-router-dom'
import { useForm, FormAction } from "../../components/contexts/FormContext"
import { ChangeEvent, useEffect } from 'react'
import SelectOption, { SelectOptionTwo } from "../../components/selectOption/selectOption"
import { Link } from 'react-router-dom'

function FormPageTwo() {
  const history = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {

    if(state.name === ''){

      history("/");

    }else{
        dispatch({
        type: FormAction.setCurrentStep,
        payload: 2
       })
    }
  
  }, []);



  const handleNextStep = () => {
    if (state.name !== '') {

      history("/FormPageThree")

    } else {

      alert("Digite seu nome para avançar.")

    }

  }

  const setLevel = (level:number) => {
    dispatch({
      type : FormAction.setLevel,
      payload : level

      /* acima usamos novamente o contexto para mudar as informaçôes, nesse
      caso queremos mudar o level pq se ele for === 0  a borda do componente vai ser mudada de cor,
       em payload passamos o level pois é oq queremos mudar , e para mudar
      usamos a const setLevel dentro do onClick presente nos componentes que estao
      abaixo, quando a pessoa clicar no de primeiro componente o setLevel vai ser mudado para 0 e qndo
      a pessoa clicar no de baixo o setLevel vai ser mudado para 1, dessa forma as bordas
      vao mudar de cor e vamos saber qual componente dfoi selecionado (a mudança do set level para 1 ou 0
        esta sendo feita dentro do on click, acima so temos a funçâo...) */
      
    })
  }



  return (
    <Theme>
      <PageTwoStyle>
        <p>passo 2 de 3 </p>
        <h2>Muito bem {state.name}.</h2>
        <p>qual seu nivel de programaçâo?</p>
        <hr />

        <SelectOption
          title=''
          textContent=''
          icon = ''
          selected ={state.level === 0}
          onClick={()=> setLevel(0)}
          /* acima criamos um selected evamos fazer um estilo no styled components
          utilizando a props selected pra isso... basicamente vamos mudar a cor da opçâo
          que estiver sendo clicada... para isso criamos uma condiçâo para q se 
          caso o selected (state.level) for igual a 0 (boolean (verdadeiro ou falso) nosso
          componente clicado vai mudar de cor. nesse caso vai ser o SelectOption) */
          /* é peciso criar o type para o onClick que esta sendo passado como props do componente
          selectOptions */
        />

        <SelectOptionTwo
          titleTwo=''
          textContentTwo=''
          iconTwo =''
          selected ={state.level === 1}
          onClick={()=> setLevel(1)}
          /* nesse caso o selected foi passado como props nos components do selectOptions
          entao usamos o mesmo selected para as duas opçoes, sendo q qndo for clicado o selected vai
          fazer o component q foi clicado mudar de cor se for state.level === 0 o primeiro component vai mudar de cor
          e se for state.level === 1 o segundo muda de cor */
        />


        <Link to ="/" className='backButton'>Voltar</Link>
        {/* link é um componente do react router, que serve para mudar de pagina nem perder
        oque foi modificado, em cima inserimos a guia inicial "/" para direcionar o usuario
        caso queira voltar */}
        <button onClick={handleNextStep}>Proximo</button>
      </PageTwoStyle>
    </Theme>
  )
}

export default FormPageTwo
/* basicamente oque acontece é q criamos condiçôes para que qndo o context for mudado, 
a borda dos componentes clicados vao mudar de cor, no caso o setLevel dentro do on click... 
se o valor de set level for 0 o primeiro componente que foi o clicado e assim vai... 
criamos a const setLevel (que foi passado no onClick) e chamamos nosso dispatch para inserir a açâo 
que queremos executar (no caso mudar o level) e com o payload mudamos esse level ou seja
level vai ser = a 0 qndo clicarmos no primeiro "sou iniciante" e level vai ser = 1
qndo clicarmos no segundo "sou programador", dessa forma vamos conseguir mudar a caixa clicada
de cor e saber que foi selecionada... tudo nesse componente foi pego como props do selectOptions 
(selectOption e selectOprionTwo...chamamos os components nessa pagina pq ela ter o return e vai ser mostrado
  na tela) */