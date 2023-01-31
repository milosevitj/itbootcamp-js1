export class ChatUI {
  constructor(l) {
    this.list = l;
  }
  set list(l) {
    this._list = l;
  }
  get list() {
    return this._list;
  }
  templateLI(data) {
    let htmlLI = `<li>
            <span class="username">${data.username} : </span>
            <span class="message">${data.message}</span>
            <div class="date">${data.created_at.toDate().toDateString()}</div>
        </li>`;
    this.list.innerHTML += htmlLI;
  }
}
