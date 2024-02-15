/*
"Observables are used to perform async operations and handle async data"
A promise will always return a value no matter even if it's an error. 
Promise return all the data at once. Also it's a native feature of JS
Observable return data only if subscribed and sends the data in packets, it streams data
Observable is not JS native, we need to use RxJS (Reactive Extension library for JS)
*/

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, from, of, timeInterval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Angular Observables';

  // //new var myObservable with observable const with a call back funciton with an arg
  // //observer (which is the subscriber waiting for the data)
  // myObservable = new Observable((observer) => {
  //   console.log('Observable Starting now...'),
  //   setTimeout(() => {observer.next("1")}, 1000)
  //   setTimeout(() => {observer.next("2")}, 2000)
  //   setTimeout(() => {observer.next("3")}, 3000)
  //   //Now if there an error in the observable, like the one below, catch it in the ngOnInit
  //   //Once the observable has an error, it'll stop emitting all other values.
  //   setTimeout(() => {observer.error("Something went wrong, please try again!")}, 3000)
  //   setTimeout(() => {observer.next("4")}, 4000)
  //   setTimeout(() => {observer.next("5")}, 5000)
  //   //Anything after complete is emitted from the observable, then no value will be emitted from it. Example if I made this 3000 secs, it'll be done
  //   setTimeout(() => {observer.complete()}, 6000)
  // });

  //creating an observable using the Create method instead of constructor
  myObservable1 = Observable.create((observer1: any) => {
    observer1.next("A"),
    observer1.next("B"),
    observer1.next("C"),
    observer1.next("D"),
    observer1.next("E")
  });

  //crateing observables uing operators
  array1 = [1,2,3,4,5];
  array2 = ['A','B','C','D'];

  //using of() operator takes any number of args and displays them as is
  //myObservable = of(this.array1, this.array2, 123,'Of Operator');

  //using from() operator takes only 1 args, 
  //using the from() method we can convert a promise to an obervable
  myObservable = from(this.array1);


  //The observable emit the data only if there's a subscriber.
  //Use the ngOnInit to subscribe to the observable
  ngOnInit() {
    //Subsribe method take 3 params, next (value), error and complete
    //value is the data emited from the obervable
    this.myObservable.subscribe((value:any) => {
      console.log(value);
    }, (error: any) => { //this method take 1 param i.e 'error' in this case
      alert(error.message);
    }, () => { //the complete function doesn't take any params
      alert("Observable has emitted all the values!! Good luck")
    });
  }
}


//https://www.youtube.com/watch?v=V4iMyVnQPqM&t=630s