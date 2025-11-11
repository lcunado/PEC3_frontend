import { Component } from '@angular/core';
import { Article } from '../../../models/article.model';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { CommonModule } from '@angular/common';
import { ArticleQuantityChange } from '../../../models/article-quantity-change.model'

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleItemComponent],
  template: `
    <div class="article-list">
      <app-article-item
        *ngFor="let article of articles"
        [article]="article"
        (quantityChange)="updateQuantity($event)">
      </app-article-item>
    </div>
  `,
  styles: [`
    .article-list {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }
  `]
})
export class ArticleListComponent {
  articles: Article[] = [
    { id: 1, name: 'Auriculares', imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1165', price: 19.99, isOnSale: true, quantityInCart: 0 },
    { id: 2, name: 'Reloj inteligente', imageUrl: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172', price: 89.99, isOnSale: true, quantityInCart: 0 },
    { id: 3, name: 'Altavoces', imageUrl: 'https://plus.unsplash.com/premium_photo-1683141496040-eeef9702269f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880', price: 29.99, isOnSale: false, quantityInCart: 0 }
  ];

  updateQuantity(change: ArticleQuantityChange) {
    const article = this.articles.find(a => a.id === change.article.id);
    if (article) {
      article.quantityInCart = change.quantity;
    }
  }
}
