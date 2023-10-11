const arguments = process.argv.slice(2);

timer = function(number) {
  number = number * 1000;
  setTimeout(() => {
    process.stdout.write(`DING! alarm for ${number / 1000} seconds has gone off!`);
    process.stdout.write('\n');
  }, number);
};

alarmClock = function(arguments) {
  for(let i = 0; i < arguments.length;) {
    if (arguments[i] === NaN || arguments[i] < 0){
      i++;
    } else if(arguments[i] !== undefined || arguments.length !== 0) {
      timer(arguments[i]);
      i++;
    } else break;
  };
};

alarmClock(arguments);