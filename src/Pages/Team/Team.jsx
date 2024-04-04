import React from 'react'
import styles from "../Team/Team.module.scss"
import data from "../../../public/db/team.json"

export const Team = () => {
    console.log(data)
  return (
    <div className={styles.wrapper}>
        //title
       <div className={styles.title}>
        <div className={styles.dholLeft}></div>
        <div className={styles.groupTitle}>
            <h1 className={styles.heading}>MEET OUR TEAM</h1>
            <div className={styles.gloory}></div>
        </div>
       </div>

       //hornPipe
       <div className={styles.pempaLeft}></div>
       <div className={styles.pempaRight}></div>

       <div className={styles.coreTeam}>

       </div>

       <div className={styles.techTeam}>

       </div>

    </div>
  )
}
