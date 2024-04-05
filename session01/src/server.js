// console.log("Hello NodeJS");
var http = require('http');
var fs = require('fs')

var port = 8081
var html = ""

var server = http.createServer(function (req, res) {
    let dataUser = [
        {
            userID: 1,
            name: 'Thuy',
            address: 'Sai gon'
        },
        {
            userID: 2,
            name: 'Thao',
            address: 'Ha noi'
        },
        {
            userID: 3,
            name: 'Huyen',
            address: 'Da Nang'
        },
    ]
    dataUser.forEach((item, index) => {
        html +=
            `
        <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.address}</td>
        </tr>
        `
    })

    let file = fs.readFileSync("./index.html", "utf-8")
    file = file.replace('binh', html)
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.write('<h1>Học lập trình 12345</h1>')
    res.end(file)

}).listen(8081, function name() {
    console.log(`Gọi server ở port: http://localhost:${port}`)
})

