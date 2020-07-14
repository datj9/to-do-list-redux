import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddAndDeleteBar from "./components/AddAndDeleteBar";
import TodosList from "./components/TodosList";

function App() {
    return (
        <div className='container px-5 mt-5'>
            <AddAndDeleteBar />
            <hr />
            <TodosList />
        </div>
    );
}

export default App;
