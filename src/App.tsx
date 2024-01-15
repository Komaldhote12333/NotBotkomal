import Booking from "./components/booking/Booking";
import ChatBot from "./components/chatbot/Chatbot";
import Footer from "./components/footer/Footer";
import LoginPage from "./components/loginpage/Login";
import MettingPage from "./components/meetingpage/MeetingPage";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className=" w-full h-full ">
        <Routes>
        <Route path='/' element={ <LoginPage/>}/>

        <Route path='Login' element={ <div> <Navbar/>
        <Booking/></div>}/>
        <Route path='MyBooking' element={ <div> <Navbar/>
        <MettingPage/></div>}/>

   
        </Routes>
        <ChatBot/>
      <Footer/> 
   
    </div>
  );
}

export default App;
