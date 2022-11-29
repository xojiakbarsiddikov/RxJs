import {performanceTimestampProvider} from "rxjs/dist/types/internal/scheduler/performanceTimestampProvider";

const btn = document.getElementById('interval')
const rxjsBtn = document.getElementById('rxjs')
const display = document.querySelector('.result')
import {interval, scan, take, filter, map} from "rxjs";

const people = [
    {
        name: 'Xojiakbar',
        age: 15
    },
    {
        name: 'Abbos aka',
        age: 20
    },
    {
        name: 'Rizo',
        age: 14
    },
    {
        name: 'Xafiz',
        age: 15
    },
    {
        name: 'Abu',
        age: 14
    },
    {
        name: 'Shox ake',
        age: 19
    },
    {
        name: 'Vue js',
        age: 20
    },
    {
        name: 'Angular',
        age: 15
    },
    {
        name: 'React',
        age: 8
    },
    {
        name: 'Next',
        age: 5
    },
]

// btn.addEventListener('click', () => {
//     btn.disabled = true
//     let i = 0
//     const canDrink = []
//
//     const interval = setInterval(() => {
//         if (people[i]) {
//            if(people[i].age >= 10) {
//                canDrink.push(people[i].name)
//            }
//            display.textContent = canDrink.join(' ')
//            i++
//         } else {
//             clearInterval(interval)
//             btn.disabled = false
//         }
//      }, 1000)
// })

rxjsBtn.addEventListener('click', () => {
  rxjsBtn.disabled  = true

  interval(1000)
      .pipe(
        take(people.length),
        filter(v => people[v].age >= 10),
        map(v => people[v].name),
        scan((acc, v) => acc.concat(v), [])
      )
      .subscribe(res => {
          display.textContent = res.join(' ')
      }, null, () => rxjsBtn.disabled = false)
})

