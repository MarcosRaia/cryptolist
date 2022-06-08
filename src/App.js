import {React, useState, useEffect} from "react";
import axios from "axios";
import NavBar from "./Components/navBar";
import Lista from "./Components/list";

function App(){
  return<>
     <NavBar />
     <Lista />
  </>
}

export default App;