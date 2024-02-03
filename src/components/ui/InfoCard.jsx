const InfoCard = ({ text, icon, bg, value }) => {
  return (
    <div
      className={`${bg} bg-opacity-25 w-[230px] rounded h-[80px] px-2 flex items-center shadow-lg`}
    >
      <div className="flex items-center gap-4">
        <div className="bg-gray-100 p-2 rounded-full overflow-hidden">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-sm">{text}</span>
          <span className="text-[24px] font-bold">
            {text === "Transactions" ? "GHS " + value : value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
