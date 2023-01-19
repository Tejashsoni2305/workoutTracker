import { BrowserRouter, Routes, Route } from 'react-router-dom'
//React components
import Home from './webPages/homePage'
import NavigationBar from './reactComponents/navigationBar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
       <NavigationBar /> 
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
