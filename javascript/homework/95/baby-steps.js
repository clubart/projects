let total = 0;

function getTotalArgs(args) {

    for (let i = 2; i < args.length; i++) {
            total += +args[i];
    }
    return total;
}

console.log(getTotalArgs(process.argv));