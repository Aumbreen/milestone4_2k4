const form=document.getElementById ("resume-form")as HTMLFormElement;
const resumedisplayelement=document.getElementById("resume-display")as HTMLDivElement;

// handle form submission

form.addEventListener("submit",(event:Event)=>{
    event.preventDefault();
    
    // collect input values
    const name=(document.getElementById("name")as HTMLInputElement).value;
    const fatherName=(document.getElementById("fatherName")as HTMLInputElement).value;
    const contactDatail=(document.getElementById("contactDatail")as HTMLInputElement).value;
    
    const email=(document.getElementById("email")as HTMLInputElement).value;
    const NIC=(document.getElementById("NIC")as HTMLInputElement).value;
    const education=(document.getElementById("education")as HTMLInputElement).value;
    const skills=(document.getElementById("skills")as HTMLInputElement).value;
    const experience=(document.getElementById("experience")as HTMLInputElement).value;
 

// generate resume content dynamically
const resumHTMLelement =   `
<h1><b> Editable Resume</b></h1>
<h3>Personal Information</h3>
<p><b>Name:</b><span contenteditable="true">${name}</span></p>
<p><b>fatherName:</b><span contenteditable="true">${fatherName}</span></p>
<p><b>ContactDetail:</b><span contenteditable="true">${contactDatail}</span></p>
<p><b>Email:</b><span contenteditable="true">${email}</span></p>
<p><b>NIC:<b/><span contenteditable="true">${NIC}</span></p>

<h3>Education</h3>
<p contenteditable="true">${education}</p>

<h3>skills</h3>
<p contenteditable="true">${skills}</p>
<h3>Experience</h3>
<p contenteditable="true">${experience}</p>
`;

// display the generated  resume 
if(resumedisplayelement){
    resumedisplayelement.innerHTML=resumHTMLelement;
}


else {

console.error('the resume display element are missing.')
}

}

)
