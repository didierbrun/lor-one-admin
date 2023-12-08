
const axios = require('axios');


module.exports = {
    afterUpdate(event) {

        const config = {
            headers: { Authorization: `Bearer ${process.env.HEROKU_BEARER}` }
        };
        
        const bodyParameters = {
            branch: "main"
        };
        
        axios.post( 
          'https://kolkrabbi.heroku.com/apps/90670ab2-faea-4979-916d-73f7f492dd2f/github/push',
          bodyParameters,
          config
        ).then(console.log).catch(console.log);

    }
};