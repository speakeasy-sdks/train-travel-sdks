# Payments
(*Payments*)

## Overview

Pay for bookings using a card or bank account, and view payment
status and history.

> warn
> Bookings usually expire within 1 hour so you'll need to make your payment before the expiry date 


### Available Operations

* [CreateBookingPayment](#createbookingpayment) - Pay for a Booking

## CreateBookingPayment

A payment is an attempt to pay for the booking, which will confirm the booking for the user and enable them to get their tickets.

### Example Usage

```go
package main

import(
	"traintravel/models/components"
	"traintravel"
	"context"
	"log"
)

func main() {
    s := traintravel.New(
        traintravel.WithSecurity("Bearer <YOUR_ACCESS_TOKEN_HERE>"),
    )


    var bookingID string = "63d1e65c-f662-41f5-a1a8-d8793821ab51"

    bookingPayment := &components.BookingPayment{
        Amount: traintravel.Float64(49.99),
    }

    ctx := context.Background()
    res, err := s.Payments.CreateBookingPayment(ctx, bookingID, bookingPayment)
    if err != nil {
        log.Fatal(err)
    }
    if res.Object != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                               | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `ctx`                                                                   | [context.Context](https://pkg.go.dev/context#Context)                   | :heavy_check_mark:                                                      | The context to use for the request.                                     |
| `bookingID`                                                             | *string*                                                                | :heavy_check_mark:                                                      | The ID of the booking to pay for.                                       |
| `bookingPayment`                                                        | [*components.BookingPayment](../../models/components/bookingpayment.md) | :heavy_minus_sign:                                                      | N/A                                                                     |


### Response

**[*operations.CreateBookingPaymentResponse](../../models/operations/createbookingpaymentresponse.md), error**
| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| sdkerrors.SDKError | 4xx-5xx            | */*                |
