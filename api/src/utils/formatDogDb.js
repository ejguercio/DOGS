const formatDogDb = (array) =>
    array.map(raza => {
        return {//este mapeo lo hago porque no se como darle igual formato a los temps de los dogs creados como los de la API sino
            id: raza.id,
            name: raza.name,
            height: raza.height,
            weight: raza.weight,
            life_span: raza.life_span,
            image: raza.image,
            temperaments: raza.temperaments.map(obj => obj.name).join(', '),
            created: raza.created
        }
    });

module.exports = formatDogDb