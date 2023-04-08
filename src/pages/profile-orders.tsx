import { useEffect } from "react";
import OrderList from "../components/order-list/order-list";
import { useSelector } from "react-redux";


export default function ProfileOrdersPage() {

  const userData = useSelector((store:any) => store.auth);

  const token = userData.user.accessToken.split('Bearer ')[1];

  console.log(token);

  let orderData = {orders: {}};

  useEffect(() => {
    const ordersData = new WebSocket(`wss://norma.nomoreparties.space/orders?token=${token}`);

    ordersData.onmessage = e => {
      orderData = JSON.parse(e.data);
    }
  },[])

  const feedData = useSelector((store: any) => store.orders.data);
  return (
    <>
      <OrderList orders={orderData.orders} status={true}/>
    </>
  );
}