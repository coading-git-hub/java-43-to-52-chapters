// function deleteRow(button) {
//     var row = button.closest('tr');
//     row.parentNode.removeChild(row);}

/////////////////////////   q : 5   ////////////////////////////////

// var counter = 0;
// function increaseCounter(){
//     counter++
//     document.getElementById(counter).textContent = counter
//     document.write(counter)
// }
// function deccreaseCounter(){
// counter--
//     document.getElementById(counter).textContent = counter
//     document.write(counter)
// }
// count = 0;
// function increaseCounter(){
//     count+=1;
//     document.getElementById("counter").innerHTML=count;

// }
// function decreaseCounter(){
//     count-=1;
//     document.getElementById("counter").innerHTML=count;
    
// }
// function reset(){
//     count = 0;
//     document.getElementById("counter").innerHTML=count;
    
// }

// ///////////////// Assignment # 49-52 ///////////  q1  /////////////////////

// document.getElementById("form_body").addEventListener("submit", function(event) {
//     event.preventDefault();
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var resultDiv = document.getElementById("result");
//     resultDiv.innerHTML = `
//       <h3>Submitted Data</h3>`
//        document.write( "NAME :" + name +"<br>")
//        document.write( "EMAIL :" + email +"<br>")
//        document.write( "PASSWORD :" + password)
//   });

////////////  q2  //////////////////
// function expandPara(){
//     var str=`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, cum!
//      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore in vero 
//      harum esse quaerat architecto eius perferendis labore qui?
//      ipsum dolor sit ame.
//     `
// document.getElementById("para").innerHTML=str
// }
// function Lesspara(){ var str =`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, cum!`
// document.getElementById("para").innerHTML = str
// }

///////////////////// q3 //////////////////////////////

var savedRow;
var savedRowIndex;

    function deleteRow(button) {
        // Save the row and its index
        savedRow = button.parentNode.parentNode.cloneNode(true);
        savedRowIndex = button.parentNode.parentNode.rowIndex;
        button.parentNode.parentNode.remove();
    }

    function addRow() {
        if (savedRow) {
            
         var table =   document.getElementById("studentTable").appendChild(savedRow);
            table.insertBefore(savedRow, table.rows[savedRowIndex]);
            savedRow = false; 
        } else {
            alert("No row to add!");
        }
    }