# Stations
(*stations*)

## Overview

Find and filter train stations across Europe, including their location  and local timezone.

### Available Operations

* [get_stations](#get_stations) - Get a list of train stations

## get_stations

Returns a list of all train stations in the system.

### Example Usage

```python
import traintravel

s = traintravel.Traintravel(
    o_auth2="Bearer <YOUR_ACCESS_TOKEN_HERE>",
)


res = s.stations.get_stations()

if res.two_hundred_application_json_object is not None:
    # handle response
    pass

```


### Response

**[operations.GetStationsResponse](../../models/operations/getstationsresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |
