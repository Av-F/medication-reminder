const notificationOutput = [
    {
        notification_id: 1,
        prescription_id: 101,
        member_id: 1,
        communication_channel: "SMS",
        delivery_status: "Delivered",
        store_id: 5,
        pickup_deadline: "2026-08-01"
    },
    {
        notification_id: 2,
        prescription_id: 102,
        member_id: 2,
        communication_channel: "Email",
        delivery_status: "Sent",
        store_id: 6,
        pickup_deadline: "2026-08-02"
    },
    {
        notification_id: 3,
        prescription_id: 103,
        member_id: 3,
        communication_channel: "Push",
        delivery_status: "Failed",
        store_id: 7,
        pickup_deadline: "2026-08-03"
    }
];

export default notificationOutput;