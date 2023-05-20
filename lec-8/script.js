// Prototype Inheritence //

// const users = {
//     name : 'Piyush',
//     username : 'Say hi',
//     password : 'pass',
//     signin: function (username,password){
//         if(username===this.username && password===this.password){
//             console.log("Login Successfully");
//         }else{
//             console.log("AuthenticationFailed");
//         }
//     }
// }
// users.signin("hi ram","pass");
// users.signin('Say hi','pass');
// console.log(users.name);
// console.log(users.password);
// console.log(users.signin);

// class signin{
//     #password;
//     constructor(name,username,password){
//         this.name = name;
//         this.username = username;
//         this.#password = password;
//     }
//     getter(username,password){
//         if(username===this.username && password===this.#password){
//             console.log("Log in Successfull");
//         }else{
//             console.log('AuthenticationFailed');
//         }
//     }
//     setter(newpassword){
//         this.#password=newpassword;
//     }
// }
// const obj = new signin ("Pushpa","Pushpa_raj","mai jukega");
// obj.getter("Pushpa_raj","mai jukega");
// console.log(obj.name);
// console.log(obj.password);
// // console.log(obj.#password);  / error /
// obj.setter("password");
// obj.getter("Pushpa_raj","mai jukega");
// obj.getter("Pushpa_raj",'password');
// obj.setter("viren");
// obj.getter("Pushpa_raj","viren");

// Polymorphism :

class user {
    #password;
    constructor(email, password){
        this.email = email;
        this.#password = password;
    }
    login(email, password){
        if(email===this.email && password===this.password){
            console.log('login Successfully');
        }else{
            console.log('AuthenticationFailed');
        }
    }
    resetpassword(newpassword){
        this.#password = newpassword;
    }
    logout(){
        console.log('logout Successfully');
    }
}

class Author extends user{
    #numofpost;
    constructor(email,password){
        super(email, password);
        this.#numofpost = 0;
    }
    CreatePost(content){
        // add content to your DB //
        this.#numofpost ++; 
    }
    getnumofpost(){
        return this.#numofpost
    }
}

class Admin extends user{
    constructor(email,password){
        super(email,password)
    }
    removeuser(userId){
        // remove this userId from your DB //
        console.log('user remove successfully');
    }
}
const nehal = new Author('nm@gmail.com','password');
nehal.login('nm@gmail.com','password');
nehal.CreatePost('I hope you are enjoying article. Dont forget to leave feedback ')
nehal.CreatePost('I am excited for your feedback');
console.log(nehal.getnumofpost());

const json = new Admin('json@gmail.com','[object][object]');
json.login('json@gmail.com','[object][object]');
json.resetpassword('{id:1}');
json.login('json@gmail.com','{id:1}');
json.removeuser(12);