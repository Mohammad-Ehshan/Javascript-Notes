// let name = Symbol("Ehshan!");
// let bigint = BigInt("123");
// let ispass = true;
// console.log('hello world how are you my name is ehshan i am fine');
// console.log(name);
// const profile = {
//   name: 'shradhakhapra',
//   posts: 195,
//   followers:569000,
//   following:4,
//   username:'@shradhakhapra',
//   isfollow:true,
// }
// console.log(profile);
// let marks = prompt("Enter your marks");
// let grade;
// if(100 >= marks && marks >= 90){
// console.log(marks,"A");
// }
// else if(89 >= marks && marks >= 70) {
//   console.log(marks,"B");
// }
// else if(69 >= marks && marks >= 60) {
//   console.log(marks,"C");
// }
// else if(59 >= marks && marks >= 50) {
//   console.log(marks,"D");
// }
// else if(49 >= marks && marks >= 0) {
//   console.log(marks,"F");
// }
// for (let count = 1; count <= 100000 ; count++){
//   console.log("EHSHAN IS GREAT");
// }
// let str = "Ehshan The Great";
// let size_of_str = 0;
// for(let i of str){
//   // console.log("i:",i);
//   size_of_str++;
// }
// console.log("size of string =",size_of_str);
// for(let categaries in student) {
//   console.log("keys = ",categaries , "values = ", student[categaries]);
// }
// console.log(student["Name"])
// let gamenumber = 16;
// let usernumber = prompt("Guess the game number:");
// while(gamenumber != usernumber){
//   usernumber = prompt("OOPS! Wrong Number, Try Again");
// }
// console.log("Congratulations! You guessed correct, the number is",gamenumber);
// }
// let name = "EHSHAN THE GREAT";
// console.log(name.length);
// console.log(name[12]);
// let student ={
//   Name : "Ehshan The Great",
//   College : "FMS",
//   year : 1,
//   CGPA : 9.0,
//   ispass : true,
// }
// console.log("name of student is",student.Name,"He study in" ,student.College, "has",student.CGPA,"CGPA");
// console.log(`name of student is ${student.Name} who study in ${student.College} ${student.year} who has ${student.CGPA} CGPA and is officially pass ${student.ispass}`);
// let name = prompt("Enter your full name:");
// let output = "@" + name + name.length;
// console.log(output);
// let marks = [78,82,90,52,22,10,18,48];
// let sum = 0;
// for(let value of marks){
//   sum = sum + value;
// }
// console.log(sum/marks.length);
// let prices = [550,100,900,1000,640];
// let i =0;
// for (let value of prices){
//   let offers =value*0.10;
//   prices[i] = prices[i] - offers;
//   console.log(prices[i]);
//   i++;
// }
//  let prices = [550,100,900,1000,640];
// for (let i = 0;i < prices.length;i++){
//  prices[i] = prices[i] - (prices[i]*0.10);
// // console.log("discounted prices=",prices[i]);
// }
// console.log(prices);
// let name ="Ehshan The Great";
// let college = " Study in FMS, Delhi"
// let new_string = name.concat(college);
// console.log(college.replace("FMS","IIM"));
// let language= ["java","python","C++","javascript"];
// language.push("C","Golang");
// console.log(language);
// language.pop();
// console.log(language);
// console.log(language.toString());
// console.log(language.concat(prices));
// console.log(language.unshift("C","Golang"));
// console.log(language);
// console.log(language.shift());
// console.log(language.slice(1,3));
// let arr = [1,2,3,4,5,6,7];
// arr.splice(1,4);
// console.log(arr);

// QUESTION

// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log(companies);
// companies.splice(0,1);
// console.log(companies);
// companies.splice(1,1,"OLA");
// console.log(companies);
// companies.push("Amazon");
// console.log(companies);

// FUNCTION

// function calculate(a,b,c){
//   console.log("Sum=",a + b);
// }
// calculate(10253,10247);
// calculate(40,59);
// calculate(60,100);
// calculate(50,10);
// calculate(83,20);
// calculate(30,10000000);
// const arrowfunction = (a, b) => {
//  return(a * b);
// };
// console.function countvowels(strg) {
//   let count = 0;
//   for (let char of strg) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u" ||
//       char === "A" ||
//       char === "U" ||
//       char === "E" ||
//       char === "I" ||
//       char === "O"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countvowels("Ehshan The GrEat");log(arrowfunction);
//

