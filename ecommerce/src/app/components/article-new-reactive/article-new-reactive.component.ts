import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NameArticleValidator } from './name-article.validator';

@Component({
  selector: 'app-article-new-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css'
})
export class ArticleNewReactiveComponent {
  submitted = false;
  article: FormGroup;

  constructor(private fb: FormBuilder) {
    this.article = this.fb.group({
      name: ['', [
        Validators.required, 
        Validators.minLength(3), 
        NameArticleValidator]],
      price: ['', [
        Validators.required, 
        Validators.pattern(/^\d+(\.\d{1,2})?$/), 
        Validators.min(0.1)]],
      imageUrl: ['', [
        Validators.required,
        Validators.pattern(/^https?:\/\/[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})+\/[\w\-]+\.((jpg)|(jpeg)|(png)|(gif))$/)
      ]],
      isOnSale: [false]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.article.valid) {
      console.log('Artículo creado (reactivo):', this.article.value);
      this.article.reset({ price: '', isOnSale: false });
      this.submitted = false;
    }
  }
}
