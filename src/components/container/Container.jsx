import {CARD_DATA} from '../../constants/card-data.js'
import Card from '../card/Card'
import{StyledContainer} from'./container-styles'

const Container = ()=>{
    return<StyledContainer> 
        {
            CARD_DATA.map(card =>(
            <Card 
                key={card.id}{...card}
            />
            ))}   
    </StyledContainer>;
};

export default Container;


// const Container = ()=>{
//     return<StyledContainer> 
//         {
//             CARD_DATA.map(card =>(
//             <Card 
//                 key={card.id}
//                 logo={card.logo}
//                 title={card.title}
//                 text={card.text}
//                 color={card.color}
//             />
//             ))}   
//     </StyledContainer>;
// };
