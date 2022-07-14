// let projects = []

// function addProject(event) {
//     event.preventDefault()

//     let name = document.getElementById("input-project-name").value
//     let start = document.getElementById("input-start-date").value
//     let end = document.getElementById("input-end-date").value
//     let description = document.getElementById("description").value
//     let image = document.getElementById("input-project-image")

//     var img = URL.createObjectURL(image.files[0])

//     console.log(name);
//     console.log(start);
//     console.log(end);
//     console.log(description);
//     console.log(img);

//     let project = {
//         name,
//         start,
//         end,
//         description,
//         image
//     }

//     projects.push(project)
//     renderProject()
// }