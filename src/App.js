import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/TopBar";
import TodosList from "./components/TodosList";

function App() {
    return (
        <div className='container px-5 mt-5'>
            <AddAndDeleteBar />
            <hr />
            <TopBar />
        </div>
    );
}

export default App;
