let args = process.argv.slice(2);

let operation = args[1];
let num1 = parseInt(args[0]);
let num2 = parseInt(args[2]);

if(args.length == 3){
    switch(operation){
        case "+":
            console.log(parseInt(num1 + num2));
            break;
            
        case "/":
            console.log(parseInt(num1/num2));
            break;

        case "*":
            console.log(parseInt(num1*num2));
            break;    
                
    }
}

