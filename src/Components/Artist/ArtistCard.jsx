import styles from "./ArtistCard.module.scss"

const Card = (props) => {
    return(
    <div className={styles.parent_card}>
        <div className={styles.card_box}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.pic_content}>
                        <img alt="tmg" className={styles.artist_image} src={props.img} />
                    </div>
                </div>
                <div className={styles.right}>
                    <h2 className={styles.heading}>{props.name}</h2>
                    <p className={styles.paragraph}>
                       {props.about}
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Card;