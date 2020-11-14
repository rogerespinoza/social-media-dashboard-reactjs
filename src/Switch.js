import React, {useRef, useEffect} from "react";
import './switch.css'

export default function Switch() {
  const ref = useRef(null);

  const changeMedia = (mq) => {
    if(mq.matches){
      ref.current.checked = true
    }else {
      ref.current.checked = false
    }
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');

    mq.addListener(changeMedia);

    if (mq.matches) {
      ref.current.checked = false
    }
  }, [])

  const handleChange = () => {
    console.log(ref)
    if (ref.current.checked) {
      document.body.classList.remove('is-light-mode')
      document.body.classList.add('is-dark-mode')
    } else {
      document.body.classList.remove('is-dark-mode')
      document.body.classList.add('is-light-mode')
    }
  }
  return (
    <div className="dark-mode" >
      <p className="dark-mode-title">Dark Mode</p>
      <input ref={ref} onChange={handleChange} type="checkbox" className="checkbox" id="checkbox" />
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  );
}
