import styles from '@/styles/About.module.css'
import {FC, useContext} from "react";


import { UserProfile } from '@/pages';


export const About: FC<UserProfile> = ({name, description, img}) =>{
  

 

    return(
    <section id="1" className={styles.about}>
    <div className={styles.about__container}>
      <div className={styles.img__container}>
        { <img src={img} /> }
      </div>
      <p>Hey,I'm {name}</p>
      <h1>
        {description}
      </h1>
    </div>
    </section>
    )
}

