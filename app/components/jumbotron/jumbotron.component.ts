import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {

    private jumboHeading: string;
    private jumboText: string;
    private jumboBtnText: string;
    private jumboBtnUrl: string;

    constructor(){
        this.jumboHeading = "Hello world";
        this.jumboText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
        this.jumboBtnText = "Read more...";
        this.jumboBtnUrl = "/about";
    }


}
