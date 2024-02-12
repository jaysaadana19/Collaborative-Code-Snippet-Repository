import "./App.css";
import Explore from "./pages/explore/Explore";
import LandingPage from "./pages/LandingPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ListingPost from "./pages/ListingPost";
import RecentPage from "./pages/RecentPage";
import SavesPage from "./pages/Savespage";
import ColabPage from "./pages/ColabPage";
import AddSnippet from "./pages/AddSnippet";



function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/explore' element={<Explore />}>
          <Route path='/explore' element={<ListingPost />}/>
          <Route path='/explore/recents' element={<RecentPage />}/>
          <Route path='/explore/saves' element={<SavesPage />}/>
          <Route path='/explore/colab' element={<ColabPage />}/>
          <Route path='/explore/add-snippet' element={<AddSnippet />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
