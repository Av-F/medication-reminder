import { useNavigate } from "react-router-dom";
import { getPrescriptionDetails } from "../services/prescriptionService";
import PrescriptionTable from "../components/PrescriptionTable";
import "./Dashboard.css";

function Dashboard() {

    const navigate = useNavigate();

    const dashboardData = getPrescriptionDetails();

    return (
        <div className="dashboard-container">

            <div className="card">

                <h1>
                    Prescription Dashboard
                </h1>

                <PrescriptionTable
                    prescriptions={dashboardData}
                    onSelect={(id) =>
                        navigate(`/eligibility/${id}`)
                    }
                />

            </div>
        
        <div className="dashboard-buttons">

            <button
                onClick={() => navigate("/communication-status")}
            >
                Communication Status
            </button>


            <button
                onClick={() => navigate("/summary")}
            >
                Summary Dashboard
            </button>

        </div>

        </div>
    );
}

export default Dashboard;