// let arrowfunction= (str) =>{
//   let count =0;
//   for(let char of str){
//     if(char==="a"||
//     char==="e"||
//     char==="i"||
//     char==="o"||
//     char==="u"||
//     char==="A"||
//     char==="E"||
//     char==="I"||
//     char==="O"||
//     char==="U"
//     )
//     {
//       count++;
//     }
//   }
//   return(count);
// }
// console.log(arrowfunction("hello"));
// let marks=[85,95,83,,9,0];
// console.log(marks);
// marks[3]="hello";
// console.log(marks);

// let price =[250,645,300,900,50];
// for(let mrp of price){
//   mrp = mrp - (mrp/10);
//   console.log(mrp)
// }
// let price =[250,645,300,900,50];
// for(let i =0;i<price.length;i++){
//   offer=price[i]/10;
//   price[i]=price[i]-offer;
// }
// console.log(price);
// let price=[2,20,20,10,5,6];
// console.log(price);
// price.forEach((value) =>{
//   console.log(value*value);
// })
// let calcsquare = value => {
//   console.log(value*value);
// }
// price.forEach(calcsquare);
// let newarray = price.map((val)=> {
//   console.log(val*8);
// })
// console.log(newarray);
// let evenarray = price.filter((val) => {
//   return val >= 10;
// });
// console.log(evenarray);
// let greaternumber = price.reduce((pre,cur) => {
//   return pre > cur ? pre : cur;
// })
// console.log(greaternumber);
// let add = price.reduce((pre,cur) => {
//   return pre+cur;
// })
// console.log(add);
// let avg = add/price.length;
// console.log(avg);
// let marks = [75,80,90.5,90,70,63,72,95,97,50,42];
// let toppers = marks.filter((mark) =>{
//   return mark > 90;
// })
// console.log(marks);
// console.log(toppers)
// let n = prompt("Enter a number:");
// let arr=[];
// for(let i = 1;i<=n;i++){
//   arr[i-1]=i;
// }
// console.log(arr);
// let sum = arr.reduce((pre,cur)=>{
// return pre+cur;
// })
// console.log("sum of arr is" , sum);
// let factorial = arr.reduce((pre,cur)=>{
//   return pre*cur;
// })
// console.log("factorials of arr is", factorial);

// DOCUMENT OBJECT MODEL

// console.dir(document.body);
// let heading = document.getElementById("heading");
// console.dir(heading);
// console.log(heading);
// let paragraph = document.getElementsByClassName("paragraph");
// console.dir(paragraph);
// console.log(paragraph);
// let paragraph = document.getElementsByTagName("div");
// console.dir(paragraph);
// let firele = document.querySelector("div");
// console.dir(firele);
// let firele = document.querySelector("#div1");
// console.log(firele);
// let allele = document.querySelectorAll(".paragraph");
// console.dir(allele);
// console.log(firele.tagName);
// let firele = document.querySelector("#div4");
// console.dir(firele.innerText);
// let heading = document.querySelector("h2");
// console.log(heading);
// heading.innerText = heading.innerText + "from apna college students";
// let heading = document.querySelectorAll(".box");
// console.dir(heading);
// heading[0].innerText = "this is my 1st div";
// heading[1].innerText = "this is my 2nd div";
// heading[2].innerText = "this is my 3rd div";
// let i = 1;
// for(div of heading){
//   div.innerText = `This is my ${i} div`;
//   i++;
// let div = document.querySelector("div");
// div.setAttribute("class","boxer");
// console.log(div.getAttribute("class"));
// div.style.backgroundColor = "red";
// let newbtn = document.createElement("button");
// newbtn.innerText = "Click Here!";
// let div = document.querySelector(".hello2");
// div.after(newbtn);
// let newheading = document.createElement("h1");
// newheading.innerHTML = `<i>Hello this is created with javascript</i>`;
// newheading.style.fontSize = "50px";
// document.querySelector("body").prepend(newheading);
// let seconddiv = document.querySelector("#seconddiv");
// seconddiv.remove();
//  let newbutn = document.createElement("button");
//  newbutn.innerText= "Click Here!";
//  newbutn.style.backgroundColor = "red";
//  newbutn.style.color = "white";
//  document.querySelector("body").prepend(newbutn);
// let para = document.querySelector(".paragraph");
// para.classList.add("newclass");
// para.classList.remove("paragraph");

