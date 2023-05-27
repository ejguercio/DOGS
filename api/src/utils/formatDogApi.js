const formatDogApi = (arrDogs) =>
    arrDogs.map((dog) => {
        return {
            id: dog.id,
            name: dog.name,
            height: `${dog.height.metric} cm`,
            weight: `${dog.weight.metric} kg`,
            life_span: dog.life_span,
            image: dog.image.url,
            temperament: dog.temperament,
            created: false
        }
    });

module.exports = formatDogApi 