export default async function getDataByQuery(q) {
    const data = await fetch("https://imdb8.p.rapidapi.com/auto-complete?" + new URLSearchParams({
        q : q,
    })
    , 
    {
        "method": "GET",
        "headers": {
            
            "x-rapidapi-key": "2f42a34edcmsh52609d8e9e3891ap1eacfejsnd63fdd4a9700",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    })

    return data.json()
}
export async function getDataByQuery2(){
    const data = await fetch("https://movie9.p.rapidapi.comhttps//rapidapi.com/", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "2f42a34edcmsh52609d8e9e3891ap1eacfejsnd63fdd4a9700",
            "x-rapidapi-host": "movie9.p.rapidapi.com"
        }
    })
    console.log("data",data)
    return data.json()
}
