/*
  Problem: Assignment Life (Closures)
  
  Real-life scenario: On Programming Hero, every student gets 3 LIVES. Each time you submit an assignment LATE for 60 marks, you lose 1 life.
  When lives hit 0, you can't submit late assignment for 60 marks. You
  want ONE function that can create a fresh, independent life-counter.

  createLifeCounter() — returns a function. Every time you call that
  returned function (on a late submission), it decreases a PRIVATE
  lives count by 1 and returns the remaining lives. There is NO global
  variable storing lives — it lives only inside the closure.

  Input:
    const rahimLives = createLifeCounter();
    rahimLives(); // late submission
    rahimLives(); // late submission

  Output:
    2
    1

*/

const createLifeCounter=()=>{
    let life = 3;
    return ()=>{
        return life === 0 ? 0 : --life;
    }
}

let rahimLives = createLifeCounter();
console.log(rahimLives());
console.log(rahimLives());
