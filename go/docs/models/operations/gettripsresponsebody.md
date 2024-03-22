# GetTripsResponseBody

This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS).


## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `Data`                                                                | [][components.Trip](../../models/components/trip.md)                  | :heavy_minus_sign:                                                    | N/A                                                                   |
| `Links`                                                               | [*operations.GetTripsLinks](../../models/operations/gettripslinks.md) | :heavy_minus_sign:                                                    | N/A                                                                   |