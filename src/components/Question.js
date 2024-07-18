import Options from "./Options";

export default function Question({ question }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
      <button className="btn btn-ui">Next</button>
    </div>
  );
}
