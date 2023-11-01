import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../categories.service';
import { Category } from '../category';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  categoryForm: Category = {
    id: 0,
    name: '',
    description: '',
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private categoryService: CategoryService
  ) {}
  ngOnInit(): void {}
 
  create(){
    this.categoryService.create(this.categoryForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/categories/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}

