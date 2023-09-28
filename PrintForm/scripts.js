const pf__insert__data = document.getElementById("pf__insert__data"),
    pf__preview__data = document.getElementById("pf__preview__data");
    downloadPdf = document.getElementById("downloadPdf");

const istpfiresNum1 = document.getElementById("pfiresNum1"),
      istpfiresNum2 = document.getElementById("pfiresNum2"),
      istpfiresNum3 = document.getElementById("pfiresNum3");


const istpfiresDate = document.getElementById("pfiresDate");

const istpfiresNo1 = document.getElementById("pfiresNo1"),
      istpfiresNo2 = document.getElementById("pfiresNo2"),
      istpfiresNo3 = document.getElementById("pfiresNo3"),
      istpfiresNo4 = document.getElementById("pfiresNo4"),
      istpfiresNo5 = document.getElementById("pfiresNo5"),
      istpfiresNo6 = document.getElementById("pfiresNo6");

const istpfidfNo1 = document.getElementById("pfidfNo1"),
      istpfidfNo2 = document.getElementById("pfidfNo2"),
      istpfidfNo3 = document.getElementById("pfidfNo3"),
      istpfidfNo4 = document.getElementById("pfidfNo4"),
      istpfidfNo5 = document.getElementById("pfidfNo5"),
      istpfidfNo6 = document.getElementById("pfidfNo6"),
      istpfidfNo7 = document.getElementById("pfidfNo7"),
      istpfidfNo8 = document.getElementById("pfidfNo8"),
      istpfidfNo9 = document.getElementById("pfidfNo9"),
      istpfidfNo10 = document.getElementById("pfidfNo10"),
      istpfidfNo11 = document.getElementById("pfidfNo11"),
      istpfidfNo12 = document.getElementById("pfidfNo12"),
      istpfidfNo13 = document.getElementById("pfidfNo13"),
      istpfidfNo14 = document.getElementById("pfidfNo14"),
      istpfidfNo15 = document.getElementById("pfidfNo15"),
      istpfidfNo16 = document.getElementById("pfidfNo16"),
      istpfidfNo17 = document.getElementById("pfidfNo17");
      

const istpfiFullName = document.getElementById("pfiFullName"),
    istpfiGender = document.getElementById("pfiGender");

const istpdateOfbirth = document.getElementById("pdateOfbirth"),
    istpdateOfbirthtxt = document.getElementById("pdateOfbirthtxt");

const istpfiVillName = document.getElementById("pfiVillName"),
    istpfiWardName = document.getElementById("pfiWardName"),
    istpfiPdName = document.getElementById("pfiPdName"),
    istpfiUpName = document.getElementById("pfiUpName"),
    istpfiDtName = document.getElementById("pfiDtName");

const istpfifatherName = document.getElementById("pfifatherName"),
    istpfifatherNas = document.getElementById("pfifatherNas"),
    istpfimotherName = document.getElementById("pfimotherName"),
    istpfimotherNas= document.getElementById("pfimotherNas");

const istpvillName = document.getElementById("pvillName"),
    istpward = document.getElementById("pward"),
    istpupNpfiPdName = document.getElementById("pupN"),
    istpupzilla = document.getElementById("pupzilla"),
    istpdistct = document.getElementById("pdistct");


//Show Result
const rrInput1 = document.getElementById("rInput1"),
      rrInput2 = document.getElementById("rInput2"),
      rrInput3 = document.getElementById("rInput3");

const rrregisterBookDate = document.getElementById("registerBookDate");

const rrrNInput1 = document.getElementById("rNInput1"),
     rrrNInput2 = document.getElementById("rNInput2"),
     rrrNInput3 = document.getElementById("rNInput3"),
     rrrNInput4 = document.getElementById("rNInput4"),
     rrrNInput5 = document.getElementById("rNInput5"),
     rrrNInput6 = document.getElementById("rNInput6");
    
const rrridnInput1 = document.getElementById("idnInput1"),
    rrridnInput2 = document.getElementById("idnInput2"),
    rrridnInput3 = document.getElementById("idnInput3"),
    rrridnInput4 = document.getElementById("idnInput4"),
    rrridnInput5 = document.getElementById("idnInput5"),
    rrridnInput6 = document.getElementById("idnInput6"),
    rrridnInput7 = document.getElementById("idnInput7"),
    rrridnInput8 = document.getElementById("idnInput8"),
    rrridnInput9 = document.getElementById("idnInput9"),
    rrridnInput10 = document.getElementById("idnInput10"),
    rrridnInput11 = document.getElementById("idnInput11"),
    rrridnInput12 = document.getElementById("idnInput12"),
    rrridnInput13 = document.getElementById("idnInput13"),
    rrridnInput14 = document.getElementById("idnInput14"),
    rrridnInput15 = document.getElementById("idnInput15"),
    rrridnInput16 = document.getElementById("idnInput16"),
    rrridnInput17 = document.getElementById("idnInput17");

