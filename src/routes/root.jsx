import { useRef, useEffect, useState } from "react";
import Sidebar from "../components/sidebar.jsx";
import Main from "../components/main.jsx";

export default function Root() {
  // CONST //

  // Add onScroll event listener to window
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let sectionRefList = [
        aboutSectionRef,
        projectSectionRef,
        contactSectionRef,
      ];
      sectionRefList.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.current.offsetTop;
        let height = sec.current.offsetHeight;
        let id = sec.current.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActiveMenuId(id);
          setShowScrollHeader(true);
        }
      });

      // Check if Bottom of Name Header is visible (only in vertical view)
      const headerRef = menuItemRefs.current[3];

      var pageTop = window.scrollY;
      var pageBottom = pageTop + window.innerHeight;
      var elementTop = headerRef.offsetHeight;
      var elementBottom = elementTop + headerRef.offsetHeight;

      // hide Header if so
      if (elementTop <= pageBottom && elementBottom >= pageTop) {
        setShowScrollHeader(false);
      }
    });
  }, []);

  function handleNavClick(index) {
    switch (index) {
      case 0:
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveMenuId(0);
        break;
      case 1:
        projectSectionRef.current.scrollIntoView({ behavior: "smooth" });
        setActiveMenuId(1);
        break;
      case 2:
        contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
        setActiveMenuId(2);
        break;
    }
  }

  //// REFS /////////////////////////////////////////////////////////////////////

  // Section Refs
  const aboutSectionRef = useRef();
  const projectSectionRef = useRef();
  const contactSectionRef = useRef();
  const sectionRefs = { aboutSectionRef, projectSectionRef, contactSectionRef };

  // Nav Menu Refs
  const menuItemRefs = useRef([]);

  const [activeMenuItemId, setActiveMenuId] = useState(0);
  const [showScrollHeader, setShowScrollHeader] = useState(false);
  const [firstScroll, setFirstScroll] = useState(true);

  let activeSection = ["ABOUT", "PROJECTS", "CONTACT"][activeMenuItemId];

  return (
    <main id="container">
      <div className={`scrollHeader ${showScrollHeader ? "" : "hide"}`}>
        <p>{activeSection}</p>
      </div>
      <Sidebar
        handleNavClick={handleNavClick}
        ref={menuItemRefs}
        activeMenuItemId={activeMenuItemId}
      />

      <Main ref={sectionRefs} activeSection={activeSection} />
    </main>
  );
}
