// Define a function to calculate the Euclidean distance between two points
function euclideanDistance(location1, location2) {
    let {lon1, lat1} = location1;
    let {lon2, lat2} = location2;
    lat1 = lat1 * (Math.PI / 180);
    lon1 = lon1 * (Math.PI / 180);
    lat2 = lat2 * (Math.PI / 180);
    lon2 = lon2 * (Math.PI / 180);

    // calculate the Euclidean distance
    return Math.acos(Math.sin(lat1) * Math.sin(lat2) + 
                     Math.cos(lat1) * Math.cos(lat2) * 
                     Math.cos(lon1 - lon2)) * 6371;
  }
  
  // Define a function to perform KNN classification
  export function KNN(data, point, k) {
    // Initialize an array to store the distances between the point and the data
    const distances = [];
  
    // Iterate over the data and calculate the distance between each point and the input point
    for (let i = 0; i < data.length; i++) {
      // Calculate the distance between the point and the current data point
      const distance = euclideanDistance(point.location, data[i].location);
  
      // Calculate the age gap between the point and the current data point
      const remainingSeat = Math.abs(point.requiredSeat - data[i].availableSeat);
  
      // Add the distance, age gap, and index of the data point to the distances array
      distances.push({distance, remainingSeat, index: i});
    }
  
    // Sort the distances array in ascending order by distance and age gap
    distances.sort((a, b) => a.distance - b.distance || a.remainingSeat - b.remainingSeat );
  
    // Initialize an array to store the K nearest neighbors
    const neighbors = [];
  
    // Iterate over the first K elements of the distances array and add the corresponding data points to the neighbors array
    for (let i = 0; i < k; i++) {
      neighbors.push(data[distances[i].index]);
    }
  
    // Return the neighbors array
    return neighbors;
  }
  
  // Define a sample dataset
  // const data = [
  //   {availableSeat: 2, location: {
  //       lat2: 84.3487,
  //       lon2: 26.7104
  //   }},
  //   {availableSeat: 4, location: {
  //       lat2: 85.3487,
  //       lon2: 27.7104
  //   }},
  //   {availableSeat: 1, location: {
  //       lat2: 85.3487,
  //       lon2: 27.7104
  //   }},
  //   {availableSeat: 2, location: {
  //       lat2: 83.3487,
  //       lon2: 25.7104
  //   }},
  // ];
  
  // Find the 3 nearest neighbors of the point {age: 30, dimensions: [180, 80, 33]}
  // const nearestNeighbors = knn(data, {requiredSeat: 1, location: {
  //   lat1: 27,
  //   lon1: 81
  // }}, 3);
  
  // Print the nearest neighbors
  // console.log(nearestNeighbors);