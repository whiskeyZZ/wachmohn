import { Component } from '@angular/core';
import { Entry } from './blogentry';
import { WachmohnService } from '../wachmohn-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  entries: Entry[];

  constructor(private service: WachmohnService) {
    this.entries = []
  }

  public getEntries() {
    this.service.getBlogEntries().subscribe({
      next: (response: Entry[]) => {this.entries = response}
    })
  }



}
