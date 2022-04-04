import axios from 'axios';
import { Loader } from '@googlemaps/js-api-loader';

const $map = document.querySelector('#map')! as HTMLDivElement;
const $form = document.querySelector('form')!;
const $addressInput = document.querySelector('#address')! as HTMLInputElement;

const GOOGLE_API_KEY = process.env.GOOGLE_MAPS_API_KEY!;

const loader = new Loader({
  apiKey: GOOGLE_API_KEY,
  version: 'weekly',
  libraries: ['places'],
});

type GoogleGeocodingResponse = {
  results: {
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
  }[];
  status: 'OK' | 'ZERO_RESULTS';
};

type MapOptions = {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
};

function searchAddressHandler(e: Event) {
  e.preventDefault();

  const enteredAddress = $addressInput.value;

  // fetch() の代わりにサードパーティライブラリの axios を使う
  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      if (response.data.status !== 'OK') {
        throw new Error('cannot get coordinates.');
      }

      const coordinates = response.data.results[0].geometry.location;

      const mapOptions: MapOptions = {
        center: coordinates,
        zoom: 16,
      };

      loader.load().then((google) => {
        const map = new google.maps.Map($map, mapOptions);
        new google.maps.Marker({
          position: coordinates,
          map: map,
        });
      });
    })
    .catch((error) => {
      alert(error.message);
      console.log(error);
    });
}

$form.addEventListener('submit', searchAddressHandler);
