const Employee = require('../model/Employee');

const employeesCtrl = {};

employeesCtrl.getEmployees = async function (req, res) {
    const employees = await Employee.find();
    return res.json(employees);
}

employeesCtrl.getEmployee = async function (req, res) {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    return res.json(employee);
}

employeesCtrl.createEmployee = async function (req, res) {
    const employee = new Employee(req.body);
    await employee.save();
    return res.json({status: "Employee Created Successfully"});
}

employeesCtrl.updateEmployee = async function (req, res) {
    const { id } = req.params;
    const { name, position, office, salary } = req.body;
    
    const updatedEmployee = { name, position, office, salary }
    
    const employee = await Employee.findByIdAndUpdate(id, updatedEmployee, {new: true});
    
    return res.json({ status: "Employeed Updated Succesfully", employee }); 
}

employeesCtrl.deleteEmployee = async function (req, res) {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    return res.json({ status: "Employee Deleted Successfully" });
}

module.exports = employeesCtrl;