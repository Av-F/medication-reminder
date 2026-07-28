import notificationOutput from "../data/notificationOutput";
import members from "../data/members";


export function getNotificationDetails() {

    return notificationOutput.map(
        (notification) => {


            const member = members.find(
                m => Number(m.member_id) === Number(notification.member_id)
            );


            return {

                notificationId:
                    notification.notification_id,


                memberId:
                    notification.member_id,


                memberName:
                    member
                    ? `${member.first_name} ${member.last_name}`
                    : "Unknown Member",


                channel:
                    notification.communication_channel,


                status:
                    notification.delivery_status,


                pickupDeadline:
                    notification.pickup_deadline

            };

        }
    );

}