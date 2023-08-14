import {  CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./components/Dashboard";
import theme from "./components/theme";



function App() {
  return (
    <ThemeProvider theme ={theme}>
    <div className="App" style={{backgroundColor:'#b4d7fe' , height:'100vh' ,display:'flex' , justifyContent:'center' ,alignItems:'center'}}>
      <CssBaseline/>
      
      <Dashboard/>
    </div>
    </ThemeProvider>
  );
}

export default App;
