import TableCell from './TableCell'

const TableRow = ({flight}) => {
    const word = Object.values(flight)
    console.log(word)
    return (
        <tr>
            <td>✈️</td>
            <td></td>
        </tr>
    )

}

export default TableRow

