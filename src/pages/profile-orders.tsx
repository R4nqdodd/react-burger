import { useEffect } from "react";
import OrderList from "../components/order-list/order-list";
import { useDispatch, useSelector } from '../services/types/index';
import { WS_CONNECTION_CLOSE, WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../services/constants/ws";


export default function ProfileOrdersPage() {

  const userData = useSelector(store => store.auth);
  const orders = useSelector(store => store.orders.data);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userData.user){
      const token = userData.user.accessToken.split('Bearer ')[1];
      dispatch({ 
        type: WS_CONNECTION_START,
        payload: `wss://norma.nomoreparties.space/orders?token=${token}`
      })
      return () => {
        dispatch({ type: WS_CONNECTION_CLOSE })
      }
    }
  },[dispatch, userData])

  return (
    <>
      <OrderList orders={orders.orders} status={true}/>
    </>
  );
}