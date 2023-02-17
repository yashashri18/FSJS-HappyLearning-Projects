//add-new-note button ref
const addButton = document.querySelector('#add')

//update data in local storage 

const updateLSData = () =>{
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];
    textAreaData.forEach((note) => {
        return notes.push(note.value);
    })
    localStorage.setItem('notes',JSON.stringify(notes))
}
//ref to nodes grid
const notes_grid = document.querySelector('#notes_grid')

const addNewNote = (text = '') =>{
    console.log('btn click')
    const note  = document.createElement('div');
    note.classList.add('operation');
    const htmlData = `
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea style="resize: none;" rows="4" class="${text ? "hidden" : ""}"></textarea>
    <div class="btn-group">
        <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete"><i class="fa-solid fa-trash"></i></button>
    </div>`;
    //note.innerHTML = htmlData
    note.insertAdjacentHTML('afterbegin',htmlData)
    console.log(note);

    //getting reference for edit and delete
    const editButton = note.querySelector('.edit')
    const delButton = note.querySelector('.delete')
    const mainDiv = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    //deleting the node
    delButton.addEventListener('click', ()=>{
        const ans = confirm("Are you sure ?")
        console.log(ans)
        if(ans == true){
            note.remove();
            updateLSData();
        }
        else{
            
        }
     
    })

    
    //toggle using edit button
    textArea.value = text;
    mainDiv.innerHTML = text;
    editButton.addEventListener('click', ()=>{
        mainDiv.classList.toggle("hidden")
        textArea.classList.toggle("hidden")
    })


    textArea.addEventListener('change',(event)=>{
        const value = event.target.value
        console.log(value)
        mainDiv.innerHTML = value

        updateLSData();
    })

    notes_grid.appendChild(note);
    console.log("appended note div into notes_grid")
    
}

//getting data ack from local storage
const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){
    
    notes.forEach((note)=>{
        console.log("the note is ",note)
        addNewNote(note)}
        )
}

addButton.addEventListener("click", ()=> addNewNote());