import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from './components/layout';
import Main from "./components/pages/loginPage";
import Movies from "./components/pages/moviespage";
import Rec from "./components/pages/recommendationspage";
import About from "./components/pages/about";
import Registration from "./components/pages/registrationpage";
import Mainpage from "./components/pages/mainpage"

import Logout from "./components/pages/logout.js";
import Iframe from "./components/items/iframe/iframe";

function App() {
  return (
    <div className="App">
      
      <Layout>
      <Routes>
        <Route path="/home" element={<Mainpage />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/recommendations" element={<Rec />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/loginPage" element={<Main />}/>
          <Route path="/Register" element={<Registration />} />

          <Route path="/logout" element={<Logout />} />
          <Route path="/feed/:id" element={<Iframe/>} />

      </Routes>
      </Layout>
       </div>
  );
}
export default App;
