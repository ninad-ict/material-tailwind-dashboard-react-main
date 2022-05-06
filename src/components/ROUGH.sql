 select * from farmerrecordkey;
 select * from farmerpersonaldetails;
 select * from farmercontactdetails;
 select * from farmerlocationdetails;
 select * from farmereducationwork;
 select * from farmerotherdetails;
 select * from farmerlandrecord; 
 
TRUNCATE farmerrecordkey;
TRUNCATE farmerpersonaldetails;
TRUNCATE farmercontactdetails;
TRUNCATE farmerlocationdetails;
TRUNCATE farmereducationwork;
TRUNCATE farmerotherdetails;
TRUNCATE farmerlandrecord;

 
 
 
 
 
   create table farmerrecordkey(
        srno integer auto_increment primary key,created timestamp default current_timestamp,
        id text,
        isdeleted boolean DEFAULT false
   );
   
    Mainkeys:
        srno:
        created:
        isdeleted:
        id

    personaldetails

        name: "",
        spouse: "",
        father: "",
        dob: "",
        aadhar: "",
        gender: "",

        create table farmerpersonaldetails(
            srno integer auto_increment primary key,created timestamp default current_timestamp,
            id text, name text,spouse text,father text,dob date,aadhar text,gender text,isdeleted boolean DEFAULT false
            );


    contactdetails

        farmerMobile: "",
        spouseMobile: "",
        alternateMobile: "",
        totalNumbers: "",

         create table farmercontactdetails(
            srno integer auto_increment primary key,created timestamp default current_timestamp,
            id text, farmerMobile text,spouseMobile text,alternatemobile text,totalnumbers text,
            isdeleted boolean DEFAULT false
            );


    Location details:

        district: "",
        block: "",
        panchayat: "",
        village: "",
        door: "",
        street: "",

            create table farmerlocationdetails(
            srno integer auto_increment primary key,created timestamp default current_timestamp,
            id text, district text,block text,panchayat text,village text,door text,street text,
            isdeleted boolean DEFAULT false
            );


    educationwork
        
        education: "Select Education Details",
        income: "Select Income Details",

            create table farmereducationwork(
            srno integer auto_increment primary key,created timestamp default current_timestamp,
            id text, education text,income text,isdeleted boolean DEFAULT false
            );


    otherdetails
  
        mnregaMember: "",
        credit: "",
        cboMember: "",
        kitchenGarden: "",
        smsService: "",
        voiceSms: "",
        patta: "",
        lat: "",
        long: "",
        climateNote: "",

            create table farmerotherdetails(
            srno integer auto_increment primary key,created timestamp default current_timestamp,
            id text, mnregaMember text,credit text,cboMember text,kitchenGarden text,smsService text,voiceSms text,
            patta text,lat text,longg text,climateNote text,
            isdeleted boolean DEFAULT false
            );



  type:"",
      acres:"",
      cultivationArea:"",
      soiltype:"Select Soil Type",
      landOwner:"Land Ownership",
      cutlivationPractice:"Cultivation Practice",
      landPosition:"Select Land Position",
      landType:"Select Land Type",
      crop1:"",
      crop2:"",
      crop3:"",
      variety:"",
      subVariety:"",
      season:"",
      fertilizer:"",
      biofertilizer:"",
      lastYearYield:"",
      rateSale:"",
      availabilityMachine:"",
      cropInsurance:"",
      liveStock:"Select Livestock"


      create table farmerlandrecord (
           srno integer auto_increment primary key,created timestamp default current_timestamp,
            id text,
            type text,
            acres text,
            cultivationArea text,
            soiltype text,
            landOwner text,
            cutlivationPractice text,
            landPosition text,
            landType text,
            crop1 text,
            crop2 text,
            crop3 text,
            variety text,
            subVariety text,
            season text,
            fertilizer text,
            biofertilizer text,
            lastYearYield text,
            rateSale text,
            availabilityMachine text,
            cropInsurance text,
            liveStock text,
            isdeleted boolean DEFAULT false
      )