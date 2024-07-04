import { FiShoppingCart } from "react-icons/fi";

const CardIcon = ({ cart }) => {
  return (
    <>
      {/*absolute eksenden çıkmasını sağladı top-2 en tepeye çıkardı relative ise kapsayıcısı olan dive hapsolmasını sağladı*/}
      <div className="relative">
        <FiShoppingCart className="text-2xl" />
        {cart.length > 0 && (
          <span className="bg-red-500 text-white flex w-5 h-5 justify-center items-center rounded-full absolute -top-2 -right-4 text-xs">
            {cart.length}
          </span>
        )}
      </div>
    </>
  );
};

export default CardIcon;
