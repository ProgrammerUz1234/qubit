import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./components/Main/Main.jsx";
import Customers from "./components/Customers/Customers.jsx";
import Grow from "./components/Grow/Grow.jsx";
import CommerceAi from "./components/CommerceAi/CommerceAi.jsx";
import Use from './components/Use/Use.jsx';

const App = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <Customers />
            <Grow />
            <CommerceAi />
            <Use />
        </div>
    );
};

export default App;