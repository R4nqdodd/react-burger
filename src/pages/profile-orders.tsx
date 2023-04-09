import { useEffect } from "react";
import OrderList from "../components/order-list/order-list";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { WS_CONNECTION_CLOSE, WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../services/constants/ws";


export default function ProfileOrdersPage() {

  const userData = useSelector((store:any) => store.auth);
  const orders = useSelector((store:any) => store.orders.data);

  const token = userData.user.accessToken.split('Bearer ')[1];
  const dispatch = useDispatch();

  console.log(token);

  useEffect(() => {
    dispatch({ 
      type: WS_CONNECTION_START,
      payload: `wss://norma.nomoreparties.space/orders?token=${token}`
    })
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSE })
    }
  },[dispatch])

  return (
    <>
      <OrderList orders={orders.orders} status={true}/>
    </>
  );
}