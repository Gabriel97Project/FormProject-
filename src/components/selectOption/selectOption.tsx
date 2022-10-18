
import { SelectOptionStyle, IconStyle, TextContentStyle, TitleStyle, TitleAndTextStyled } from './selectOptionStyle'

type SelectOptionProps = {
  title: string;
  textContent: string;
  icon: string;
  selected: boolean;
  onClick : ()=> void;
}
type SelectOptionTwoProps = {
  titleTwo: string;
  textContentTwo: string;
  iconTwo: string;
  selected: boolean;
  onClick : ()=> void;
  /* on click é uma funçao que retorna um valor vazio void no type */
}


const SelectOption = ({ title, textContent, icon, selected , onClick}: SelectOptionProps) => {
  return (
    <SelectOptionStyle selected={selected} onClick={onClick}>
      {/* o selected vai ser passado como props para o conteiner pai de todos
      pra poder ser estilizado como props no styled components... no caso a cor que vai
      mudar vai ser a cor da borda, para sabermos se o component foi selecionado de fato*/
      /* o onClick tambem vai ser passado junto com o selected dentro do conteiner pai, 
      pois ele que vai ser clicado */}
      <IconStyle>
        {icon = "😁"}
      </IconStyle>
      <TitleAndTextStyled>
        <TitleStyle>
        {title = "Sou iniciante"}
      </TitleStyle>
      <TextContentStyle>
        <>
        {textContent = "Comecei a programar a menos de 2 anos"}
        
        </>
      </TextContentStyle>
      </TitleAndTextStyled>
    
    </SelectOptionStyle>
  )
}

export default SelectOption

export const SelectOptionTwo = ({ titleTwo, textContentTwo, iconTwo ,selected, onClick }: SelectOptionTwoProps) => {
  return (
    <SelectOptionStyle selected={selected} onClick={onClick}>
      <IconStyle>
        {iconTwo = "😎"}
      </IconStyle>
      <TitleAndTextStyled>
        <TitleStyle>
          {titleTwo = "Sou Programador"}
        </TitleStyle>
        <TextContentStyle>
          {textContentTwo = "Sou programador a 2 anos ou mais"}
        </TextContentStyle>
      
      </TitleAndTextStyled>
      


    </SelectOptionStyle>
  )
}

