import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-details',
    standalone: true,
    imports: [CommonModule],
    template: `
        <p>
            detail works!
        </p>
    `,
    styleUrls: ['./details.component.css']

})

export class DetailsComponent {

}