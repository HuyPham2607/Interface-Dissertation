import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Cart from './Components/Cart/Cart.jsx';
import Login from './Components/auth/Login/Login.jsx';
import Register from './Components/auth/Register/Register.jsx';
import AuthContextProvider from './Context/AuthContext.jsx';
import Home from './Views/Home.jsx';
import Shoes from './Components/Products/Men/Shoes/Shoes.jsx';
import ShoesRunning from './Components/Products/Men/Shoes-runing/ShoesRunning.jsx';
import DetailProduct from './Components/DetailProducts/DetailProduct.jsx';
import ProductsContext from './Context/ProductsContext.jsx';
import Jordan from './Components/Products/Men/Jordan/Jordan.jsx';
import TopAndTShirts from './Components/Products/Men/TopAndTShirts/TopAndTShirts.jsx';
import GymandTraining from './Components/Products/Men/GymandTraining/GymandTraining.jsx';
import { useSelector } from 'react-redux';
import CheckoutSuccess from './Views/CheckoutSuccess.jsx';
import ErrorNotFound from './Views/ErrorNotFound.jsx';
import Profile from './Components/auth/Profile/Profile.jsx';
import DashBoard from './admin/Views/Dashboard.jsx';
import LoginAdmin from './admin/Components/Auth/LoginAdmin.jsx';
import Chart from './admin/Views/Chart.jsx';
import OrderAdmin from './admin/Views/Order.jsx';
import ProductsAdmin from './admin/Views/Products.jsx';
import DetailProductsAdmin from './admin/Views/DetailProductsAdmin.jsx';
import NewProducts from './admin/Views/NewProducts.jsx';
import UserAdmin from './admin/Views/UserAdmin.jsx';
import ClubFootBall from './Components/Products/Men/ClubFootball/ClubFootball.jsx';
import AllClothingMen from './Components/Products/Men/AllClothing/AllClothing.jsx';
import Men from './Components/Products/Men/Men/Men.jsx';
import BacsicsEseentinals from './Components/Products/Men/BacktoBasics/BacsicsEseentinals.jsx';
import HoodiesAndSweatShirts from './Components/Products/Men/HoodiesAndSweatShirts/HoodiesAndSweatShirts.jsx';
import ShortMen from './Components/Products/Men/Short/Short.jsx';
import Women from './Components/Products/Women/Women/Women.jsx';
import PerformanceEseentinals from './Components/Products/Women/Performance/Performance.jsx';
import SustainableMaterial from './Components/Products/Women/SustainableMaterial/SustainableMaterial.jsx';
import ShoesWomen from './Components/Products/Women/Shoes/Shoes.jsx';
import ShoesRunningWomen from './Components/Products/Women/Shoes-runing/ShoesRunningWomen.jsx';
import TennisWomen from './Components/Products/Women/Tennis/Tennis.jsx';
import GymandTrainingWomen from './Components/Products/Women/GymandTraining/GymandTraining.jsx';
import AllClothingWomen from './Components/Products/Women/AllClothing/AllClothing.jsx';
import TopAndTShirtsWomen from './Components/Products/Women/TopAndTShirts/TopAndTShirts.jsx';
import HoodiesAndSweatShirtsWomen from './Components/Products/Women/HoodiesAndSweatShirts/HoodiesAndSweatShirts.jsx';
import PantsandLeggings from './Components/Products/Women/PantsandLeggings/PantsandLeggings.jsx';
import Kids from './Components/Products/Kids/Kids/Kids.jsx';
import ClubFootBallKids from './Components/Products/Kids/ClubFootballKids/ClubFootballKids.jsx';
import ShoesKids from './Components/Products/Kids/ShoesKids/ShoesKids.jsx';
import SandalsandSlides from './Components/Products/Kids/SandalsandSlides/SandalsandSlides.jsx';
import JordanKids from './Components/Products/Kids/JordanKids/JordanKids.jsx';
import LifeStyleKids from './Components/Products/Kids/LifeStyleKids/LifeStylekids.jsx';
import AllClothingKids from './Components/Products/Kids/AllClothing/AllClothing.jsx';
import TopAndTShirtsKids from './Components/Products/Kids/TopAndTShirtsKids/TopAndTShirtsKids.jsx';
import HoodiesAndSweatShirtskids from './Components/Products/Kids/HoodiesAndSweatShirtskids/HoodiesAndSweatShirtskids.jsx';
import ShortKids from './Components/Products/Kids/Short/Short.jsx';
import PantsandLeggingsKids from './Components/Products/Kids/PantsandLeggingsKids/PantsandLeggingsKids.jsx';
function App() {
    const user = useSelector((state) => state.user.currentUser);
    const cart = useSelector((state) => state.cart);
    let admin = null;
    if (user) {
        admin = user.user?.isadmin;
    }

    const licensed = cart.licensed;
    return (
        <AuthContextProvider>
            <ProductsContext>
                <BrowserRouter>
                    <Routes>
                        {/* user */}
                        <Route path="/Interface-Dissertation" element={<Home />} />
                        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/checkout-success" element={licensed ? <CheckoutSuccess /> : <ErrorNotFound />} />
                        <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" />} />
                        <Route path="/products/:_id" element={<DetailProduct />} />
                        <Route path="/admin/detailproduct/:_id" element={<DetailProductsAdmin />} />
                        {/* admin */}
                        <Route path="/admin/dashboard" element={admin ? <DashBoard /> : <ErrorNotFound />} />
                        <Route path="/admin/order" element={admin ? <OrderAdmin /> : <ErrorNotFound />} />
                        <Route path="/admin/chart" element={admin ? <Chart /> : <ErrorNotFound />} />
                        <Route path="/admin/login" element={<LoginAdmin />} />
                        <Route path="/admin/newProduct" element={<NewProducts />} />
                        <Route path="/admin/products" element={<ProductsAdmin />} />
                        <Route path="/admin/users" element={<UserAdmin />} />

                        {/* men */}
                        <Route path="/men" element={<Men />} />
                        <Route path="/shortmen" element={<ShortMen />} />
                        <Route path="/bacsicseseentinails" element={<BacsicsEseentinals />} />
                        <Route path="/shoes" element={<Shoes />} />
                        <Route path="/clubfootball" element={<ClubFootBall />} />
                        <Route path="/gymandtraining" element={<GymandTraining />} />
                        <Route path="/TopAndTShirts" element={<TopAndTShirts />} />
                        <Route path="/allclothingmen" element={<AllClothingMen />} />
                        <Route path="/shoes-runing" element={<ShoesRunning />} />
                        <Route path="/jordan" element={<Jordan />} />
                        <Route path="hoodiesandsweatshirts" element={<HoodiesAndSweatShirts />} />

                        {/* women */}
                        <Route path="/women" element={<Women />} />
                        <Route path="/performanceEssentinals" element={<PerformanceEseentinals />} />
                        <Route path="/SustainableMaterial" element={<SustainableMaterial />} />
                        <Route path="/allshosewomen" element={<ShoesWomen />} />
                        <Route path="/running-women" element={<ShoesRunningWomen />} />
                        <Route path="/tennis-women" element={<TennisWomen />} />
                        <Route path="/gymandtraining-women" element={<GymandTrainingWomen />} />
                        <Route path="/allclothing-women" element={<AllClothingWomen />} />
                        <Route path="/topandtshirts-women" element={<TopAndTShirtsWomen />} />
                        <Route path="/hoodiesandsweatshirt-women" element={<HoodiesAndSweatShirtsWomen />} />
                        <Route path="/pantsandlegging-women" element={<PantsandLeggings />} />

                        {/* Kids */}
                        <Route path="/kids" element={<Kids />} />
                        <Route path="/bagsandbackpackskids" element={<ClubFootBallKids />} />
                        <Route path="/clubfootballkids" element={<ShoesKids />} />
                        <Route path="/sandalandslides-kids" element={<SandalsandSlides />} />
                        <Route path="/jordan-kids" element={<JordanKids />} />
                        <Route path="/lifestyle-kids" element={<LifeStyleKids />} />
                        <Route path="/allclothing-kids" element={<AllClothingKids />} />
                        <Route path="/topandtshirts-kids" element={<TopAndTShirtsKids />} />
                        <Route path="/hoodiesandsweatshirt-kids" element={<HoodiesAndSweatShirtskids />} />
                        <Route path="/short-kids" element={<ShortKids />} />
                        <Route path="/pantsandlegging-kids" element={<PantsandLeggingsKids />} />

                        {/*error */}
                        <Route path="*" element={<ErrorNotFound />} />
                    </Routes>
                </BrowserRouter>
            </ProductsContext>
        </AuthContextProvider>
    );
}

export default App;
