import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, RouterModule],
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'hello-angular';
}
