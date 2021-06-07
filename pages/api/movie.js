// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import highlight from "cli-highlight"
import getDataByQuery, { getDataByQuery2 } from "../../lib/api";

console.logjson = (obj) => console.log(
    highlight( JSON.stringify(obj, null, 4), 
               { language: 'json', ignoreIllegals: true } ));

async function mov() {
  // const data = await fetch("https://imdb8.p.rapidapi.com/title/get-top-rated-movies", {
  //   "method": "GET",
  //   "headers": {
  //     "x-rapidapi-key": "2f42a34edcmsh52609d8e9e3891ap1eacfejsnd63fdd4a9700",
  //     "x-rapidapi-host": "imdb8.p.rapidapi.com"
  //   }
  // })
//   const data = await fetch("https://imdb8.p.rapidapi.com/title/find?" + new URLSearchParams({
//     q : "radhe",
// }), {
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-key": "2f42a34edcmsh52609d8e9e3891ap1eacfejsnd63fdd4a9700",
//       "x-rapidapi-host": "imdb8.p.rapidapi.com"
//     }
//   })
  const data = await fetch("https://imdb8.p.rapidapi.com/title/find?q=tt3896198", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "2f42a34edcmsh52609d8e9e3891ap1eacfejsnd63fdd4a9700",
      "x-rapidapi-host": "imdb8.p.rapidapi.com"
    }
  })

  // const data = await fetch("https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=%2Fchart%2Fpopular%2Fgenre%2Fadventure", {
  //   "method": "GET",
  //   "headers": {
  //     "x-rapidapi-key": "2f42a34edcmsh52609d8e9e3891ap1eacfejsnd63fdd4a9700",
  //     "x-rapidapi-host": "imdb8.p.rapidapi.com"
  //   }
  // })
  return data.json()
}

export default async (req, res) => {
    // const data = await getDataByQuery("radhe")
    // const data = await getDataByQuery2()
    let data = {data: 5}
    data = await mov()
      
 console.logjson(data)
    // console.log("hi", req.query)
    res.status(200).json({hi:"hi", data: data})
  }
