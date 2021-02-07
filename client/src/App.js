//import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join.js';

import React, { useState } from "react";
//import ClientComponent from "./ClientComponent";

function App() {
    //const [loadClient, setLoadClient] = useState(true);
    return (
        <Router>
            <div className="App" >
                <Switch>
                    <Route path="/" exact component={Join} ></Route>
                    <Route path="/chat" component={Chat} ></Route>
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
