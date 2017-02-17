/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

let fs = require("fs");
let path = require('path');

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMongodbServer'
  // }

  port: 443,

  ssl: {
    ca: fs.readFileSync(path.resolve(__dirname,'../ssl/ryans-csr.pem')),
    key: fs.readFileSync(path.resolve(__dirname,'../ssl/ryans-key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname,'../ssl/ryans-cert.pem'))
  }

};
