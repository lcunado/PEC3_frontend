import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticleNewTemplateComponent } from './components/article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './components/article-new-reactive/article-new-reactive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    ArticleListComponent,
    ArticleNewTemplateComponent,
    ArticleNewReactiveComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
  currentView: 'list' | 'template' | 'reactive' = 'list';

  changeView(view: string) {
    this.currentView = view as any;
  }
}
