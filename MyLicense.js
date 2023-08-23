var licenseKey = require('license-key-gen');

var userInfo = {company:"wendellmesettech",street:"2 W D", city:"Orange", state:"Cal", zip:"98888"}
var licenseData = {info:StudentUser, prodCode:"EEN850392", appVersion:"1.0", osType:'PINGU1'}

try{
    var license = licenseKey.createLicense(licenseData)
    console.log(license);
}catch(err){
    console.log(err);
}
