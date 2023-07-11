export default function carDetailsWArrays(carObject) {
  const newCarDetail = {};
  for (const [key, value] of Object.entries(carObject)) {
    if (Array.isArray(value)) {
      const arrayObjects = value.map((arrayValue) => {
        return { value: arrayValue };
      });
      newCarDetail[key] = arrayObjects;
    } else {
      newCarDetail[key] = value;
    }
  }
  return newCarDetail;
}
