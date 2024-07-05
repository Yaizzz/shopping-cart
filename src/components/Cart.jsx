import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {

  const { cart ,emptyCart } = useContext(CartContext)

  //acc başlangıç değeri
  //cart dizisini döner ve içindekileri toplar
  const total = cart.reduce((acc,item)=> acc+ item.price,0)

  if (cart.length === 0) return;
  return (
    <>
      <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Sepet</h2>
        <ul>
          {cart.map((cartData) => (
            <li key={cartData.id} className="mt-2 flex justify-between">
              <span>{cartData.name}</span>
              <span>{cartData.price}</span>
            </li>
          ))}
          <hr className="my4" />
          <p className="font-semibold text-xl">Toplam: {total} TL</p>
          <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded w-full hover:bg-red-600 transition-all"onClick={emptyCart}>
            Sepeti Boşalt
          </button>
        </ul>
      </div>
    </>
  );
};

export default Cart;
