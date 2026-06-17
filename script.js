const text = document.getElementById("helloText");
const container = document.querySelector(".container");

const length = text.getComputedTextLength();

text.style.strokeDasharray = length;
text.style.strokeDashoffset = length;
container.style.transform = "scale(0.9)";
container.style.opacity = "0";

const fadeInAnim = container.animate(
  [
    { transform: "scale(0.9)", opacity: 0 },
    { transform: "scale(1)", opacity: 1 }
  ],
  {
    duration: 1000,
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    fill: "forwards",
    delay: 100
  }
);

const writeAnim = text.animate(
[
{
strokeDashoffset:length,
fill:"rgba(15, 23, 42, 0)",
opacity:1
},
{
strokeDashoffset:0,
fill:"rgba(15, 23, 42, 0.98)",
opacity:1
}
],
{
duration:2500,
easing:"cubic-bezier(0.22, 1, 0.36, 1)",
fill:"forwards",
delay: 300
});

writeAnim.finished.then(async () => {
  await new Promise(resolve => setTimeout(resolve, 900));
  const fadeOutAnim = document.body.animate(
    [
      { transform: "scale(1)", opacity: 1 },
      { transform: "scale(0.85)", opacity: 0 }
    ],
    {
      duration: 500,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fill: "forwards"
    }
  );

  await fadeOutAnim.finished;
  window.location.href = "https://akshaydev-resume094.vercel.app/";
});
