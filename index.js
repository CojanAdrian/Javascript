// // alert('Hello '); 
// // // alert('World');
// // // alert(1 + 
// //     // 3 + 
// //     // 2);
// // // alert('Error'); //comments
// //  //Acesta este un comentariu

// //  /*
// // fjkafl;asjfh;aksfj
// // dsadadasd
// // fadsgf
// // */

// // alert('Hello Javascript');
// // let message;
// // message = 'hello';
// // alert(message);




// let a = 'vlad bravo';
// a = 'vlad loh'; 
// alert(a);

// cosnt b = 'vlad bravo';
// b = 'vlad loh'; 
// alert(b);

// let userName = 'Adrian';
// let admin = userName;
// alert(userName);
// alert(admin);


// let message = 'Hello';
// alert(message);

// let result = prompt('how old are u?', );
// let con = confirm(`are u ${result} fr? `)
// alert(`I am ${result} yo`);
// alert(con);


// let counter = 2;
// counter++;
// alert(counter);

//  let counter = 1;
//  let a = --counter++;
//  alert(counter);
//  alert(a);

// alert(++5);

// let a;
// alert((a = 1 + 2) , 3 + 4);

// let year = prompt('ce an?');
// if (year == 2015) {
//     alert('drept');
// } else {
//     alert('gresit');
// } 




// let an = prompt('Care este "numele" oficial pentru JavaScript?');
// if (an === 'ECMAScript') {
//     alert('Corect!');                                                   //tema pe acasa 1
// } else {
//     alert('Nu știi? ECMAScript!');
// }


// let nmr = prompt('numar');
// if (+nmr > 0) {
//     alert(1);
// } else if (+nmr < 0) {                             tema pe acasa 2  
//     alert(-1);
// } else {
//     alert(0);
// }

// let a = +prompt('a = ');
// let b = +prompt('b = ');
// let result = (a + b < 4) ? 'Putin' : 'Mult';         tema pe acasa 3

// alert(result);

// let login = prompt('login');

// let message = (login == 'Angajat') ? 'Buna' :
// (login == 'Director') ? 'Buna ziua' :                     tema pe acasa 4
// (login == '') ? 'Fără autentificare' : '' ;

// alert(message);


  
//  let i = 0;
// // let result = i++;
// // alert(i);
// // alert(result);
// while (i) {
//     // i++;
//     alert(i);
//     i--;
    
// }

// while(i) alert(--i);

// do {
//     alert(i);
//     i++;
// } while (i>3);

// for (;;) {
//     alert(i++);
//     break;
// }
// alert(i);

//  let sum = 0;

// for (;;) {
//     let value = +prompt('Introduceti un numar', '');
//     if (!value ) {
//         break;
//     }
//     sum += value 
// }

 

// let value = +prompt('Introduceti un numar', '');

// for (let suma = 0; ; suma += value) {
//     if (value === 0 ) {
//         break;
//     }

// }
// alert('suma ' + suma);

// let value = 1;

// for (; value > 0;) {
//      value = +prompt('Introduceti un numar', '');
//     if (!value ) {
//         break;
//     }
//     sum += value 
// }

// alert('sum ' + sum);  

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         continue
//     } 
//     alert(i);
// }

// if (1 > 2) {
//     break
// }

// for (let i = 0; i < 10; i++) {
//     alert(i);
//     for (let j = 0; j < 10; j++) {
//         alert(j);
        
//     }
//     break
// }

// for (;;) {
//     let value = +prompt('Introduceti un numar', '');
//     if (!value ) {
//         break;
//     }
//     sum += value 
// }

// let i = 3;

// while (i) {
//   alert( i-- );
// }


// nu i bun
//  while (true) {
//     let userAge = prompt('cati ani ai?');
//     if(!userAge) {
//         continue
//     } 
//     alert(userAge);
//     break
//  } 
 

// while(true) {
//     let userAge = prompt('varsta?');
//     if (userAge) {
//         break
//     }
// }
// alert(userAge);

