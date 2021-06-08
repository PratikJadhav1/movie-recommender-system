import fs from "fs"
import path from "path"

const dataDir = path.join(process.cwd(), "/data")
// const ddir = fs.readdirSync(postsDir)
// console.log(dataDir)

export default function getRMovie(){
	const moviesNames = path.join(dataDir, "/movie_names.txt")
	const file = fs.readFileSync(moviesNames)
	const rand = [...Array(5)].map(e=>Math.random()*40|0)
	const moviess = file.toString().split(/\r\n/)
	const movies = rand.map(i => moviess[i])
	return {
		movies
	}
}

