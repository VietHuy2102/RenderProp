import logo from './logo.svg';
import './App.css';
import {Tech2} from "./Tech2";
import Counter01 from "./Counter01";
import Count from "./Count";
import Login from "./Login";

function App() {
    return (
        // <Tech2 render={(data)=>{
        //   return <h2>Khóa học : {data.value}</h2>
        // }}/>
        //   <Counter01/>
        <>

            {/*<Count render={(data) => {*/}
            {/*    return (*/}
            {/*        <>*/}
            {/*            <h1>Count:{data.count}</h1>*/}
            {/*            <button onClick={data.augment}>+</button>*/}
            {/*            <button onClick={data.reduce}>-</button>*/}
            {/*        </>*/}
            {/*    )*/}
            {/*}}/>*/}
            {/*<Count render={(data) => {*/}
            {/*    return (*/}
            {/*        <>*/}
            {/*            <h4>Bộ đếm:{data.count}</h4>*/}
            {/*            <button onClick={data.augment}>+</button>*/}

            {/*        </>*/}
            {/*    )*/}
            {/*}}/>*/}
            <Login/>

        </>
    );
}

export default App;
