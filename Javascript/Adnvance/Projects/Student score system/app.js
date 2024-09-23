const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const age = document.querySelector("#age");
const id = document.querySelector("#idInp");

const tbody = document.querySelector(".table > tbody");
const submitBtn = document.querySelector("#addBtn");
const updateBtn = document.querySelector("#updateBtn");
const BASE_URL = "http://localhost:3000/students";
const displayStudents = function (...studentList) {
  let output = "";

  studentList.forEach((student) => {
    console.log(student);
    output += `<tr>
        <td>${student.id}</td>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.age}</td>
        <td><a class='btn btn-sm btn-success' onclick="getDataById(${student.id})">Edit</a></td>
        <td><a class='btn btn-sm btn-danger' onclick="removeStudent(${student.id})">Delete</a></td>
    </tr>`;
  });
  tbody.insertAdjacentHTML("beforeend", output);
};

const fillEditedData = function (student) {
  firstName.value = student.firstName;
  lastName.value = student.lastName;
  age.value = student.age;
  id.value = student.id;
};

const getAllStudents = async function () {
  const response = await fetch(BASE_URL);

  const studenJson = await response.json();

  displayStudents(...studenJson);
  console.log(studenJson);
};

const createNewStudent = async function () {
  const studentModel = {
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.valueAsNumber,
  };

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentModel),
    });

    if (response.status == 200) {
      window.location.reload();
    }
  } catch (error) {
    alert(error);
  }
};

const updateStudent = async function () {
  const studentModel = {
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.valueAsNumber,
  };

  try {
    const response = await fetch(BASE_URL + "/" + id.value, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentModel),
    });

    if (response.status == 200) {
      window.location.reload();
    }
  } catch (error) {
    alert(error);
  }
};
const getDataById = async function (id) {
  const response = await fetch(`${BASE_URL}/${id}`);

  const student = await response.json();

  fillEditedData(student);
};

const removeStudent = async function (id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (response.status == 200) {
    window.location.reload();
  }
};

submitBtn.addEventListener("click", createNewStudent);
updateBtn.addEventListener("click", updateStudent);
getAllStudents();
