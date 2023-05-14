import { useState } from "react";
import SideDrawer from "./SideDrawer";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function openDrawerHandler() {
    setIsDrawerOpen(true);
  }

  function closeDrawerHandler() {
    setIsDrawerOpen(false);
  }

  return (
    <>
      <header className={classes.header}>
        <h1>Demo App</h1>
        <button className={classes.btn} onClick={openDrawerHandler}>
          <div />
          <div />
          <div />
        </button>
      </header>
      {/* Should be shown conditionally: <SideDrawer />  */}
      {isDrawerOpen && <SideDrawer onClose={closeDrawerHandler} />}
    </>
  );
}

export default MainNavigation;
