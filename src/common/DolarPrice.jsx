const DolarPrice = () => {
  return (
    <div>
      <iframe
        className="mx-auto my-4 flex h-[260px] w-[320px] justify-center rounded-lg border border-[#bcbcbc] shadow-[2px_4px_4px_rgba(0,0,0,0.25)]"
        src="https://dolarhoy.com/i/cotizaciones/dolar-mep"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default DolarPrice;
