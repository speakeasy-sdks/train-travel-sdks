# CreateBookingRawResponseBody

Booking successful


## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `ID`                                                          | **string*                                                     | :heavy_minus_sign:                                            | Unique identifier for the booking                             | 3f3e3e1-c824-4d63-b37a-d8d698862f1d                           |
| `TripID`                                                      | **string*                                                     | :heavy_minus_sign:                                            | Identifier of the booked trip                                 | 4f4e4e1-c824-4d63-b37a-d8d698862f1d                           |
| `PassengerName`                                               | **string*                                                     | :heavy_minus_sign:                                            | Name of the passenger                                         | John Doe                                                      |
| `HasBicycle`                                                  | **bool*                                                       | :heavy_minus_sign:                                            | Indicates whether the passenger has a bicycle.                |                                                               |
| `HasDog`                                                      | **bool*                                                       | :heavy_minus_sign:                                            | Indicates whether the passenger has a dog.                    |                                                               |
| `Links`                                                       | [*components.LinksSelf](../../models/components/linksself.md) | :heavy_minus_sign:                                            | N/A                                                           |                                                               |