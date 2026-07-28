import prescriptions from "../data/prescriptions";
import members from "../data/members";
import routing from "../data/prescriptionRouting";
import stores from "../data/stores";


export function getPrescriptionDetails() {

    return prescriptions.map((prescription) => {

        const member = members.find(
            m => Number(m.member_id) === Number(prescription.member_id)
        );


        const route = routing.find(
            r => Number(r.prescription_id) === Number(prescription.prescription_id)
        );


        const store = stores.find(
            s => Number(s.store_id) === Number(route.store_id)
        );


        return {

            id: prescription.prescription_id,

            memberId: member.member_id,

            memberName:
                `${member.first_name} ${member.last_name}`,

            prescription:
                `${prescription.drug_name} ${prescription.drug_strength}`,

            cvsStore:
                store.store_name,

            readyForPickup:
                prescription.ready_for_pickup,

            pickupDeadline:
                route.pickup_deadline,


            // Eligibility data

            smsPermission:
                member.sms_permission,

            emailPermission:
                member.email_permission,

            pushPermission:
                member.push_permission,


            preferredChannel:
                member.preferred_channel

        };

    });

}