import { useMemo, useState, useEffect } from 'react';
import { useRef } from 'react';
import styles from './Task3.module.scss';

const Task3 = () => {

  const elementRef = useRef();
  // console.log("elementRef");
  // console.log(elementRef);


  const [width, setWidth] = useState("")

  
  
  useEffect(() => {
    // console.log("useMemo");
    // console.log(elementRef);
    // console.log(elementRef.current.style.width)
    console.log(elementRef.current.offsetWidth)
    // return elementWidth;
    setWidth(elementRef.current.offsetWidth)
  }, [elementRef])
  // console.log(width);



  // console.log("19");
  // console.log(elementRef);

  const handleButtonClick = () => {
    // console.log(elementRef);
    // console.log(width);
    if (width >= 100) {
      elementRef.current.classList.add(styles.blue)
      // console.log("blue");
      // console.log(elementRef);
    } else {
      // console.log("green");
      // console.log(elementRef);
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