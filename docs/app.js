const contexts = ["Driving", "Cooking", "Working Out", "Socializing", "Watching TV", "Shopping", "Traveling", "Studying", "Working", "Relaxing"];
const activities = ["Running", "Weightlifting", "Yoga", "Reading", "Listening to music", "Cooking dinner", "Browsing social media", "Watching a movie", "Playing a game", "Having a conversation"];
const personas = ["A busy parent with young children", "An elderly person with limited mobility", "A teenager who has moved to the United States recently for college", "A business traveler", "A professional chef", "A student studying for exams", "A freelance writer working from home", "A retiree enjoying their leisure time", "A person with a disability", "A busy executive with a packed schedule"];

const contextElement = document.getElementById("context");
const activityElement = document.getElementById("activity");
const personaElement = document.getElementById("persona");
const responseElement = document.getElementById("design-response");
const newCardsButton = document.getElementById("new-cards-button");

newCardsButton.addEventListener("click", () => {
  const context = contexts[Math.floor(Math.random() * contexts.length)];
  const activity = activities[Math.floor(Math.random() * activities.length)];
  const persona = personas[Math.floor(Math.random() * personas.length)];
  
  contextElement.textContent = context;
  activityElement.textContent = activity;
  personaElement.textContent = persona;
  responseElement.value = "";
});


// Alt attempt that is failing
// const activities = [
//     {
//       title: "Cooking",
//       description: "Whipping up a new recipe for dinner tonight"
//     },
//     {
//       title: "Driving",
//       description: "On a long road trip with friends"
//     },
//     {
//       title: "Working Out",
//       description: "Weights and cardio today"
//     },
//     {
//       title: "Reading",
//       description: "Catching up on the latest bestseller"
//     },
//     {
//       title: "Gaming",
//       description: "Playing the latest first-person shooter"
//     },
//     {
//       title: "Socializing",
//       description: "Out at a bar with friends"
//     },
//     {
//       title: "Watching TV",
//       description: "Binge-watching a new series on Netflix"
//     },
//     {
//       title: "Studying",
//       description: "Preparing for a big exam tomorrow"
//     },
//     {
//       title: "Relaxing",
//       description: "Enjoying a lazy day at home"
//     },
//     {
//       title: "Working",
//       description: "In the middle of a busy workday"
//     }
//   ];