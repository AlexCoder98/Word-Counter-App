class Counters {
    private counterTags: NodeList;
    private counters: {
        chars: number,
        words: number,
        spaces: number,
        sentences: number,
    };
    private wordRegExp: RegExp;
    private wordEndRegExp: RegExp;

    constructor() {
        this.counterTags = document.querySelectorAll(".counter") as NodeList;
        this.counters = {
            chars: 0,
            words: 0,
            spaces: 0,
            sentences: 0,
        }
        this.wordRegExp = /[a-zA-Z0-9]/;
        this.wordEndRegExp = /[.?!]|(?!)/;
    }

    private updateCounters(chars: number, words: number, spaces: number, sentences: number) {
        this.counterTags.forEach(tag => {
            switch (true) {
                case (tag as HTMLSpanElement).className.includes("chars"):
                    tag.textContent = chars.toString();
                    break;
                case (tag as HTMLSpanElement).className.includes("words"):
                    tag.textContent = words.toString();
                    break;
                case (tag as HTMLSpanElement).className.includes("spaces"):
                    tag.textContent = spaces.toString();
                    break;
                case (tag as HTMLSpanElement).className.includes("sentences"):
                    tag.textContent = sentences.toString();
                    break;
            }
        })
    }

    count(text: string) {
        let { chars, words, spaces, sentences } = this.counters;
        chars = text.split("").filter(el => !el.match(/\n/g)).length;

        const splittedText = text.split(/\s|\n/);

        words = chars > 0 ? (splittedText.filter(el => el !== "" && el.split("").some(innerEl => innerEl.match(this.wordRegExp))).length) : 0;

        spaces = chars > 0 ? text.split("").filter(el => el == " ").length : 0;

        sentences = chars > 0 ? splittedText.filter(el => el !== "" && el[el.length - 1].match(this.wordEndRegExp)).length : 0;

        this.updateCounters(chars, words, spaces, sentences);
    }
}

export const counters = new Counters();