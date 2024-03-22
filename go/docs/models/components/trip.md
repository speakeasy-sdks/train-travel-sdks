# Trip


## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `ID`                                               | **string*                                          | :heavy_minus_sign:                                 | Unique identifier for the trip                     | 4f4e4e1-c824-4d63-b37a-d8d698862f1d                |
| `Origin`                                           | **string*                                          | :heavy_minus_sign:                                 | The starting station of the trip                   | Berlin Hauptbahnhof                                |
| `Destination`                                      | **string*                                          | :heavy_minus_sign:                                 | The destination station of the trip                | Paris Gare du Nord                                 |
| `DepartureTime`                                    | [*time.Time](https://pkg.go.dev/time#Time)         | :heavy_minus_sign:                                 | The date and time when the trip departs            | 2024-02-01T10:00:00Z                               |
| `ArrivalTime`                                      | [*time.Time](https://pkg.go.dev/time#Time)         | :heavy_minus_sign:                                 | The date and time when the trip arrives            | 2024-02-01T16:00:00Z                               |
| `Operator`                                         | **string*                                          | :heavy_minus_sign:                                 | The name of the operator of the trip               | Deutsche Bahn                                      |
| `Price`                                            | **float64*                                         | :heavy_minus_sign:                                 | The cost of the trip                               | 50                                                 |
| `BicyclesAllowed`                                  | **bool*                                            | :heavy_minus_sign:                                 | Indicates whether bicycles are allowed on the trip |                                                    |
| `DogsAllowed`                                      | **bool*                                            | :heavy_minus_sign:                                 | Indicates whether dogs are allowed on the trip     |                                                    |