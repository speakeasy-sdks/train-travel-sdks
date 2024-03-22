# GetBookingsResponseBody

This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS).


## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | List[[components.Booking](../../models/components/booking.md)]                       | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `links`                                                                              | [Optional[operations.GetBookingsLinks]](../../models/operations/getbookingslinks.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |