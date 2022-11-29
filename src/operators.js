import {interval, fromEvent, switchMap} from "rxjs";
import { map, filter, tap, take, takeLast, takeWhile, scan, reduce } from "rxjs/operators";

fromEvent(document, 'click')
  .pipe(
    switchMap(() => {
        return interval(1000)
            .pipe(
                tap(v => console.log('Tap:', v)),
                take(5),
                reduce((acc, v) => acc + v, 0)
            )
        })
    )
    .subscribe( {
       next: v => console.log('Next: ', v),
        complete: () => console.log('Complete')
    })

// const stream$ = interval(1000)
//
// .pipe(
//     // tap(v => console.log('Tab: ', v)),
//     take(10),
//     // map((v) => v * 3),
//     // filter(v => v % 2 === 0),
//     // take(10),
//     // takeLast(5),
//     // takeWhile(v => v < 7)
//     // scan((acc,v) => acc + v, 0)
//     reduce((acc, v) => acc + v, 0)
// )
//
// stream$.subscribe({
//     next: v => console.log('Next: ', v),
//     complete: () => console.log('Complete')
// })