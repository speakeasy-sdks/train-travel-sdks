# Train Travel Go Library

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

```bash
go get https://github.com/speakeasy-sdks/train-travel-sdks/go
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```go
package main

import (
	"context"
	"log"
	"traintravel"
	"traintravel/models/components"
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
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [Stations](docs/sdks/stations/README.md)

* [GetStations](docs/sdks/stations/README.md#getstations) - Get a list of train stations

### [Trips](docs/sdks/trips/README.md)

* [GetTrips](docs/sdks/trips/README.md#gettrips) - Get available train trips

### [Bookings](docs/sdks/bookings/README.md)

* [GetBookings](docs/sdks/bookings/README.md#getbookings) - List existing bookings
* [CreateBookingJSON](docs/sdks/bookings/README.md#createbookingjson) - Create a booking
* [CreateBookingRaw](docs/sdks/bookings/README.md#createbookingraw) - Create a booking
* [GetBooking](docs/sdks/bookings/README.md#getbooking) - Get a booking
* [DeleteBooking](docs/sdks/bookings/README.md#deletebooking) - Delete a booking

### [Payments](docs/sdks/payments/README.md)

* [CreateBookingPayment](docs/sdks/payments/README.md#createbookingpayment) - Pay for a Booking
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or an error, they will never return both.  When specified by the OpenAPI spec document, the SDK will return the appropriate subclass.

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| sdkerrors.SDKError | 4xx-5xx            | */*                |

### Example

```go
package main

import (
	"context"
	"errors"
	"log"
	"traintravel"
	"traintravel/models/components"
	"traintravel/models/sdkerrors"
)

func main() {
	s := traintravel.New(
		traintravel.WithSecurity("Bearer <YOUR_ACCESS_TOKEN_HERE>"),
	)

	ctx := context.Background()
	res, err := s.Stations.GetStations(ctx)
	if err != nil {

		var e *sdkerrors.SDKError
		if errors.As(err, &e) {
			// handle error
			log.Fatal(e.Error())
		}
	}
}

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally using the `WithServerIndex` option when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.example.com` | None |

#### Example

```go
package main

import (
	"context"
	"log"
	"traintravel"
	"traintravel/models/components"
)

func main() {
	s := traintravel.New(
		traintravel.WithServerIndex(0),
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


### Override Server URL Per-Client

The default server can also be overridden globally using the `WithServerURL` option when initializing the SDK client instance. For example:
```go
package main

import (
	"context"
	"log"
	"traintravel"
	"traintravel/models/components"
)

func main() {
	s := traintravel.New(
		traintravel.WithServerURL("https://api.example.com"),
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
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Go SDK makes API calls that wrap an internal HTTP client. The requirements for the HTTP client are very simple. It must match this interface:

```go
type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}
```

The built-in `net/http` client satisfies this interface and a default client based on the built-in is provided by default. To replace this default with a client of your own, you can implement this interface yourself or provide your own client configured as desired. Here's a simple example, which adds a client with a 30 second timeout.

```go
import (
	"net/http"
	"time"
	"github.com/myorg/your-go-sdk"
)

var (
	httpClient = &http.Client{Timeout: 30 * time.Second}
	sdkClient  = sdk.New(sdk.WithClient(httpClient))
)
```

This can be a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration.
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `OAuth2`     | oauth2       | OAuth2 token |

You can configure it using the `WithSecurity` option when initializing the SDK client instance. For example:
```go
package main

import (
	"context"
	"log"
	"traintravel"
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
<!-- End Authentication [security] -->

<!-- Start Special Types [types] -->
## Special Types


<!-- End Special Types [types] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
