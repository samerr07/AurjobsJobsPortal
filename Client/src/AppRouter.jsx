import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from './components/Navbar'
import MainPage from './pages/MainPage'
import CandidateRegisterPage from './pages/CandidateRegisterPage'
import CandidateLoginPage from './pages/CandidateLoginPage'
import ContactPage from './pages/ContactPage'
import Dashboard from './components/EmployerDashboard/Dashboard'

import CompanyLogin from './components/CompanyLogin'
import CompanyRegistration from './components/CompanyRegistration'
import JobDetails from './components/EmployerDashboard/section/JobDetails'
import JobDetailsPage from './components/JobDetailsPage'
import CandidateDashboard from './components/CandidateDashboard/Dashboard'

import Pricing from './components/Pricing'
// import Footer from './components/Footer'

import JobsPage from './pages/JobsPage'
import PaymentGateway from './components/PaymentGateway'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsofService from './components/TermsofService'
import ApplicantProfile from './components/EmployerDashboard/section/ApplicantProfile'
import AdminDashboard from './components/Admin/AdminDashboard'
import CompanyJobsPage from './components/Admin/CompanyJobsPage'
import AdminLogin from './components/Admin/AdminLogin'
import ATSScoreChecker from './components/ATSScoreChecker'
import AIResumeMainPage from './components/ResumeBuilder/AIResumeMainPage'
import AIResumeBuilder from './components/ResumeBuilder/AIResumeBuilder'
import ResumeTemplateSelector from './components/ResumeBuilder/ResumeTemplateSelector'
import ProtectedRouteCandidate from './components/ProtectedRouteCandidate'
import ProtectedRouteEmployer from './components/ProtectedRouteEmployer'
import NotFound404 from './pages/NotFound404'
import AIScreeningResult from './components/EmployerDashboard/section/AIScreeningResult'
import BlueCollarJobsPage from './pages/BlueCollarJobsPage'


const AppRouter = () => {

  const location = useLocation();

  // Define routes where Navbar should not appear
  const routesWithoutNavbar = [
    '/candidate_login',
    '/candidate_register',
    '/company_login',
    '/company_register',
    '/ai_screening_result'
  ];

  // Check if current path should have navbar
  const shouldShowNavbar = !routesWithoutNavbar.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/candidate_register' element={<CandidateRegisterPage />} />
        <Route path='/candidate_login' element={<CandidateLoginPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/candidate_dashboard' element={<ProtectedRouteCandidate>
          <CandidateDashboard />
        </ProtectedRouteCandidate>}
        />
        <Route path='/employer_dashboard' element={<ProtectedRouteEmployer><Dashboard /></ProtectedRouteEmployer>} />  {/* Add this route */}
        <Route path='/company_login' element={<CompanyLogin />} />
        <Route path='/company_register' element={<CompanyRegistration />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:jobTitle/:jobId' element={<JobDetailsPage />} />
        <Route path="/employer_dashboard/jobs/:jobId" element={<ProtectedRouteEmployer><JobDetails /></ProtectedRouteEmployer>} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path='/payment_gateway' element={<PaymentGateway />} />
        <Route path='/privacy_policy' element={<PrivacyPolicy />} />
        <Route path='/terms_and_conditions' element={<TermsofService />} />
        <Route path='/applicant_profile/:id' element={<ProtectedRouteEmployer><ApplicantProfile /></ProtectedRouteEmployer>} />
        <Route path='/admin_login' element={<AdminLogin />} />
        <Route path='/admin_dashboard' element={<AdminDashboard />} />
        <Route path='/admin_dashboard/companies/:id/jobs' element={<CompanyJobsPage />} />
        <Route path='/ai_resume_builder' element={<AIResumeMainPage />} />
        <Route path='/ai_resume_builder_form' element={<AIResumeBuilder />} />
        <Route path='/ats_score_checker' element={<ATSScoreChecker />} />
        <Route path='/resume_template_selector' element={<ResumeTemplateSelector />} />
        <Route path='/ai_screening_result' element={<AIScreeningResult/>}/>
        <Route path='/blue_collar_jobs' element={<BlueCollarJobsPage/>}/>
        <Route path="*" element={<NotFound404/>} />
        <Route path="/404" element={<NotFound404 />} />
      </Routes>
    </>
  )
}

export default AppRouter
