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
  meals(){
      let meals = this.deliveries().map(delivery => delivery.meal());
      return meals.filter(function(meal, index, meals) {
        return meals.indexOf(meal) === index;
      });
    }
  }

  class Customer {
    constructor(name, neighborhoodId){
      this.name = name;
      this.neighborhoodId = neighborhoodId;
      this.id = ++customerId;
      store.customers.push(this);
    }

  //returns all the deliveries that customer has received
    deliveries(){
      return store.deliveries.filter(delivery => delivery.customerId === this.id);
    }

  //returns all meals that a customer has ordered
    meals(){
      return this.deliveries().map(delivery => delivery.meal())
    }
