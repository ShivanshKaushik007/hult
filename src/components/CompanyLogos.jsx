import { companyLogos } from "../constants";
import { brainwave } from "../assets";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Empowering youth to solve global challenges through social
        entrepreneurship at
      </h5>
      <ul className="flex">
        {/* {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))} */}
        <div className="flex items-center justify-center flex-1">
          <a className="flex w-[12rem] xl:mr-8" href="#hero">
            <img src={brainwave} width={50} height={40} alt="Brainwave" />
            <div className="flex items-center px-3 font-bold  ">
              HULT PRIZE IET LUCKNOW
            </div>
          </a>
        </div>
      </ul>
    </div>
  );
};

export default CompanyLogos;
