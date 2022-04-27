// CREATE AN ARRAY OF EMPLOYEES
let empArray = [
    [12345678,  'John Doe',     1234, 'jd@gmail.com', 'Administrative'],
    [87654321,  'Mary Jane',    8765, 'mj@gmail.com', 'Marketing'], 
    [44444444,  'Santa Claus',  4444, 'sc@gmail.com', 'Sales'],
    [33333333,  'Keebler Elf',  3333, 'ke@gmail.com', 'Engineering'],
    [11111111,  'Michelin Man', 1111, 'mm@gmail.com', 'Executive']
]
let count = 0
let blankArray = []
let list 
const columns = 5;
const rows = 6;


const $ = (id) => {
    return document.getElementById(id);
}

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
const checkStorage = () => {
    // check 
    sessionStorage.setItem('empArray', JSON.stringify(empArray))
    console.log(JSON.parse(sessionStorage.getItem('empArray')))

    if (empArray.lenth > 0) {
        list = empArray.join('\n')
        $('tbody').value = list
    }
}

// GET DOM ELEMENTS
let form = $('addForm')
let table = $('employees')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
// let empTable = document.getElementsByTagName('tbody')[0]
let empTable = document.getElementsByTagName('tbody')[0]


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
    empArray.push([id, name, extension, email, department])

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    localStorage.setItem('emp', empArray.join(','))

    // BUILD THE GRID



    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    deleteBtn.appendChild(document.createTextNode('X'))
    cell_delete.appendChild(deleteBtn)

    // RESET THE FORM
    document.querySelector('#id').value = ''
    document.querySelector('#name').value = ''
    document.querySelector('#extension').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#department').value = ''

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
})

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    var i = e.target.parentNode.parentNode.rowIndex
    if (confirm(`are you sure you want to delete?`)) {
        // DELETE EMPLOYEE
        empTable.deleteRow(i)
        count-=1
    }
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID

})

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.innerHTML = ""
    // REBUILD THE TBODY FROM SCRATCH
    // cellID1.innerHTML = empArray[0][0]
    // empTable.innerHTML = empArray[0][0] + '<br>' + empArray[0][1]


    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    var html = ''
    for (let r of empArray) {
        html += `
        <tr>
            <td> ${r[0]} </td>
            <td> ${r[1]} </td>
            <td> ${r[2]} </td>
            <td> ${r[3]} </td>
            <td> ${r[4]} </td>
        </tr>
        `
    }
    empTable.innerHTML = html



    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT
    count+= 1
    // STORE THE ARRAY IN STORAGE

}

checkStorage()
// console.log(empTable)
// console.log(empTable.length)
buildGrid()