import React, { useEffect, useState } from "react";
import Questions from "./Questions.js";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion.js";
import { PushAnswer } from "../hooks/setResult.js";
import { useSelector, useDispatch } from "react-redux";

export default function Quiz() {
  const [check, setChecked] = useState(undefined);
  //const trace = useSelector((state) => state.questions.trace);
  const { queue, trace } = useSelector((state) => state.questions);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(trace);
  });

  function onNext() {
    console.log("On next click");
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
      dispatch(PushAnswer(check));
    }
  }
  function onPrev() {
    console.log("On prev click");
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  }

  function onChecked(check) {
    setChecked(check);
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <Questions onChecked={onChecked} />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          prev
        </button>
        <button className="btn next" onClick={onNext}>
          next
        </button>
      </div>
    </div>
  );
}
