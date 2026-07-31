import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSummaryStats } from "../services/SummaryService";

import "./SummaryDashboard.css";


function SummaryDashboard() {

    const navigate = useNavigate();

    const [summary, setSummary] = useState(null);

    useEffect(() => {
        getSummaryStats()
            .then(setSummary)
            .catch(console.error);
        }, []);

    return (

        <div className="summary-container">


            <div className="card">


                <h1>
                    Summary Dashboard
                </h1>



                <div className="stats-container">


                    <div className="stat-box">

                        <h2>
                            {summary?.totalPrescriptions}
                        </h2>

                        <p>
                            Total Prescriptions
                        </p>

                    </div>



                    <div className="stat-box">

                        <h2>
                            {summary?.eligibleMembers}
                        </h2>

                        <p>
                            Eligible Members
                        </p>

                    </div>




                    <div className="stat-box">

                        <h2>
                            {summary?.notificationsSent}
                        </h2>

                        <p>
                            Notifications Sent
                        </p>

                    </div>




                    <div className="stat-box">

                        <h2>
                            {summary?.deliverySuccessRate}%
                        </h2>

                        <p>
                            Delivery Success Rate
                        </p>

                    </div>


                </div>



                <button
                    className="dashboard-button"
                    onClick={() => navigate("/")}
                >
                    Return to Dashboard
                </button>



            </div>


        </div>

    );

}


export default SummaryDashboard;