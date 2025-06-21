const HATEOAS = async(entity, data) => {
    const results = data.map((item)=> {
        return{
            name: item.name,
            links: [
                {
                    href: `http://localhost:3000/api/${entity}/${item.id}`
                }
            ]
        }
    }).slice(0,3)
    console.log(results)
    const total = data.length
    const datosWithHateoas = {
        total,
        results
    }
    console.log(datosWithHateoas)
    return datosWithHateoas
}

export default HATEOAS