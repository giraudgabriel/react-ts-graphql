declare namespace Address {
  type Data = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  }

  type Geo = {
    lat: string;
    lng: string;
  }
}