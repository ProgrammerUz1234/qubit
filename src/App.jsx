import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./components/Main/Main.jsx";
import Customers from "./components/Customers/Customers.jsx";
import Grow from "./components/Grow/Grow.jsx";

const App = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <Customers />
            <Grow />
        </div>
    );
};

export default App;