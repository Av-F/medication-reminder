import "./PrescriptionTable.css";

function PrescriptionTable({ prescriptions, onSelect }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Member Name</th>
                    <th>Prescription</th>
                    <th>CVS Store</th>
                    <th>Ready for Pickup</th>
                    <th>Pickup Deadline</th>
                </tr>
            </thead>

            <tbody>
                {prescriptions.map((prescription) => (
                    <tr
                        key={prescription.id}
                        onClick={() => onSelect(prescription.id)}
                    >
                        <td>
                            {prescription.memberName}
                        </td>

                        <td>
                            {prescription.prescription}
                        </td>

                        <td>
                            {prescription.cvsStore}
                        </td>

                        <td>
                            {prescription.readyForPickup ? "Yes" : "No"}
                        </td>

                        <td>
                            {prescription.pickupDeadline}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default PrescriptionTable;