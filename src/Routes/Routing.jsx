import { Route } from "react-router-dom"
import AppLayout from "../AppLayout/AppLayout"
import Hero from "../Pages/Hero"
import Testimonials from "../Pages/Testimonials"
import Sidebar from "../Components/Sidebar"

const Routing =
    <Route path="/" element={<AppLayout />}>
        <Route path="" element={<Hero />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="article" element={<Sidebar />}/>
    </Route>

export default Routing