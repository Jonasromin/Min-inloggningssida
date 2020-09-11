/*skapat divar med id*/
let loginDiv = document.createElement("div");
let welcomeDiv = document.createElement("div");
let errorDiv = document.createElement("div");

loginDiv.id = "loginDiv";
welcomeDiv.id = "welcomeDiv";
errorDiv.id = "errorDiv";

/*variabeler för att kunna logga in senare*/
let correctUser = "test";
let correctPassword = "1234";

/*HTML element*/
let br = document.createElement("br");
let h1 = document.createElement("h1");
let h3 = document.createElement("h3");
let fieldSet = document.createElement("fieldset");
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
    textContent: "Logga in",
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

loginDiv.appendChild(fieldSet)
document.body.appendChild(loginDiv)
};

/*Funktion som samlar ihop välkomstsidans HTML element och ändrar text med innerHTML*/
function myWelcomePage(){
            
    h1.innerHTML = "Välkommen till startsidan";
    h3.innerHTML = "Vill du logga ut?";
    myBtn.textContent = "Logga ut";

    welcomeDiv.appendChild(h1)
    welcomeDiv.appendChild(welcome)
    welcomeDiv.appendChild(h3)
    welcomeDiv.appendChild(myBtn)

    document.body.appendChild(welcomeDiv)
};
/*Funktion som samlar ihop felmeddelandesidans HTML element och ändrar text med innerHTML*/
function myErrorPage (){
    
    h1.innerHTML = "Oj, nu blev det fel";
    h3.innerHTML = "Vill du gå tillbaka?";
    myBtn.textContent = "Tillbaka";

    errorDiv.appendChild(h1)
    errorDiv.appendChild(h3)
    errorDiv.appendChild(myBtn)
    errorDiv.appendChild(br)
    errorDiv.appendChild(oops)

    document.body.appendChild(errorDiv)
};
/*If else som visar de olika sidorna beroende på argument då sidan öppnas */
if (localStorage.length === 0){

    myLoginPage();
}
else if(localStorage.length === 2){
    
    myWelcomePage();
};
/*knapp funktion som fångar upp event med if else sats*/
    myBtn.addEventListener("click", function(){
        
        /*If sats för att visa välkomstsida efter rätt inloggning*/
        if (myBtn.textContent === "Logga in"){
            let user = document.getElementById("user").value;
            let password = document.getElementById("password").value;

            if (user === correctUser && password === correctPassword){
                localStorage.setItem("user", user);
                localStorage.setItem("password", password);
                document.body.removeChild(loginDiv);
                myWelcomePage();
            }
            /*argument för att visa felmeddelande om inloggning är fel*/
            else if (myBtn.textContent === "Logga in" && user !== correctUser || password !== correctPassword) {
                document.body.removeChild(loginDiv);
                myErrorPage();
            }
        }
        /*Argument för att gå från errorsida till login sida*/
         else if (myBtn.textContent === "Tillbaka"){
                document.body.removeChild(errorDiv);
                myBtn.textContent = "Logga in";
                myLoginPage();
        }
        /*else if för att återvända till startsidan från välkomstsidan*/
        else if (myBtn.textContent === "Logga ut"){
            document.body.removeChild(welcomeDiv);
            myBtn.textContent = "Logga in";
            localStorage.clear();
            myLoginPage();
        };
    });