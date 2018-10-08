
class Helper {
	static baseURL(){
		return "https://api.foursquare.com/v2";
	}

	static auth(){
		const keys = {
			//client id
			client_id: "02ONRBOTCO3H1QD0Y3U3ZL2V2BP1PYHPNXFQEXRAJOOIJHB1",
			client_secret: "IP01UHEG5AKED10WFOJYIBXWN34SMOWIPAM2W3A421KTUAFN", 
			v: "20181007"
		};
		return Object.keys(keys)
		.map(key => `${key}=${keys[key]}`)
		.join("&");
	}

	static urlBuilder(urlParameters){
		if(!urlParameters){
			return ""
		}

		return Object.keys(urlParameters)
		.map(key => `${keys}=${urlParameters[key]}`)
		.join("&");
	}

	static headers() {
		return {
			Accept: "application/json"
		};
	}

	static simpleFetch(endPoint, method, urlParameters) {
		let requestData = {
			method, 
			headers:  Helper.headers()
		}

		return fetch(`${Helper.baseURL()}${endPoint}?${Helper.auth()&${Helper.urlBuilder(
			urlParameters
			)}`
		requestData

		).then(res=> res.json());
	}
}

export default class SquareAPI {
	static search(urlParameters) {
		returl Helper.simpleFetch("/venues/search", "GET", urlParameters);
	}

	static getVenueDetails(VENUE_ID){
		return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
	}

	static getVenuePhotos(VENUE_ID) {
		return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, "GET");
	}
}