class EnqueteTest
{
    #enquete;
    
    constructor()
    {
        this.#enquete = null;
    }
    
    test()
    {
        let intro = "Lorempum je sais pas quoi";
        let question = "Lorempum sum ?";
        let image = "img/bacon.png";
        let choix = [1, 2, 3, 4, 5];
        
        this.#enquete = new Enquete(intro, question, image, choix);
        
        console.log(this.#enquete.intro);
        console.log(this.#enquete.question);
        console.log(this.#enquete.image);
        console.log(this.#enquete.choix);
        
        this.#enquete.intro ="Blablablablablablablabla";
        this.#enquete.question = "Deuxième question?";
        this.#enquete.image = "img/carrots.png";
        this.#enquete.choix = [1, 3, 5];
        
        console.log(this.#enquete.intro);
        console.log(this.#enquete.question);
        console.log(this.#enquete.image);
        console.log(this.#enquete.choix);
    }
    
}

export {EnqueteTest};