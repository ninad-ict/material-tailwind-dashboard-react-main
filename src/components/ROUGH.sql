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



update farmerrecordkey set isdeleted=1 where id='$id';
update farmerpersonaldetails set isdeleted=1 where id='$id';
update farmercontactdetails set isdeleted=1 where id='$id';
update farmerlocationdetails set isdeleted=1 where id='$id';
update farmereducationwork set isdeleted=1 where id='$id';
update farmerotherdetails set isdeleted=1 where id='$id';
update farmerlandrecord set isdeleted=1 where id='$id';



update farmerrecordkey set isdeleted=0 ;
update farmerpersonaldetails set isdeleted=0 ;
update farmercontactdetails set isdeleted=0 ;
update farmerlocationdetails set isdeleted=0 ;
update farmereducationwork set isdeleted=0  ;
update farmerotherdetails set isdeleted=0 ;
update farmerlandrecord set isdeleted=0 ;

 
 
 
 
 
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



--------------------+------------+------+-----+-------------------+----------------+
| srno                | int(11)    | NO   | PRI | NULL              | auto_increment |
| created             | timestamp  | NO   |     | CURRENT_TIMESTAMP |                |
| id                  | text       | YES  |     | NULL              |                |
| type                | text       | YES  |     | NULL              |                |
| acres               | text       | YES  |     | NULL              |                |
| cultivationArea     | text       | YES  |     | NULL              |                |
| soiltype            | text       | YES  |     | NULL              |                |
| landOwner           | text       | YES  |     | NULL              |                |
| cutlivationPractice | text       | YES  |     | NULL              |                |
| landPosition        | text       | YES  |     | NULL              |                |
| landType            | text       | YES  |     | NULL              |                |
| crop1               | text       | YES  |     | NULL              |                |
| crop2               | text       | YES  |     | NULL              |                |
| crop3               | text       | YES  |     | NULL              |                |
| variety             | text       | YES  |     | NULL              |                |
| subVariety          | text       | YES  |     | NULL              |                |
| season              | text       | YES  |     | NULL              |                |
| fertilizer          | text       | YES  |     | NULL              |                |
| biofertilizer       | text       | YES  |     | NULL              |                |
| lastYearYield       | text       | YES  |     | NULL              |                |
| rateSale            | text       | YES  |     | NULL              |                |
| availabilityMachine | text       | YES  |     | NULL              |                |
| cropInsurance       | text       | YES  |     | NULL              |                |
| liveStock           | text       | YES  |     | NULL              |                |
| isdeleted           | tinyint(1) | YES  |     | 0                 |            


//---Changes in 4th June---------
      
      alter table farmerlandrecord 
      drop column crop1,
      drop column crop2,
      drop column crop3,
      drop column variety,
      drop column subVariety,
      drop column season,
      drop column fertilizer,
      drop column biofertilizer,
      drop column lastYearYield,
      drop column rateSale,
      drop column availabilityMachine,
      drop column cropInsurance;   


create table farmercropdetails (

            srno integer auto_increment primary key,created timestamp default current_timestamp,
            farmer text,
            land text,
            crop text,
            variety text,
            subVariety text,
            season text,
            fertilizer text,
            biofertilizer text,
            lastYearYield text,
            rateSale text,
            availabilityMachine text,
            cropInsurance text,
            isdeleted boolean DEFAULT false

);

-- alter table farmercropdetails add column farmer text after created; In case table created without farmerdetails

//---Changes in 4th June---------
select * from
(
 select id,associate from farmerrecordkey where isdeleted=0
) as r
inner JOIN
(
    select * from farmerpersonaldetails
) as p 
on r.id=p.id
inner JOIN
(
    select * from farmercontactdetails
) as c 
on c.id=r.id
inner JOIN
(
    select * from farmerlocationdetails
)as l 
on l.id=r.id 
inner JOIN
(
     select * from farmereducationwork
) as w 
on w.id=r.id 
inner join 
(
    select * from farmerotherdetails
) as o 
on o.id=r.id
inner join 
(
    select id,name,location from associate
)as a 
on a.id=r.associate;


select * FROM
(
    (
    select id,associate from farmerrecordkey where isdeleted=0
    ) as r
    inner JOIN
        (
            select id,name from farmerpersonaldetails
        ) as p 
    on r.id=p.id
    inner JOIN
    (
        select * from farmerlandrecord
    ) as land 
    on r.id=land.id
    inner join 
    (
        select id,name,location from associate 
    ) as assoc
    on r.associate=assoc.id

)

select * FROM
(
    (
    select id,associate from farmerrecordkey where isdeleted=0
    ) as r
    inner JOIN
        (
            select id,name from farmerpersonaldetails
        ) as p 
    on r.id=p.id
    inner join 
    (
        select * from farmercropdetails
    ) as land 
    on r.id=land.farmer
    inner join 
    (
        select id,name,location from associate 
    ) as assoc
    on r.associate=assoc.id

);




 select * from farmerrecordkey;
 select * from farmerpersonaldetails;
 select * from farmercontactdetails;
 select * from farmerlocationdetails;
 select * from farmereducationwork;
 select * from farmerotherdetails;
 select * from farmerlandrecord; 
 