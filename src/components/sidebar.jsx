import { useRef, forwardRef } from "react";
import Name from "./name";
import Links from "./links";

export default forwardRef(function Sidebar(
  { handleNavClick, activeMenuItemId },
  menuItemRefs
) {
  // adds in blob animation
  const blobRef = useRef();

  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  function handlePointerMove(e) {
    return;
    // const { clientX, clientY } = e;

    // blobRef.current.animate(
    //   {
    //     left: `${clientX}px`,
    //     top: `${clientY}px`,
    //   },
    //   { duration: 3000, fill: "forwards" }
    // );
  }

  function goToURL(url) {
    window.open(url, "_blank");
  }

  const menuItems = ["ABOUT", "PROJECTS", "CONTACT"];

  function handleMakeActive(index) {
    menuItemRefs.current[index].dataset.activeIndex = index;
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      id="sidebar"
      ref={(ref) => (menuItemRefs.current[3] = ref)}
    >
      {/* <div id="blob" ref={blobRef}></div>
      <div id="blur"></div> */}

      <div id="menu">
        <div id="name-container">
          <div id="name-container-flex">
            <Name text="DANNY" jumble={"GRHYB"} />
            <Name text="RUSK" jumble={"WXVB"} second={true} />
          </div>
          <p>Frontend developer, data analyst, dog lover.</p>
        </div>

        <div id="menu-items">
          {menuItems.map((itemName, index) => (
            <div
              key={index}
              onMouseOver={() => handleMakeActive(index)}
              ref={(ref) => (menuItemRefs.current[index] = ref)}
              className={`menu-item ${
                activeMenuItemId == index ? "active" : ""
              } `}
              onClick={() => handleNavClick(index)}
            >
              {itemName}
            </div>
          ))}
          <div
            key="3"
            className={activeMenuItemId == 3 ? "menu-item active" : "menu-item"}
            onClick={() => goToURL("/resume")}
          >
            RESUME
          </div>
        </div>

        <Links />
      </div>
    </div>
  );
});
