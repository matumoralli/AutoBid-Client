const toCapitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const AutoInfoTable = ({ car }) => {
  const carData = {
    Marca: car.brand,
    Modelo: car.model,
    Kilometraje: car.kilometers,
    Dominio: car.domain,
    Motor: car.engine,
    Transmisión: car.transmission,
    Tracción: car.driveTrain,
    Tipo: car.bodyType,
    Color: car.color,
    Dueño: car.owner,
  };

  if (car)
    return (
      <div className="grid grid-cols-1 rounded-md border md:grid-cols-2">
        {Object.entries(carData).map(([key, value]) => (
          <ul key={key + value} className="grid grid-cols-3 border ">
            <li className="bg-gray-200 bg-opacity-50 p-2 font-semibold">
              {toCapitalize(key)}
            </li>
            <li className="col-span-2 p-2">{value}</li>
          </ul>
        ))}
      </div>
    );
};

export default AutoInfoTable;
