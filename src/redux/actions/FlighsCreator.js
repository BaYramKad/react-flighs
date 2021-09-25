
const flighsCreator = (items) => {
    return {type: 'GET_FLIGHS', flightItems: items}
}

export default flighsCreator