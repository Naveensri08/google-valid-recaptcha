class ValidRecaptcha {
    
    // Config variable's for this class
    URL = 'https://www.google.com/recaptcha/api.js';
    ID = 'googleRecaptcha';
    SITEKEY = '';
    ALERT = false;

    constructor(config) {
     
        // check if the config is empty.
        if(JSON.stringify(config) === '{}')
            console.warn("ValidRecaptcha : Empty Config Object is Passed");
        
        // Insert the script tage.
        this.InsertPlugin();
        
        if(JSON.stringify(config) !== '{}') {

            for(var item in config) {
                this[item.toUpperCase()] = config[item];
            }
        }

        if(this.SITEKEY === '')
            console.error("ValidRecaptcha : Need Google Recaptcha Sitekey to initiate");

        var Id = document.getElementById(this.ID);
        if(Id === null)
            console.error("ValidRecaptcha : Need a Element id to initiate \"Google Recaptcha Checkbox\"");
        else
            this.InsertRecaptchaCheckbox(Id);
        
    }

    // static getInstance(){
    //     return new ValidRecaptcha(null)
    // }

    // create and insert the google script link.
    InsertPlugin() {
        
        // create the script tag
        const ele = document.createElement('script');
        // ele.src = this.URL;
        // document.body.innerHTML = ele.innerHTML;
        // append the google URL
        ele.setAttribute('src',this.URL); 
        // and also append the created tag into body tag.
        document.body.appendChild(ele); 
    }

    // Create and Insert the Recaptcha Cehckbox by Given element id.
    InsertRecaptchaCheckbox(id) {
        // create the empty div tag.
        var recaptcha = document.createElement("div");
        // add the google class.
        recaptcha.className += "g-recaptcha";
        // also add the Site key into the div tag.
        recaptcha.setAttribute("data-sitekey",this.SITEKEY);
        //  finally append the created tag into the target id tag.
        id.appendChild(recaptcha);
    }

    // Get status if the Recaptcha is Checked Or Not.
    getRecaptcha() {
        // get the google recaptcha response.
        if(grecaptcha.getResponse().length == 0) {
            if(this.ALERT)
                alert("Please, check the Captcha");
            return false;
        }
        else 
            return true;
    }
}