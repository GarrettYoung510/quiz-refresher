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
  result.querySelector("span").textContent = `${score}%`;
  //   use classList to remove d-none
  result.classList.remove("d-none");
});
