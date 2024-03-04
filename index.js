//JSON - Javascript  Object Notation


let invoice = {
    name: "Matheus Alcantara de Paula",
    cpf: "111.222.333-44",
    products: {
        0:["Mouse M800Pro", 200.00],
        1:["GeForce RTX 4060", 1800.00],
        2:["NVME 2 1TB", 300.00],
        3:["Monitor AOC Hero 27´ 144hz", 1500.00]
    }
}

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`Comprador: ${invoice.name}`)
    console.log(`CPF: ${invoice.cpf}`)
    console.log(`-------------------------------------`)

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$${productPrice}`)
    }
}