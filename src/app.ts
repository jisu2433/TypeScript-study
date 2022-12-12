class Department {
    // private name: string;
    protected employees: string[] = [];
    // Ŭ������ �ʵ� Ű �̸��� ����
    // private�� Ŭ������ ������ ��ü ���ο����� ������ �� �ִ� �Ӽ��� �Ǿ��ٴ� ��.
    // protected�� �ܺο��� ������ �� ���� �ϴ� ���ÿ� �⺻ Ŭ������ Ȯ���ϴ� Ŭ���� �������� ������ �� �ְ� ��
    // �����, Ŭ������ ����Ǹ� ��ü�� �����Ǹ鼭 ����Ǵ� Ŭ������ ����Ͽ� ����� ��� ��ü���� ����Ǵ� �Լ��� ��ü�� ���� �ʱ�ȭ �۾��� ������ �� ����
    constructor(private id: string, public name: string){
      // this.name = n;
    }
    // ������ �޼ҵ�
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
      // super �⺻ Ŭ������ �����ڸ� ȣ��, ���⼭�� id�� name�� ����
    }
  }

  class AccountingDepartment extends Department {
    private lastReport: string;

    // get, set ������ ĸ��ȭ�ϰ� �Ӽ��� �аų� �����Ϸ� �� �� ����Ǿ�� �ϴ� �߰����� ������ �߰��ϴ� �� ����
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
    // ���ʹ� ���� ������ �� �� �Լ��� �޼ҵ带 �����ϴ� �Ӽ�
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
  
  // ��ü�� �����ϴ� �۾�
  const it = new ITDepartment('d1',['Max']);
  
  it.addEmployee('Max');
  it.addEmployee('Dana');
  // accounting.employees[2] = 'Anna';
  // Ŭ������ private�̾ �����߻�
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