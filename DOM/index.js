//  const title= document.getElementById('main');//get elements by id
//  console.log(title);

//  const list= document.getElementsByClassName('movie');
//  console.log(list);


// styling using javascript
// const box=document.querySelector('#main');
// box.style.color='red';
// console.log(box);

// add event listener
// const buttontwo=document.querySelector('.butt-2'); 
// function alertbtn(){
//     alert('button clicked');

// }
// buttontwo.addEventListener('click',alertbtn);

// mouseover
// const buttonthree=document.querySelector('.box3');
// function changeColor(){
//   buttonthree.style.backgroundColor='red';
// };
// buttonthree.addEventListener('mouseover',changeColor);

// reveling and hiding elements

// const revealBtn=document.querySelector('.reveal ');
// const hiddenElement=document.querySelector('.hidden');
// function revealContent(){
// if(hiddenElement.classList.contains('reveal'){
//     hiddenElement.classList.remove('reveal');}
//     else {
//      hiddenElement.classList.add('reveal');   
//     }
// }
// revealBtn.addEventListener('click',revealContent);


// const button=document.querySelector('.button');
// // button.classList.add('enabled');
// // button.classList.remove('enabled');
// button.classList.toggle('enabled');

// const grandParent=document.getElementsByClassName('grand-parent');
// const parent=document.querySelector('.parent');
// const child=document.querySelector('.child');


// function grandParentClick(){
//     alert('grand parent clicked');
// }
// grandParent.addEventListener('click',grandParentClick);



                // declare a function   // you can also use hoisting where you can call the function before declaring it
// function greetings(){
//     console.log('hello');
// }
// greetings();

// sum of two numbers
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,3));

// function sum(a,b){
//    console.log(a+b);
// }
// sum(2,3);

            //assigning a function to the variable

// const greetings=function(){
//     console.log('hello');
// }
// greetings();

            // declare using arrow keyword


// const areaOfCircle=(r,pi)=>{
//     let area=pi*r**2;
//     return area;
// }   
// console.log(areaOfCircle(10,3.14));



           //call back function

// const myFunction=(callback)=>{
//     let value=50;
//     callback(value);// callback=value
// }
// myFunction((value)=>{
//     console.log(value);
// });

       // //foreach loop
// let people=['john','peter','susan','jane'];
// people.forEach(function(person){
//     console.log(person);
// });


// people.forEach((person) => {
//     console.log(person);
    
// })

      //       objects
 
// const user = {  
//     name:'blaise',
//     age:25,
//     movies:['movie1','movie2','movie3'],
//     displayMovies: function(){
//         console.log(this.movies);
        // this.movies.forEach((movie)=>{
        //     console.log(movie);
        // });
// }
// };
//     // console.log(user);
//     // console.log(user.name);
//     user.age=26;
//     // console.log(user.age);
    // user['name']='john';
    // user.displayMovies();
    // user.displayMovies();




    //math in objects

// const number= Math.random();
// console.log(Math.round(number*100));
// // console.log(Math.round(number));
// // console.log(Math.floor(number));
// // console.log(Math.ceil(number));
// // console.log(Math.trunc(number));

// const para= document.querySelector('p');
// para.innerText +='new text inserted';
// para.innerHTML += '<li>new inner html</li>';
// console.log(para);


// const body = document.querySelector('body');
// body.innerHTML += `<li>this is your time<i>`;
// const para = document.querySelector('p');

// const para= document.querySelector('p');
// para.innerText='this is a new text';
// console.log(para);

// para.innerHTML='<h2> this is a new header</h2>';
// para.innerHTML+='<h2> this is a new header</h2>';


                //  linking in the div in html
// let students = ['kelly','montana','beza','obi'];
// console.log(students.length);
// const div= document.querySelector('div');
// students.forEach(student=>{
//     div.innerHTML += `<li>${student}</li>`;
// })


        //    set & get attributes
// const link=document.querySelector('a');
// link.getAttribute('href');
// link.setAttribute('href','https://www.facebook.com');

// add, remove and toggle classes


        // add
// console.log(link.classList);
// // link.classList.add('error');        
// // link.classList.remove('error');          
// link.classList.toggle('error');                  
// link.classList.toggle('error'); 


// const list=document.querySelectorAll('li');
// list.forEach(lis=> {
//     if(lis.textContent.includes('success')){
//         lis.classList.toggle('success')
//     }
//     else{
//         lis.classList.toggle('error')
//     }
// })



const button=document.querySelector('button');
const list=document.querySelectorAll('li');
function alerting(){
  alert('')
}
button.addEventListener('click', alerting);

    // list.forEach(li=>{
    //     li.addEventListener('click', e=>{
    //     li.classList.toggle('success');

    // })
    // })
