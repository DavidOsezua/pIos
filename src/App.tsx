import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  HomePage,
  OpenSciencePolicy,
  OurMission,
  PublicationFees,
  ResearchbyPLOS,
  ResearchJournals,
} from "./pages";
import "./styles/global.css";
import CreateAccount from "./pages/journalauthenticationPage/CreateAccount";
import JournalCategory from "./pages/journalCategoryPages/JournalCategory";
import ForgotPassword from "./pages/journalauthenticationPage/ForgotPassoword";
import SignIn from "./pages/journalauthenticationPage/SignIn";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/adminPages/Dashboard";
import Articles from "./pages/adminPages/Articles";
import Journals from "./pages/adminPages/Journals";
import Categories from "./pages/adminPages/Categories";
import Profile from "./pages/journalCategoryPages/Profile";
import Publish from "./pages/journalCategoryPages/Publish";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="researchbyplOS" element={<ResearchbyPLOS />} />
        <Route path="researchjournals" element={<ResearchJournals />} />
        <Route path="opensciencepolicy" element={<OpenSciencePolicy />} />
        <Route path="ourmission" element={<OurMission />} />
        <Route path="publicationfee" element={<PublicationFees />} />
        <Route path="journalcategory/:journalId" element={<JournalCategory />} />
        <Route path="createaccount" element={<CreateAccount />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate to={"dashboard"} />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="articles" element={<Articles />} />
          <Route path="journals" element={<Journals />} />
          <Route path="categories" element={<Categories />} />
        </Route>

        <Route path="profile" element={<Profile />} />

        <Route path="publish" element={<Publish />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
