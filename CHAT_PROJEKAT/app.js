import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

let chatroom1 = new Chatroom("#general", "kaca");

chatroom1.getChats((data) => {
  console.log(data);
}); // pozivam funkicju callback

//////////////////////////

let ul = document.querySelector("ul");
let chatUI1 = new ChatUI(ul);
console.log(chatUI1.list); // testiram geter

// chatroom1.getChats((data) => {
//   let li = document.createElement("li");
//   li.textContent = data.message;
//   ul.appendChild(li);
// });

chatroom1.getChats((data) => {
  chatUI1.templateLI(data);
});
