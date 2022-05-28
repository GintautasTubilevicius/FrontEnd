// console.log('veikia')
// document.querySelector('h2').innerText = 'Visos nuotraukos'
// document.getElementById("mygtukas").addEventListener("click", ivedimas)
// function ivedimas() {
//     document.getElementById("demo").innerHTML += '<input class="form-control" type="file" id="formFile" name="photo">'


//   }
const button = document.querySelector('.addPhotoButton')
button.addEventListener('click', (e) => {
    e.preventDefault()
    const input = `<label>Foto</label>
                    <input class="form-control" type="file" id="formFile" name="photo">`

    document.querySelector('.nuotraukos').innerHTML += input
})

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = new FormData(form)
    fetch(form.getAttribute('action'), {
        method: 'POST',
        body: data
    })
    .then(resp => resp.text())
    .then(resp => console.log(resp))
})

const photos = document.querySelectorAll('.delete')
photos.forEach(element => {
    element.addEventListener('click', (e) => {
        element.parentElement.remove()
    })
})

// .addEventListener('click', )


// document.querySelector('.linkas').addEventListener('click', (e) => {
//     e.preventDefault()

//     fetch('/test', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: data
//     })
//     .then(resp => resp.text())
//     .then(resp => console.log(resp))
// })