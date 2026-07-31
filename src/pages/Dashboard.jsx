import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPrescriptionDetails } from "../services/prescriptionService";
import PrescriptionTable from "../components/PrescriptionTable";
import "./Dashboard.css";

function Dashboard() {

    const navigate = useNavigate();

    const [prescriptions, setPrescriptions] = useState([]);

    useEffect(() => {
        getPrescriptionDetails()
            .then((data) => {
                setPrescriptions(data);
            })
            .catch((error) => {
                console.error("Failed to load prescriptions:", error);
            });
    }, []);


    return (
        <div className="dashboard-container">

            <div className="card">

                <h1>
                    Prescription Dashboard
                </h1>


                {prescriptions.length === 0 ? (

                    <h2>
                        Loading...
                    </h2>

                ) : (

                    <div className="table-container">

                    <PrescriptionTable
                        prescriptions={prescriptions}
                        onSelect={(id) =>
                            navigate(`/eligibility/${id}`)
                        }
                    />
                </div>

                )}

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