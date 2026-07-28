import { useNavigate } from "react-router-dom";

import { getSummaryStats } from "../services/summaryService";

import "./SummaryDashboard.css";


function SummaryDashboard() {

    const navigate = useNavigate();


    const {
    totalPrescriptions,
    eligibleMembers,
    notificationsSent,
    deliverySuccessRate

} = getSummaryStats();

    return (

        <div className="summary-container">


            <div className="card">


                <h1>
                    Summary Dashboard
                </h1>



                <div className="stats-container">


                    <div className="stat-box">

                        <h2>
                            {totalPrescriptions}
                        </h2>

                        <p>
                            Total Prescriptions
                        </p>

                    </div>



                    <div className="stat-box">

                        <h2>
                            {eligibleMembers}
                        </h2>

                        <p>
                            Eligible Members
                        </p>

                    </div>




                    <div className="stat-box">

                        <h2>
                            {notificationsSent}
                        </h2>

                        <p>
                            Notifications Sent
                        </p>

                    </div>




                    <div className="stat-box">

                        <h2>
                            {deliverySuccessRate}%
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