
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
		return Object.keys(keys).map(key => `${key}=${keys[key]}`).join("&");
	}
}