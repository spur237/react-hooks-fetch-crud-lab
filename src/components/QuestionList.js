import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((res) => res.json())
    .then(questions =>{
      setQuestions(questions)
      console.log(questions)
    })
  },[])
  

  const qweryItems =  questions.map((qwery)=>(
     
    <QuestionItem 
    key={qwery.id}
    question={qwery}
    onDelete={handleDeleteItem}
    />
) )

function handleDeleteItem(id){
  // onDelete(id)
  fetch(`http://localhost:4000/questions/${id}`, {
    method: "DELETE",
  })
  .then((res) => res.json())
  .then(() => {
    const questionVar = questions.filter((question)=> question.id !== id)
    setQuestions(questionVar)
  })
}
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
        {qweryItems}
    </section>
  );
}

export default QuestionList;