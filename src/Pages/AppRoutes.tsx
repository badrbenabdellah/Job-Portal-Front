import { Divider } from "@mantine/core"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Header from "../Components/Header/Header"
import SignUpPage from "./SignUpPage"
import ProfilePage from "./ProfilePage"
import JobDescPage from "./JobDescPage"
import FindJobs from "./FindJobs"
import ApplyJobPage from "./ApplyJobPage"
import FindTalentPage from "./FindTalentPage"
import CompanyPage from "./CompanyPage"
import JobHistoryPage from "./JobHistoryPage"
import PostedJobPage from "./PostedJobPage"
import TalentProfilePage from "./TalentProfilePage"
import PostJobPages from "./PostJobPages"
import Footer from "../Components/Footer/Footer"
import HomePage from './HomePages';
import { useSelector } from "react-redux"


const AppRoutes=() => {
    const user = useSelector((state:any)=>state.user);
    return (
        <BrowserRouter>
            <div className='relative'> 
                <Divider size="xs" />
                <Header />
                <Routes>
                    <Route path='/signup' element={user?<Navigate to="/" />:<SignUpPage />}/>
                    <Route path='/login' element={user?<Navigate to="/" />:<SignUpPage />}/>
                    <Route path='/profile' element={<ProfilePage />}/>
                    <Route path='/find-jobs' element={<FindJobs />}/>
                    <Route path='/jobs/:id' element={<JobDescPage />}/>
                    <Route path='/apply-job/:id' element={<ApplyJobPage />}/>
                    <Route path='/find-talent' element={<FindTalentPage />}/>
                    <Route path='/company/:name' element={<CompanyPage />}/>
                    <Route path='/posted-job/:id' element={<PostedJobPage />}/>
                    <Route path='/job-history' element={<JobHistoryPage />}/>
                    <Route path='/talent-profile/:id' element={<TalentProfilePage />}/>
                    <Route path='/post-job' element={<PostJobPages />}/>
                    <Route path='*' element={<HomePage />}/>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default AppRoutes;