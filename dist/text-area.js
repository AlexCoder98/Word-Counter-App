import { counters } from "./counters.js";
class TextArea {
    constructor() {
        this.textArea = document.getElementById("text");
        this.copySign = document.querySelector(".date");
        this.textArea.addEventListener("keyup", (e) => {
            const text = e.target.value;
            counters.count(text);
        });
        this.copySign.textContent = new Date().getFullYear().toString();
    }
}
new TextArea();
