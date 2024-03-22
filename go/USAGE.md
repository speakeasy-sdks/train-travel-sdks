<!-- Start SDK Example Usage [usage] -->
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