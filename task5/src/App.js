import {BrowserRouter, Route, Routes} from "react-router-dom";
import Films from "./pages/Films";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import View from "./pages/View";
import Main from "./pages/Main";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/films" element={<Films/>}/>
                <Route path="/films/create" element={<Create/>}/>
                <Route path="/films/:id/edit" element={<Edit/>}/>
                <Route path="/films/:id" element={<View/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
