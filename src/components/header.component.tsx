const Header = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-4">
        <a href="/" className="cursor-pointer">
          <img
            src="matheus.jpg"
            className="h-12 w-12 rounded-full shadow-[#5A32C8_-3px_0px_4px_0px] hover:scale-110 duration-200"
          />
        </a>
        <div className="flex flex-col">
          <p className="text-[#f5f5f5] font-bold text-md">Matheus Costa</p>
          <p className="text-[#a3a3a3] font-normal text-sm">São Paulo - SP</p>
        </div>
      </div>
    </div>
  );
};

export default Header;