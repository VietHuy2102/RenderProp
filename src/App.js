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
            <Login render = {(data)=>{
                return (
                    <>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col col-6">
                                    <h1>Login</h1>
                                    <form onSubmit={data.submit}>
                                        <div className="mb-3">
                                            <label>Email</label>
                                            <input type="text" name="email" className="form-control" placeholder="Email..."
                                                   onChange={data.email}/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Password</label>
                                            <input type="password" name="password" className="form-control"
                                                   placeholder="Password..." onChange={data.password}/>
                                        </div>

                                        <button type="submit" className="btn btn-primary">Login</button>

                                    </form>

                                </div>

                            </div>
                        </div>
                    </>
                )
            }}/>

        </>
    );
}

export default App;
