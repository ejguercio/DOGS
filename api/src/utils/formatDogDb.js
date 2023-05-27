const formatDogDb = (arrDogs) =>
    arrDogs.map(dog => {
        return {//este mapeo lo hago porque no se como darle igual formato a los temps de los dogs creados como los de la API sino
            id: dog.id,
            name: dog.name,
            height: `${dog.height} cm`,
            weight: `${dog.weight} kg`,
            life_span: dog.life_span,
            image: dog.image,
            temperaments: dog.temperaments.map(obj => obj.name).join(', '),
            created: dog.created
        }
    });

module.exports = formatDogDb