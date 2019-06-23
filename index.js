// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0 
let customerId = 0 
let mealId = 0 
let deliveryId = 0 

class Neighborhood {
  constructor(name){
    this.name = name; 
    this.id = ++neiborhoodId; 
    store.neighborhood.push(this); 
  }

  //  returns list of deliveries in a neighborhood 
  deliveries(){
    return store.deliveries.filter(delivery => delivery.neighborhood === this.id);
  }
  
  
}