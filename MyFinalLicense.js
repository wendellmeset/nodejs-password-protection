var licenseKey = require('license-key-gen');

var StudentUser = {company:"wendellmesettech"} // username
var licenseData = {info:StudentUser, prodCode:"EEN850392", appVersion:"1.0"}

try{
    var license = licenseKey.createLicense(licenseData)
    console.log(license);
}catch(err){
    console.log(err);
}
