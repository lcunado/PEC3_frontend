import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../../../models/article.model';
import { ArticleQuantityChange } from '../../../models/article-quantity-change.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {
  @Input() article!: Article;
  @Output() quantityChange = new EventEmitter<ArticleQuantityChange>();

  increment() {
    this.quantityChange.emit({
      article: this.article,
      quantity: this.article.quantityInCart + 1
    });
  }

  decrement() {
    if (this.article.quantityInCart > 0) {
      this.quantityChange.emit({
        article: this.article,
        quantity: this.article.quantityInCart - 1
      });
    }
  }
}
