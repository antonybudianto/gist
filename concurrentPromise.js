// const promises = [2000,1000,3000,500,4000,1000].map(t => () => new Promise((res) => setTimeout(() => {console.log(t); res()}, t)))

const concurrentPromise = async (promises, n) => {
    const batch = _.chunk(promises, n)
    for(let b of batch) {
        console.log(b)
        await Promise.all(b.map(cb => cb()))
    }
    console.log('DONE')
}
