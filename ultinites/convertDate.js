exports.execute = function convertDate(d) {
    d = new Date(d)
    let year = d.getFullYear()
    let month = d.getMonth().toString().length == 1 ? '0'+ d.getMonth() : d.getMonth()
    let date = d.getDate()
    let s = date + '/' + month + '/' + year
    return s
}