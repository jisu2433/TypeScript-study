"use strict";
class Department {
    // Ŭ������ �ʵ� Ű �̸��� ����
    // private�� Ŭ������ ������ ��ü ���ο����� ������ �� �ִ� �Ӽ��� �Ǿ��ٴ� ��.
    // protected�� �ܺο��� ������ �� ���� �ϴ� ���ÿ� �⺻ Ŭ������ Ȯ���ϴ� Ŭ���� �������� ������ �� �ְ� ��
    // �����, Ŭ������ ����Ǹ� ��ü�� �����Ǹ鼭 ����Ǵ� Ŭ������ ����Ͽ� ����� ��� ��ü���� ����Ǵ� �Լ��� ��ü�� ���� �ʱ�ȭ �۾��� ������ �� ����
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // ���� �Ӽ��� �ν��Ͻ����� ��ȿ���� ����
        this.employees = [];
        // this.name = n;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        // validation etc
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
// private name: string;
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
        // super �⺻ Ŭ������ �����ڸ� ȣ��, ���⼭�� id�� name�� ����
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
class AccountingDepartment extends Department {
    // ���ʹ� ���� ������ �� �� �Լ��� �޼ҵ带 �����ϴ� �Ӽ�
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    // get, set ������ ĸ��ȭ�ϰ� �Ӽ��� �аų� �����Ϸ� �� �� ����Ǿ�� �ϴ� �߰����� ������ �߰��ϴ� �� ����
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value');
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    describe() {
        console.log('Accounting Department - ID:' + this.id);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
// ��ü�� �����ϴ� �۾�
const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Dana');
// accounting.employees[2] = 'Anna';
// Ŭ������ private�̾ �����߻�
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();
// const accountingCopy = {name: 'dana', describe: accounting.describe};
// accountingCopy.describe(); 
