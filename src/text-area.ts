import { counters } from "./counters.js";

class TextArea {
    textArea: HTMLTextAreaElement;
    copySign: HTMLSpanElement;
    constructor() {
        this.textArea = document.getElementById("text") as HTMLTextAreaElement;
        this.copySign = document.querySelector(".date") as HTMLSpanElement;
        this.textArea.addEventListener("keyup", (e: KeyboardEvent) => {
            const text = (e.target as HTMLTextAreaElement).value;
            counters.count(text);
        })

        this.copySign.textContent = new Date().getFullYear().toString();
    }
}

new TextArea();