const os = require('os')
const log = require('./logger')

// console.log(os.platform())

setInterval(() => {

    //desistruturando objeto OS
    const { freemem, totalmem } = os

    // console.log(freemem, totalmem()/1024)

    const total = parseInt(totalmem() / 1024 / 1024)
    const mem = parseInt(freemem() / 1024 / 1024) 
    const percents = parseInt((mem / total) * 100)

    // console.log(mem, total, percents)

    const status = {
        free: `${mem}MB`,
        total: `${total}MB`,
        usage: `${percents}%`
    }

    console.clear()
    console.log("===== PC STATUS ======")
    console.table(status)

    log(`${JSON.stringify(status)}\n`)

}, 1000)


