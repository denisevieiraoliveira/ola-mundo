import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import db from './json/posts.json'

import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import NaoEncontrada from "./paginas/NaoEncontrada";
import Post from "./paginas/Post";

import Menu from "./componentes/Menu";
import ScrollToTop from "./componentes/ScrollToTop";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Rodape from "./componentes/Rodape";

function AppRoutes() {
  
  const [posts, setPosts] = useState(db.posts);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio posts={posts} />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id/*" element={<Post posts={posts} />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes
