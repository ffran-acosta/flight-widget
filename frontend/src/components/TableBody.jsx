import {useEffect, useState} from "react"
import TableRow from './TableRow'

const TableBody = () => {

    const url = 'http://localhost:7005/database/flights/api'
    const [flights, setFlights] = useState()
    const getFlights = async ()  => {
        try {
            let response = await fetch(url)
            let data = await response.json()
            let flights = data.data
            setFlights(flights)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        getFlights()
    }, [])

    return (
        <tbody>
            {flights?.map((flight, index) => (
                <TableRow key = {index} flight = {flight} />
            ))}
        </tbody>
    )

}

export default TableBody

