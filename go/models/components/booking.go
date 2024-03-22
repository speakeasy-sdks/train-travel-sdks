// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package components

type Booking struct {
	// Unique identifier for the booking
	ID *string `json:"id,omitempty"`
	// Identifier of the booked trip
	TripID *string `json:"trip_id,omitempty"`
	// Name of the passenger
	PassengerName *string `json:"passenger_name,omitempty"`
	// Indicates whether the passenger has a bicycle.
	HasBicycle *bool `json:"has_bicycle,omitempty"`
	// Indicates whether the passenger has a dog.
	HasDog *bool `json:"has_dog,omitempty"`
}

func (o *Booking) GetID() *string {
	if o == nil {
		return nil
	}
	return o.ID
}

func (o *Booking) GetTripID() *string {
	if o == nil {
		return nil
	}
	return o.TripID
}

func (o *Booking) GetPassengerName() *string {
	if o == nil {
		return nil
	}
	return o.PassengerName
}

func (o *Booking) GetHasBicycle() *bool {
	if o == nil {
		return nil
	}
	return o.HasBicycle
}

func (o *Booking) GetHasDog() *bool {
	if o == nil {
		return nil
	}
	return o.HasDog
}
