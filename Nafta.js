function totalAPagar(vehiculos, litrosConsumidos) {
    let pagar = 0
    if (vehiculos === "coche")  {
    pagar = (litrosConsumidos*86)
}
if 
    (vehiculos === "moto"){
    pagar = (litrosConsumidos*70)
    
 }
if 
    (vehiculos === "autobús"){
     pagar = (litrosConsumidos*55)
    }


if (litrosConsumidos <= 25) {
    (pagar = pagar + 50)
    
}
else {
    (pagar = pagar + 25)
    
} 
console.log("costo total de la nafta : " + pagar)
}





totalAPagar("autobús",8)
