// CREATE AN ARRAY OF EMPLOYEES
let empArray = [
    [12345678,  'John Doe',     1234, 'jd@gmail.com', 'Administrative'],
    [87654321,  'Mary Jane',    8765, 'mj@gmail.com', 'Marketing'], 
    [44444444,  'Santa Claus',  4444, 'sc@gmail.com', 'Sales'],
    [33333333,  'Keebler Elf',  3333, 'ke@gmail.com', 'Engineering'],
    [11111111,  'Michelin Man', 1111, 'mm@gmail.com', 'Executive']
]
let count = 5


const $ = (id) => {
    return document.getElementById(id)
}

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
const checkStorage = () => {
    emp = JSON.parse(localStorage.getItem('emp'))
    let parentOutput = document.getElementById('empCount')
    parentOutput.innerHTML = `(${count})`
}

// GET DOM ELEMENTS
let form = $('addForm')
let table = $('employees')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
let empTable = document.getElementsByTagName('tbody')[0]
checkStorage()
buildGrid()

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.querySelector('#id').value 
    let name = document.querySelector('#name').value 
    let extension = document.querySelector('#extension').value 
    let email = document.querySelector('#email').value 
    let department = document.querySelector('#department').value
    
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    newRow = [id, name, extension, email, department]
    
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    empArray.push(newRow)
    localStorage.setItem('emp', JSON.stringify(empArray))
    emp = JSON.parse(localStorage.getItem('emp'))
    var html = ''

    // CREATE THE DELETE BUTTON
    deleteBtn = "<button class='btn btn-danger btn-sm float-right delete'>x</button>"

    // BUILD THE GRID
    for (let r of emp) {
        console.log(r)
        html += `
        <tr>
            <td> ${r[0]} </td>
            <td> ${r[1]} </td>
            <td> ${r[2]} </td>
            <td> ${r[3]} </td>
            <td> ${r[4]} </td>
            <td> ${deleteBtn} </td>
        </tr>
        `
    }

    // RESET THE FORM
    document.querySelector('#id').value = ''
    document.querySelector('#name').value = ''
    document.querySelector('#extension').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#department').value = ''

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()
})

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
    var i = e.target.parentNode.parentNode.rowIndex
    // CONFIRM THE DELETE
    if (confirm(`are you sure you want to delete?`)) {
        // DELETE EMPLOYEE
        // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE
        empTable.deleteRow(i)
        count-=1
    }
        // REMOVE EMPLOYEE FROM ARRAY
        parentOutput = document.getElementById('empCount')
        parentOutput.innerHTML = `(${count})`
        // BUILD THE GRID

})

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    // REBUILD THE TBODY FROM SCRATCH
    var html = ''
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    emp = JSON.parse(localStorage.getItem('emp'))

    const deleteBtn = "<button class='btn btn-danger btn-sm float-right delete'>x</button>"

    // REBUILDING THE ROW STRUCTURE
    for (let r of emp) {
        console.log(r)
        html += `
        <tr>
            <td> ${r[0]} </td>
            <td> ${r[1]} </td>
            <td> ${r[2]} </td>
            <td> ${r[3]} </td>
            <td> ${r[4]} </td>
            <td> ${deleteBtn} </td>

        </tr>
        `
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.innerHTML = html

    // UPDATE EMPLOYEE COUNT
    count+= 1
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('emp', JSON.stringify(empArray))

}


