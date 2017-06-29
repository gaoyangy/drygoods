var http = require('http'),
    exec = require('exec'),
    config = require('config/index.js')

const PORT = 9988,
    PATH = '../drygoods/'

var deployServer = http.createServer(function(request, response) {
    if (request.url.search(/gitpull\/?$/i) > 0) {
        if (config.isNpm) {
            var commands = [
                'cd ' + PATH,
                'git pull',
                'npm install',
                'npm run build' //如果本地没有编译而且有安装过其他插件
            ]
        }
        if (config.isProduce) {
            'cd ' + PATH,
            'git pull',
            'npm run build',
            'cp -rf dist/* /www' //发布线上
        } else {
            var commands = [
                'cd ' + PATH,
                'git pull',
                'npm run build'
            ].join(' && ')
        }
        exec(commands, function(err, out, code) {
            if (err instanceof Error) {
                response.writeHead(500)
                response.end('Server Internal Error.'+new Date())
                throw err
            }
            process.stderr.write(err)
            process.stdout.write(out)
            response.writeHead(200)
            response.end('Deploy Done.'+new Date())

        })

    } else {

        response.writeHead(404)
        response.end('Not Found.' + new Date());

    }
})

deployServer.listen(PORT)