import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import NaoEncontrada from "./paginas/NaoEncontrada";
import Post from "./paginas/Post";

import Menu from "./componentes/Menu";
import ScrollToTop from "./componentes/ScrollToTop";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Rodape from "./componentes/Rodape";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes
