import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import gql from "graphql-tag"

import { Movie, Query } from '../types'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  movie: Observable<Movie[]>
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
  this.movie = this.apollo.watchQuery<Query>({
       query: gql`
         query allMovie {
           movies {
             id 
             name
             score
           }
         }     
       `
       })
       .valueChanges
       .pipe(
         map(result => result.data['movies'])
       )  
  } 

  /* movieList: any

  ngOnInit() {
   this.movieList = this.apollo.watchQuery<any>({
     query: gql`
     query allMovie {
       movies {
         id 
         name
         score
       }
     }     
   `
   })
    .valueChanges
    .subscribe(({ data, loading }) => {
      this.movieList = data
      console.log(data) 
   });
   console.log(this.movieList)
  } */


}
