import prescriptions from "../data/prescriptions";
import members from "../data/members";
import notificationOutput from "../data/notificationOutput";


export function getSummaryStats() {


    const totalPrescriptions =
        prescriptions.length;



    const eligibleMembers =
        prescriptions.filter(
            (prescription) => {


                const member = members.find(
                    m =>
                    Number(m.member_id) ===
                    Number(prescription.member_id)
                );


                return (

                    prescription.ready_for_pickup &&

                    member &&

                    (
                        member.sms_permission ||
                        member.email_permission ||
                        member.push_permission
                    )

                );

            }

        ).length;




    const notificationsSent =
        notificationOutput.length;




    const deliveredNotifications =
        notificationOutput.filter(
            notification =>
                notification.delivery_status === "Delivered"
        ).length;




    const deliverySuccessRate =
        notificationsSent === 0
        ? 0
        :
        Math.round(
            (
                deliveredNotifications /
                notificationsSent
            ) * 100
        );




    return {

        totalPrescriptions,

        eligibleMembers,

        notificationsSent,

        deliverySuccessRate

    };


}