// EVENT

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//   console.log("Button was clicked");
//  let clicked = 10;
//  clicked++;
//  console.log(clicked);
// };
// let box =document.querySelector(".paragraph");
// box.onmouseover =() => {
//   console.log("You are in a div");
// }
// btn1.onclick = (e) => {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX,e.clientY);
// };
// let box =document.querySelector(".paragraph");
// box.onmouseover =(e) => {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX,e.clientY);
// }
// box.addEventListener("click",(e) => {
// console.log("You are inside div1");
// })

// let div2 = (e) => {
//   console.log("You are inside div2");
// }
// box.addEventListener("click",div2);
// box.addEventListener("click", (e) =>{
//   console.log("You are inside div3");
// })
// box.addEventListener("click", (e) =>{
//   console.log("You are inside div4");
// })
// box.removeEventListener("click",div2);

// button for dark and light mode

// let currmode = "light";
// let body = document.querySelector("body");
// btn1.addEventListener("click",() => {
//   if(currmode === "light"){
//   currmode = "dark";
// body.classList.add("dark");
// body.classList.remove("light");
//   }
//   else {
//     currmode = "light";
//     body.classList.remove("dark");
//     body.classList.add("light");
//   }
//   console.log(currmode);
// })

// OBJECT

// const object = {
//   name:"ehshan",
//   year:"1st",
//   score(percentile){
//     percentile = 94.5;
//     console.log(this.name,"=",percentile);
//   }
// }
// const marks = {
//   college(){
//     console.log("he is a student of meri college");
//   }
// }
// object.__proto__ = marks;

// CLASS

// class laptop{
//   constructor(brand,purpose){
//   console.log("constructor is defined");
//   this.brand = brand;
//   this.work = purpose;
//   }
//   graphicCard(){
//   console.log("rtx3050");
//   }
//   proccessor(){
//     console.log("12500h");
//   }
//   displaySize(){
//     console.log("15inch and above");
//   }
//   display(){
//     console.log("full hd display");
//   }
// brand(brand){
//   this.brand = brand
// }
// }

// let hSeriesLaptop = new laptop("asus","office");
// console.log(hSeriesLaptop);
// let gamingLaptop= new laptop("acer","gaming");
// console.log(gamingLaptop);

// CLASS INHERITANCE((SUPER FUNCTION) CONCEPT)

// class person{
//   constructor(specie){
//     this.species = "home sapiens";
//     this.specie = specie;
//     console.log(specie);
//   }
//   eat(){
//     console.log("He can eat");
//   }
//   think(){
//     console.log("He can think");
//   }
//   react(){
//     console.log("He can react");
//   }
//   communicate(){
//     console.log("He can communicate")
//   }
// }
// class student extends person{
//   constructor(school,specie){
//     console.log("Enter student constructor");
//     super(specie);
//     this.schools = school;
//     console.log(school);
//     console.log("Exit student constructor");
//   }
// study(){
//   super.think();
//   super.communicate();
//   console.log("They should study regularyly");
// }
// play(){
//   console.log("They should play regularly after studying");
// }
// homework(){
//   console.log("They should do their homework first before playing");
// }
// respect(){
//   console.log("They should repect everyone");
// }
// }
// let ehshan = new student("infantJesusSchool","human");

// QUESTION OF CLASS

// let data = "Secret Information";
// class user{
//   constructor(name,email){
//     this.name = name;
//     this.email = email;
//   }
//   viewData(){
//     console.log("view data",data);
//   }
// }
// let student1 = new user("ehshan","ash@gamil.com");
// let student2 = new user("aarwin","aarwin@gmail.com");

// class admin extends user{
//   constructor(name,email,post){
//    super(name,email);
//    this.post = post;
//   }
//   editData(){
//     console.log("You can edit data in this website");
//     data = "Secret Information is edited";
//   }
// }
// let teacher1 = new admin("sandeep","sandeep@gmail.com","coordinator");

// ERROR HANDLING

// let a =5;
// let b =5;
// let c =5;
// let d =5;
// console.log(a+b);
// console.log(b+c);
// console.log(c+d);
// console.log(a-b);
// try{
//   console.log(a+v);
// }catch(err){
//   console.log(err);
// }
// console.log(a*b);
// console.log(a-d);
// console.log(a/b);

// ASYNC AWAIT

