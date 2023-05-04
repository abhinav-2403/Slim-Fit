import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom"
import { Box } from '@mui/material';
import ExerciseDetail from './Pages/ExerciseDetail';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Box width = "400px" sx={{width: {xl:'1488'}}}>
      <Navbar/>
      <Routes>
        <Route path= "/" element = {<Home/>}/>
        <Route path= "/exercise/:id" element = {<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
