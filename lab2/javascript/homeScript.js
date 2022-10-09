const lists = document.querySelector("#listOfPerson")
const tableheader = document.querySelector("#listOfPersonHeader")
const addPerson = document.querySelector("#addPersonButton")
const firstName = document.querySelector("#firstNameInput")
const lastName = document.querySelector("#lastNameInput")
const personProperty = document.querySelector("#personPropertyId")
const saveProperty = document.querySelector("#saveButton")
const cancel = document.querySelector("#cancelButton")


addPerson.onclick = () => {
    personProperty.style.display = "block"
    lists.style.display = "none"
    tableheader.style.display = "none"
    addPerson.style.display = "none"
}

cancel.onclick = () => {
    personProperty.style.display = "none"
    lists.style.display = "block"
    tableheader.style.display = "block"
    addPerson.style.display = "block"
}

saveProperty.onclick = () => {
    const personFirstName = firstName.value
    const personLastname = lastName.value
    const newPerson = document.createElement("ul")
    newPerson.append(personFirstName + " " + personLastname)

    lists.append(newPerson)
    personProperty.style.display = "none"
    lists.style.display = "block"
    tableheader.style.display = "block"
    addPerson.style.display = "block"
}

