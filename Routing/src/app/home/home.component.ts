import { Component, inject, OnInit } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { PopularComponent } from './popular/popular.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { CommonModule,DOCUMENT } from '@angular/common';
import { ServicesService } from '../Services/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [BannerComponent,PopularComponent,TestimonyComponent,ContactUsComponent,ServicesComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[ServicesService]
})
export class HomeComponent implements OnInit {
  activeRoute:ActivatedRoute = inject(ActivatedRoute);
  // document:Document = inject(Document)
  ngOnInit(): void {
    this.activeRoute.fragment.subscribe((data)=>{
      // console.log(data)
      this.jumpToSection(data)
    })
  }

  jumpToSection(section:any){
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'})
  }
}
