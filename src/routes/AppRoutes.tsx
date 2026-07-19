import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Explore from '../pages/Explore'
import DestinationDetail from '../pages/DestinationDetail'
import Packages from '../pages/Packages'
import PackageDetail from '../pages/PackageDetail'
import Culture from '../pages/Culture'
import Umkm from '../pages/Umkm'
import GalleryPage from '../pages/GalleryPage'
import Contact from '../pages/Contact'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:slug" element={<DestinationDetail />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:slug" element={<PackageDetail />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/umkm" element={<Umkm />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
