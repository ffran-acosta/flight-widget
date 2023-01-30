const Flight = require('./Flight')

const create = async () => {
    const flight = new Flight({ 
        departing: '15:25', 
        destination: 'Sidney, Australia', 
        flightNumber: 'SA213', 
        gate: 'G03',
        status: 'Cancelled',
    })
    await flight.save()
    console.log(flight)
}
create()

module.exports = create

