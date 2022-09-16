import Service from '@ember/service';

export default class LoginService extends Service {
userArray = [];
constructor(){
    super();
}

    saveUser(email){
        if (email.includes('@copyright.com')) {
            this.userArray.push({email, password: 123456 });
            localStorage.setItem('currentUser', JSON.stringify(this.userArray));
            let verificator = document.getElementById("verificator");
            verificator.innerHTML = '<span class="rup-lozenge rup-lozenge--sm rup-lozenge--success" aria-describedby="lozenge-desc-8">Success!</span>'+
            '<p id="lozenge-desc-8" class="rup-visually-hidden">A bit of description about what the lozenge represents.</p>'; 
            let spinner = document.getElementById("loading");
            spinner.innerHTML = '<span class="rup-loader rup-loader--sm" role="status">'+
                                    '<span class="rup-visually-hidden">Loading...</span></span>';
            
             return true;
        }else{      
            console.log("[CCC] ❌​ Please enter a valid mail address");
            let verificator = document.getElementById("verificator");
            verificator.innerHTML = '<span class="rup-lozenge rup-lozenge--sm"  aria-describedby="lozenge-desc-6">Verifying ...</span>'+
                                    '<p id="lozenge-desc-6" class="rup-visually-hidden">Verifying</p>';
            let spinner = document.getElementById("loading");
            spinner.innerHTML = '<span class="rup-loader rup-loader--sm" role="status">'+
                                    '<span class="rup-visually-hidden">Loading...</span></span>';            
            return false;
        }
    }
}