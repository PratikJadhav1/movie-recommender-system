import {readFileSync} from "fs"
import fs from "fs"
import path from "path"

const dataDir = path.join(process.cwd(), "data/movie_names.txt")
// const ddir = fs.readdirSync(postsDir)
// console.log(dataDir)

export default async function getRMovie(){
	const file = readFileSync(dataDir)
	const rand = [...Array(5)].map(e=>Math.random()*40|0)
	const moviess = file.toString().split(/\r\n/)
	const movies = rand.map(i => moviess[i])
	return movies
}

