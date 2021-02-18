import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import NotFound from "./components/NotFound/NotFound"
// import NavbarComp from './components/Navbar/NavbarComp';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";


//import ClientComponent from "./ClientComponent";

function App() {
    //const [loadClient, setLoadClient] = useState(true);
    return (
        <Router>
            <div className="App" >
                {/* <NavbarComp /> */}
                <Switch>
                    <Route path="/" exact component={Join} ></Route>
                    <Route path="/chat" component={Chat} ></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path='/contact' component={Contact}></Route>
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;



// function App() {
//     return (
//         <Router>
//             <div className="App" >
//                 < Rooms />
//                 <Switch>
//                     <Router>
//                         <Route path="/" exact component={Join} ></Route>
//                         <Route path="/chat" component={Chat} ></Route>
//                     </Router>
//                 </Switch>
//             </div>
//         </Router>

<>
    {/* LOAD OR UNLOAD THE CLIENT
            <button onClick={() => setLoadClient(prevState => !prevState)}>
                STOP CLIENT
            </button>
            {/* SOCKET IO CLIENT*/}
    {/* {loadClient ? <Chat /> : null} */}
</>

//     )
// }

// export default App
