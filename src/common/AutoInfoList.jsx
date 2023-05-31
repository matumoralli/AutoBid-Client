const formatInfo = (eq) => eq.split(",").map((word) => word.trim());

const AutoInfoList = ({ title, info }) => {
  const formatedInfo = formatInfo(info);

  return (
    <div className="border-y py-6">
      <h3 className="text-lg font-bold">{title}</h3>

      {formatedInfo.length > 1 ? (
        <ul className="mt-3 list-disc">
          {formatedInfo?.map((item) => (
            <li key={title + item} className="text-md ml-5">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-md mt-3">{info}</p>
      )}
    </div>
  );
};

export default AutoInfoList;
