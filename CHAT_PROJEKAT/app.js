import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

//DOM
let ul = document.querySelector("ul");
let inputPOr = document.querySelector("#inpSend");
let btnSend = document.querySelector("#send");
let inputUpdate = document.querySelector("#inpText");
let btnUpdate = document.querySelector("#btnUpd");
let divChangeUser = document.querySelector("#changeUser");
let nav = document.querySelector("nav");

let username = "anonymus";
if (localStorage.username) {
  username = localStorage.username;
}

let chatroom = new Chatroom("#general", username); // po defaultu je soba general
let chatUI = new ChatUI(ul); // objekat chat ui klase

//////////////////////////

chatroom.getChats((data) => {
  chatUI.templateLI(data);
});

btnSend.addEventListener("click", () => {
  if (inputPOr.value.trim() !== "") {
    chatroom
      .addChat(inputPOr.value)
      .then(() => (inputPOr.value = ""))
      .catch((err) => console.log(err));
  }
});

btnUpdate.addEventListener("click", (e) => {
  e.preventDefault();
  let newUser = inputUpdate.value;
  chatroom.username = newUser;
  inputUpdate.value = "";
  divChangeUser.textContent = `Username changed: ${chatroom.username}`;
  setTimeout(() => {
    divChangeUser.innerHTML = "";
  }, 1000 * 3);
});

nav.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    let newRoom = e.target.textContent;
    //2.Updajt sobe na koju je kliknuto
    chatroom.updateRoom(newRoom);
    //3. Izbrisati sve poruke sa ekrana
    chatUI.clearUL();
    // 4. prikazi cetove
    chatroom.getChats((data) => {
      chatUI.templateLI(data);
    });
  }
});
