class EnqueteTest
{
    #enquete;
    
    constructor()
    {
        this.#enquete = null;
    }
    
    test()
    {
        let intro = "Lorempum je sais pas quoi"
        let question = "Lorempum sum ?"
        let image = "img/bacon.png"
        
        this.#enquete = new Enquete(intro, question, image);
        
        console.log(this.#enquete.intro);
        console.log(this.#enquete.question);
        console.log(this.#enquete.image);
        
        this.#enquete.intro ="Blablablablablablablabla";
        this.#enquete.question = "Deuxième question?"
        this.#enquete.image = "img/carrots.png"
        
        console.log(this.#enquete.intro);
        console.log(this.#enquete.question);
        console.log(this.#enquete.image);
    }
    
}

export {EnqueteTest};