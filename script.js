let myDiv = document.getElementById("myDiv");
let correctUser = "test";
let correctPassword = "1234";
let userName = document.getElementById("user");
let userPassword = document.getElementById("password");

/*HTML element*/
let br = document.createElement("br");
let h1 = document.createElement("h1");
let h3 = document.createElement("h3");
let fieldSet = document.createElement("fieldset")
fieldSet.innerHTML = "<legend><strong>Logga in</strong></legend>";

/*Input fält och knapp*/
let inputUser = document.createElement("input");
let inputPassword = document.createElement("input");
let myBtn = document.createElement("button");

/*Bilder*/
let loginBackground = document.createElement("img");
let oops = document.createElement("img");
let welcome = document.createElement("img");

/*Objekt för bilder med attribut*/
Object.assign(oops,{
    src: "/images/Oops.jpg",
    alt: "Oops",
    width: "500",
});

Object.assign(welcome,{
    src: "/images/Welcome.jpg",
    alt: "Background wallpaper",
    width: "500",
});

Object.assign(loginBackground,{
    src: "/images/background.jpg",
    alt: "Background wallpaper",
    width: "700",
});

/*Objekt för input fält och knapp med attribut*/
Object.assign(myBtn,{
    id: "myBtn",
    type: "button",
    innerHTML: "Logga in",
});

Object.assign(inputUser,{
    id: "user",
    type: "text",
    placeholder: "Användarnamn...",
});

Object.assign(inputPassword,{
    id: "password",
    type: "text",
    placeholder: "Lösenord...",
});

/*Funktion som samlar ihop inloggningssidans HTML element*/
function myLoginPage (){

fieldSet.appendChild(inputUser)
fieldSet.appendChild(inputPassword)
fieldSet.appendChild(myBtn)
fieldSet.appendChild(br)
fieldSet.appendChild(loginBackground)

myDiv.appendChild(fieldSet)
document.body.appendChild(myDiv)

};

/*Funktion som samlar ihop välkomstsidans HTML element och ändrar text med innerHTML*/
function myWelcomePage(){
            
    h1.innerHTML = "Välkommen till startsidan";
    h3.innerHTML = "Vill du logga ut?";
    myBtn.innerHTML = "Logga ut";

    myDiv.appendChild(h1)
    myDiv.appendChild(welcome)
    myDiv.appendChild(h3)
    myDiv.appendChild(myBtn)

    document.body.appendChild(myDiv)
};
/*Funktion som samlar ihop felmeddelandesidans HTML element och ändrar text med innerHTML*/
function myErrorPage (){
    
    h1.innerHTML = "Oj, nu blev det fel"
    h3.innerHTML = "Vill du gå tillbaka?"
    myBtn.innerHTML = "Tillbaka"

    myDiv.appendChild(h1)
    myDiv.appendChild(h3)
    myDiv.appendChild(myBtn)
    myDiv.appendChild(br)
    myDiv.appendChild(oops)

    document.body.appendChild(myDiv)

};
/*If else som visar de olika sidorna beroende på argument då sidan öppnas */
if (localStorage.length === 0){

    myLoginPage();
}
else if(localStorage.length === 2){
    
    myWelcomePage();
};


    myBtn.addEventListener("click", function(){
        

        if (myBtn.innerHTML === "Tillbaka"){
            myLoginPage();
        }
        
        else if (myBtn.innerHTML === "Logga ut"){
            localStorage.clear();
            myLoginPage();
        }
        else if (myBtn.innerHTML === "Logga in"){
            
            console.log("event", user, password);
            myWelcomePage();
        }
        else {
            myErrorPage();
        }
        

        
    

    }); 