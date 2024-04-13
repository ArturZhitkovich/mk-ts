import Main from "../Main/Main";
import SideMenu from "../SideMenu/SideMenu";
import "./styles.scss";

const AppLayout = () => {
  return (
    <div className="app-container">
      <div>
        <SideMenu />
      </div>
      <Main />
    </div>
  );
};

export default AppLayout;
