//objects
let obj_emp={
    name :"kishore",
    ph_no:90000000,
    salary:450000,
    data:function(){
        console.log('name: ',this.name);
        console.log('salary: ',this.salary);
    }
}

obj_emp.data();

//classes

class employee{
    constructor(ename,esalary){
       this.name=ename;
       this.salary=esalary;
    }

    getData(){
        console.log(`name: ${this.name}`)
        console.log(`salary: ${this.salary}`)
    }
}



emp_obj=new employee("koushik",320678)

emp_obj.getData();

class employee_finance extends employee{
    constructor(ename,esalary,ecomm,eda){
        super(ename,esalary);
        this.comm=ecomm;
        this.da=eda;
    }

    getFinanceData(){
        console.log('name of the employee ',this.name)
        console.log('salary of the employee ',this.salary)
        console.log('commision of the employee ',this.comm)
        console.log('da of an employee ',this.da)
    }
}


obj=new employee_finance("koushik",57890123,245678,2345)

obj.getFinanceData();