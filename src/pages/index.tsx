import styles from '@/styles/Home.module.css'
import type { NextPage } from "next";
import Body from './components/templates/Body';
import { selectAuthState, setAuthState } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../store/store";

const Home: NextPage = () => {
    const authState = useSelector(selectAuthState);
    const dispatch = useDispatch();
    return (
        <Body />
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ params }) => {
            // we can set the initial state from here
            // we are setting to false but you can run your custom logic here
            await store.dispatch(setAuthState(false));
            console.log("State on server", store.getState());
            return {
                props: {
                    authState: false,
                },
            };
        }
);

export default Home;