import Service from '@ember/service';

export default class LoginService extends Service {

constructor(){
    super();
}

saveUser(){
    console.log("Estás usando el servicio");
}
}