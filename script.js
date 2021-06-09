let inpNameF = document.getElementsByTagName("input")[0];
let inpNameL = document.getElementsByTagName("input")[1];
let inpCompany = document.getElementsByTagName("input")[2];
let inpEmail = document.getElementsByTagName("input")[3];
let inpTel = document.getElementsByTagName("input")[4];
let inpCountry = document.getElementsByTagName("select")[0];
let inpCom = document.getElementsByTagName("input")[9];
let shw = document.getElementsByClassName("showusers")[0];
let languageE = document.getElementById('eng_lang');
let languageR = document.getElementById('rus_lang');
let agreed = document.getElementById('agr');
let arr =[];
let i = 0;
var sex;
var lang;
var xyz = new Boolean(false);

//..................................
function myFunction(){
    if (languageE.checked && !languageR.checked ) {
		var lang = "English";
	}
	if(languageR.checked && !languageE.checked ){
        var lang = "Russian";
    }
    if(languageR.checked && languageE.checked ){
        var lang = "Russian, English";
    }
    if(!languageR.checked && !languageE.checked ){
        var lang = "1";
    }
    if(document.getElementById('sex_male').checked) {
        var sex = "Male";
      }else if(document.getElementById('sex_female').checked) {
        var sex = "FeMale";
      } else if(!document.getElementById('sex_female').checked && !document.getElementById('sex_male').checked){ var sex = "1"}
    
    if (agreed.checked) {
		var xyz = true;
	} else{var xyz = false;}
    if (inpNameF.value === null || inpNameF.value === ""||
    inpNameL.value === null || inpNameL.value === ""||
    inpCompany.value === null || inpCompany.value === ""||
    inpEmail.value === null || inpEmail.value === ""||
    inpTel.value === null || inpTel.value === ""||
    inpCountry.value === null || inpCountry.value === ""||
    inpCom.value=== null || inpCom.value === "" || lang ==="1" || sex ==="1" || !xyz ) {
        alert("Заполните поля полностью! Согласитесь с правилами, укажите пол и языки");
      }else{
    let user = new User(inpNameF.value, inpNameL.value, inpCompany.value, inpEmail.value, inpCountry.value, inpCom.value, sex, lang);
    user.showusers();
    arr.push(user);
    user.render();
    }
}

//............................
class User{
    constructor(inpNameF, inpNameL, inpCompany, inpEmail, inpCountry, inpCom, sex, lang) {
        this.counter = i++
        this.inpNameF = inpNameF;
        this.inpNameL = inpNameL;
        this.inpCompany = inpCompany;
        this.inpEmail = inpEmail;
        this.inpCountry = inpCountry;
        this.inpCom = inpCom;
        this.sex = sex;
        this.lang = lang;
        this.interface = `
        <br>
        <b> User number# ${this.counter}:</b><br>
        FirstName is ${this.inpNameF}<br>
        LastName is ${this.inpNameL}<br>
        Company is ${this.inpCompany}<br>
        Email is ${this.inpEmail}<br>
        Country is ${this.inpCountry}<br>
        Comment: ${this.inpCom}<br>
        Sex: ${this.sex}<br>
        Language:  ${this.lang}<br>
        <p></p>
    `;}
    showusers(){
        console.log(this);
    }
    render() {
        let cont = document.querySelector(".showusers");
        let elem = document.createElement("div");
        elem.id = this.counter;
        elem.classList.add("User");
        elem.innerHTML = this.interface;
        cont.appendChild(elem);
    } 
}
