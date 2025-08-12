const reviews = [
    {
        id: 1,
        name: 'Estella Sanchez',
        img:'#',
        text: 'I am glad to have been able to work with skylee inside of this program. She is excellent when it comes down to computer and adaptability skills. When I need help, I know that I can rely on her to try to assist me even with the most complicated tasks. They are truly a valuable friend and worker to me.',
    },


        {
        id: 2,
        name: 'Catalina Viera',
        img:'#',
        text:'Ive known skylee for a long time and she has always been a creative person. She encoruaged me to try out art and now it is something that I live for everyday. Thanks to sky, I finally found something that I am truly pasisonate. I hope that in the future she can continue to help me grow and eventually I can turn art into my career. ',
    },
];



const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;
window.addEventListener('DOMContentLoaded', function(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});


function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length -1){
        currentitem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
});


// console.log("Hello World");

// let chicken = 123;
// console.log(chicken);
// console.log(typeof chicken)

// console.log(10 + " eggs");
// console.log(10 + 8 + " eggs");
// console.log("eggs "+ 10 + 8)

// console.log(8<3)

// //Both Conditions Need to be true 
// console.log(7>3)&&(10>8);

// //Only one need conidition must be true 
// console.log(10>3)||(5>10);

// //If the statement is logical or not
// console.log(!5>3);

// const hour = new Date().getHours();
// let greeting = "";

// if (hour>12){
//     greeting= "good morning!☀️";
// }else if (hour<18){
//     gretting="good afternoon!☀️";
// }else{
//     gretting="good evening!☀️";
// }

// document.getElementById("creating").innertext= greeting;