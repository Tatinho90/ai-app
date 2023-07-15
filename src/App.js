import WhoIsOnline from "./pages/WhoIsOnline"
import ChatPage from "./pages/ChatPage"
import {Link, Route, Routes} from "react-router-dom"

function App({children}) {
  return (
   <>
   <Routes>
      <Route path="/" element={<WhoIsOnline /> }></ Route>
      <Route path="/chatWindow" element={<ChatPage /> }></ Route>
   </Routes>
      
   </>
  );
}

export default App;
