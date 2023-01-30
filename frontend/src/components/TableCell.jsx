const TableCell = ({flight}) => {
    return (
        <td>
            {Array.from(flight).map((letter, index) => (
                <div>{letter}</div>
            ))}
        </td>
    )

}

export default TableCell
