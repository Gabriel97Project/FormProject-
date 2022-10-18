import {BrowserRouter,Route, Routes} from "react-router-dom"
import FormPageFour from "./sitePages/PageFour/formPageFour"
import FormPageOne from "./sitePages/PageOne/formPageOne"
import FormPageThree from "./sitePages/PageThree/formPageThree"
import FormPageTwo from "./sitePages/PageTwo/formPageTwo"

export const RouterBox = () => {
  return (
    <BrowserRouter>
        {/* browserRouter ´s uma especie de componente para paginas, 
        tudo que esta dentro dele pode trabalhar com as rotas */}
        <Routes>
          <Route path="/" element={<FormPageOne/>} />
          <Route path="/FormPageTwo" element={<FormPageTwo/>} />
          <Route path="/FormPageThree" element={<FormPageThree/>} />
          <Route path="/FormPageFour" element={<FormPageFour/>} />
    
        </Routes>
    
    </BrowserRouter>
  )
}

/* o router box esta sendo usado dentro do FormProvider e o form 
provider tem um ambiente o {children} onde toda a informaçâo do site
esta sendo armazenada nesse ambiente, qndo o colocamos ele retorna 
tudo que foi armazenado */