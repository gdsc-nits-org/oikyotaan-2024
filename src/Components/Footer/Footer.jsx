import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.top}>
        <div className={styles.slide}>
          <img
            className={styles.slider}
            src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712073184/Oikyotaan/igw7l9chpiq0cfgmxzbv.png"
            alt="slider"
          />
        </div>
        <div className={styles.slide}>
          <img
            className={styles.slider}
            src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712073184/Oikyotaan/igw7l9chpiq0cfgmxzbv.png"
            alt="slider"
          />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.footer}>
          <div className={styles.footerbody}>
            <div className={styles.logo_box}>
              <img
                className={styles.logo}
                alt="Oikyotaan Logo"
                src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712052815/Oikyotaan/ascrgnkddoyvanfs3ohr.svg"
              />
            </div>
            <div className={styles.social}>
              <div className={styles.contact}>
                <div className={styles.contactinfo}>
                  <img
                    className={styles.logo2}
                    src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712052813/Oikyotaan/irum766hksgshwyvllax.svg"
                    alt="location"
                  />
                  <p className={styles.contactdetails}>
                    NIT Silchar, Assam, India 788010
                  </p>
                </div>
                <div className={styles.contactinfo}>
                  <img
                    className={styles.logo2}
                    src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712052813/Oikyotaan/ae1w0uige95quqbamhhm.svg"
                    alt="phone"
                  />
                  <div className={styles.contactdetails}>03842-228479</div>
                </div>
              </div>
              <div className={styles.contact}>
                <div className={styles.contactinfo}>
                  <a href="https://www.facebook.com/nitsilcharoikyotaan" target="_blank">
                    <img
                      className={styles.logo2}
                      src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712052813/Oikyotaan/zbrzxiuhtnz3g3szap26.svg"
                      alt="facebook"
                    />
                  </a>
                  <div className={styles.contactdetails}>Facebook</div>
                </div>
                <div className={styles.contactinfo}>
                  <a href="https://www.instagram.com/_oikyotaan_/?hl=en" target="_blank">
                    <img
                      className={styles.logo2}
                      src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712052813/Oikyotaan/juriiplrqf4bwf4jpsdn.svg"
                      alt="instagram"
                    />
                  </a>
                  <div className={styles.contactdetails}>Instagram</div>
                </div>
              </div>
            </div>

            <div className={styles.center}>
              <div className={styles.gdsctext}>
                DESIGNED AND DEVELOPED IN COLLABORATION WITH
              </div>
              <div className={styles.gdsctext_pos}>
                <div className={styles.gdsclogo}>
                  <img
                    className={styles.animation}
                    src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/hyg5xs9vkkpswxiiidp3"
                    alt="gdsc_logo"
                  />
                </div>
                <div className={styles.gdsc_box}>
                  <div className={styles.gdsctext1}>GDSC NIT SILCHAR</div>
                  <div className={styles.gdsclogoarow}>
                    <a
                      href="https://gdscnits.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712053442/Oikyotaan/uomxsgvmtfb7lttfszyz.svg"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <p className={styles.p}>All Rights Reserved ©Oikyotaan, NIT Silchar</p>
          </div>

          <img
            className={styles.imgtop}
            src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712057803/Oikyotaan/uhapwrvptmt7dsh2git1.svg"
            alt="design"
          />
          <img
            className={styles.imgbottom}
            src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712057870/Oikyotaan/uvhn2ccu3qwscip1zqme.svg"
            alt="design"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
