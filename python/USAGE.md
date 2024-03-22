<!-- Start SDK Example Usage [usage] -->
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
<!-- End SDK Example Usage [usage] -->