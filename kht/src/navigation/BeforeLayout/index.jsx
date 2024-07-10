import { Outlet } from 'react-router-dom';
import BeforeHeader from "../../components/Header/BeforeHeader";

const BeforeLayout = () => {
    return (
      <>
        <BeforeHeader />
        <Outlet />
      </>
    );
  };
  
  export default BeforeLayout;