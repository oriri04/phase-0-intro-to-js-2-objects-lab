const employee = {
    label: "Esther",
    Residence: "Nairobi"
};
console.log(employee);

function updateEmployeeWithKeyAndValue(object,key,value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
console.log(updateEmployeeWithKeyAndValue(employee,"label","Jennifer"))


function destructivelyUpdateEmployeeWithKeyAndValue(object,key,value) {
object[key] = value;
    return object;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee,"label","Jane")
console.log(employee);

function deleteFromEmployeeByKey(object, key) {
    const deletedLabel = {...object}
    delete deletedLabel[key];
    return deletedLabel
}
console.log(deleteFromEmployeeByKey(employee,"label",)); 

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
destructivelyDeleteFromEmployeeByKey(object,label)