const correctAnswers = ["D", "C", "D", "D"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1, form.q2.value, form.q3.value, form.q4.value];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
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
      result.querySelector('span').textContent = `${output}%`;
      if(output === score) {
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
