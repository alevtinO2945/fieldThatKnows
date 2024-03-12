const utils = {};

utils.flaggedUsers = 
    [1663882102141, 1663900040545];

utils.styles = {
    car: {color: '#1A281F'},
    fish: {color: '#456990'},
    house: {color: '#A2D6F9'},
    tree: {color: '#6F732F'},
    bicycle:{color: '#B38A58'},
    guitar: {color: '#E2856E'},
    pencil: {color: '#CC998D'},
    clock: {color: '#BFB48F'},
};
    
utils.formatPercent =(n) =>{
    return (n * 100).toFixed(2) + "%";
}

utils.printProgress = (count, max)=>{
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    const percent = utils.formatPercent(
        count/max
    );

    process.stdout.write(count + "/" + max +
    "("+percent+")"
    );
}

utils.groupBy = (objArray, key)=> {
    const groups = {};
    for(let obj of objArray){
        const val = obj[key];
        if(groups[val] == null){
            groups[val] = [];
        }
        groups[val].push(obj);
    }
    return groups;
}



if(typeof module !== 'undefined'){
    module.exports=utils;
}
