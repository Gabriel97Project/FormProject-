import { ReactNode } from "react"
import SideBarBox from "../../components/sideBarBox/SideBarBox";
import { Header } from "../Header/Header";
import { Page, SideBar, SiteComponent, Steps, ThemeStyle } from "./styles"
import { useForm } from "../../components/contexts/FormContext"
type Props = {
    children: ReactNode;
}


export const Theme = ({ children }: Props) => {

    const { state } = useForm();
    /* precisamos chamar o useForm por nele temos todos os dados do contexto, 
    pegamos o dado para saber em qual pagina estamos, usamos o state.currentStep pra 
    saber qual pagina estamos, dessa forma quando o current step for === 1
    vamos saber q estamos na pagina 1, dessa forma podemos mudar as cores... 
    criamos o colorChange, passamos ele como props para o component sideBar, dessa forma
    podemos estiliza-lo no styled components como props, baseado se o estado dele 
    estiver verdadeiro ou falso */
    return (
        <ThemeStyle>
            <SiteComponent>
                <Header />
                <Steps>
                    <SideBar>
                        <SideBarBox 
                            title = "Pessoal"
                            description= "Se indentifique"
                            icon = "profile"
                            path = "/"
                            colorChange = {state.currentStep === 1}
                            /* qndo currentStep for === 1 o estado esta verdadeiro e o icone da pagina 1
                            vai mudar de cor ... qndo o current step for === 2 o estado volta para falso,
                            e o icone da pagina 1 volta a ser cinza (estilo criado no styled-components) */
                        
                        />
                        <SideBarBox 
                            title = "Profissional"
                            description= "Seu nivel"
                            icon = "book"
                            path = "/FormPageTwo"
                            colorChange = {state.currentStep === 2}
                        />
                        <SideBarBox 
                            title = "Contato"
                            description= "Como te encontramos?"
                            icon = "mail"
                            path = "/FormPageThree"
                            colorChange = {state.currentStep === 3}
                        />
                        <SideBarBox 
                            title = "Finalizar"
                            description= "Dados enviados."
                            icon = "finish"
                            path = "/FormPageFour"
                            colorChange = {state.currentStep === 4}
                        />
                    </SideBar>
                    <Page>
                        {children}
                        {/* o children é o ambiente criado pelo FormProvider, 
                        se ele nao for chamado aqui, as informaçôes das paginas no site
                        nao vao aparecer */}
                    </Page>
                </Steps>



            </SiteComponent>
        </ThemeStyle>
    )

}