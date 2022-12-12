"use strict";
class Department {
    // Ŭ������ �ʵ� Ű �̸��� ����
    // private�� Ŭ������ ������ ��ü ���ο����� ������ �� �ִ� �Ӽ��� �Ǿ��ٴ� ��.
    // protected�� �ܺο��� ������ �� ���� �ϴ� ���ÿ� �⺻ Ŭ������ Ȯ���ϴ� Ŭ���� �������� ������ �� �ְ� ��
    // �����, Ŭ������ ����Ǹ� ��ü�� �����Ǹ鼭 ����Ǵ� Ŭ������ ����Ͽ� ����� ��� ��ü���� ����Ǵ� �Լ��� ��ü�� ���� �ʱ�ȭ �۾��� ������ �� ����
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private name: string;
        this.employees = [];
        // this.name = n;
    }
    // ������ �޼ҵ�
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
        // super �⺻ Ŭ������ �����ڸ� ȣ��, ���⼭�� id�� name�� ����
    }
}
class AccountingDepartment extends Department {
    // ���ʹ� ���� ������ �� �� �Լ��� �޼ҵ带 �����ϴ� �Ӽ�
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
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
// ��ü�� �����ϴ� �۾�
const it = new ITDepartment('d1', ['Max']);
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
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printReports();
accounting.printEmployeeInformation();
// const accountingCopy = {name: 'dana', describe: accounting.describe};
// accountingCopy.describe(); 
