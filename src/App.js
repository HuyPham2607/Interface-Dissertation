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
                        <Route path="/Interface-Dissertation/profile" element={<Profile />} />
                        <Route
                            path="/Interface-Dissertation/checkout-success"
                            element={licensed ? <CheckoutSuccess /> : <ErrorNotFound />}
                        />
                        <Route
                            path="/Interface-Dissertation/cart"
                            element={user ? <Cart /> : <Navigate to="/login" />}
                        />
                        <Route path="/Interface-Dissertation/products/:_id" element={<DetailProduct />} />
                        <Route
                            path="/Interface-Dissertation/admin/detailproduct/:_id"
                            element={<DetailProductsAdmin />}
                        />
                        {/* admin */}
                        <Route
                            path="/Interface-Dissertation/admin/dashboard"
                            element={admin ? <DashBoard /> : <ErrorNotFound />}
                        />
                        <Route
                            path="/Interface-Dissertation/admin/order"
                            element={admin ? <OrderAdmin /> : <ErrorNotFound />}
                        />
                        <Route
                            path="/Interface-Dissertation/admin/chart"
                            element={admin ? <Chart /> : <ErrorNotFound />}
                        />
                        <Route path="/Interface-Dissertation/admin/login" element={<LoginAdmin />} />
                        <Route path="/Interface-Dissertation/admin/newProduct" element={<NewProducts />} />
                        <Route path="/Interface-Dissertation/admin/products" element={<ProductsAdmin />} />
                        <Route path="/Interface-Dissertation/admin/users" element={<UserAdmin />} />

                        {/* men */}
                        <Route path="/Interface-Dissertation/men" element={<Men />} />
                        <Route path="/Interface-Dissertation/shortmen" element={<ShortMen />} />
                        <Route path="/Interface-Dissertation/bacsicseseentinails" element={<BacsicsEseentinals />} />
                        <Route path="/Interface-Dissertation/shoes" element={<Shoes />} />
                        <Route path="/Interface-Dissertation/clubfootball" element={<ClubFootBall />} />
                        <Route path="/Interface-Dissertation/gymandtraining" element={<GymandTraining />} />
                        <Route path="/Interface-Dissertation/TopAndTShirts" element={<TopAndTShirts />} />
                        <Route path="/Interface-Dissertation/allclothingmen" element={<AllClothingMen />} />
                        <Route path="/Interface-Dissertation/shoes-runing" element={<ShoesRunning />} />
                        <Route path="/Interface-Dissertation/jordan" element={<Jordan />} />
                        <Route path="hoodiesandsweatshirts" element={<HoodiesAndSweatShirts />} />

                        {/* women */}
                        <Route path="/Interface-Dissertation/women" element={<Women />} />
                        <Route
                            path="/Interface-Dissertation/performanceEssentinals"
                            element={<PerformanceEseentinals />}
                        />
                        <Route path="/Interface-Dissertation/SustainableMaterial" element={<SustainableMaterial />} />
                        <Route path="/Interface-Dissertation/allshosewomen" element={<ShoesWomen />} />
                        <Route path="/Interface-Dissertation/running-women" element={<ShoesRunningWomen />} />
                        <Route path="/Interface-Dissertation/tennis-women" element={<TennisWomen />} />
                        <Route path="/Interface-Dissertation/gymandtraining-women" element={<GymandTrainingWomen />} />
                        <Route path="/Interface-Dissertation/allclothing-women" element={<AllClothingWomen />} />
                        <Route path="/Interface-Dissertation/topandtshirts-women" element={<TopAndTShirtsWomen />} />
                        <Route
                            path="/Interface-Dissertation/hoodiesandsweatshirt-women"
                            element={<HoodiesAndSweatShirtsWomen />}
                        />
                        <Route path="/Interface-Dissertation/pantsandlegging-women" element={<PantsandLeggings />} />

                        {/* Kids */}
                        <Route path="/Interface-Dissertation/kids" element={<Kids />} />
                        <Route path="/Interface-Dissertation/bagsandbackpackskids" element={<ClubFootBallKids />} />
                        <Route path="/Interface-Dissertation/clubfootballkids" element={<ShoesKids />} />
                        <Route path="/Interface-Dissertation/sandalandslides-kids" element={<SandalsandSlides />} />
                        <Route path="/Interface-Dissertation/jordan-kids" element={<JordanKids />} />
                        <Route path="/Interface-Dissertation/lifestyle-kids" element={<LifeStyleKids />} />
                        <Route path="/Interface-Dissertation/allclothing-kids" element={<AllClothingKids />} />
                        <Route path="/Interface-Dissertation/topandtshirts-kids" element={<TopAndTShirtsKids />} />
                        <Route
                            path="/Interface-Dissertation/hoodiesandsweatshirt-kids"
                            element={<HoodiesAndSweatShirtskids />}
                        />
                        <Route path="/Interface-Dissertation/short-kids" element={<ShortKids />} />
                        <Route path="/Interface-Dissertation/pantsandlegging-kids" element={<PantsandLeggingsKids />} />

                        {/*error */}
                        <Route path="*" element={<ErrorNotFound />} />
                    </Routes>
                </BrowserRouter>
            </ProductsContext>
        </AuthContextProvider>
    );
}

export default App;
