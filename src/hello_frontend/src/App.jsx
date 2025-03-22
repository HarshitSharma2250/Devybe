import HomeScreen from "./pages/HomeScreen";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from "react-router-dom";
import EventDetail from "./pages/EventDetail";

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<HomeScreen />} />
        <Route path="/event-details" element={<EventDetail />}/>

      </Routes>
    </>
  );

  
}

export default App;
