import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-xl:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-7 mt-0">{item.title}</h4>
        
          {/* <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p> */}

          <div className="flex flex-col mx-auto items-center justify-center h-[17rem]  w-[21.8rem]  mb-6  ">
            {item.picture && (
              <div className="w-72 h-48 flex items-center justify-center">
              
                {/* <div className="h3">$</div> */}
                <img className=" flex  items-center justify-center max-w-full max-h-full object-contain mr-6 lg:mr-0 -ml-20 lg:-ml-0 " 
                src={item.picture}
                alt="vineet"
                width={250}
                height={250}
                />
                  
                
              
              </div>
            )}
          </div>
          

          <Button
            className="w-full mb-2  "
            href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
            white={!!item.price}
          >
            {item.nam}
            {/* {item.price ? "Get started" : "Contact us"} */}
          </Button>
           
          {/* <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul> */}
        </div>
      ))}
    </div>
  );
};

export default PricingList;
