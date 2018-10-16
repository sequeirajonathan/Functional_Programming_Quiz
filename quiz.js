let workers = [
    {
        name: "Jonathan Sequeira",
        hourlyRate: 15.20,
        hoursWorked: 30
    },
    {
        name: "Jose Cabrera",
        hourlyRate: 30.61,
        hoursWorked: 66
    },
    {
        name: "Arturo Martinez",
        hourlyRate: 21.22,
        hoursWorked: 73
    }
]

class Payroll {
    constructor(workers) {
        this.workers = workers;
        this.getNames();
    }

    getNames () {
        let orderedWorkers = this.workers.map((worker) => {
            return worker.name;
        });
        
        return orderedWorkers.sort();
    }

    getFullTime () {
        let fullTimeEmployees = this.workers.filter(worker => worker.hoursWorked > 60 );
        return fullTimeEmployees;
    }

    getTotalLabor () {
        let total = this.workers.reduce((acc,curr) => {
            return (acc + (curr.hoursWorked * curr.hourlyRate));
        }, 0);

        return total;
    }
}

const payRoll = new Payroll (workers);


console.log(payRoll.getNames());
console.log(payRoll.getFullTime());
console.log(payRoll.getTotalLabor());


