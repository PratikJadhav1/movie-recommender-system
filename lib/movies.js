// import fs from "fs"
// import path from "path"

// const dataDir = path.join(process.cwd(), "/data/movie_names.txt")
// const ddir = fs.readdirSync(postsDir)
// console.log(dataDir)

// export default async function getRMovie(){
	
// 	const file = fs.readFileSync(dataDir)
	
// 	const movies = file.toString().split(/\r\n/)
	
// 	return {
// 		movies
// 	}
// }

const dataMovies = [
	'Baazigar',
	'Wake Up Sid',
	'Tubelight',
	'Delhi Belly',
	'Prem Ratan Dhan Payo',
	'Rockstar',
	'Piku',
	'Socha Na Tha',
	'Dil Se',
	'Devdas',
	'Hum Dil De Chuke Sanam',
	'Nenokkadine',
	'Jolly LLB 2',
	'Ghilli',
	'Raanjhanaa',
	'Hungama',
	'Rangeela',
	'Khakee',
	'Kaththi',
	'Rocket Singh',
	'Dear Zindagi',
	'Jaane Tu... Ya Jaane Na',
	'Madaari',
	'Mankatha',
	'Ghajini',
	'Yuva',
	'Baghban',
	'Badlapur',
	'Thappakki',
	'Chachi 420',
	'Guzaarish',
	'Kaminey',
	'Kabhi Khushi Kabhie Gham...',
	'Shivaji',
	'Maine Pyar Kiya',
	'Once Upon a Time in Mumbaai',
	'zero',
	'Life in a Metro',
	'Ghulam',
	'Ishqiya',
	'Khaleja',
	'Golmaal',
	'Jolly LLB',
	'Mardaani',
	'Psycho Raman',
	'Lootera',
	'Parineeta',
	'Pyaar Ka Punchnama 2',
	'Shaitan',
	'Band Baaja Baaraat',
	'Srimanthudu',
	'Dookudu',
	'Holiday',
	'Shanghai',
	'Tere Bin Laden',
	'Te3n',
	'Bhool Bhulaiyaa',
	'Uppi 2',
	'Namastey London',
	'Gunda',
	'D-Day',
	'Nanban',
	'Paa',
	'Talaash',
	'Fanna',
	'Nh10',
	'i',
	'Dedh Ishqiya',
	'Yanni Arindhaai',
	'Wazir',
	'Dasavatharam',
	'Gabbar is Back',
	'Sanam Teri Kasam',
	'Dhobi Ghat',
	'Kaabil',
	'Luck by Chance',
	'Race Gurram',
	'Koi... Mil Gaya',
	'Rab Ne Bana Di Jodi',
	'Hum Tum',
	'Pokkiri',
	'Tere Naam',
	'Mohabbatein',
	'Pardes',
	'Rustom',
	'Karthik Calling Karthik',
	'2 States',
	'Fashion',
	'Fan'
]

export default function getRMovie(count=5){
	const moviess = dataMovies
    const len = moviess.length
    const rand = [...Array(count)].map(e=>Math.random()*len|0)
    const movies = rand.map(i => moviess[i])
	return movies
}

