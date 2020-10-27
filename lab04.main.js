// Update this constant with your ServiceNow credentials
const options = {
  url: 'https://dev93646.service-now.com/',
  username: 'admin',
  password: 'Od8oZK4wiGWf',
serviceNowTable: 'change_request'
};

// Import built-in Node.js package path.
const path = require('path');

/**
 * Import the ServiceNowConnector class from local Node.js module connector.js.
 *   and assign it to constant ServiceNowConnector.
 * When importing local modules, IAP requires an absolute file reference.
 * Built-in module path's join method constructs the absolute filename.
 */
const ServiceNowConnector = require(path.join(__dirname, './connector.js'));
/**
 * @function mainOnObject
 * @description Instantiates an object from the imported ServiceNowConnector class
 *   and tests the object's get and post methods.
 */
function mainOnObject() {
  // Instantiate an object from class ServiceNowConnector.
  const connector = new ServiceNowConnector(options);
  // Test the object's get and post methods.
  // You must write the arguments for get and post.
  connector.get((data, errorOut) =>{
      if (errorOut) {
          console.error(errorOut)
          console.log(`\nGET Request returned:\n${JSON.stringify(errorOut)} error`);
      }
      console.log(`\nGET Request returned:\n${JSON.stringify(data)}`);
  }
  );
  connector.post((data, errorOut) =>{
      if (errorOut) {
          console.error(errorOut)
          console.log(`\nPOST Request returned:\n${JSON.stringify(errorOut)} error`);
      }
      console.log(`\nPOST Request returned:\n${JSON.stringify(data)}`);
  }
  );
}

// Call mainOnObject to run it.
mainOnObject();