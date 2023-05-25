const formatData = (array) =>
    array.map((element) => {
        return {
            id: element.id,
            name: element.name,
            height: element.height.metric,
            weight: element.weight.metric,
            life_span: element.life_span,
            temperament: element.temperament,
            created: false
        }
    });

module.exports = formatData