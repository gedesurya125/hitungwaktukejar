//constructor kondisi awal
function initCond (hour, minutes, second, speed, distance){
		this.hour = hour; //jam keberangkatan
		this.minutes = minutes; // menit keberangkatan
		this.second = second;// detik keberangkatan
		this.initTotalTime = second + (60*minutes) + (3600*hour); // total waktu awal /from 00:00:00
		this.timeElapsed = 0;
		this.speed = speed;//kecepatan keberangkatan  (m/s)
		this.distance = distance //jarak tempuh dari titik awal dalam meter
}


//objek nana dan angela
const nana = new initCond(12,0,0,7,0);
const angela = new initCond(13,0,0,10,0);

//Mendapatkan jarak tempuh nana ketika pukul 13:00
do{
	nana.distance += nana.speed;
	nana.initTotalTime += 1;
	if(angela.initTotalTime <= nana.initTotalTime){
		while (nana.distance > angela.distance){
			angela.distance += angela.speed;
			angela.initTotalTime += 1;
			nana.distance += nana.speed;
			nana.initTotalTime += 1;
		}
	}
}while (nana.distance > angela.distance);

console.log(nana, angela);


let chour = 0;
let cminutes = 0;
let csecond = 0;
const convertToHMS = (second) =>{
	chour = Math.floor(Math.floor(second/60)/60);
	cminutes = (second%3600)/60;
	csecond = (second%3600)%60;
	return console.log(`Nana dan Angela berada pada titik yang sama dimana Angela Mulai mendahului nana pada pukul ${chour}:${cminutes}:${csecond} pada jarak : ${nana.distance} meter`)
;};

convertToHMS(nana.initTotalTime);

document.getElementById('root').innerHTML = `<h2>Diketahui : <br/> Nana berangkat pukul : 12:00 dengan kecepatan tetap : 7 m/detik <br/> Angela brangkat pukul : 13:00 dengan kecepatan tetap : 10 m/detik <br/> maka Nana dan Angela tepat berada pada titik yang sama dimana Angela mulai mendahului Nana pada pukul : <b>${chour}:${cminutes}:${csecond}</b>, pada jarak <b>${nana.distance} meter</b> dari titik awal</h2>`;
