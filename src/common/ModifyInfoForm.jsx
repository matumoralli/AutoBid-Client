import { useState } from "react";

const toCapitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const ModifyInfoForm = ({ obj }) => {
  const [objInfo, setObjInfo] = useState(obj);

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    setObjInfo({ ...objInfo, [name]: value });
  };

  return (
    <form className="flex flex-col gap-2">
      {Object.entries(objInfo).map((c, index) => (
        <input
          type="text"
          placeholder={toCapitalize(c[0])}
          name={c[0]}
          value={c[1]}
          onChange={handleChange}
          className="w-full rounded-md border-2 border-gray-200 bg-gray-50 p-1 outline-none transition-all duration-200 focus:border-gray-300 focus:bg-gray-100"
          key={c[0] + "info" + index}
        />
      ))}
    </form>
  );
};

export default ModifyInfoForm;
