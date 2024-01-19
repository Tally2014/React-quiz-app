import './App.css'
import { useEffect, useMemo, useState } from "react";

function App() {

  const [questionNumber, setQuestionNumber] = useState(1);

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "R 100" },
        { id: 2, amount: "R 200" },
        { id: 3, amount: "R 300" },
        { id: 4, amount: "R 500" },
        { id: 5, amount: "R 1 000" },
        { id: 6, amount: "R 2 000" },
        { id: 7, amount: "R 4 000" },
        { id: 8, amount: "R 8 000" },
        { id: 9, amount: "R 16 000" },
        { id: 10, amount: "R 32 000" },
        { id: 11, amount: "R 64 000" },
        { id: 12, amount: "R 125 000" },
        { id: 13, amount: "R 250 000" },
        { id: 14, amount: "R 500 000" },
        { id: 15, amount: "R 1 000 000" },
      ].reverse(),
    []
  );

  return (
    <>
      <div className='app'>
        <div className='main'>main</div>
        <div className='pyramid'>
        <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li key={m.id} className={
                  questionNumber === m.id
                    ? "moneyListItem active"
                    : "moneyListItem"
                }>
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </>
  )
}

export default App
