import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Vote from './pages/Vote.jsx';
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";
import Layout from "./components/templates/_layout.jsx";
import Register from "./pages/Register.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Cgu from "./pages/Cgu.jsx";
import Cgv from "./pages/Cgv.jsx";

export default function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout children={<Home/>}/>}/>
                <Route path={"/voter"} element={<Layout children={<Vote/>}/>}/>
                <Route path={"/boutique"} element={<Layout children={<Shop/>}/>}/>
                <Route path={"/contact"} element={<Layout children={<Contact/>}/>}/>
                <Route path={"/cgu"} element={<Layout children={<Cgu/>}/>}/>
                <Route path={"/cgv"} element={<Layout children={<Cgv/>}/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}


