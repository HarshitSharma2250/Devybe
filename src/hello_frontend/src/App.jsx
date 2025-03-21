import HomeScreen from "./pages/HomeScreen";
import './index.css'
import { Route, Routes } from "react-router-dom";
import EventDetail from "./pages/EventDetails";

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
