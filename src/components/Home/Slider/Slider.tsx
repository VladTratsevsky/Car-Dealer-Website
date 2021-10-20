import { Button } from "./Button/Button"
import styles from "./Slider.module.css";

const slideThe3 = () => {
  return (
    <div className={styles.cardThe3}>
    <h1 className={styles.title}>
        THE 3
    </h1>
    <Button />
    </div>
  )
}

const slideThe5 = () => {
    return (
    <div className={styles.cardThe5}>
        <h1 className={styles.title}>
            THE 5
        </h1>
        <Button />
    </div>
    )
}

  const slideThe7 = () => {
    return (
        <div className={styles.cardThe7}>
            <h1 className={styles.title}>
                THE 7
            </h1>
            <Button />
        </div>
    ) 
}
   
let containerClassName = styles.container

const slidereLeft = () => {
    return   containerClassName = styles.containerLeft
}

const slidereRight = (event: any) => {
    
}


export const Slider = () => {
    return (
        <div className={containerClassName}>
            <button className={styles.sliderButtonL} onClick={slidereLeft}>&#10094;</button>
            <button className={styles.sliderButtonR} onClick={slidereRight}>&#10095;</button>
            <div className={styles.containerVisible}>
            {slideThe3()}
            {slideThe5()}
            {slideThe7()}
            </div>
            
        </div>
    )
}