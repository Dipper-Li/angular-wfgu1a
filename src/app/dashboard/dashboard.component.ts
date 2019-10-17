import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable, of, from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  users = [{id:1,name:'Lee1', nickName:'Lee'},{id:2,name:'Kenny', nickName:'K'}];
  ob;
  time
  constructor(private heroService: HeroService) { 


function multicastSequenceSubscriber() {
  const seq = [1, 2, 3];
  // Keep track of each observer (one for every active subscription)
  const observers = [];
  // Still a single timeoutId because there will only ever be one
  // set of values being generated, multicasted to each subscriber
  let timeoutId;

  // Return the subscriber function (runs when subscribe()
  // function is invoked)
  return (observer) => {
    observers.push(observer);
    // When this is the first subscription, start the sequence
    console.log('observers.length:',observers.length); 
    if (observers.length === 1) {
      timeoutId = doSequence({
        next(val) {
          // Iterate through observers and notify all subscriptions
          observers.forEach(obs => obs.next(val));
        },
        complete() {
          // Notify all complete callbacks
          observers.slice(0).forEach(obs => obs.complete());
        }
      }, seq, 0);
    }

    return {
      unsubscribe() {
        // Remove from the observers array so it's no longer notified
        observers.splice(observers.indexOf(observer), 1);
        // If there's no more listeners, do cleanup
        if (observers.length === 0) {
          clearTimeout(timeoutId);
        }
      }
    };
  };
}

// Run through an array of numbers, emitting one value
// per second until it gets to the end of the array.
function doSequence(observer, arr, idx) {
  return setTimeout(() => {
    observer.next(arr[idx]);
    if (idx === arr.length - 1) {
      observer.complete();
    } else {
      doSequence(observer, arr, ++idx);
    }
  }, 1000);
}

// Create a new Observable that will deliver the above sequence
const multicastSequence = new Observable(multicastSequenceSubscriber());

// Subscribe starts the clock, and begins to emit after 1 second
multicastSequence.subscribe({
  next(num) { console.log('1st subscribe: ' + num); },
  complete() { console.log('1st sequence finished.'); }
});

// After 1 1/2 seconds, subscribe again (should "miss" the first value).
setTimeout(() => {
  multicastSequence.subscribe({
    next(num) { console.log('2nd subscribe: ' + num); },
    complete() { console.log('2nd sequence finished.'); }
  });
}, 1500);

// Logs:
// (at 1 second): 1st subscribe: 1
// (at 2 seconds): 1st subscribe: 2
// (at 2 seconds): 2nd subscribe: 2
// (at 3 seconds): 1st subscribe: 3
// (at 3 seconds): 1st sequence finished
// (at 3 seconds): 2nd subscribe: 3
// (at 3 seconds): 2nd sequence finished

    //this.time = setInterval(() => console.log('1'), 1000);

    let a = new Observable((obsver)=>{
      obsver.next(1);
      obsver.next(2);
      obsver.next(3);
      return {unsubscribe() {}};
    });
    a.pipe(filter((n1:number)=>n1%2==0)).subscribe((n)=>{console.log('n:',n)});
    // this.ob = new Observable((observer)=>{
    //   observer.next(10);
    //   observer.complete();
    //   return {unsubscribe() {}};
    // });

    // let su = this.ob.subscribe((num)=>{console.log(num)},(num)=>{console.log(num)},()=>{console.log('complete')},);
    // let si = this.ob.subscribe((num)=>{console.log(num)},(num)=>{console.log(num)},()=>{console.log('complete')},);
    function consolePerSecond(nums){
      return new Observable(function test(observer){observer.next(2)});
      // return new Observable((observer)=>{
      //   doSequnce(nums,0);
      //   function doSequnce(arr,idx){
      //     setTimeout(()=>{
      //       if(idx<=arr.length-1){
      //         observer.next(arr[idx]);
      //       }
      //       if(idx<arr.length-1){
      //         doSequnce(arr,++idx);
      //       }
      //     },1000);
      //   }
      // });
      
    }

    // let ob = consolePerSecond([1,3,6]).subscribe((x)=>{console.log(x)});
    // let tt = map((val:number)=>val*val);
    // let ts = tt(of(1,2,3));
    // ts.subscribe((n)=>{
    //   console.log(n);
    // });

    // let a1 = {e:'eee',r:2};
    // let {e:k,e} = a1;
    // //let k = a1.e;
    // console.log(k);
    // console.log(e);

    // let a2 = from([1,2,3]);
    // a2.subscribe();

  }
  stop(){
    clearInterval(this.time);
    this.time = null;
  }
  ak(a:Function){
    return (b?:any) => {
      return a(b);
    };
  }
  trackByTest(index,user){
    return user.nickName
  }
  addUser(){
    
    this.users.push({id:Math.round(Math.random()*1000000),name:'Lee', nickName:'Lee'});
  }
  search(){
    this.users=[{id:2,name:'Lee', nickName:'Lee'},{id:2,name:'Kenny', nickName:'K'}];
  }
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/