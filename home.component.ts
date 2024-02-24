import { ApiService } from './../service/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  data: any[] = [];

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void{
    this.llenarData();
  }
  llenarData(){
    this.ApiService.getData().subscribe(data=> {
      this.data = data;
      console.log(this.data);
    })
  }
}
