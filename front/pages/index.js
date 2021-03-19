import Head from 'next/head'
import styles from '../styles/Home.module.css'

import ProfileCard from "../components/users/profileCard"

import wrapper from "../store/configureStore";
import { GET_USER_INFO_REQUEST } from "../reducers/account"
import { END } from "redux-saga"
import { useSelector } from "react-redux"

const Home = () => {
  return (
    <ProfileCard />
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  console.log("실행됨?")
  context.store.dispatch({
    type: GET_USER_INFO_REQUEST
  })
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
  console.log("end")
});

export default Home;
