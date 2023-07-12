import { useEffect, useState } from "react";
import axios from "axios";
import { env } from "../../next.config";
import Image from "next/image";
import carDetailsWArrays from "@/helpers/carDetailsWArrays";
import { HiDocumentArrowDown, HiCalendarDays } from "react-icons/hi2";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { useDispatch } from "react-redux";
import { createAuction, updateAuction } from "@/redux/auction/auctionSlice";
registerLocale("es", es);

export default function CarDetailForm({
  user = {},
  model,
  creatingAuction = false,
}) {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [carDetail, setCarDetail] = useState({});
  const [auctionDetails, setAuctionDetails] = useState({});

  useEffect(() => {
    if (!creatingAuction) {
      setCarDetail({ ...model, email: user.email });
    } else {
      let carDetailDB = carDetailsWArrays(model);
      setCarDetail({ ...carDetailDB });
      setAuctionDetails({
        minPrice: model.minPrice,
        carDetailId: model.id,
        userId: model.User.id,
        auctionId: model?.AuctionId !== null && model.AuctionId,
        sellerType: model?.Auction?.sellerType,
        customEnd: model?.Auction?.endTime,
      });
      if (model?.Auction?.endTime) {
        setStartDate(new Date(model?.Auction?.endTime));
      }
    }
    return () => {
      if (user?.email) {
        setCarDetail(model);
      }
    };
  }, []);


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
      ].includes(name)
    ) {
      let data = carDetail[name];
      data[index].value = value;
      return setCarDetail((prev) => ({ ...prev, [name]: data }));
    }
    if (name === "sellerType" || name === "minPrice") {
      setAuctionDetails((prev) => ({ ...prev, [name]: value }));
      if (name === "minPrice") {
        return setCarDetail((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      return setCarDetail((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    return setAuctionDetails((prev) => ({ ...prev, customEnd: date.toISOString() }));
  };

  const handleFileSelect = (index, event) => {
    const { name, files } = event.target;
    if (name === "images" && files[0]) {
      let data = carDetail[name];
      data[index].value = files[0];
      data[index].preview = URL.createObjectURL(files[0]);
      setCarDetail((prev) => ({ ...prev, [name]: data }));
    }
    if (name !== "images" && files[0]) {
      setCarDetail((prev) => ({ ...prev, [name]: files[0] }));
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

  const handleSubmitCarDetail = async (e) => {
    e.preventDefault();
    const newCarDetail = {};
    for (const [key, value] of Object.entries(carDetail)) {
      if (Array.isArray(value)) {
        const arrayValues = value.map((item) => {
          return item.value;
        });
        newCarDetail[key] = arrayValues;
      } else {
        newCarDetail[key] = value;
      }
    }
    const formData = new FormData();
    newCarDetail.images.map((image) => {
      formData.append("images", image);
    });
    formData.append("inspection", newCarDetail.inspection);
    formData.append("domain", newCarDetail.domain);
    formData.append("carDetail", JSON.stringify(newCarDetail));
    const response = await axios.post(`${env.BACKEND_URL}/cars/`, formData);
    if (response) {
      location.reload();
    }
  };

  const handleSubmitAuction = async (e) => {
    e.preventDefault();
    const newCarDetail = {};
    for (const [key, value] of Object.entries(carDetail)) {
      if (Array.isArray(value)) {
        const arrayValues = value.map((item) => {
          return item.value;
        });
        newCarDetail[key] = arrayValues;
      } else {
        newCarDetail[key] = value;
      }
    }

    const formData = new FormData();
    newCarDetail.images.map((image) => {
      formData.append("images", image);
    });
    formData.append("inspection", newCarDetail.inspection);
    formData.append("domain", newCarDetail.domain);
    formData.append("carDetail", JSON.stringify(newCarDetail));
    await axios.put(`${env.BACKEND_URL}/cars/`, formData).then(
      async (response) => {
        if (auctionDetails?.auctionId) {
          dispatch(updateAuction(auctionDetails));
        } else {
          dispatch(createAuction(auctionDetails));
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const inputStyle =
    "bg-gray-100 focus:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ";
  return (
    <>
      {Array.isArray(carDetail.highlights) && (
        <form
          onSubmit={
            creatingAuction ? handleSubmitAuction : handleSubmitCarDetail
          }
          className="flex flex-col gap-2 "
        >
          {creatingAuction && (
            <>
              <label>Tipo de vendedor:</label>
              <select
                name="sellerType"
                className={inputStyle}
                onChange={(event) => handleFormChange(null, event)}
              >
                <option value="null">Elegir</option>
                <option value="Dealer">Consecionaria</option>
                <option value="Private party">Particular privado</option>
              </select>
            </>
          )}
          {creatingAuction && (
            <>
              <label>Fin de la Subasta</label>
              <div className="relative">
                <div className=" absolute inset-y-0 left-1 flex items-center pr-2.5">
                  <HiCalendarDays className=" h-full w-full pe-2 text-xl font-bold" />
                </div>
                <DatePicker
                  locale="es"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  minDate={new Date()}
                  showTimeSelect
                  withPortal
                  selected={startDate}
                  className=" ms-9 block rounded-lg border border-gray-300 bg-gray-100 px-2 py-1 text-sm uppercase text-gray-900 hover:bg-gray-200 focus:border-blue-500 focus:bg-gray-50 focus:ring-blue-500"
                  onChange={(date) => {
                    handleDateChange(date);
                  }}
                />
              </div>
            </>
          )}
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
            type="number"
            placeholder="Año"
            name="year"
            value={carDetail.year}
            onChange={(event) => handleFormChange(null, event)}
            className={inputStyle}
          />
          <input
            type="number"
            placeholder="Valor inicial de la subasta"
            name="minPrice"
            value={carDetail.minPrice}
            onChange={(event) => handleFormChange(null, event)}
            className={inputStyle}
          />
          <input
            type="number"
            placeholder="Kilometraje"
            name="kilometers"
            value={carDetail.kilometers}
            onChange={(event) => handleFormChange(null, event)}
            className={inputStyle}
          />

          <input
            type="text"
            placeholder="Nombre del propietario"
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
          <input
            type="text"
            placeholder="Email del usuario"
            name="email"
            value={carDetail.email ? carDetail.email : carDetail.User.email}
            disabled
            className={inputStyle}
          />
          {carDetail?.highlights.map((characteristic, index) => {
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
                    onClick={(event) => removeInput(event, index)}
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
                    onClick={(event) => removeInput(event, index)}
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
                    onClick={(event) => removeInput(event, index)}
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
                    onClick={(event) => removeInput(event, index)}
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
                    onClick={(event) => removeInput(event, index)}
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
                    onClick={(event) => removeInput(event, index)}
                    className=" h-full w-full text-xl font-bold text-gray-400 hover:text-gray-800"
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}
          <label>Dominio</label>
          <input
            type="file"
            placeholder="Informe de Dominio"
            id="domain"
            name="domain"
            onChange={(event) => handleFileSelect(null, event)}
            className={inputStyle}
          />
          {carDetail?.domain && (
            <a className="flex items-center" href={carDetail.domain}>
              <HiDocumentArrowDown className=" text-4xl text-zinc-800 md:text-xl" />
              <p className=" text-xs">Descargar informe de dominio</p>
            </a>
          )}
          <label>Inspección</label>
          <input
            type="file"
            placeholder="Informe de Inspección"
            name="inspection"
            onChange={(event) => handleFileSelect(null, event)}
            className={inputStyle}
          />
          {carDetail?.inspection && (
            <a className="flex items-center" href={carDetail.inspection}>
              <HiDocumentArrowDown className=" text-4xl text-zinc-800 md:text-xl" />
              <p className=" text-xs">Descargar informe de inspección</p>
            </a>
          )}
          <label>Imágenes</label>
          {carDetail.images.map((image, index) => {
            return (
              <div key={image + "info" + index}>
                <div className="relative">
                  <input
                    type="file"
                    placeholder="Imágenes"
                    name="images"
                    onChange={(event) => handleFileSelect(index, event)}
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
                      onClick={(event) => removeInput(event, index)}
                      className=" h-full w-full text-xl font-bold text-gray-400 hover:text-gray-800"
                    >
                      -
                    </button>
                  </div>
                </div>
                {image?.value && (
                  <Image
                    src={image.preview ? image.preview : image.value}
                    height={240}
                    width={240}
                    sizes="(max-width: 768px) 20vw, 40vw"
                    alt={carDetail.model}
                    className="mx-auto aspect-square object-scale-down"
                  />
                )}
              </div>
            );
          })}

          <button
            className="mx-auto rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            type="submit"
          >
            {creatingAuction
              ? carDetail.AuctionId
                ? "EDITAR SUBASTA"
                : "PUBLICAR SUBASTA"
              : "SUBIR"}
          </button>
        </form>
      )}
    </>
  );
}
