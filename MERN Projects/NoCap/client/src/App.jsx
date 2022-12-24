import{BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from "./components/Homepage";
import React, {useState} from 'react'

function App() {
//STATE FOR KEEPING TRACK OF REFRESH
const [refreshState, setRefreshState] = useState(false)

//FUNCTION FOR KEEPING TRACK OF REFRESH
const refresh = () => {
  setRefreshState(!refreshState)
}
  return (
    <BrowserRouter>
    <div >
      <Routes>
      {/* MAKE SURE TO PUT THE REFRESH INSIDE THE ELEMENT!!!!!!! NOT OUTSIDE THE BRACES */}
      <Route path="/" element={<Homepage refresh={refresh} refreshState={refreshState}/> } />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
