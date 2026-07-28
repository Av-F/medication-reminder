import { useNavigate } from "react-router-dom";

import { getNotificationDetails } from "../services/notificationService";

import "./CommunicationStatus.css";


function CommunicationStatus() {

    const navigate = useNavigate();

    const communicationData = getNotificationDetails();

    return (
        <div className="status-container">

            <div className="card">

                <h1>
                    Communication Status
                </h1>


                <table>

                    <thead>

                        <tr>

                            <th>
                                Member ID
                            </th>

                            <th>
                                Member Name
                            </th>

                            <th>
                                Channel
                            </th>

                            <th>
                                Status
                            </th>

                            <th>
                                Pickup Deadline
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {
                            communicationData.map(
                                (notification) => (

                                <tr
                                    key={notification.notification_id}
                                >

                                    <td>
                                        {notification.member_id}
                                    </td>


                                    <td>
                                        {notification.memberName}
                                    </td>


                                    <td>
                                        {notification.channel}
                                    </td>


                                    <td>
                                        {notification.status}
                                    </td>


                                    <td>
                                        {notification.pickupDeadline}
                                    </td>


                                </tr>

                            ))
                        }


                    </tbody>


                </table>

                <div className="status-buttons">

                    <button
                        className="dashboard-button"
                        onClick={() => navigate("/")}
                    >
                        Return to Dashboard
                    </button>


                    <button
                        className="dashboard-button"
                        onClick={() => navigate("/summary")}
                    >
                        View Summary Dashboard
                    </button>

                </div>

            </div>


        </div>
    );
}


export default CommunicationStatus;