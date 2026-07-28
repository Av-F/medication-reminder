import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import EligibilityReview from "./pages/EligibilityReview";
import CampaignPreview from "./pages/CampaignPreview";
import CommunicationStatus from "./pages/CommunicationStatus";
import SummaryDashboard from "./pages/SummaryDashboard";

function App() {

  return (
    <Routes>

      <Route
        path="/"
        element={<Dashboard />}
      />


      <Route
        path="/eligibility/:id"
        element={<EligibilityReview />}
      />


      <Route
        path="/campaign/:id"
        element={<CampaignPreview />}
      />


      <Route
        path="/communication-status"
        element={<CommunicationStatus />}
      />

    <Route
      path="/summary"
      element={<SummaryDashboard />}
    />

    </Routes>
  );
}


export default App;