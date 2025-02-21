// الدرس الخامس : طباعة البيانات 
// alert('hi, welcome to my website');
// // هذا الكود للطباعة في نافذة يعرض في أعلى صفحة الويب
// console.log('welcome to dr.huzaifa website, from the console');
// // هذا الكود للطباعة في الكونسول
// document.write('welome to my website')
// // هذا الكود للطباعة مباشرة في صفحة الويب
// var heading = document.getElementById('title');
// heading.innerHTML='welcome to hsoub academy';
// //html في ال id للطباعة من خلال ال document.getElementById هذا الرمز 


// Operators الدرس السادس : المعاملات 
// let firstNumber = 46;
// let secondNumber = 10;
// let sum = firstNumber ** secondNumber;
// console.log('result is :' + sum);
// let number = 20;
// // Incrementing Operator 
// number++;
// console.log(number);
// // Decrementing Operator
// number--;
// console.log(number);
// let x = 5,
//     y = 10;
// let mi = x == y;
// console.log(mi);
// // العلامة || تعني أو ، && تعني و  
// let result = 5 < 7 && 1 > 6;
// console.log(result);


// String Handling الدرس السابع : التعامل مع النصوص 
// let academy = "hsoub";
// // Get character by index
// console.log(academy.charAt(1)); // prints 's'
// console.log(academy[4]); //prints 'b'
// // Get index of text 
// console.log(academy.indexOf("oub")); // prints '2'
// // Get string length
// console.log(academy.length);
// //Extract a part of string 
// console.log(academy.substring(1, 4)); // prints 'sou'
// console.log(academy.slice(1, 4)); // prints 'sou'
// console.log(academy.substr(1, 3)); //prints 'sou'
// // Replace string 
// console.log(academy.replace('hsoub', 'hsoub academy')); // prints 'hsoub academy'
// //Upper & Lower case
// console.log(academy.toUpperCase()); // prints 'HSOUB'
// console.log(academy.toLowerCase()); // prints 'hsoub'


// Date and Time handling الدرس الثامن : التعامل مع الوقت والتاريخ 
// let currentDate = new Date();
// console.log(currentDate);
// let year = currentDate.getFullYear();
// let month = currentDate.getMonth()+1;
// let day = currentDate.getDate();
// let hour = currentDate.getHours();
// let minutes = currentDate.getMinutes();
// let second = currentDate.getSeconds();
// let fullDateTime = year + '/' + month + '/' + day +'-' + hour + ':' + minutes + ':' + second;
// console.log(fullDateTime);


// Conditions الدرس التاسع : البنية الشرطية 
// let result = 13;
// if (result >= 10){
//     console.log('You succeed');
// }else{
//     console.log('You failed')
// }
// let x = 20,
//     y = 10;
// let operator = '/';
// switch(operator){
//     case '+':
//         console.log(x + y);
//         break;
//     case '-':
//         console.log(x-y);
//         break;
//     case '*':
//         console.log(x*y);
//         break;
//     case '/':
//         console.log(x / y);
//         break;
// }


// الدرس العاشر : البنية التكرارية
// for(i = 0 ; i<10 ; i++ ) {
//     console.log(i);
// }
// let counter = 10 ;
// while (counter > 0){
//     console.log(counter);
//     counter--;
// }
// let conter = 0;
// do {
//     console.log(conter);
//     conter++;
// } while (conter < 10);


// الدرس الحادي عشر : الدوال 
// function sayHello(){
//     let userName = document.getElementById('txtName').value;
//     alert('welcome, '+ userName);
// }
// function sum(x,y){
//     return x+y;
// }
// let firstNumber = 78,
//     secondNumber = 45;
// alert(sum(firstNumber,secondNumber));


// DOM (Document object Model) الدرس الثاني عشر : شجرة 
// let heading = document.getElementById('title');
// let paragraph = document.getElementsByClassName('content');
// let allparagraphs = document.getElementsByTagName('p');
// console.log(heading);
// heading .innerHTML = 'this is a title';
// console.log(paragraph);
// paragraph[0].innerHTML = 'this is the paragraph content.';
// console.log(allparagraphs);
// allparagraphs[1].innerHTML = 'this is the second paragraph.';
// const newParagraph = document.createElement("p");
// newParagraph.innerHTML = "This the content of the newly created paragraph."
// let content = document.getElementById('content');
// content.appendChild(newParagraph);


// Array الدرس الثالث عشر : المصفوفات
// let name = ['khalid', 'ahmad', 'abdullatif'];
// let number = [12, 412, 34, 23];
// console.log(name[1]);
// console.log(number.length);
// name.sort();
// console.log(name)
// for(i=0; i<name.length ; i++){
//     console.log(name[i])
// }


// Objects الدرس الرابع عشر : الكائنات
// let person = {
//     name: 'ahmad',
//     age : 32,
//     address: 'bangladesh , sylhet',
//     isMarrid: true
// }
// console.log(person.address);
// console.log(person);


// Sconpe الدرس الخامس عشر : نطاق الوصول
// var و let وتم توضيح الفرق بين global و local شُرِح فيها المجالين الخاص والعام 


// Events handling الدرس السادس عشر : التعامل مع الأحداث 
// i need a rivew


// الدرس السابع عشر والأخير : التحقق من صحة البيانات
// htmlهذا كود 
{/* <h1>Subscription Form</h1>
    <form onsubmit="return validate();">
        <table>
            <tr>
                <td>
                    <label for="age">Age:</label>
                </td>
                <td>
                    <input type="text" id="age">
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="checkbox" id="agree">
                    <label for="agree">I agree to the terms and conditions</label>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="submit" value="Register">
                </td>
                <td>
                    <input type="reset" value="Clear">
                </td>
            </tr>
        </table>
    </form> */}
// هذا كود جافا سكربت
// function validate(){
//     let isValid = false;
//     let age = document.getElementById('age').value;
//     let isChecked = document.getElementById('agree').checked;
//     if(isChecked==true && !isNaN(age)){
//         isValid = true;
//     }
//     else{
//         isValid = false;
//     }
//     return isValid;
// }
// الكود اللي فوق نفس اللي تحت بس أكثر اختصارا
// function validate(){
//     let age = document.getElementById('age').value;
//     let isChecked = document.getElementById('agree').checked;
//     return isChecked && !isNaN(age);
// }