export class Audio {
    static aud = ( <HTMLAudioElement> document.getElementById( "audio" ) );

    static change( adress:string ):void {
        this.aud.src = adress;
    }

    static play( adress?:string ):void {
        if( adress != undefined ) { this.aud.src = "./audio/" + adress; }
        this.aud.play();
    }

    static stop():void {
        this.aud.pause();
    }
}