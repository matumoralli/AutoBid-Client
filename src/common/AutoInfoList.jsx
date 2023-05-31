const formatInfo = (eq) => eq.split(",").map((word) => word.trim());

const AutoInfoList = ({ title, info }) => {
  return (
    <div className="border-y py-6">
      <h3 className="text-lg font-bold">{title}</h3>

      <ul className="mt-3 list-disc">
        {formatInfo(info)?.map((item) => (
          <li key={title + item} className="text-md ml-5">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoInfoList;
