module.exports = {
  apps: [{
    name: 'eshop-api',
    script: './index.js',
    cwd: '/home/eshop/eshop_api/current',
    instances: 2,
    exec_mode: 'cluster'
  }]
}