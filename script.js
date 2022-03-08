let info = new Userinfo();
let textArea = document.querySelector('.text');
let form = document.querySelector('.form')
async function t1() {
    console.log(info.dataCookies());
   // console.log(await info.position())
   // console.log(await info.ip());
    let pos = await info.position();
    let ip = await info.ip();
    console.log(pos);
    console.log(ip);
    let sign = window.prompt('Как вас зовут?', 'Наверное Сашка');
    textArea.value = `имя - ${sign} Долгота - ${pos.lat} Широта - ${pos.long} ip - ${ip.ipAddress} Страна - ${ip.countryName} город - ${ip.city}`;
   // form.submit();
}
t1(); 