import {readFileSync} from "fs"
export default function getRMovie(){
	const file = readFileSync("./data/movie_names.txt")
	const t = Array.from(Array(5).keys()).map(x => x + 1)
	const rand = [...Array(5)].map(e=>Math.random()*40|0)
	const moviess = file.toString().split(/\r\n/)
	const movies = rand.map(i => moviess[i])
	// console.log(movies)
	return movies
}

