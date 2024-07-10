import { Outlet } from 'react-router-dom';
import AfterHeader from "../../components/Header/AfterHeader";

const AfterLayout = () => {
    return (
      <>
        <AfterHeader />
        <Outlet />
      </>
    );
  };
  
  export default AfterLayout;