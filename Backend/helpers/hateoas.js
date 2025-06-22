const HATEOAS = async (entity, data) => {
  let stock = 0;
  const results = data.map((item) => {
    stock += item.stock;
    return {
      name: item.nombre,
      href: `http://localhost:3000/${entity}/${item.id}`,
    };
  });

  console.log(results);
  const total = data.length;
  const datosWithHateoas = {
    totalJoyas: total,
    stockTotal: stock,
    results,
  };
  console.log(datosWithHateoas);
  return datosWithHateoas;
};

export default HATEOAS;
