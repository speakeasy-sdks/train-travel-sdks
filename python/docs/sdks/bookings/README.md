# Bookings
(*bookings*)

## Overview

Create and manage bookings for train trips, including passenger  details and optional extras.

### Available Operations

* [get_bookings](#get_bookings) - List existing bookings
* [create_booking_json](#create_booking_json) - Create a booking
* [create_booking_raw](#create_booking_raw) - Create a booking
* [get_booking](#get_booking) - Get a booking
* [delete_booking](#delete_booking) - Delete a booking

## get_bookings

Returns a list of all trips booking by the authenticated user.

### Example Usage

```python
import traintravel

s = traintravel.Traintravel(
    o_auth2="Bearer <YOUR_ACCESS_TOKEN_HERE>",
)


res = s.bookings.get_bookings()

if res.two_hundred_application_json_object is not None:
    # handle response
    pass

```


### Response

**[operations.GetBookingsResponse](../../models/operations/getbookingsresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## create_booking_json

A booking is a temporary hold on a trip. It is not confirmed until the payment is processed.

### Example Usage

```python
import traintravel
from traintravel.models import components

s = traintravel.Traintravel(
    o_auth2="Bearer <YOUR_ACCESS_TOKEN_HERE>",
)

req = components.BookingInput(
    trip_id='4f4e4e1-c824-4d63-b37a-d8d698862f1d',
    passenger_name='John Doe',
)

res = s.bookings.create_booking_json(req)

if res.two_hundred_and_one_application_json_object is not None:
    # handle response
    pass

```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [components.BookingInput](../../models/components/bookinginput.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |


### Response

**[operations.CreateBookingJSONResponse](../../models/operations/createbookingjsonresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## create_booking_raw

A booking is a temporary hold on a trip. It is not confirmed until the payment is processed.

### Example Usage

```python
import traintravel

s = traintravel.Traintravel(
    o_auth2="Bearer <YOUR_ACCESS_TOKEN_HERE>",
)

req = '0x254ECD7124'.encode()

res = s.bookings.create_booking_raw(req)

if res.two_hundred_and_one_application_json_object is not None:
    # handle response
    pass

```

### Parameters

| Parameter                                  | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `request`                                  | [bytes](../../models/.md)                  | :heavy_check_mark:                         | The request object to use for the request. |


### Response

**[operations.CreateBookingRawResponse](../../models/operations/createbookingrawresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## get_booking

Returns the details of a specific booking.

### Example Usage

```python
import traintravel

s = traintravel.Traintravel(
    o_auth2="Bearer <YOUR_ACCESS_TOKEN_HERE>",
)


res = s.bookings.get_booking(booking_id='a77aa404-6bb9-47bd-b109-bd45c26a3554')

if res.two_hundred_application_json_object is not None:
    # handle response
    pass

```

### Parameters

| Parameter                          | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `booking_id`                       | *str*                              | :heavy_check_mark:                 | The ID of the booking to retrieve. |


### Response

**[operations.GetBookingResponse](../../models/operations/getbookingresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

## delete_booking

Deletes a booking, cancelling the hold on the trip.

### Example Usage

```python
import traintravel

s = traintravel.Traintravel(
    o_auth2="Bearer <YOUR_ACCESS_TOKEN_HERE>",
)


res = s.bookings.delete_booking(booking_id='54daa3c3-b59e-48c1-b85d-6360bf713488')

if res is not None:
    # handle response
    pass

```

### Parameters

| Parameter                          | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `booking_id`                       | *str*                              | :heavy_check_mark:                 | The ID of the booking to retrieve. |


### Response

**[operations.DeleteBookingResponse](../../models/operations/deletebookingresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |
