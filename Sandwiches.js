function totalAPagar(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    let pagar = 0
    if (base === "pollo")  {
    pagar = (150)
}
if 
    (base === "carne"){
    pagar = (200)
    
 }
if 
    (base === "veggie"){
     pagar = (100)
    }

if 
    (pan === "blanco"){
     pagar = (pagar + 50)
    }

    if 
    (pan === "negro"){
     pagar = (pagar + 60)
    }
    if 
    (pan === "sin gluten"){
     pagar = (pagar + 75)
    }

if (queso > 0) (pagar += 20)
    
    
if (tomate > 0) (pagar += 15)
    

if (lechuga > 0) (pagar += 10)
    

if (cebolla > 0) (pagar += 15)
    

if (mayonesa > 0) (pagar += 5)
    

if (mostaza > 0) (pagar += 5)
    


else {
    console.log("costo total a pagar: " + pagar)
    
} 
console.log("costo total a pagar: " + pagar)


}




totalAPagar("pollo", "sin gluten", 1 , 1, 0, 1, 1 , 1)
