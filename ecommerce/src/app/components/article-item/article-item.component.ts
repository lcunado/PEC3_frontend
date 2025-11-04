import { Component } from '@angular/core';
import { Article } from '../../../models/article.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {
  article: Article = {
    name: 'Reloj inteligente',
    imageUrl: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172',
    price: 49.99,
    isOnSale: true,
    quantityInCart: 0
  };

  increment() {
    this.article.quantityInCart++;
  }

  decrement() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }
}
