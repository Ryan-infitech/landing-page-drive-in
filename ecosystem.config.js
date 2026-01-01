module.exports = {
  apps: [
    {
      name: 'landing-page-drive-in',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: '/home/rian/project/testing/landing-page-drive-in',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      error_file: '/home/rian/project/testing/landing-page-drive-in/logs/error.log',
      out_file: '/home/rian/project/testing/landing-page-drive-in/logs/out.log',
      log_file: '/home/rian/project/testing/landing-page-drive-in/logs/combined.log',
      time: true,
    },
  ],
};
