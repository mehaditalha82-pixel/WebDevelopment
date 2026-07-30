function topRatedRestaurant(restaurants) {
    if(Array.isArray(restaurants) === false || restaurants.length === 0){
        return "Invalid";
    }
    let rate = 0.0;
    let best_restaurant;
    for(let  restaurant of restaurants){
        if(restaurant.rating > rate){
            best_restaurant = restaurant;
        }
    }
    return best_restaurant.name.toUpperCase();
}
