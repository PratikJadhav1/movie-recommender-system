// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import highlight from "cli-highlight"
import getDataByQuery, { getDataByQuery2 } from "../../lib/api";

console.logjson = (obj) => console.log(
    highlight( JSON.stringify(obj, null, 4), 
               { language: 'json', ignoreIllegals: true } ));



export default async (req, res) => {
    // const data = await getDataByQuery("radhe")
    const data = await getDataByQuery2()
    // console.logjson(data)
    // console.log("hi", req.query)
    res.status(200).json(req.query)
  }
  