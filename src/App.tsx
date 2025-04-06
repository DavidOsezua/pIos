import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  OpenSciencePolicy,
  OurMission,
  PublicationFees,
  ResearchbyPLOS,
  ResearchJournals,
} from "./pages";
import "./styles/global.css"

type Props = {};

const App = (props: Props) => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="researchbyplOS" element={<ResearchbyPLOS />} />
        <Route path="researchjournals" element={<ResearchJournals />} />
        <Route path="opensciencepolicy" element={<OpenSciencePolicy />} />
        <Route path="ourmission" element={<OurMission />} />
        <Route path="publicationfee" element={<PublicationFees />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
