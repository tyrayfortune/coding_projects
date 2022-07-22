import React from "react"
import Join from './components/Join'
import Chat from './components/Chat'
import { BrowserRouter, BrowserRouter as Routers, Route} from "react-router-dom"

const App = () => (    
    <BrowserRouter>
        <Routers>
            {/* where user gets directed, to our join component */}
            <Route path="/" exact component={join}/>
            {/* when user puits ion required info to join, we send to chat */}
            <Route path="/chat"  component={chat}/>
        </Routers>
    </BrowserRouter>
)