const rrFullName = document.getElementById("fullName"),
    rrpfiGender = document.getElementById("gender");

const rrbirthdateNumber = document.getElementById("birthdateNumber"),
    rrbirthdateText = document.getElementById("birthdateText");

const rrrvillage = document.getElementById("rvillage"),
    rrrward = document.getElementById("rward"),
    rrrunp = document.getElementById("runp"),
    rrrupzill = document.getElementById("rupzill"),
    rrrdistric = document.getElementById("rdistric");

const rrfatherName = document.getElementById("fatherName"),
    rrNationalFat = document.getElementById("NationalFat"),
    rrmotherName = document.getElementById("motherName"),
    rrNationalMot = document.getElementById("NationalMot");

const rrrpvillage = document.getElementById("rpvillage"),
    rrrpward = document.getElementById("rpward"),
    rrrpunp = document.getElementById("rpunp"),
    rrrpupz = document.getElementById("rpupz"),
    rrrpdistric = document.getElementById("rpdistric");

const rrissuedate = document.getElementById("issuedate");

const SubmitData = document.querySelector("#submitBtn");

    if(pf__insert__data.style.display = "block"){
        pf__preview__data.style.display = "none";
        downloadPdf.style.display = "none";
    }

    SubmitData.addEventListener("click", (e) => {
        e.preventDefault();
        rrInput1.value =  istpfiresNum1.value; 
        rrInput2.value =  istpfiresNum2.value; 
        rrInput3.value =  istpfiresNum3.value;  

        rrregisterBookDate.innerHTML = istpfiresDate.value;

        rrrNInput1.value = istpfiresNo1.value;
        rrrNInput2.value = istpfiresNo2.value;
        rrrNInput3.value = istpfiresNo3.value;
        rrrNInput4.value = istpfiresNo4.value;
        rrrNInput5.value = istpfiresNo5.value;
        rrrNInput6.value = istpfiresNo6.value;

        rrridnInput1.value = istpfidfNo1.value;
        rrridnInput2.value = istpfidfNo2.value;
        rrridnInput3.value = istpfidfNo3.value;
        rrridnInput4.value = istpfidfNo4.value;
        rrridnInput5.value = istpfidfNo5.value;
        rrridnInput6.value = istpfidfNo6.value;
        rrridnInput7.value = istpfidfNo7.value;
        rrridnInput8.value = istpfidfNo8.value;
        rrridnInput9.value = istpfidfNo9.value;
        rrridnInput10.value = istpfidfNo10.value;
        rrridnInput11.value = istpfidfNo11.value;
        rrridnInput12.value = istpfidfNo12.value;
        rrridnInput13.value = istpfidfNo13.value;
        rrridnInput14.value = istpfidfNo14.value;
        rrridnInput15.value = istpfidfNo15.value;
        rrridnInput16.value = istpfidfNo16.value;
        rrridnInput17.value = istpfidfNo17.value;

        rrFullName.innerHTML = istpfiFullName.value;
        rrpfiGender.innerHTML = istpfiGender.value;

        rrbirthdateNumber.innerHTML = istpdateOfbirth.value;
        rrbirthdateText.innerHTML = istpdateOfbirthtxt.value;

        rrrvillage.innerHTML = istpfiVillName.value;
        rrrward.innerHTML = istpfiWardName.value;
        rrrunp.innerHTML = istpfiPdName.value;
        rrrupzill.innerHTML = istpfiUpName.value;
        rrrdistric.innerHTML = istpfiDtName.value;

        rrfatherName.innerHTML = istpfifatherName.value;
        rrNationalFat.innerHTML = istpfifatherNas.value;
        rrmotherName.innerHTML = istpfimotherName.value;
        rrNationalMot.innerHTML = istpfimotherNas.value;

        rrrpvillage.innerHTML = istpvillName.value;
        rrrpward.innerHTML = istpward.value;
        rrrpunp.innerHTML = istpupNpfiPdName.value;
        rrrpupz.innerHTML = istpupzilla.value;
        rrrpdistric.innerHTML = istpdistct.value;

        rrissuedate.innerHTML = istpfiresDate.value;

        if(pf__preview__data.style.display = "block"){
            pf__insert__data.style.display = "none";
            downloadPdf.style.display = "block";
        }

    });

    //Generate Download Pdf Button
    downloadPdf.addEventListener("click", () => {
        if(downloadPdf.style.display = "block"){
            downloadPdf.style.display = "none";
        }
        window.print();
    });