import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./components/Main/Main.jsx";
import Customers from "./components/Customers/Customers.jsx";
import Grow from "./components/Grow/Grow.jsx";
import CommerceAi from "./components/CommerceAi/CommerceAi.jsx"

const App = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <Customers />
            <Grow />
            <CommerceAi />
        </div>
    );
};

export default App;