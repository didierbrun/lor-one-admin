
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
          'https://kolkrabbi.heroku.com/apps/4f516f79-5ac2-4659-9ecc-d2ec2f562506/github/push',
          bodyParameters,
          config
        ).then(console.log).catch(console.log);

    }
};