const product ={
    lable:"the book",
    price:250,
    stock:20,
    saleprice:undefined,
    aname:5
}


// const {label:typelable,price,stock,aname=6}= product // we not use product.label for label value now we can use only lable for variable
// we change lable propery into typelable 
// here name is not in object so this give undefined value if we asign value to this we get value

const {lable,price,stock,aname} = product
console.log(lable)
console.log(price)
console.log(stock)
console.log(aname)


const transation = (type,{lable,stock=0 }={}) =>{
    console.log(type,price,lable,stock)
}

transation('order',product)