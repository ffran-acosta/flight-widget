import TableCell from './TableCell'

const TableRow = ({flight}) => {
    const flights = Object.values(flight).slice(1, 6)
    return (
        <tr>
            <td>✈️</td>
            {flights?.map((flight, index) => (
                <TableCell key = {index} flight = {flight} /> ))}
        </tr>
    )

}

export default TableRow

