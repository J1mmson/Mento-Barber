import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Training from "./pages/Training";
import Blog from "./pages/Blog";
import BlogHaircut from "./pages/BlogHaircut";
import BlogBeardCondition from "./pages/BlogBeardCondition";
import BlogWeddingDay from "./pages/BlogWeddingDay";
import BlogBangs from "./pages/BlogBangs";
import BlogFrequency from "./pages/BlogFrequency";
import BlogBalding from "./pages/BlogBalding";
import BlogRecedingHairlineHairstyle from "./pages/BlogRecedingHairlineHairstyle";
import BlogHairStyling from "./pages/BlogHairstyling";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/training" element={<Training />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/Frequency" element={<BlogFrequency />} />
        <Route path="/blog/BeardCondition" element={<BlogBeardCondition />} />
        <Route path="/blog/WeddingDay" element={<BlogWeddingDay />} />
        <Route path="/blog/Bangs" element={<BlogBangs />} />
        <Route path="/blog/Haircut" element={<BlogHaircut />} />
        <Route path="/blog/HairStyling" element={<BlogHairStyling />} />
        <Route path="/blog/Balding" element={<BlogBalding />} />
        <Route path="/blog/receding-hairline-hairstyle" element={<BlogRecedingHairlineHairstyle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
