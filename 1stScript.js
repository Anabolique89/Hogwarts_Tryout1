"use strict";

//let allStudents2 = [];
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
let allStudents = [];

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
			// create object template
			const student = {
				firstName: "",
				lastName: "",
				middleName: "",
				nickName: "",
				house: ""
			};
			//const student = Object.create(Student);
			//add attributes - separate array
			let fullname = jsonObject.fullname.trim();
			fullname = fullname.toLowerCase();
			let firstSpace;
			student.firstName = fullname.substring(0, fullname.indexOf(" "));
			if (fullname.indexOf(" ") > 0) {
				student.firstName = fullname.substring(0, fullname.indexOf(" "));
			} else {
				student.firstName = fullname;
			}
			// editing the first name - removing spaces and adding Capitalisation
			student.firstName =
				student.firstName.charAt(0).toUpperCase() +
				student.firstName.substring(1).toLowerCase();

			// editing lastName
			if (fullname.indexOf(" ") > 0) {
				student.lastName = fullname.substring(fullname.lastIndexOf(" ") + 1);
				student.lastName.substring(1).toLowerCase();
				student.lastName =
					student.lastName.charAt(0).toUpperCase() +
					student.lastName.substring(1).toLowerCase();
			}
			//
			console.log(student.firstName + " " + student.lastName);
			// if >0 =
			let lastSpace = fullname.lastIndexOf(" " + 1);
			let lastName = fullname.substring(lastSpace);
			let nickName;
			// console.log(lastName);
			let middleName = fullname.substring(firstSpace + 1, lastSpace);
			let find = middleName.substring(0, 1);
			let firstCharacter = fullname.substring(0, 1);
			firstCharacter = firstCharacter.toUpperCase();

			// let restOfFirstName = firstName.substring(1, firstSpace);

			if (middleName === '""') {
				student.nickName = middleName;
			}

			let house = jsonObject.house.trim();
			house = house.toLowerCase();
			let bigHouse = house.charAt(0).toUpperCase() + house.substring(1);
			let firstName = data.firstName;
			//....... add more stuff here ......
			//console.log(bigHouse);
			student.firstName = firstName;
			student.lastName = lastName;
			student.middleName = middleName;
			student.nickName = nickName;
			student.house = bigHouse;
			//student.image =

			allStudents.push(student);
		});
		console.log(data.student);

		data.forEach(showStudents);
	});

function showStudents(students) {
	//console.log(students);
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

		modal.querySelector(".modal-name").textContent = student.firstName;
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
		modal_name.innerHTML = students[index].firstName;
		modal_house.innerHTML = students[index].house;
		document.querySelector(".modal_content").dataset.theme =
			students[index].house;
		modal.style.display = "block";
	};
});
