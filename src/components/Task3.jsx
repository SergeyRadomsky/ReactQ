import { useMemo, useState, useEffect } from 'react';
import { useRef } from 'react';
import styles from './Task3.module.scss';

const Task3 = () => {

  const elementRef = useRef();
  const [width, setWidth] = useState("")

  useEffect(() => {
    setWidth(elementRef.current.offsetWidth)
  }, [elementRef])


  const handleButtonClick = () => {
    if (width >= 100) {
      elementRef.current.classList.add(styles.blue)
    } else {
      elementRef.current.classList.add(styles.green)
    }
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Click</button>
      <div className={styles.box} ref={elementRef}>
        Box
      </div>
    </div>
  )

}


export default Task3;