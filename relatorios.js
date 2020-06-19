const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction){

    user.transactions.push(transaction)
    
    if(transaction.type === "credit"){
        user.balance += transaction.value
    }else if(transaction.type === "debit"){
        user.balance -= transaction.value
    }else{
        console.log("Invalido")
    }
}

function getHigherTransactionByType(type){
    let higherTransaction
    let highValue = 0
    for(transaction of user.transactions){
        if(transaction.type == type && transaction.value > highValue){
            highValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

function getAverageTransactionValue(){
    let average = 0
    for(transaction of user.transactions){
        average += transaction.value
    }
    return average / user.transactions.length
}

function getTransactionsCount(){
    let countTransaction = {
        credit: 0,
        debit: 0
    }
    for(let transaction of user.transactions){
        if(transaction.type === "credit"){
            countTransaction.credit++
        } else if(transaction.type === "debit"){
            countTransaction.debit++
        }
    }
    return countTransaction
}


createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })


console.log(user.balance)
console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))
console.log(getAverageTransactionValue())
console.log(getTransactionsCount())