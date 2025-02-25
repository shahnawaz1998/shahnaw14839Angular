import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-banner',
  imports: [RouterLink],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  router:Router = inject(Router)
  OnSearchClicked(data:string){
    // console.log(data);
    this.router.navigate(['/Courses'],{queryParams:{search:data}})
  }
}
