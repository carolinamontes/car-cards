import { StyledCard, StyledCardButton, StyledCardLogo, StyledCardText, StyledCardTitle } from "./card.styles";

const Card = ({logo, title, text, color})=>{
return (
    <StyledCard $color={color}>
        <StyledCardLogo src={logo} alt=''/>
    <StyledCardTitle>{title}</StyledCardTitle>
    <StyledCardText>{text}</StyledCardText>
    <StyledCardButton $color={color}>Learn More</StyledCardButton>
    </StyledCard>
    );
};

export default Card;


/* <img src="/assets/icon-luxury.svg" alt="" />
<h2>SEDANS</h2>
<p>
    Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
</p>
<button>Learn More</button> */ 