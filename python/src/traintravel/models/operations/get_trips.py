"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ...models.components import httpmetadata as components_httpmetadata
from ...models.components import trip as components_trip
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from traintravel import utils
from typing import Dict, List, Optional


@dataclasses.dataclass
class GetTripsRequest:
    origin: str = dataclasses.field(metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    r"""The ID of the origin station"""
    destination: str = dataclasses.field(metadata={'query_param': { 'field_name': 'destination', 'style': 'form', 'explode': True }})
    r"""The ID of the destination station"""
    date_: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    r"""The date and time of the trip in ISO 8601 format in origin station's timezone."""
    bicycles: Optional[bool] = dataclasses.field(default=False, metadata={'query_param': { 'field_name': 'bicycles', 'style': 'form', 'explode': True }})
    r"""Only return trips where bicycles are known to be allowed"""
    dogs: Optional[bool] = dataclasses.field(default=False, metadata={'query_param': { 'field_name': 'dogs', 'style': 'form', 'explode': True }})
    r"""Only return trips where dogs are known to be allowed"""
    



@dataclasses.dataclass
class GetTripsTripsLinks:
    self_: Optional[str] = dataclasses.field(default=None)
    next: Optional[str] = dataclasses.field(default=None)
    prev: Optional[str] = dataclasses.field(default=None)
    



@dataclasses.dataclass
class GetTripsTripsResponseBody:
    r"""This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS)."""
    data: Optional[List[components_trip.Trip]] = dataclasses.field(default=None)
    links: Optional[GetTripsTripsLinks] = dataclasses.field(default=None)
    



@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetTripsLinks:
    self_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('self'), 'exclude': lambda f: f is None }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('next'), 'exclude': lambda f: f is None }})
    prev: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('prev'), 'exclude': lambda f: f is None }})
    



@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetTripsResponseBody:
    r"""This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS)."""
    data: Optional[List[components_trip.Trip]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('data'), 'exclude': lambda f: f is None }})
    links: Optional[GetTripsLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('links'), 'exclude': lambda f: f is None }})
    



@dataclasses.dataclass
class GetTripsResponse:
    http_meta: components_httpmetadata.HTTPMetadata = dataclasses.field()
    headers: Dict[str, List[str]] = dataclasses.field()
    two_hundred_application_json_object: Optional[GetTripsResponseBody] = dataclasses.field(default=None)
    r"""A list of available train trips"""
    body: Optional[bytes] = dataclasses.field(default=None)
    

