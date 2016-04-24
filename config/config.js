module.exports = {
  development: {
    root: require('path').normalize(__dirname + '/..'),
    app: {
      name: 'website',
    },
    // db:{
    //   database:"huawo_admin",
    //   username:"api",
    //   password:"huawo2015",
    //   options:{
    //     dialect: "postgres",
    //     host:"gcds.cyqvivtxbihc.us-west-1.rds.amazonaws.com",
    //     port:"5432",
    //     pool:{
    //       maxConnections: 5,
    //       minConnections: 0,
    //       maxIdleTime: 10000
    //     }
    //   }
    // }
  },
  production: {
    root: require('path').normalize(__dirname + '/../..'),
    app: {
      name: 'website',
    },
    db:{}
  },
};