/**
 * gameObject
 */
class gameObject {
    
    protected div:HTMLElement;
    protected x:number;
    protected y:number;
    
    constructor(tag: string) {
        
        
        this.createDiv(tag);
    }
    
    private createDiv(tag: string):void{
        
        let container:HTMLElement = document.getElementById("container");
        
        this.div = document.createElement(tag);
        container.appendChild(this.div);
        
    }
}