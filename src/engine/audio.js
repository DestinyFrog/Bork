export class Audio {
    static change(adress) {
        this.aud.src = adress;
    }
    static play(adress) {
        if (adress != undefined) {
            this.aud.src = "./audio/" + adress;
        }
        this.aud.play();
    }
    static stop() {
        this.aud.pause();
    }
}
Audio.aud = document.getElementById("audio");
