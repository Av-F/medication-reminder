import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import { getPrescriptionDetails } from "../services/prescriptionService";

import "./CampaignPreview.css";


function CampaignPreview() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [channel, setChannel] = useState("SMS");


    const prescription = getPrescriptionDetails()
        .find(
            p => p.id === Number(id)
        );


    if (!prescription) {
        return <h2>Prescription not found.</h2>;
    }



    return (
        <div className="campaign-container">

            <div className="card">


                <h1 className="campaign-title">
                    Campaign Preview
                </h1>



                <h2>
                    Eligible Member
                </h2>


                <p>
                    {prescription.memberName}
                </p>



                <h2>
                    Communication Channel
                </h2>



                <div className="channel-buttons">


                    <button
                        className={channel === "Email" ? "selected" : ""}
                        onClick={() => setChannel("Email")}
                    >
                        Email
                    </button>



                    <button
                        className={channel === "SMS" ? "selected" : ""}
                        onClick={() => setChannel("SMS")}
                    >
                        SMS
                    </button>



                    <button
                        className={channel === "Push" ? "selected" : ""}
                        onClick={() => setChannel("Push")}
                    >
                        Push Notification
                    </button>


                </div>



                <p>
                    Selected Channel: {channel}
                </p>



                <h2>
                    Message Preview
                </h2>



                <div className="message-preview">


                    {
                        channel === "Email" && (

                            <>

                                <strong>
                                    Subject: Prescription Ready
                                </strong>


                                <br /><br />


                                Hello {prescription.memberName},


                                <br /><br />


                                Your prescription for{" "}
                                {prescription.prescription}
                                {" "}
                                is ready for pickup at{" "}
                                {prescription.cvsStore}.


                                <br /><br />


                                Please pick it up by{" "}
                                {prescription.pickupDeadline}.


                            </>

                        )
                    }




                    {
                        channel === "SMS" && (

                            <>

                                Hi {prescription.memberName},


                                <br /><br />


                                Your{" "}
                                {prescription.prescription}
                                {" "}
                                is ready at{" "}
                                {prescription.cvsStore}.


                                <br /><br />


                                Pick up by{" "}
                                {prescription.pickupDeadline}.


                            </>

                        )
                    }




                    {
                        channel === "Push" && (

                            <>

                                <strong>
                                    Prescription Ready
                                </strong>


                                <br /><br />


                                Your{" "}
                                {prescription.prescription}
                                {" "}
                                is available for pickup.


                            </>

                        )
                    }



                </div>



                <button
                    className="generate-button"
                    onClick={() => navigate("/communication-status")}
                >
                    Generate Campaign
                </button>



            </div>

        </div>
    );
}


export default CampaignPreview;