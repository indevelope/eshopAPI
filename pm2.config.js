module.exports = {
  apps: [{
    name: 'eshop-api',
    script: './index.js',
    cwd: '/home/eshop/eshop_api/current',
    instances: 2,
    exec_mode: 'cluster'
  }],
  deploy: {
    production: {
      user: 'eshop',
      host: ['185.4.74.175'],
      ref: 'origin/master',
      repo: 'git@github.com:indevelope/eshopAPI.git',
      'post-deploy': 'npm install && pm2 startOrRestart pm2.config.js --env production',
      "path" : "/home/eshop/eshop_api/current",
      "ssh_options": "StrictHostKeyChecking=no"
    }
  }
}