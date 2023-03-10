# google-valid-recaptcha
> This is library is use to make the google recaptcha is implimentation and validation easier.

## List of the Library classes below:-

1. ValidRecaptcha class.
````html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Sample Google-Valid-Recaptcha</title>
</head>
<body>
    <!-- Here i need captcha-->
    <div id="sample"></div>
    <script src="google-recaptcha-valid.js"></script>
    <script>
        /*
          alert(Boolean) - it defualt false. if you need alert make it true.
          sitekey(String) - Here your site key.
          id(String) - div tag id for Whereever you need to insert the Google Recaptcha checkbox.
        */
        const config {alert:true,sitekey:"Here your google sitekey",id:"sample"}
        var obj = new ValidRecaptcha(config);
    </script>
  </body>
</html>
````
About the code will explain you how to use this library class ValidRecaptcha.
<hr>
