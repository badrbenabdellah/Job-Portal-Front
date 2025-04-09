import { IconAnchor, IconSettings , IconBell } from '@tabler/icons-react';
import { Avatar, Button, Indicator } from '@mantine/core';
import NavLinkList from './NavLinkList';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfile } from '../../Services/ProfileService';
import { setProfile } from '../../Slices/ProfileSlice';
import NotiMenu from './NotiMenu';
import { jwtDecode } from 'jwt-decode';
import { setUser } from '../../Slices/UserSlice';
import { setupReponseInterceprot } from '../../interceptor/AxiosInterceptor';


const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state:any) => state.user);
    const token = useSelector((state:any) => state.jwt);
    const location = useLocation();
    const navigate = useNavigate();
    /*useEffect(() => {
        if (user && user.id) {
            getProfile(user.id)
                .then((data: any) => {
                    dispatch(setProfile(data));
                })
                .catch((error: any) => {
                    console.log(error);
                });
        }
    }, [user]);*/
    
    useEffect(() => {
        setupReponseInterceprot(navigate);
        
        
    }, [navigate]);
    
    useEffect(() => {
        const token = localStorage.getItem("token") || "";
        if(token != ""){
            const decoded = jwtDecode(localStorage.getItem("token") || "");
            dispatch(setUser({...decoded, email:decoded.sub}));
        }
        getProfile(user?.profileId).then((res) => {
            dispatch(setProfile(res));
        }).catch((err) => console.log(err));
    }, [token, navigate]);
  return (
    location.pathname != "/signup" && location.pathname != "/login"?
    <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center font-['poppins']">
        <div className='flex gap-1 items-center text-bright-sun-400'>
            <IconAnchor className='w-8 h-8' stroke={2.5} />
            <div className='text-3xl font-semibold'> FJobs </div> 
        </div>
        {NavLinkList()}
        <div className='flex gap-3 items-center'>
            {user && user.id?<ProfileMenu />:<Link to="/login">
            <Button variant="subtle" color="brightSun.4">Login</Button>
            </Link>}
            {/*<div className='bg-mine-shaft-900 p-1.5 rounded-full'>
                <IconSettings stroke={2.5} />
            </div>*/}
            {user?<NotiMenu />:<></>}
        </div>
    </div>:<></>
  )
}

export default Header
