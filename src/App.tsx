import "./App.css";
import { MainPage } from "./MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchPage } from "./SearchPage";
import { Movie } from "./TitlePage";
import { SWRConfig } from "swr";
import { RecoilRoot } from "recoil";

export function App() {
  return (
    <SWRConfig>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="search" element={<SearchPage />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path="*" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </SWRConfig>
  );
}
