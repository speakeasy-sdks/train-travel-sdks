# Bookings
(*Bookings*)

## Overview

Create and manage bookings for train trips, including passenger  details and optional extras.

### Available Operations

* [GetBookings](#getbookings) - List existing bookings
* [CreateBookingJSON](#createbookingjson) - Create a booking
* [CreateBookingRaw](#createbookingraw) - Create a booking
* [GetBooking](#getbooking) - Get a booking
* [DeleteBooking](#deletebooking) - Delete a booking

## GetBookings

Returns a list of all trips booking by the authenticated user.

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

    ctx := context.Background()
    res, err := s.Bookings.GetBookings(ctx)
    if err != nil {
        log.Fatal(err)
    }
    if res.TwoHundredApplicationJSONObject != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                             | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `ctx`                                                 | [context.Context](https://pkg.go.dev/context#Context) | :heavy_check_mark:                                    | The context to use for the request.                   |


### Response

**[*operations.GetBookingsResponse](../../models/operations/getbookingsresponse.md), error**
| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| sdkerrors.SDKError | 4xx-5xx            | */*                |

## CreateBookingJSON

A booking is a temporary hold on a trip. It is not confirmed until the payment is processed.

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

    ctx := context.Background()
    res, err := s.Bookings.CreateBookingJSON(ctx, components.BookingInput{
        TripID: traintravel.String("4f4e4e1-c824-4d63-b37a-d8d698862f1d"),
        PassengerName: traintravel.String("John Doe"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.TwoHundredAndOneApplicationJSONObject != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `ctx`                                                              | [context.Context](https://pkg.go.dev/context#Context)              | :heavy_check_mark:                                                 | The context to use for the request.                                |
| `request`                                                          | [components.BookingInput](../../models/components/bookinginput.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |


### Response

**[*operations.CreateBookingJSONResponse](../../models/operations/createbookingjsonresponse.md), error**
| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| sdkerrors.SDKError | 4xx-5xx            | */*                |

## CreateBookingRaw

A booking is a temporary hold on a trip. It is not confirmed until the payment is processed.

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

    ctx := context.Background()
    res, err := s.Bookings.CreateBookingRaw(ctx, []byte("0x254ECD7124"))
    if err != nil {
        log.Fatal(err)
    }
    if res.TwoHundredAndOneApplicationJSONObject != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                             | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `ctx`                                                 | [context.Context](https://pkg.go.dev/context#Context) | :heavy_check_mark:                                    | The context to use for the request.                   |
| `request`                                             | [[]byte](../../.md)                                   | :heavy_check_mark:                                    | The request object to use for the request.            |


### Response

**[*operations.CreateBookingRawResponse](../../models/operations/createbookingrawresponse.md), error**
| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| sdkerrors.SDKError | 4xx-5xx            | */*                |

## GetBooking

Returns the details of a specific booking.

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


    var bookingID string = "a77aa404-6bb9-47bd-b109-bd45c26a3554"

    ctx := context.Background()
    res, err := s.Bookings.GetBooking(ctx, bookingID)
    if err != nil {
        log.Fatal(err)
    }
    if res.TwoHundredApplicationJSONObject != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                             | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `ctx`                                                 | [context.Context](https://pkg.go.dev/context#Context) | :heavy_check_mark:                                    | The context to use for the request.                   |
| `bookingID`                                           | *string*                                              | :heavy_check_mark:                                    | The ID of the booking to retrieve.                    |


### Response

**[*operations.GetBookingResponse](../../models/operations/getbookingresponse.md), error**
| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| sdkerrors.SDKError | 4xx-5xx            | */*                |

## DeleteBooking

Deletes a booking, cancelling the hold on the trip.

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


    var bookingID string = "54daa3c3-b59e-48c1-b85d-6360bf713488"

    ctx := context.Background()
    res, err := s.Bookings.DeleteBooking(ctx, bookingID)
    if err != nil {
        log.Fatal(err)
    }
    if res != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                             | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `ctx`                                                 | [context.Context](https://pkg.go.dev/context#Context) | :heavy_check_mark:                                    | The context to use for the request.                   |
| `bookingID`                                           | *string*                                              | :heavy_check_mark:                                    | The ID of the booking to retrieve.                    |


### Response

**[*operations.DeleteBookingResponse](../../models/operations/deletebookingresponse.md), error**
| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| sdkerrors.SDKError | 4xx-5xx            | */*                |