// function printHello(){
//   console.log("hello after 4 second");
// }
// setTimeout((printHello),4000);
// setTimeout(()=> {
// console.log("hello after 2 second")
// },2000);
// console.log("first");
// console.log("second");
// console.log("third");
// console.log("fourth");

// CALLBACK FUNCTION

// function add(a,b){
// console.log(`sum of ${a} and ${b} is ${a+b}`)
// }
// function add2(a,b,sumcallback){
//   sumcallback(a,b);
// }
// add2(1,2,(a,b)=>{
//   console.log(`sum of ${a} and ${b} is ${a+b}`)
// });

// CALLBACK HELL

// function datafetch(dataId,nextDataId){
// setTimeout(() =>{
//   console.log("DATA = This is the data of Id",dataId);
//   if(nextDataId){
//     nextDataId();
//   }
// },2700)
// }
// datafetch(1,() =>{
//   console.log("Fetching data for id 2.........");
//   datafetch(2,()=>{
//     console.log("Fetching data for id 3.........");
//     datafetch(3,()=>{
//       console.log("fetching data for id 4........");
//       datafetch(4);
//     })
//   })
// })

// PROMISES

// let promise = new Promise((resolve,reject) => {
//   console.log("I am a promise");
//   resolve("Work has been done");
// });

// function dataFetch(dataId){
// return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     // console.log("DATA",dataId);
//     // resolve("success");
//     reject("ERROR!");
//   },5000)
// })
// }

// let getpromise = () =>{
//   return new Promise((resolve,reject)=>{
//   console.log("Work is been processed....");
//   reject("Error!");
//   })
// }

// let promise = getpromise();
// promise.then((res)=>{
//   console.log("Your work has been done",res);
// })
// promise.catch((err)=>{
//   console.log("Network Problem",err);
// })

// function api1(){
// return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("DATA 1");
//     resolve("Success");
//   },4000)
// })
// }
// function api2() {
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("DATA2");
//       resolve("Success");
//     },4000)
//   })
// }
// console.log("Fetching data for 1.......");
// api1().then((res)=>{
//   console.log(res);
//   console.log("Fetching data for 2.......");
//   api2().then((res)=>{
//     console.log(res);
//   })
// })

// PROMISE CHAIN TO OVERCOME CALLBACK HELL

// let userId;
// function fun(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("DATA OF USER", userId);
//       resolve("success!");
//     }, 2750);
//   });
// }
// console.log("Fetching data for user id 1.......");
// fun(1).then((res) => {
//   console.log("Fetching data for user id 2.......");
//   return fun(2);
// })
//  .then((res)=>{
//   console.log("Fetching data for user id 3.......");
//   return fun(3);
// })
// .then((res)=>{
//   console.log("Fetching data for user id 4........");
//   return fun(4);
// })
// .then((res)=>{
//   console.log("All result executed succesfully!");
// })

// ASYNC AWAIT IS THE BEST METHOD TO OVERCOME CALLBACK HELL AND PROMISES BIG CODE
// WE HAVE EXCEUTED USING IIFE(IMMEDIATELY INVOKED FUNCTION EXPRESSION)
// function fetchData(dataId){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     console.log("DATA of ",dataId);
//     resolve("Success");
//   },2000)
//   })
// }
// (async function (){
//   console.log("Fetching data 1.......");
//   await fetchData(1);
//   console.log("Fetching data 2.......");
//   await fetchData(2);
//   console.log("Fetching data 3.......");
//   await fetchData(3);
//   console.log("Fetching data 4.......");
//   await fetchData(4);
//   console.log("Fetching data 5.......");
//   await fetchData(5);
//   console.log("All data executed succesfully!");
// })();

// API 
// const fact =document.querySelector("#fact");
const butn = document.querySelector("#butn");
butn.addEventListener('mouseenter',function(event){
  console.log("mouse has entered");
})
// let url = "https://cat-fact.herokuapp.com/facts";

// const host = async() => {
//   console.log("Getting facts........");
//   let response = await fetch(url);
//   // console.log(response);
//   let data = await response.json();
//   fact.innerText = data[2].text;
//   console.log(response);
// };

// function host(){
//   fetch(url).then((response)=>{
//     return response.json();
//   }).then((data)=>{
//     console.log(data);
//     fact.innerText = data[4].text;
//   })
// }  
//   butn.addEventListener("click",host );