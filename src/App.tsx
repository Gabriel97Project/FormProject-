
import './App.css';
import { FormProvider } from './components/contexts/FormContext';
import { RouterBox } from './router';


const App = () => {
  return(
    <FormProvider>
      {/* todo o sistema ta dentro do provider, ou seja, em qualquer lugar
      vamos ter acesso aos dados do contexto (relacionado com nosso ambiente {children}
      */}
      <RouterBox/>
    </FormProvider>
  )
}

export default App;
