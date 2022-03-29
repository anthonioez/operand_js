let array = [ 
    "OR", 
    ["<", "a", "b"], 
    [ "AND", 
        ["==", "c", "d"], 
        ["!=", "e", "f"] 
    ] 
]

let result = processItem(array)
console.log("result:", result)

function processItem(input) {
    if (Array.isArray(input) && input.length == 3) {
        console.log("processItem:", input);

        let operand = input[0]        
        let leftValue = processItem(input[1])
        let rightValue = processItem(input[2])
                
        let ret = executeOperation(operand, leftValue, rightValue)
        console.log("processItem operation:", leftValue, operand, rightValue, "=>", ret);
        return ret
    } else {
        console.log("processItem value:", input);
        return input
    }
}

function executeOperation(operand, leftValue, rightValue) {
    if (operand == "==") {
        return leftValue == rightValue
    } else if (operand == "!=") {
        return leftValue != rightValue
    } else if (operand == "<") {
        return leftValue < rightValue
    } else if (operand == ">") {
        return leftValue > rightValue
    } else if (operand == "AND") {
        return leftValue & rightValue
    } else if (operand == "OR") {
        return leftValue & rightValue
    } else {
        return null
    }
}
