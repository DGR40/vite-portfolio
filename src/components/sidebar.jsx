import { useRef, forwardRef } from "react";
import Name from "./name";
import Links from "./Links";

export default forwardRef(function Sidebar({ handleNavClick }, menuItemRefs) {
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

  const menuItems = ["ABOUT", "PROJECTS", "CONTACT"];

  function handleMakeActive(index) {
    menuItemRefs.current[index].dataset.activeIndex = index;
  }

  function handleOnClick(index) {
    console.log(menuItemRefs.current);
    console.log(typeof menuItemRefs);
  }

  return (
    <div onPointerMove={handlePointerMove} id="sidebar">
      {/* <div id="blob" ref={blobRef}></div>
      <div id="blur"></div> */}

      <div id="menu">
        <div id="name-container">
          <Name text="DANNY" jumble={"GRHYB"} />
          <Name text="RUSK" jumble={"WXVB"} second={true} />
          <p>Frontend developer, data analyst, dog lover.</p>
        </div>

        <div id="menu-items">
          {menuItems.map((itemName, index) => (
            <div
              key={index}
              onMouseOver={() => handleMakeActive(index)}
              ref={(ref) => (menuItemRefs.current[index] = ref)}
              className="menu-item"
              onClick={() => handleNavClick(index)}
            >
              {itemName}
            </div>
          ))}
        </div>
        <Links />
      </div>
    </div>
  );
});
