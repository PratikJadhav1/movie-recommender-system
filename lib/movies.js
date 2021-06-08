import fs from "fs"
import path from "path"

const dataDir = path.join(process.cwd(), "/data/movie_names.txt")
// const ddir = fs.readdirSync(postsDir)
// console.log(dataDir)

export default async function getRMovie(){
	
	const file = fs.readFileSync(dataDir)
	
	const movies = file.toString().split(/\r\n/)
	
	return {
		movies
	}
}

