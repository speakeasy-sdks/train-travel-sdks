# Stations
(*Stations*)

## Overview

Find and filter train stations across Europe, including their location  and local timezone.

### Available Operations

* [GetStations](#getstations) - Get a list of train stations

## GetStations

Returns a list of all train stations in the system.

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
    res, err := s.Stations.GetStations(ctx)
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

**[*operations.GetStationsResponse](../../models/operations/getstationsresponse.md), error**
| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| sdkerrors.SDKError | 4xx-5xx            | */*                |
