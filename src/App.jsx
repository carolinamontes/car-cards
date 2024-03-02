import Container from './components/container/Container'

const App = ()=>{
    return (
            <Container/>
    );
};

export default App;


// import { v4 } from "uuid";
// import {GlobalStyles} from "./styles/GlobalStyles";

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const result = numbers.map(number => number);

// console.log(result);

// const App = ()=>{
//     return (
//         <>
//             <GlobalStyles/>
//                 {numbers.map(number => (
//                     <h1 key={v4()}>{number}</h1>
//                 ))}
//         </>
//     );
// };

// export default App;