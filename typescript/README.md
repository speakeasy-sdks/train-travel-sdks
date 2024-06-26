# Train Travel TypeScript SDK

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/train-travel-sdks/typescript
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/train-travel-sdks/typescript
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Traintravel } from "traintravel";

async function run() {
    const sdk = new Traintravel({
        oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    const result = await sdk.stations.getStations();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [stations](docs/sdks/stations/README.md)

* [getStations](docs/sdks/stations/README.md#getstations) - Get a list of train stations

### [trips](docs/sdks/trips/README.md)

* [getTrips](docs/sdks/trips/README.md#gettrips) - Get available train trips

### [bookings](docs/sdks/bookings/README.md)

* [getBookings](docs/sdks/bookings/README.md#getbookings) - List existing bookings
* [createBookingJson](docs/sdks/bookings/README.md#createbookingjson) - Create a booking
* [createBookingRaw](docs/sdks/bookings/README.md#createbookingraw) - Create a booking
* [getBooking](docs/sdks/bookings/README.md#getbooking) - Get a booking
* [deleteBooking](docs/sdks/bookings/README.md#deletebooking) - Delete a booking

### [payments](docs/sdks/payments/README.md)

* [createBookingPayment](docs/sdks/payments/README.md#createbookingpayment) - Pay for a Booking
<!-- End Available Resources and Operations [operations] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Traintravel } from "traintravel";

async function run() {
    const sdk = new Traintravel({
        oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    const result = await sdk.bookings.createBookingRaw(new TextEncoder().encode("0x254ECD7124"));

    // Handle the result
    console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Traintravel } from "traintravel";
import * as errors from "traintravel/models/errors";

async function run() {
    const sdk = new Traintravel({
        oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    let result;
    try {
        result = await sdk.stations.getStations();
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.example.com` | None |

```typescript
import { Traintravel } from "traintravel";

async function run() {
    const sdk = new Traintravel({
        serverIdx: 0,
        oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    const result = await sdk.stations.getStations();

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Traintravel } from "traintravel";

async function run() {
    const sdk = new Traintravel({
        serverURL: "https://api.example.com",
        oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    const result = await sdk.stations.getStations();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Traintravel } from "traintravel";
import { HTTPClient } from "traintravel/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Traintravel({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `oAuth2`     | oauth2       | OAuth2 token |

To authenticate with the API the `oAuth2` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Traintravel } from "traintravel";

async function run() {
    const sdk = new Traintravel({
        oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    const result = await sdk.stations.getStations();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

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
