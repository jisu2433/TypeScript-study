class Department {
    // private name: string;
    protected employees: string[] = [];
    // 클래스의 필드 키 이름만 정의
    // private은 클래스가 생성된 객체 내부에서만 접근할 수 있는 속성이 되었다는 것.
    // protected은 외부에서 접근할 수 없게 하는 동시에 기본 클래스를 확장하는 클래스 내에서는 접근할 수 있게 함
    // 예약어, 클래스와 연결되며 객체가 생성되면서 실행되는 클래스에 기반하여 만드는 모든 객체에도 연결되는 함수로 객체에 대한 초기화 작업을 수행할 수 있음
    constructor(private id: string, public name: string){
      // this.name = n;
    }
    // 생성자 메소드
    describe(this: Department) {
      console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string){
      // validation etc
      this.employees.push(employee);
    }

    printEmployeeInformation(){
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }

  class ITDepartment extends Department {
    constructor(id: string, public admins: string[]){
      super(id, 'IT');
      this.admins = admins;
      // super 기본 클래스의 생성자를 호출, 여기서는 id와 name을 취함
    }
  }

  class AccountingDepartment extends Department {
    private lastReport: string;

    // get, set 로직을 캡슐화하고 속성을 읽거나 설정하려 할 때 실행되어야 하는 추가적인 로직을 추가하는 데 유용
    get mostRecentReport(){
      if(this.lastReport){
        return this.lastReport;
      }
      throw new Error('No report found');
    }

    set mostRecentReport(value: string){
      if(!value){
        throw new Error('Please pass in a valid value')
      }
      this.addReport(value);
    }
    // 게터는 값을 가지고 올 때 함수나 메소드를 실행하는 속성
    constructor(id: string, private reports: string[]){
      super(id, 'Accounting');
      this.lastReport = reports[0];
    }
    addEmployee(name: string){
      if(name === 'Max'){
        return;
      }
      this.employees.push(name);
    }
    addReport(text: string){
      this.reports.push(text);
      this.lastReport = text;
    }
    printReports() {
      console.log(this.reports);
    }
  }
  
  // 객체를 생성하는 작업
  const it = new ITDepartment('d1',['Max']);
  
  it.addEmployee('Max');
  it.addEmployee('Dana');
  // accounting.employees[2] = 'Anna';
  // 클래스가 private이어서 에러발생
  it.describe();
  it.name = 'NEW NAME';
  it.printEmployeeInformation();
   
  const accounting = new AccountingDepartment('d2', []);

  accounting.mostRecentReport = 'Year End Report';
  accounting.addReport('Something went wrong...');

  console.log(accounting.mostRecentReport);

  accounting.addEmployee('Max')
  accounting.addEmployee('Manu')

  accounting.printReports();
  accounting.printEmployeeInformation();
  // const accountingCopy = {name: 'dana', describe: accounting.describe};
  // accountingCopy.describe(); 