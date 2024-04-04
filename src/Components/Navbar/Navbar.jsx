import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const hamburger = {
    inactive:
      "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712134338/Oikyotaan/inactive_rojxbk.svg",
    active:
      "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712134338/Oikyotaan/active_qeoqes.svg",
  };
  const logo =
    "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712134422/Oikyotaan/oikyotaan_bg_vector_cbkgpe.svg";
  const hamClick = async (e) => {
    e.target.style.opacity = "0";
    setTimeout(() => {
      if (nav === false) {
        setNav(true);
      } else {
        setNav(false);
      }
      e.target.style.opacity = "1";
    }, 200);
  };
  return (
    <div className={styles.navCont}>
      <div className={styles.NavbarMobile}>
        <div className={styles.right}>
          <button className={styles.btn} onClick={hamClick}>
            <img
              src={nav === false ? hamburger.inactive : hamburger.active}
              style={{ transition: "ease 0.2s" }}
              className={styles.navIcons}
              alt="hamburger loading..."
            />
          </button>
        </div>
        <Link to="/" className={styles.left}>
          <img src={logo} className={styles.navIcons} alt="logo loading..." />
        </Link>
      </div>
      <div className={styles.mobile}>
        <div
          className={styles.mobileActive}
          style={{
            display: nav === false ? "none" : "flex",
            zIndex: nav === false ? "-1" : "1000",
            opacity: nav === false ? "0" : "1",
            transition: "ease 500ms",
          }}
        >
          <button className={styles.btn} onClick={hamClick}>
            <img
              src={nav === false ? hamburger.inactive : hamburger.active}
              style={{ transition: "ease 0.2s" }}
              className={styles.navIcons1}
              alt="hamburger loading..."
            />
          </button>
          <div className={styles.linkParentMobile}>
            <Link to="/" className={styles.link}>
              Home
            </Link>
            <img
              className={styles.design}
              src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712169046/Oikyotaan/vecteezy_text-divider-calligraphic-ornament-vintage-decorations_11839102-removebg-preview_1_nro44d.svg"
              alt="design"
            />
          </div>
          <div className={styles.linkParentMobile}>
            <Link to="/artist" className={styles.link}>
              Artist
            </Link>
            <img
              className={styles.design}
              src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712169046/Oikyotaan/vecteezy_text-divider-calligraphic-ornament-vintage-decorations_11839102-removebg-preview_1_nro44d.svg"
              alt="design"
            />
          </div>
          <div className={styles.linkParentMobile}>
            <Link to="/events" className={styles.link}>
              Events
            </Link>
            <img
              className={styles.design}
              src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712169046/Oikyotaan/vecteezy_text-divider-calligraphic-ornament-vintage-decorations_11839102-removebg-preview_1_nro44d.svg"
              alt="design"
            />
          </div>
          <div className={styles.linkParentMobile}>
            <Link to="/gallery" className={styles.link}>
              Gallery
            </Link>
            <img
              className={styles.design}
              src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712169046/Oikyotaan/vecteezy_text-divider-calligraphic-ornament-vintage-decorations_11839102-removebg-preview_1_nro44d.svg"
              alt="design"
            />
          </div>
          <div className={styles.linkParentMobile}>
            <Link to="/teams" className={styles.link}>
              Team
            </Link>
            <img
              className={styles.design}
              src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712169046/Oikyotaan/vecteezy_text-divider-calligraphic-ornament-vintage-decorations_11839102-removebg-preview_1_nro44d.svg"
              alt="design"
            />
          </div>
          <img
            className={styles.design2}
            src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712169457/Oikyotaan/OIKYOTAAN_LOGO_WHITE_BG_DATE_1_lrruew.svg"
            alt="oikyotaan logo"
          />
        </div>
      </div>

      <div className={styles.deskNav}>
        <Link to="/" className={styles.left}>
          <img src={logo} alt="logo loading..." className={styles.logo} />
        </Link>
        <div className={styles.right}>
          <div className={styles.linkParent}>
            <div className={styles.innerParent}>
              <Link to="/" className={styles.link}>
                Home
              </Link>
            </div>
          </div>
          <div className={styles.linkParent}>
            <div className={styles.innerParent}>
              <Link to="/artist" className={styles.link}>
                Artist
              </Link>
            </div>
          </div>
          <div className={styles.linkParent}>
            <div className={styles.innerParent}>
              <Link to="/events" className={styles.link}>
                Events
              </Link>
            </div>
          </div>
          <div className={styles.linkParent}>
            <div className={styles.innerParent}>
              <Link to="/gallery" className={styles.link}>
                Gallery
              </Link>
            </div>
          </div>

          <div className={styles.linkParent}>
            <div className={styles.innerParent}>
              <Link to="/teams" className={styles.link}>
                Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
