import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import Sobre from '../../pages/Sobre';
import Produtos from '../../pages/Produtos';
import Contato from '../../pages/Contato';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="produtos" element={<Produtos />} />
                <Route path="contato" element={<Contato />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;