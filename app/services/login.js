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
            verificator.innerHTML = '<span class="rup-lozenge rup-lozenge--sm rup-lozenge--success" aria-describedby="lozenge-desc-8">Correct</span>'+
            '<p id="lozenge-desc-8" class="rup-visually-hidden">A bit of description about what the lozenge represents.</p>'; 
             return true;
           
            
        }else{      
            console.log("[CCC] ❌​ Please enter a valid mail address");
            let verificator = document.getElementById("verificator");
            verificator.innerHTML = '<span class="rup-lozenge rup-lozenge--issue" aria-describedby="lozenge-desc-4">Please enter a valid mail address</span>'+
            '<p id="lozenge-desc-4" class="rup-visually-hidden">A bit of description about what the lozenge represents.</p>';
            return false;
        }
    }
}