const DolarPrice = () => {
  return (
    <div>
      <iframe
        className="mx-auto my-4 flex h-[260px] w-full justify-center rounded-sm border-y"
        src="https://dolarhoy.com/i/cotizaciones/dolar-mep"
        frameBorder="0"
        scrolling="off"
      ></iframe>
    </div>
  );
};

export default DolarPrice;
