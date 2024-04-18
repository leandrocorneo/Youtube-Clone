import { SetStateAction, useEffect, useState } from "react";
import { ButtonIcon, Container, Slider, SliderButtons, SliderContent } from "./styles";
import NextIcon from "../../assets/proximo.png";
import BackIcon from "../../assets/botao-voltar.png";
const buttons = [
    'Tudo',
    'Ao vivo',
    'Jogos',
    'Counter-Strike 2',
    'Música',
    'RPG',
    'Desenhos',
    'Assistidos',
    'Novidades',
    'Notícias',
    'Premier League',
    'Futebol',
    'Vasco',
    'Serie B'
]

function CategoryBar(){
    const [sliderPosition, setSliderPosition] = useState(0);
    const sliderWidth = 200; 
    const containerWidth = 400; 

    const handleNextClick = () => {
      if (sliderPosition > -(sliderWidth * 12) + containerWidth) {
        setSliderPosition((prevPosition) => prevPosition - sliderWidth);
      }
    };
  
    const handleBackClick = () => {
      if (sliderPosition < 0) {
        setSliderPosition((prevPosition) => prevPosition + sliderWidth);
      }
    };

const [activeElement, setActiveElement] = useState('All');
const handleClick = (value: SetStateAction<string>) => {
    setActiveElement(value)
}
    return(
        <Container>
            <SliderButtons onClick={handleBackClick}>
                <ButtonIcon alt="ícone voltar" src={BackIcon} />
            </SliderButtons>
            <Slider>
                <SliderContent 
                style={
                { 
                    transform: `translateX(${sliderPosition}px)`, 
                    transition: '.2s ease-in-out',

                }}>
                {buttons.map((value, i) =>(
                    <span onClick={() => handleClick(value)} 
                    key={i}
                    className={activeElement === value ? 'active' : ''}>
                        {value}
                    </span>
                ))} 
                </SliderContent>
            </Slider>
            <SliderButtons onClick={handleNextClick}>
                <ButtonIcon alt="ícone próximo" src={NextIcon} />
            </SliderButtons> 
        </Container>
    )
}

export default CategoryBar;