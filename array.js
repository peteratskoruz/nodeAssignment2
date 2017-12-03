/*nested array*/

var employee =[
    {
        employeeId:1111,
        employeeName:'peter',
        employeeDesignation:'developer',
        employeeAddress:{
            city:'chennai',
            country:'India',
            pinCode:'600054'
        }

    },
    {
        employeeId:1112,
        employeeName:'vincent',
        employeeDesignation:'Manager',
        employeeAddress:{
            city:'bangalore',
            country:'India',
            pinCode:'580054'
        }

    },
    {
        employeeId:1113,
        employeeName:'kamal',
        employeeDesignation:'teamLead',
        employeeAddress:{
            city:'kochi',
            country:'India',
            pinCode:'600564'
        }

    }
]

document.write(Object.keys(employee).reduce(function(s, p, i) {
        var o = employee[p];
        return s + (i>0?'<br>':'')  + 'EmployeeID :' + o.employeeId + ' ' + 'EmployeeName :' + o.employeeName + ' ' + 'EmployeeJob :' +o.employeeDesignation
    }, '')
);


/*sort, unshift and add in array*/

var numbers =[3,4,5,6,7,8];

console.log(numbers);

numbers.sort(function (a,b) {return b-a;})

/*sorted array*/

console.log(numbers);

/*unshifted array*/

numbers.unshift(10);

console.log(numbers);

/*add number in second position*/

numbers.splice(1,0,16,20);

console.log(numbers);
