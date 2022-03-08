let text = document.querySelector('.text');

class Userinfo {
    constructor() {
        this.timeOpened = new Date();
        this.timezone = (new Date()).getTimezoneOffset()/60;
    }

    dataCookies(){return decodeURIComponent(document.cookie.split(";"))}

    async position(){
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
      
          return {
            long: pos.coords.longitude,
            lat: pos.coords.latitude,
            accuracy: pos.coords.accuracy,
          };
    }

    async ip(){
        /**
         *  city
         *  continent
         *  countryCode
         *  countryName
         *  ipAddress
         *  statProv
         */
        let res =  await (await fetch('https://api.db-ip.com/v2/free/self'));
        let data = await res.json()
        return data;
      
    }
  }