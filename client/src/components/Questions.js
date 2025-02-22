import React, { useState } from "react";
import { useFetchQuestion } from "../hooks/FetchQuestion";
import { useSelector, useDispatch } from "react-redux";

export default function Questions({ onChecked }) {
  const [checked, setChecked] = useState(undefined);

  const { trace } = useSelector((state) => state.questions);

  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const dispatch = useDispatch();

  function onSelect(i) {
    // console.log(i);
    onChecked(i);
  }

  if (isLoading) return <h3 className="text-light">isLoading</h3>;
  if (serverError)
    return <h3 className="text-light">{serverError || "Unknown Error"}</h3>;

  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>

      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />

            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className={`check `}></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
