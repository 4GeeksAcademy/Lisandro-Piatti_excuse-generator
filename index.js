let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
];

arrayExcuse = [who, action, what, when];

const excuseGenerator = () => {
  let finalExcuse = "";

  for (kindExcuses of arrayExcuse) {
    let getRandomNumber = () => Math.floor(Math.random() * kindExcuses.length);
    let randomNumber = getRandomNumber();
    finalExcuse += kindExcuses[randomNumber] + " ";
    console.log(finalExcuse);
  }

  return (document.querySelector("#excuse").innerHTML = finalExcuse);
};

document.querySelector("#excuse-button").addEventListener("click", function () {
  let finalExcuse2 = "";
  for (kindExcuses of arrayExcuse) {
    let getRandomNumber = () => Math.floor(Math.random() * kindExcuses.length);
    let randomNumber = getRandomNumber();
    finalExcuse2 += kindExcuses[randomNumber] + " ";
    console.log(finalExcuse2);
  }
  document.querySelector("#excuse").innerHTML = finalExcuse2;
});
