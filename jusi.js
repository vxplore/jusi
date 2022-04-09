class Widget {
    constructor(){
        this.children = []
    }
    add(widget){
        if(widget instanceof Widget){
            this.children.push(widget)
        }
    }
}

class Div extends Widget {
    constructor(){
        this.children = []
    }
    build(){

    }
}