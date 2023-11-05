class FlightDetails {
  constructor() {
    this.routePrices = [
      {
        route: "New York-London",
        price: 500,
        availableDates: [
          "2023-11-10",
          "2023-11-11",
          "2023-11-12",
          "2023-11-13",
          "2023-11-14",
          "2023-11-15",
        ],
      },
      {
        route: "London-Paris",
        price: 700,
        availableDates: [
          "2023-11-10",
          "2023-11-21",
          "2023-11-25",
          "2023-11-30",
          "2023-12-01",
          "2023-12-03",
        ],
      },
      {
        route: "Delhi-Melbourne",
        price: 600,
        availableDates: [
          "2023-11-16",
          "2023-11-17",
          "2023-11-18",
          "2023-11-19",
          "2023-11-20",
          "2023-11-21",
        ],
      },
      { route: "default", price: 150 }, // Default price
      // Add more routes as needed
    ];
  }
  getRoutes() {
    return this.routePrices;
  }
  getBasePrice(source, destination, date) {
    const route = `${source}-${destination}`;
    const foundRoute = this.routePrices.find(
      (r) => r.route === route && r.availableDates.includes(date)
    );

    if (foundRoute) {
      return foundRoute.price;
    } else {
      return "No Flight available for the specified route";
    }
    return foundRoute
      ? foundRoute.price
      : this.routePrices.find((r) => r.route === "default").price;
  }
}

module.exports = FlightDetails;
