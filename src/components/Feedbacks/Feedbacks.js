import React, { useContext, useState } from "react";
import styles from './Feedbacks.module.scss';
import Feedback from '../Feedback/Feedback';
import { ThemeContext } from '../utils/ThemeContext';

function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState(JSON.parse(localStorage.getItem('feedbacks')) || []);
  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);
    const name = data.get("name");
    const feedback = data.get("feedback");
    const updatedFeedbacks = [...feedbacks, { name, feedback, theme }];
    setFeedbacks(updatedFeedbacks);
    localStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks));
    localStorage.setItem('theme', JSON.stringify(updatedFeedbacks));
    evt.target.elements.name.value = '';
    evt.target.elements.feedback.value = '';
  }

  const theme = useContext(ThemeContext);

  return (
    <div className={`${styles.wrapper} ${styles[theme]}`} >
      <h2>Feedbacks</h2>
      <div className={styles.boxFeedbacks}>
        <form className={styles.addFeedbackFrom} onSubmit={onSubmitHandler}>
          <div>
            <div>Your name:</div>
            <input name="name" placeholder="your name" required />
          </div>
          <div>
            <div>Feedback:</div>
            <input name="feedback" placeholder="feedback" required />
          </div>
          <button type="submit" onClick={() => { styles.backgroundColor = "black" }}>Add</button>
        </form>
      </div>
      {feedbacks.map((item, idx) => {
        const { name, feedback } = item;
        return <div key={idx}>
          <Feedback name={name} feedback={feedback} />
        </div>
      })}
    </div>
  );
}

export default Feedbacks;