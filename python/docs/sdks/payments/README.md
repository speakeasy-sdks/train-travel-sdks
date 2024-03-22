# Payments
(*payments*)

## Overview

Pay for bookings using a card or bank account, and view payment
status and history.

> warn
> Bookings usually expire within 1 hour so you'll need to make your payment before the expiry date 


### Available Operations

* [create_booking_payment](#create_booking_payment) - Pay for a Booking

## create_booking_payment

A payment is an attempt to pay for the booking, which will confirm the booking for the user and enable them to get their tickets.

### Example Usage

```python
import traintravel
from traintravel.models import components

s = traintravel.Traintravel(
    o_auth2="Bearer <YOUR_ACCESS_TOKEN_HERE>",
)


res = s.payments.create_booking_payment(booking_id='63d1e65c-f662-41f5-a1a8-d8793821ab51', booking_payment=components.BookingPayment(
    amount=49.99,
))

if res.object is not None:
    # handle response
    pass

```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `booking_id`                                                                     | *str*                                                                            | :heavy_check_mark:                                                               | The ID of the booking to pay for.                                                |
| `booking_payment`                                                                | [Optional[components.BookingPayment]](../../models/components/bookingpayment.md) | :heavy_minus_sign:                                                               | N/A                                                                              |


### Response

**[operations.CreateBookingPaymentResponse](../../models/operations/createbookingpaymentresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |
