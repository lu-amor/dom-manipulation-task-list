let tasks = [
  {
    id: 0,
    owner: "Pelado Cáceres",
    name: "Wash the car",
    description: "Wash the car before crash it 💥🚗",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSynqaOG2CBeapwLA8A7W3C8kmHhNnNraWl7c2rz1eykm_dY_cjB9erHZawnIFOIo3MbcAts4L7N8W7otPrEPvFmzg9UJo7LONUpVhyPpz1gjDfbMOcetAy52k0YdDDoNaZSQ&usqp=CAc",
  },
  {
    id: 1,
    owner: "Developer #432",
    name: "Take humans out of Earth",
    description: "Looking for a new planet to destroy 🌎",
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-thumb.jpg",
  },
  {
    id: 2,
    owner: "Another big fish",
    name: "Testing in Production",
    description: `We don't worry about testing, we test in production 🤪`,
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
  },
  {
    id: 3,
    owner: "The return of the Pug",
    name: "Thinking about all the mankind problems",
    description: "Eat, Sleep and wear a jedi robe in order to solve it 🐶",
    imgUrl:
      "https://w0.peakpx.com/wallpaper/381/236/HD-wallpaper-pug-dog-pet-funny-sad.jpg",
  },
  {
    id: 4,
    owner: "Mark Zuckerberg",
    name: "Destroy the entire planet earth",
    description: "Encourage people to live in a metaverse🌈",
    imgUrl: "https://pbs.twimg.com/media/Ew2_PGEWgAE3V5-.jpg",
  },
];

let currentIdNumber = tasks.length;

window.onload = loadTasks;

function createTaskComponent(task) {
  const taskList = document.querySelector("ul");
  const taskItem = document.createElement("li");
  taskItem.className = "task";
  taskItem.id = task.id;
  taskItem.innerHTML = `
    <img src="${task.imgUrl}" alt="${task.name}" />

    <div class="task-information">
      <h3>Task Owner</h3>
      <p>${task.owner}</p>
      <h3>Task Name</h3>
      <p>${task.name}</p>
      <h3>Task Description</h3>
      <p>${task.description}</p>
    </div>
  `;
  taskItem.addEventListener("click", () => deleteTaskHandler(taskItem));
  taskList.appendChild(taskItem);
}

function loadTasks() {
  tasks.forEach((task) => createTaskComponent(task));
}

function addTaskAlert(newTask) {
  alert(`New Task Added: \nName: ${newTask.name}\nOwner: ${newTask.owner}\nDescription: ${newTask.description}`);
}

function addTaskHandler(event) {
  event.preventDefault();

  const nameInput = document.getElementById("nameInput").value;
  const ownerInput = document.getElementById("ownerInput").value;
  const descriptionInput = document.getElementById("descriptionInput").value;
  const imgUrlInput = document.getElementById("imgUrlInput").value;

  const newTask = {
    id: currentIdNumber++,
    name: nameInput,
    owner: ownerInput,
    description: descriptionInput,
    imgUrl: imgUrlInput,
  };

  tasks.push(newTask);
  createTaskComponent(newTask);
  addTaskAlert(newTask);
}

function deleteTaskHandler(taskElement) {
  const taskId = parseInt(taskElement.id);
  tasks = tasks.filter(task => task.id !== taskId);
  taskElement.remove();
  redirectWhenNoTask();
}

function deleteAllTaskHandler() {
  tasks = [];
  document.querySelector("ul").innerHTML = "";
  redirectWhenNoTask();
}

function redirectWhenNoTask() {
  if (tasks.length === 0) {
    window.location.href = "https://www.youtube.com";
  }
}

document.querySelector(".submit-button").addEventListener("click", addTaskHandler);
document.querySelector(".clear-button").addEventListener("click", deleteAllTaskHandler);
