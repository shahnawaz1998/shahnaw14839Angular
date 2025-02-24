import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { PopularComponent } from './popular/popular.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-home',
  imports: [BannerComponent,PopularComponent,TestimonyComponent,ContactUsComponent,ServicesComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[ServicesService]
})
export class HomeComponent {

}
