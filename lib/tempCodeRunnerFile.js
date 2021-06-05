
                id: i.l,
                img: i.i.imageUrl
            })
        }
    })
    return m
}

function createJson(data){
    const m = []
    data.d.map(i => {
        if (i.i) {
            if (i.v) {
                m.push(
                    {
                        id: i.l,
                        img: i.i.imageUrl,
                        vi: getSub(i.v)
                    }
                )
            }else {
                m.push(
                    {
                        id: i.l,
                        img: i.i.imageUrl,
                    }
                )
            }
            
        }
    });
    return m
}

// export default data

// export const m = createJson(data)
const m = getSub(data.d[0].v)

console.log(m)
