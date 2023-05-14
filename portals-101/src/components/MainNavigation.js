import { useState } from "react";
import SideDrawer from "./SideDrawer";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const [displayDrawer, setDisplayDrawer] = useState(false);

  function handleClick() {
    setDisplayDrawer(!displayDrawer);
  }

  return (
    <>
      <header className={classes.header}>
        <h1>Demo App</h1>
        <button className={classes.btn} onClick={handleClick}>
          <div />
          <div />
          <div />
        </button>
      </header>
      {/* Should be shown conditionally: <SideDrawer />  */}
      {displayDrawer ? <SideDrawer /> : null}
    </>
  );
}

export default MainNavigation;
