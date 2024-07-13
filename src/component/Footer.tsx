const Footer = () => {
  return (
    <div className="w-full flex md:flex-row flex-col md:gap-0 gap-3 md:items-center md:justify-between py-8 px-10 border-t border-slate-300 border-dashed mt-20 text-xs">
      <span className="font-medium text-slate-700">
        Copyright © 2023 Luxury Airs . All rights reserved.
      </span>
      <div className="flex flex-wrap gap-3 md:items-center md:gap-4">
        <a
          href="#"
          className="font-medium whitespace-nowrap md:text-[15px] text-[10.5px] text-gray-600 hover:text-blue-600"
        >
          Terms and conditions
        </a>
        <a
          href="#"
          className="font-medium whitespace-nowrap md:text-[15px] text-[10.5px] text-gray-600 hover:text-blue-600"
        >
          Long Term Contracts
        </a>
        <a
          href="#"
          className="font-medium whitespace-nowrap md:text-[15px] text-[10.5px] text-gray-600 hover:text-blue-600"
        >
          Copyright Policy
        </a>
        <a
          href="#"
          className="font-medium whitespace-nowrap md:text-[15px] text-[10.5px] text-gray-600 hover:text-blue-600"
        >
          Customer Support
        </a>
      </div>
    </div>
  );
};

export default Footer;
