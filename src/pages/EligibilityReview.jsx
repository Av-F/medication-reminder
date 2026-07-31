import { useParams, useNavigate } from "react-router-dom";
import { getPrescriptionDetails } from "../services/PrescriptionService";
import "./EligibilityReview.css";
import { useEffect, useState } from "react";

function EligibilityReview() {

    const { id } = useParams();
    const navigate = useNavigate();
    

    const [prescriptions, setPrescriptions] = useState([]);

        useEffect(() => {
        getPrescriptionDetails()
            .then(setPrescriptions)
            .catch(console.error);
    }, []);

    const prescription =
    prescriptions.find(
        p => p.id === id
    );

    if (prescriptions.length === 0) {
    return <h2>Loading...</h2>;
}

    if (!prescription) {
        return <h2>Prescription not found.</h2>;
    }

    const channelPermissionMap = {
    SMS: prescription.smsPermission,
    Email: prescription.emailPermission,
    Push: prescription.pushPermission,
    };

const communicationPreference =
    channelPermissionMap[prescription.preferredChannel] ?? false;



    const eligible =
        prescription.readyForPickup &&
        communicationPreference;



    return (
        <div className="review-container">

            <div className="card">


                <h1>
                    Eligibility Review
                </h1>


                <h2>
                    {prescription.memberName}
                </h2>



                <p>
                    Prescription:
                    {" "}
                    {prescription.prescription}
                </p>



                <p>
                    CVS Store:
                    {" "}
                    {prescription.cvsStore}
                </p>



                <p>
                    Pickup Deadline:
                    {" "}
                    {prescription.pickupDeadline}
                </p>



                <hr />



                <h3>
                    Eligibility Checks
                </h3>



                <p>
                    Ready for Pickup:
                    {
                        prescription.readyForPickup
                        ? " Yes ✅"
                        : " No ❌"
                    }
                </p>



                <p>
                    Communication Preference Exists:
                    {
                        communicationPreference
                        ? " Yes ✅"
                        : " No ❌"
                    }
                </p>



                {
                    prescription.preferredChannel && (

                        <p>
                            Preferred Channel:
                            {" "}
                            {prescription.preferredChannel}
                        </p>

                    )
                }



                <hr />



                <h2 className="status">

                    Status:
                    {" "}

                    {
                        eligible
                        ? "Eligible ✅"
                        : "Not Eligible ❌"
                    }

                </h2>



                {
                    eligible && (

                        <button
                            onClick={() =>
                                navigate(
                                    `/campaign/${prescription.id}`
                                )
                            }
                        >
                            Continue to Campaign Preview
                        </button>

                    )
                }


            </div>

        </div>
    );
}


export default EligibilityReview;