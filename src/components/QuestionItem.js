import React from "react";

function QuestionItem({ question, onDelete }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
    function handleDeleteItem(){
      onDelete(id)
      // fetch(`http://localhost:4000/questions/${id}`, {
      //   method: "DELETE",
      // })
      // .then((res) => res.json())
      // .then(() => {
      //   setQuestions(question.filter((question)=> question.id !== id))
      // })
    }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteItem}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;