// for (let numar = 0; numar<=10; numar++) {
//     if(numar % 2 == 0){
//         alert(numar);
//     }
// }


// let a = 2 + 2;
//  switch (a) {
//     case 3:
//         alert('insuficient');
//         break;
//     case 4:
//         alert('Exact');
//         break;
//     default:
//         alert('Nu exista asa valori');
//  }



// for(;;){
//     let numar = +prompt('Scrie un numar de la 1 la 9');
//     switch(numar){
//      case 1:
//         alert(3);
//         break;
//      case 2:
//         alert(1);
//         break;
//      case 3:
//         alert(5);
//         break;
//     case 5:
//         alert(4);
//         break;
//     case 6:
//         alert(8);
//         break;
//     case 7:
//         alert(9);
//         break;
//     case 8:
//     case 4:
//         alert(2);
//         break;
//     case 9:
//         alert(6);
//         break;
//     default:
//         break;
//     }
//     if (numar == 9) {
//         break;
//     }
// }

// const number = +prompt('Vă rugăm să introduceți un număr între 0 și 3', '');
//   switch(number) {
//     case 0:
//         alert('Ai introdus numărul 0');
//         break;
//     case 1:
//         alert('Ai introdus numărul 1');
//         break;
//     case 2:
//     case 3:
//         alert('Ai introdus numărul 2, sau poate 3');
//         break;
//   }
 
// let userName = 'John';

// function showMessage(from, text){
//     let userName = 'jesse';
//     let message = 'Hello World ' + userName;
//     alert(from + ':' + text);
// }

// showMessage('john', 'hello');

// alert(userName);

// let a = +prompt('a=');
// let b = +prompt('b=');

// function min(a,b) {
//     if (a<b){
//         return a;                        //TEMA PE ACASA 1
//     } 
//     return b;
// }

// alert(min(1, 1));




// function getUserName() {
//     return prompt('Nume Prenume');
// }

// function noName() {
//     alert('asta este');
// }

// function checkIfConfirm() {
//     let confirmare = confirm('Permiteti salvarea numelui?'); 
//     return confirmare;
// }

// let isConfirmed = checkIfConfirm();
// if (isConfirmed) {
//     alert(getUserName());
// } else {
//     noName();
// }



// function checkAge(age) {
//     age = +prompt('varsta = ');       
//     return (age > 18) ? true : false;
// }

// checkAge();


// function checkAge(age) {
//     age = +prompt('age');
//     if (age > 18) {
//       return true;
//     } 
//       return false;                           // TEMA PE ACASA 4   
//     
//   }

// alert(checkAge());


// function pow(x, n) {
//     return x**n;                    //TEMA PE ACASA 5
// }

// alert(pow(3, 3));

//   SAU

// function pow(x,n){
//     let result = 1;
//     // for(let i=n;i>0;i--)
//     while(n)
//     {
//         result *= x; // result *= x <=> result = result * x
//         n--

//     }
//     return result
// }


// showUsername('John');

// function showUsername(userName) {
//     // let userName = prompt('Nume Prenume');
//     alert(userName);
// }





// let showUsername = function(userName) {
//     // nume = prompt('Nume Prenume');
//     alert(userName);
// } 

// showUsername('John');

// function conf() {
//     alert('confirm');
// }

// function pleaseConfirm() {
//     alert('Please confirm');
// }

// function confirmare(message, conf, pleaseConfirm) {
//     if (confirm(message)) {
//         return conf();
//     }
//     pleaseConfirm();
// }
// confirmare('Aveti 18', conf, pleaseConfirm);



// function show(x) {
//     return () => x + 1;
// }
// alert(show(2)());




// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  




// let ask = (question, yes, no) => confirm(question) ? yes() : no();



// ask(
//     "Ești de acord?",
//     () => alert("Ați fost de acord."), 
//     () => alert("Ați anulat execuția.")
//   );


// function HELLO() {
//   alert("Hello");
// }

// HELLO();

// const a = 0;
// a = 1;