import { Component, OnInit } from '@angular/core';
import { todoService } from 'src/app/todo-services';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private t:todoService) { }
  list=[]
  n=0;
  m
  ngOnInit() {
    this.list=this.t.getlist();
  }
  strike(item){
    this.m=document.getElementById(item);
    this.m.style.strike;
  }
  deleteItem(i){
    this.t.delItem(i);
  }
  

}
