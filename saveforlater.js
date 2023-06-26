//This is the array to store our saved items
let items = [];

//This function will save the table data from our completed list page
//The function has been made so when it is called it determines the innerHTML of the selected table row
function tabledata(no, name, img, price, link, save) {
  this.no = no.innerHTML;
  this.name = name.innerHTML;
  this.img = img.innerHTML;
  this.price = price.innerHTML;
  this.link = link.innerHTML;
  this.save = save;
}

//This function is called when a item is saved
//I have placed numbers on each item that is saved so when it is called we can identify which row was saved
function AddItems(Number) {
  let num = Number;
  //All table rows are called and placed in a array called row_array
  let row_array = document.getElementsByTagName("tr");
  //The numbers help identify which row has been selected
  let row = row_array[Number];
  //Within the selected table row we get all the table data in that row and add it to an array called row_data
  let row_data = row.getElementsByTagName("td");
  //The function is called to save our table information and the function stores the innerHTML of the selected table data
  //The row_data array is used it fill in information about each heading in the row
  //The row_data array.length remains no matter which row is selected so we use fixed index's to fill in the function
  let saved_row = new tabledata(
    num,
    row_data[0],
    row_data[1],
    row_data[2],
    row_data[3],
    "Saved"
  );
  //The data is saved to the main array
  items.push(saved_row);
  //Then the array is saved in the storage
  sessionStorage.setItem("table", JSON.stringify(items));
  //an alert to tell us how many items there are
  alert("There are " + items.length + " items in your save later folder!");
}
//This function is for the save for later page
function savedItem() {
  //The saved data is retrieved from the storage and placed into the items array
  items = JSON.parse(sessionStorage.getItem("table"));
  let tbody = document.getElementById("display");
  //This loop creates a table row and table data element to store the name of the saved item
  for (let i = 0; i < items.length; i++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerText = items[i].name;
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
}
//This is a function for our index2 home page which is for the comment box which is found at the bottom of the page
function UserComment() {
  //The value of the two text boxes are added to a sentence which will be displayed in the comments section
  let userName = document.getElementById("userName").value;
  let comment = document.getElementById("userComment").value;

  let data = "User name : " + userName + "<br/>User comment : " + comment;
  document.getElementById("data").innerHTML = data;
}

//This function is for the contact button found at the bottom of the about page where users can contact us
function contact() {
  //When the submit button is pressed an alert is made to inform the user that their info has been received
  let contactName = document.getElementById("contactname").value;
  alert(
    "Thank you for your reply " +
      contactName +
      " We will be in contact with You soon"
  );
}
//This function is for the like and dislike button
function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}

$(document).ready(function () {
  //this statement make the contact page above into an accordion style layout
  $("#accordion").accordion({
    collapsible: true,
  });

  //This function creates a chained effect when a picture is clicked on in the about page
  $(".card-img-top").click(function () {
    $(this).slideUp(2000).slideDown(2000).fadeOut("slow").fadeIn("slow");
  });

  //This is to hide and show the comments made by the user in the home page where you can hide/show a comment that has been made
  $("button").on("click", function () {
    $("p").toggle();
  });
  //This is for the small button after the bottom left card and before the contact button
  //This button slides all the card info up when clicked and it also slides it back down when clicked again
  //It does this for all cards at the same time
  $(".move").click(function () {
    $(this).animate();
  });
});

//Reference: https://www.delftstack.com/howto/javascript/create-comment-box-in-html-and-javascript
//Reference: https://www.w3schools.com/howto/howto_js_toggle_like.asp
//Reference: https://www.w3schools.com/howto/howto_js_toggle_like.asp
