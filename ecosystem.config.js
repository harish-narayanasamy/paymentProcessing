module.exports = {
  apps: [
    {
      name: 'PaymentGateway',
      script: 'bin/www',
      args: '',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env_local: {
        NODE_ENV: 'development',
        HOST: '0.0.0.0',
        PORT: 3000,
        ORDER: "https://staging.api.scalapay.com/v2/orders",
        CONFIGURATION: "https://staging.api.scalapay.com/v2/configurations"
      },
      env_development: {
        NODE_ENV: 'development',
        HOST: '0.0.0.0',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
