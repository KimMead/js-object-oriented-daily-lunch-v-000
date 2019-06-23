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

  // returns list of customers that live in a neighborhood
  customers(){
    return store.customers.filter(customer => customer.neighborhood === this.id);
  }
  // returns list of meals that have been ordered in a neighborhhood
class Customer {
  constructor(name, neighborhoodId){
    this.name = name;
    this.neighborhoodId = neighborhoodId;
    this.id = ++customerId;
    store.customers.push(this);
  }
}



}
