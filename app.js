const correctAnswers = ["D", "C", "D", "D", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

  // // iterate through to add a number for each question in the app
  // const answerNums = [];
  // for (let i = 1; i <= correctAnswers.length; i++) {
  //   answerNums.push("q" + i);
  // }
  // // add all user answers
  // const userAnswers = [];
  // // loop through values to check answer values
  // for (let i = 1; i <= answerNums.length; i++) {
  //   userAnswers.push(form.answerNums[i].value);
  //   console.log(userAnswers);
  // }

  // for (let i = 0; i < correctAnswers.length; i++) {
  //   userAnswers.push(form.elements[i].value);
  //   console.log(userAnswers);
  // }

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 100 / correctAnswers.length;
    }
  });

  // show result on page
  //   scroll to top of the page
  scrollTo(0, 0);
  result.querySelector("span").textContent = `${score}%`;
  //   use classList to remove d-none
  result.classList.remove("d-none");

  //   animation effect
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

// // executes ONCE after 3000 ms
// setTimeout(() => {
//   alert("hello");
// }, 3000);

// // executes every 1000 ms
// setInterval(() => {
//     console.log('hello');
// }, 1000);
