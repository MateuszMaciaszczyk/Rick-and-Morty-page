import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<CharacterList />} />
                    <Route path="/character/:id" element={<CharacterDetail />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;