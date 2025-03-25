import './App.css';
import { createTheme, Divider, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css'; 
import '@mantine/carousel/styles.css'; 
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import HomePage from './Pages/HomePages';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FindJobs from './Pages/FindJobs';
//import Header from './Header/Header';
//import Footer from './Footer/Footer';
import FindTalentPage from './Pages/FindTalentPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import PostJobPages from './Pages/PostJobPages';
import JobDescPage from './Pages/JobDescPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import CompanyPage from './Pages/CompanyPage';
import PostedJobPage from './Pages/PostedJobPage';
import JobHistoryPage from './Pages/JobHistoryPage';
import SignUpPage from './Pages/SignUpPage';
import ProfilePage from './Pages/ProfilePage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Notifications } from '@mantine/notifications';
import { Provider } from 'react-redux';
import store from './Store';
import { getItem } from './Services/LocalStorageService';
import AppRoutes from './Pages/AppRoutes';

function App() {
  const theme = createTheme({
    focusRing: "never",
    fontFamily : "poppins, sans-serif",
    primaryColor: 'brightSun',
    primaryShade: 4,
    colors: {
      'brightSun': ['#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20', '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d', '#461902'],
      'mineshaft': ['#f6f6f6', '#e7e7e7','#d1d1d1', '#b0b0b0','#888888', '#6d6d6d','#5d5d5d', '#4f4f4f', '#3d3d3d','#2d2d2d']
    },
  })
  return (
    <Provider store={store}>
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <Notifications position="top-center" zIndex={1000} />
      <AppRoutes />
    </MantineProvider>
    </Provider>
  );
}

export default App;
