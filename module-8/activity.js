function inc(a) {
    return new Promise((resolve, reject) => {

     

      const check = true;
      // Succeed half of the time.
      if (true) {
        const b=a+1
        resolve(b +" SUCCESS")
      } else {
        reject("FAILURE")
      }
    })
  }
  

 console.log("inc(5) =", inc(5));


 function sum(a,b) {
    return new Promise((resolve, reject) => {
      

      const check = true;
    
      if (true) {
            resolve(a+b + " SUCCESS")
            console.log("Sum is done.");
      } else {
        reject("FAILURE")
      }
    })
  }

  console.log("sum(1, 3) =", sum(1, 3));
  

  

  function max(a,b) {
    return new Promise((resolve, reject) => {
      console.log("Max is done.");

      const check = true;
    
      if (true) {
            resolve((a > b ? a : b),(a,b) + " SUCCESS")
      } else {
        reject("FAILURE")
      }
    })
  }
  console.log("max(8, 6) =", max(8, 6));


  function avg(a,b){

    return new Promise((resolve, reject) => {
  
        const check = true;

        if (check==true) {
          
          console.log("Avg:"+ (a+b)/2);
                resolve("Sucess")


        } else {
          reject("FAILURE")
        }
      })
  }
console.log("avg(8,6)",avg(8,6));
 
 


  function obj(name){

    return new Promise((resolve, reject) => {
       
        const check = true;
       
        if (check==true) {
       const k ={
          name: "Marcus Aurelius",
          split(sep = " ") {
            return this.name.split(name);
          }
        };
               
        } else {
          reject("FAILURE")
        }
      })
    }

    console.log("Marcus Aurelius",obj())

    class Person {
      constructor(name) {
          this.name = name;
      }
  
      static of(name) {
          return new Person(name);
      }
  
      split(sep = " ") {

        const check = true;
if(true){return new Promise((resolve) => {
  resolve(this.name.split(sep));
});}
else {
  reject("Failure")
}

          
      }
  }
        
  const person = Person.of("Marcus Aurelius");

//  constructor(name) {
//  this.name = name;
//}





// console.log("person.split() =", person.split());
person.split()
  .then((value) => console.log("person.split() =", value))
  .catch((error) => console.error("Error:", error));