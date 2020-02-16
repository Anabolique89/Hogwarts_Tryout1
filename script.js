'use strict';

const Student = {
	firstName: "",
	lastName: "",
	middleName: undefined,
	nickName: undefined,
	image: "",
	house: ""
};

let allStudents = ["https://petlatkea.dk/2020/hogwarts/students.json"];
let allStudents2 = [];
allStudents = allStudents2;
/*
var run = function() {
  printIn('Original text is: "{0}"'.format(text));
  printIn("removeWhiteSpaces:{0}".format(removeWhiteSpaces(text)));
};
var removeWhiteSpaces = function(text) {
  var result = "";
  var prevChar = " ";
  for (var i = 0; i < text.lenght; i++) {
    var currentChar = text[i];

    if (!(prevChar === " " && currentChar == prevChar)) result += currentChar;
  }
  return result;
};

run(); */
/*
var capitalisedSentence =
  allStudents[0].toUpperCase() + allStudents.slice(1).toLowerCase();
console.log(allStudents[0].toUpperCase() + allStudents.slice(1).toLowerCase());
*/
const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
	modal.classList.add("hide");
});

fetch("https://petlatkea.dk/2020/hogwarts/students.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		data.forEach(jsonObject => {
			data[0].firstName = "Pansy";
			data[0].lastName = "Parkinson";
			data[0].nickName = "";
			data[0].image = "";
			data[0].house = "Slytherin";
			delete data[0].gender;
			delete data[0].fullname;
			// 1
			data[1].firstName = "Hannah";
			data[1].lastName = "Abbot";
			data[1].nickName = "";
			data[1].image = "";
			data[1].house = "Hufflepuff";
			delete data[1].gender;
			delete data[1].fullname;
			//2
			data[2].firstName = "Susan";
			data[2].lastName = "Bones";
			data[2].nickName = "";
			data[2].image = "";
			data[2].house = "Hufflepuff";
			delete data[2].gender;
			delete data[2].fullname;
			//3
			data[3].firstName = "Justin";
			data[3].lastName = "Finch-Fletchley";
			data[3].nickName = "";
			data[3].image = "";
			data[3].house = "Hufflepuff";
			delete data[3].gender;
			delete data[3].fullname;
			//4
			data[4].firstName = "Terry";
			data[4].lastName = "Boot";
			data[4].nickName = "";
			data[4].image = "";
			data[4].house = "Ravenclaw";
			delete data[4].gender;
			delete data[4].fullname;
			//5
			data[5].firstName = "Zacharias";
			data[5].lastName = "Smith";
			data[5].nickName = "";
			data[5].image = "";
			data[5].house = "Hufflepuff";
			delete data[5].gender;
			delete data[5].fullname;
			//6
			data[6].firstName = "Ernest";
			data[6].lastName = "Macmillan";
			data[6].nickName = "Ernie";
			data[6].image = "";
			data[6].house = "Hufflepuff";
			delete data[6].gender;
			delete data[6].fullname;
			//7
			data[7].firstName = "Megan";
			data[7].lastName = "Jones";
			data[7].nickName = "";
			data[7].image = "";
			data[7].house = "Hufflepuff";
			delete data[7].gender;
			delete data[7].fullname;
			//8
		});
		//console.log(data);

		data.forEach(showStudents);
	});

function showStudents(students) {
	console.log(students);
	const template = document.querySelector("template").content;
	const copy = template.cloneNode(true);
	copy.querySelector(".FULLNAME").textContent = students.firstName;
	copy.querySelector(".LASTNAME").textContent = students.lastName;
	copy.querySelector(".HOUSE").textContent = students.house;

	copy.querySelector("button").addEventListener("click", showStudents => {
		/* fetch("students1991.json")
		  .then(res => res.json())
		  .then(showDetails);*/
		showDetails(students);
	});

	function showDetails(students) {
		console.log(students);

		modal.querySelector(".modal-name").textContent = students.firstName;
		modal.querySelector(".last-name").textContent = students.lastName;
		modal.querySelector(".modal-description").textContent = students.house;

		modal.dataset.theme = students.house;
		modal.classList.remove("hide");
	}

	document.querySelector(".wrapper").appendChild(copy);
}

// const modal = document.querySelector(".modal-content");
const btn = document.querySelectorAll("button");
const btnsArr = Array.from(btn);

btnsArr.forEach(function (e, index) {
	e.onclick = function () {
		modal_name.innerHTML = students[index].fullname;
		modal_house.innerHTML = students[index].house;
		document.querySelector(".modal_content").dataset.theme =
			students[index].house;
		modal.style.display = "block";
	};
});
