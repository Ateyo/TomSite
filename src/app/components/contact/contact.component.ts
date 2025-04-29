import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    console.log('Form submitted:', {
      name: this.name,
      email: this.email,
      message: this.message
    });
    alert('Your message has been sent!');
  }
}
