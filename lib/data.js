const data ={
        "d": [
            {
                "i": {
                    "height": 1080,
                    "imageUrl": "https://m.media-amazon.com/images/M/MV5BYTQxMmMwZTAtZjIzOC00NjlhLTkzOGYtNzc1OGZhNzczYWM1XkEyXkFqcGdeQXVyMTIzMzg0MTM2._V1_.jpg",
                    "width": 1080
                },
                "id": "tt10888594",
                "l": "Radhe",
                "q": "feature",
                "rank": 25,
                "s": "Salman Khan, Disha Patani",
                "v": [
                    {
                        "i": {
                            "height": 1080,
                            "imageUrl": "https://m.media-amazon.com/images/M/MV5BM2I1MzA3YjQtMzA2Yy00YjlhLTg5NWItYTBhMWIxODI5NTdiXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
                            "width": 1920
                        },
                        "id": "vi719634457",
                        "l": "Radhe (2021) Trailer",
                        "s": "2:52"
                    },
                    {
                        "i": {
                            "height": 794,
                            "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTQ3YjI5ZmQtMmU4ZC00NTMwLWIwN2EtZTQ1OTE3MDhhNGRlXkEyXkFqcGdeQXNuZXNodQ@@._V1_.jpg",
                            "width": 1411
                        },
                        "id": "vi2898378777",
                        "l": "Salman Khan Previews the Villians in 'Radhe'",
                        "s": "2:13"
                    },
                    {
                        "i": {
                            "height": 1080,
                            "imageUrl": "https://m.media-amazon.com/images/M/MV5BY2I3YWI5YmYtZWMxZC00NWI5LWJkMzQtNTRmZGY0ZDhkYWVjXkEyXkFqcGdeQXNuZXNodQ@@._V1_.jpg",
                            "width": 1920
                        },
                        "id": "vi1674559001",
                        "l": "How Randeep Hooda Prepared For the Action Sequences in 'Extraction'",
                        "s": "6:35"
                    }
                ],
                "vt": 3,
                "y": 2021
            },
            {
                "i": {
                    "height": 1280,
                    "imageUrl": "https://m.media-amazon.com/images/M/MV5BMzNhOTdlNmUtYzNiYi00MmUxLTg3ZjgtZjk4Y2Y5YTk3ODdiXkEyXkFqcGdeQXVyMTE2MjAzMTU3._V1_.jpg",
                    "width": 1024
                },
                "id": "tt8960382",
                "l": "Radhe Shyam",
                "q": "feature",
                "rank": 8686,
                "s": "Pooja Hegde, Prabhas",
                "y": 2021
            },
            {
                "i": {
                    "height": 6035,
                    "imageUrl": "https://m.media-amazon.com/images/M/MV5BZWViNDMzOTktZmI4Yy00NWRmLTkwMTAtYmUxZTVhMjU3ZjVkXkEyXkFqcGdeQXVyMDgzMzYwMA@@._V1_.jpg",
                    "width": 4085
                },
                "id": "tt10087640",
                "l": "Ráðherrann",
                "q": "TV series",
                "rank": 19715,
                "s": "Ólafur Darri Ólafsson, Anita Briem",
                "y": 2020,
                "yr": "2020-"
            },
            {
                "id": "nm3798672",
                "l": "Radhe",
                "rank": 50950,
                "s": "Actress, Striker (2010)"
            },
            {
                "id": "nm1198615",
                "l": "Radheshyam",
                "rank": 194586,
                "s": "Actor, Johny Mera Naam (1970)"
            },
            {
                "id": "nm9039986",
                "l": "Radheya Jegatheva",
                "rank": 218995,
                "s": "Director, The Quiet (2019)"
            },
            {
                "i": {
                    "height": 1112,
                    "imageUrl": "https://m.media-amazon.com/images/M/MV5BNDBjZTY2ZGEtZmNkOC00ZTFkLWE1ZDAtMjk5ODJkNGQxZDJhXkEyXkFqcGdeQXVyMTA3NTkzNjc3._V1_.jpg",
                    "width": 1081
                },
                "id": "tt13021310",
                "l": "Radhe Govinda",
                "q": "video",
                "rank": 229279,
                "s": "Harinam Chintamani, Govind Krsna Das",
                "y": 2020
            },
            {
                "id": "tt0232502",
                "l": "Radhe Shyam",
                "q": "feature",
                "rank": 246073,
                "s": "Khurshid Begum, Sunita Devi",
                "y": 1932
            }
        ],
        "q": "radhe",
        "v": 1
}

function getSub(data){
    const m = []
    data.map(i => {
        if (i.i){
            m.push({
                id: i.l,
                img: i.i.imageUrl,
                
            })
        }
    })
    return m
}

export function getJson(data){
    const m = []
    data.d.map(i => {
        if (i.i && i.q == "feature") {
            if (i.v) {
                m.push(
                    {
                        id: i.l,
                        img: i.i.imageUrl,
                        y: i.y,
                        a: i.s,
                        vi: getSub(i.v)
                    }
                )
            }else {
                m.push(
                    {
                        id: i.l,
                        img: i.i.imageUrl,
                        y: i.y,
                        a: i.s
                    }
                )
            }
            
        }
    });
    return m
}

export default data

// export const m = createJson(data)
// const m = getJson(data)

// console.log(m)
