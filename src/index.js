module.exports = function reverse (n) {
    let strN = String(Math.abs(n))
    let rezult = strN.split('').reverse().join().replace(/,/g,'')
    return Number(rezult)
}
