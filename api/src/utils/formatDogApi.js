const formatDogApi = (array) =>
    array.map((element) => {
        return {
            id: element.id,
            name: element.name,
            height: element.height.metric,
            weight: element.weight.metric,
            life_span: element.life_span,
            image: element.image.url,
            temperament: element.temperament,
            created: false
        }
    });

module.exports = formatDogApi 