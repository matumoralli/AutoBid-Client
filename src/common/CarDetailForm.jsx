import { useState } from "react";

const carModel = {
  brand: "",
  model: "",
  year: "",
  kilometers: "",
  domain: "",
  owner: "",
  engine: "",
  transmission: "",
  driveTrain: "",
  bodyType: "",
  color: "",
  highlights: [{ value: "" }],
  equipement: [{ value: "" }],
  modifications: [{ value: "" }],
  knownFlaws: [{ value: "" }],
  services: [{ value: "" }],
  addedItems: [{ value: "" }],
  domain: "",
  inspection: "",
  images: [{ value: "" }],
};

export default function CarDetailForm() {
  const [carDetail, setCarDetail] = useState(carModel);

  const handleFormChange = (index, event) => {
    const { name, value } = event.target;
    if (
      [
        "highlights",
        "equipement",
        "modifications",
        "knownFlaws",
        "services",
        "addedItems",
        "images",
      ].includes(name)
    ) {
      let data = carDetail[name];
      data[index].value = value;
      setCarDetail((prev) => ({ ...prev, [name]: data }));
    } else {
      setCarDetail((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addInput = (event) => {
    let newfield = { value: "" };
    setCarDetail((prev) => ({
      ...prev,
      [event.target.parentElement.previousSibling.name]: [
        ...carDetail[event.target.parentElement.previousSibling.name],
        newfield,
      ],
    }));
  };

  const removeInput = (event, index) => {
    let data = [...carDetail[event.target.parentElement.previousSibling.name]];
    if (data.length === 1) return;
    data.splice(index, 1);
    setCarDetail((prev) => ({
      ...prev,
      [event.target.parentElement.previousSibling.name]: data,
    }));
  };

  // const inputStyle = `w-full rounded-md border-2 border-gray-200 bg-gray-50 p-1 outline-none transition-all duration-200 focus:border-gray-300 focus:bg-gray-100`;

  const inputStyle =
    "bg-gray-100 focus:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ";
  return (
    <form className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Marca"
        name="brand"
        value={carDetail.brand}
        onChange={(event) => handleFormChange(null, event)}
        className={inputStyle}
      />
      <input
        type="text"
        placeholder="Modelo"
        name="model"
        value={carDetail.model}
        onChange={(event) => handleFormChange(null, event)}
        className={inputStyle}
      />
      <input
        type="text"
        placeholder="Año"
        name="year"
        value={carDetail.year}
        onChange={(event) => handleFormChange(null, event)}
        className={inputStyle}
      />
      <input
        type="text"
        placeholder="Kilometraje"
        name="kilometers"
        value={carDetail.kilometers}
        onChange={(event) => handleFormChange(null, event)}
        className={inputStyle}
      />

      <input
        type="email"
        placeholder="Mail del vendedor"
        name="owner"
        value={carDetail.owner}
        onChange={(event) => handleFormChange(null, event)}
        className={inputStyle}
      />
      <input
        type="text"
        placeholder="Motor"
        name="engine"
        value={carDetail.engine}
        onChange={(event) => handleFormChange(null, event)}
        className={inputStyle}
      />
      <input
        type="text"
        placeholder="Transmisión"
        name="transmission"
        value={carDetail.transmission}
        onChange={(event) => handleFormChange(null, event)}
        className={inputStyle}
      />
      <input
        type="text"
        placeholder="Tracción"
        name="driveTrain"
        value={carDetail.driveTrain}
        onChange={(event) => handleFormChange(null, event)}
        className={inputStyle}
      />
      <input
        type="text"
        placeholder="Segmento"
        name="bodyType"
        value={carDetail.bodyType}
        onChange={(event) => handleFormChange(null, event)}
        className={inputStyle}
      />
      <input
        type="text"
        placeholder="Color"
        name="color"
        value={carDetail.color}
        onChange={(event) => handleFormChange(null, event)}
        className={inputStyle}
      />
      {carDetail.highlights.map((characteristic, index) => {
        return (
          <div key={characteristic + "info" + index} className="relative">
            <textarea
              type="text"
              placeholder="Destacados"
              name="highlights"
              value={characteristic.value}
              onChange={(event) => handleFormChange(index, event)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:bg-gray-50 focus:ring-blue-500 "
            />
            <div className="absolute inset-y-0 right-2.5 flex items-center pl-2.5">
              <button
                type="button"
                onClick={addInput}
                className=" h-full w-full pe-2 text-xl font-bold text-gray-400 hover:text-gray-800"
              >
                +
              </button>
              <button
                type="button"
                onClick={removeInput}
                className=" h-full w-full text-xl font-bold text-gray-400 hover:text-gray-800"
              >
                -
              </button>
            </div>
          </div>
        );
      })}
      {carDetail.equipement.map((characteristic, index) => {
        return (
          <div key={characteristic + "info" + index} className="relative">
            <textarea
              type="text"
              placeholder="Equipamientos"
              name="equipement"
              value={characteristic.value}
              onChange={(event) => handleFormChange(index, event)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:bg-gray-50 focus:ring-blue-500 "
            />
            <div className="absolute inset-y-0 right-2.5 flex items-center pl-2.5">
              <button
                type="button"
                onClick={addInput}
                className=" h-full w-full pe-2 text-xl font-bold text-gray-400 hover:text-gray-800"
              >
                +
              </button>
              <button
                type="button"
                onClick={removeInput}
                className=" h-full w-full text-xl font-bold text-gray-400 hover:text-gray-800"
              >
                -
              </button>
            </div>
          </div>
        );
      })}
      {carDetail.modifications.map((characteristic, index) => {
        return (
          <div key={characteristic + "info" + index} className="relative">
            <textarea
              type="text"
              placeholder="Modificaciones"
              name="modifications"
              value={characteristic.value}
              onChange={(event) => handleFormChange(index, event)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:bg-gray-50 focus:ring-blue-500 "
            />
            <div className="absolute inset-y-0 right-2.5 flex items-center pl-2.5">
              <button
                type="button"
                onClick={addInput}
                className=" h-full w-full pe-2 text-xl font-bold text-gray-400 hover:text-gray-800"
              >
                +
              </button>
              <button
                type="button"
                onClick={removeInput}
                className=" h-full w-full text-xl font-bold text-gray-400 hover:text-gray-800"
              >
                -
              </button>
            </div>
          </div>
        );
      })}
      {carDetail.knownFlaws.map((characteristic, index) => {
        return (
          <div key={characteristic + "info" + index} className="relative">
            <textarea
              type="text"
              placeholder="Fallas conocidas"
              name="knownFlaws"
              value={characteristic.value}
              onChange={(event) => handleFormChange(index, event)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:bg-gray-50 focus:ring-blue-500 "
            />
            <div className="absolute inset-y-0 right-2.5 flex items-center pl-2.5">
              <button
                type="button"
                onClick={addInput}
                className=" h-full w-full pe-2 text-xl font-bold text-gray-400 hover:text-gray-800"
              >
                +
              </button>
              <button
                type="button"
                onClick={removeInput}
                className=" h-full w-full text-xl font-bold text-gray-400 hover:text-gray-800"
              >
                -
              </button>
            </div>
          </div>
        );
      })}
      {carDetail.services.map((characteristic, index) => {
        return (
          <div key={characteristic + "info" + index} className="relative">
            <textarea
              type="text"
              placeholder="Servicio reciente"
              name="services"
              value={characteristic.value}
              onChange={(event) => handleFormChange(index, event)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:bg-gray-50 focus:ring-blue-500 "
            />
            <div className="absolute inset-y-0 right-2.5 flex items-center pl-2.5">
              <button
                type="button"
                onClick={addInput}
                className=" h-full w-full pe-2 text-xl font-bold text-gray-400 hover:text-gray-800"
              >
                +
              </button>
              <button
                type="button"
                onClick={removeInput}
                className=" h-full w-full text-xl font-bold text-gray-400 hover:text-gray-800"
              >
                -
              </button>
            </div>
          </div>
        );
      })}
      {carDetail.addedItems.map((characteristic, index) => {
        return (
          <div key={characteristic + "info" + index} className="relative">
            <textarea
              type="text"
              placeholder="Ítems incluidos en la venta"
              name="addedItems"
              value={characteristic.value}
              onChange={(event) => handleFormChange(index, event)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:bg-gray-50 focus:ring-blue-500 "
            />
            <div className="absolute inset-y-0 right-2.5 flex items-center pl-2.5">
              <button
                type="button"
                onClick={addInput}
                className=" h-full w-full pe-2 text-xl font-bold text-gray-400 hover:text-gray-800"
              >
                +
              </button>
              <button
                type="button"
                onClick={removeInput}
                className=" h-full w-full text-xl font-bold text-gray-400 hover:text-gray-800"
              >
                -
              </button>
            </div>
          </div>
        );
      })}
      <input
        type="file"
        placeholder="Informe de Dominio"
        name="domain"
        value={carDetail.domain}
        onChange={(event) => handleFormChange(index, event)}
        className={inputStyle}
      />
      <input
        type="file"
        placeholder="Informe de Inspección"
        name="inspection"
        value={carDetail.inspection}
        onChange={(event) => handleFormChange(index, event)}
        className={inputStyle}
      />
      {carDetail.images.map((characteristic, index) => {
        return (
          <div key={characteristic + "info" + index} className="relative">
            <input
              type="file"
              placeholder="Imágenes"
              name="images"
              value={characteristic.value}
              onChange={(event) => handleFormChange(index, event)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:bg-gray-50 focus:ring-blue-500 "
            />
            <div className="absolute inset-y-0 right-2.5 flex items-center pl-2.5">
              <button
                type="button"
                onClick={addInput}
                className=" h-full w-full pe-2 text-xl font-bold text-gray-400 hover:text-gray-800"
              >
                +
              </button>
              <button
                type="button"
                onClick={removeInput}
                className=" h-full w-full text-xl font-bold text-gray-400 hover:text-gray-800"
              >
                -
              </button>
            </div>
          </div>
        );
      })}
    </form>
  );
}
