import "../styles/QnAElements.css";
import { useState } from "react";

function QnAElements({ title, content }) {
  const [open, setOpen] = useState(false);
  const arrowIcon = "/chevron.svg";

  return (
    <div className="qa_box" onClick={() => setOpen(!open)}>
      <div className={`qa_title ${open ? "open" : ""}`}>
        <span>{title}</span>
        <img
          src={arrowIcon}
          alt="arrow"
          className={`arrow ${open ? "open" : ""}`}
        />
      </div>

      <div className={`qa_content_wrapper ${open ? "open" : ""}`}>
        <div className="qa_content">{content}</div>
      </div>
    </div>
  );
}

export default QnAElements;
