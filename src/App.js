import WhoIsOnline from "./pages/WhoIsOnline"
import ChatPage from "./pages/ChatPage"
import {Link, Route, Routes} from "react-router-dom"
import {useState} from "react"

function App({children}) {
  //State variables
const [selectedUser, setSelectedUser] = useState({})

//Change states
const changeUser = (newUser) => {
    setSelectedUser(newUser)
    // console.log(selectedUser)
}
  return (

   <>
   <Routes>
      <Route path="/" element={<WhoIsOnline 
      changeUser = {changeUser}/> }></ Route>
      <Route path="/chatWindow" element={<ChatPage 
      url={selectedUser.url}
      firstName = {selectedUser.firstName}
      /> }></ Route>
   </Routes>
      
   </>
  );
}

export default App;
