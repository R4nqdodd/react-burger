import { useEffect } from "react";
import OrderList from "../components/order-list/order-list";
<<<<<<< HEAD
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { WS_CONNECTION_CLOSE, WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../services/constants/ws";
=======
import { useDispatch, useSelector } from '../services/types/index';
import { WS_CONNECTION_CLOSE, WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../services/constants/ws";
import { WS_BASE_URL } from '../utils/utils';
>>>>>>> sprint-17


export default function ProfileOrdersPage() {

<<<<<<< HEAD
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
=======
  const userData = useSelector(store => store.auth);
  const ordersData = useSelector(store => store.orders.data);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userData.user){
      const token = userData.user.accessToken.split('Bearer ')[1];
      dispatch({ 
        type: WS_CONNECTION_START,
        payload: `${WS_BASE_URL}?token=${token}`
      })
      return () => {
        dispatch({ type: WS_CONNECTION_CLOSE })
      }
    }
  },[dispatch, userData])

  return (
    <>
      <OrderList orders={ordersData.orders} status={true}/>
>>>>>>> sprint-17
    </>
  );
}