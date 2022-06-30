//create component and export
import FolderList from "../components/FolderList";
import { useRouter } from "next/router";

export const Cart = () => {
  const router = useRouter();
  const { price } = router.query;

  return <FolderList totalPrice={price} />;
};

export default Cart;
