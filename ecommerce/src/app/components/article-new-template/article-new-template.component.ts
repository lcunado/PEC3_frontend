import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-new-template',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css'
})
export class ArticleNewTemplateComponent {
  submitted = false;

  article = new FormGroup({
    name: new FormControl('', [
      Validators.required, 
      Validators.minLength(3)
    ]),
    price: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^\d+(\.\d{1,2})?$/),
      Validators.min(0.01)
    ]),
    imageUrl: new FormControl('', [
      Validators.required,
      Validators.pattern(/^https?:\/\/[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})+\/[\w\-]+\.((jpg)|(jpeg)|(png)|(gif))$/)
    ]),
    isOnSale: new FormControl(false)
  });

  onSubmit() {
    this.submitted = true;
    if (this.article.valid) {
      console.log('Artículo creado (template):', this.article.value);
      this.article.reset({ price: '', isOnSale: false });
      this.submitted = false;
    }
  }
}
