 import { createContext, ReactNode, useContext, useReducer} from "react"

 
 /* create context = cria o context
 useContext = use o context
 usereducer= usa e cria o reducer*/
 
 // Context, Reducer, Provider, Hook
/* cONTEXT = se trata de um contexto, uma caixa que vai armazenar os dados
REDUCER =basicamemnte se trata de um agrupamento de ações, um realizador de tarefas
PRoVIDER = é o ambiente que armazena os dados do contexto
HOOK = ele vai simplificar o processo de acesso a informaçoes e tambem vai
facilitar caso precisemos trocar essas informações
 */
type StateTypeProps = {
    currentStep:number,
    name:string,
    level: 0 | 1,
    email:string,
    github:string
}
/* acima criamos os types do state (nossos dados),
em level colocamos 0 ou 1, pois vao ser as opçoes disponiveis para escolha de quem
navegar no site  */


type ActionTypeProps = {
    type: FormAction;
    payload:any;
}
/* acima temos os types do nosso action (FormAction npo enum) 
no caso temos os types de formAction, e de payload, lembrando que payload
sao todos os dados que queremos mudar no formulario, entao em alguns casos, iremos retornar,
tanto strings como numeros, entao não é possivel tipar o payload, ele pode ter muitos types,
nesse caso, usamos o any, porem devemos evitar o uso de any*/


type ContextTypeProps ={
    state: StateTypeProps;
    dispatch: (action:ActionTypeProps) => void;
}
/* acima temos os types do nosso context: como ja sei que o state vai ser os dados ,
no state eu passo o type que ja foi criado (StateTypeProps) pois nele ja temos todos os types 
para dados como name, email, level... 
o dispatch é uma funçao que nao retorna nada (void)
esses types serão passados para o createcontext
 */

type FormProviderTypeProps = {
    children: ReactNode;
}



//context
const initialData:StateTypeProps = {
    currentStep: 0 ,
    name : '',
    level: 0 ,
    email: '',
    github: ''
}
/* intialData sao nossos dados iniciais, ou seja, os valores iniciais do nosso formulario,
precisamos que os formularios se iniciem sem nada ou com valor zerado, para serem preenchidos
para isso serve o initialData... ele vai ser usado no nosso FormReducer */


const FormContext = createContext<ContextTypeProps | undefined>(undefined);
/* //crete context sempre precisa de um valor padrao inicial dentro de ():
 aqui temos dois types, pois o valor do context vai começar undefined e depois,
 vai ser mudado de acordo com oque for preenchido, para isso temos o ContextTypeProps*/



// Reducer
export enum FormAction{
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}
/* Enum é  um tipo de dado utilizado para armazenar um conjunto de valores constantes, ou seja, são valores fixos,
 que não podem ser modificados. Na prática, o enum é um tipo
 especial de classe que utiliza a palavra-chave enum ao ser declarado. ele precisa ser utilizado
 no componente principal*/



const formReducer = (state:StateTypeProps, action:ActionTypeProps) =>{
// como form reducer é pra uso interno, ele nao precisa ser exportado
//formReducer é uma funçao que recebe umstate e um action
// nosso state vao ser os dados preenchidos e o action vai ser oque sera feito com esses dados
    switch(action.type){
        case FormAction.setCurrentStep:
            /* o reducer sempre vai receber os dados (state), e ele vai executar uma ação
            nesses dados (action) e vai nos retornar esses dados apos fazer a ação neles
            action.TYPE é a ação que eu quero executar */
            return{...state, currentStep: action.payload}
            /* ...state é um clone do state atual, payload sao os dados que vão ser executados
            ou seja: no primeiro parametro, recebi os dados atuais (state);
            depois executei a ação de trocar o passo atual (FormAction.setCurrentStep);
            por fim  pegamos os dados atuais que estamos mandando (action.payload), trocamos esses dados no current step,
            e o reducer nos retorna um novo state, porem com o currentStep ja modificado
            em payload eu digo oque eu quero trocar, ou seja, em payload eu mando a informação e o reducer faz essa troca de dados
            */
        case FormAction.setName:
            return{...state, name: action.payload};
        case FormAction.setLevel:
            return{...state, level : action.payload};
        case FormAction.setEmail:
            return{...state, email: action.payload};
        case FormAction.setGithub:
            return{...state, github : action.payload};
        default:
            return state;
        /* caso nao seja inserido nenhum tipo de action disponivel no codigo,
        por exemplo, a pessoa digitar algo que nao corresponde a nome, email, level... 
        sera retornado o estado inicial, ou seja, sem alteraçoes , pra isso usamos o
        default: return state (retorna o estado inicial, state) */
        
    }

}


//Provider
export const FormProvider = ({children}: FormProviderTypeProps) =>{
    const [state, dispatch] = useReducer(formReducer, initialData);
    /* acima temos o uso padrao de um reducer pelo react, em state temos 
    os nossos dados e em dispatch temos uma função que é usada para executar
    nossas açoes*/
    const value = {state,dispatch}
    /* esse state serve para fixar no nosso form quais serao os dados inicial mostrados,
     entao passamos 2 parametros para nosso useReducer, que vao ser nosso proprio const
     inicial (FormReducer) onde definimos as acões (action) e onde trocamos as informações (payload),
     dessa forma conseguimos dizer ao nosso form inicial que ele vai ter os dados da initialData (dados vazios) */
    return(
        <FormContext.Provider value={value}>
            {children}
            {/* o childen aqui basicamente se trata de um ambiente, o Provider
            pega todas as informaçôes que nos temos e joga dentro desse ambiente,
            no caso o ambiente {children} vai retornar nossas paginas, forms, styles
            e etc */}
        </FormContext.Provider>
    )
}

//Context Hook (utiliza e tem acesso aos dados do contexto)

export const useForm = () => {
    const context = useContext(FormContext);
    if(context === undefined) {
        throw new Error ("useForm precisa ser usado dentro do FormProvider")
    }
    return context;
    /* caso context nao esteja indefinido,sera retornado o context, e nele serão
    passadas nossa const formContext*/
}
//exportamos o provider, o hook e o enum (ações que vao ser utilizadas qndo der o dispatch)
