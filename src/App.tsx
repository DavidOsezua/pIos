import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <Route path="journalcategory" element={<JournalCategory />} />
        <Route path="createaccount" element={<CreateAccount />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
