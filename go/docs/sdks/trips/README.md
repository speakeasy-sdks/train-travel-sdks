# Trips
(*Trips*)

## Overview

Timetables and routes for train trips between stations, including  pricing and availability.

### Available Operations

* [GetTrips](#gettrips) - Get available train trips

## GetTrips

Returns a list of available train trips between the specified origin and destination stations on the given date, and allows for filtering by bicycle and dog allowances.

### Example Usage

```go
package main

import(
	"traintravel/models/components"
	"traintravel"
	"context"
	"traintravel/types"
	"traintravel/models/operations"
	"log"
)

func main() {
    s := traintravel.New(
        traintravel.WithSecurity("Bearer <YOUR_ACCESS_TOKEN_HERE>"),
    )

    ctx := context.Background()
    res, err := s.Trips.GetTrips(ctx, operations.GetTripsRequest{
        Origin: "82024571-aa7c-4ed5-8370-a1e9a710b4ee",
        Destination: "16b1ba16-bd9f-4ed0-8a25-5e4245c918d7",
        Date: types.MustTimeFromString("2024-04-11T08:38:01.738Z"),
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.TwoHundredApplicationJSONObject != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `ctx`                                                                    | [context.Context](https://pkg.go.dev/context#Context)                    | :heavy_check_mark:                                                       | The context to use for the request.                                      |
| `request`                                                                | [operations.GetTripsRequest](../../models/operations/gettripsrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |


### Response

**[*operations.GetTripsResponse](../../models/operations/gettripsresponse.md), error**
| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| sdkerrors.SDKError | 4xx-5xx            | */*                |
