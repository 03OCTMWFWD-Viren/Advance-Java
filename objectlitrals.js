
const companies = [
    {name:'tata',category:'tatagroup',start:'1868',end:'2080'},
    {name:'Teleperformance',category:'tellphone',start:'1865',end:'2023'},
    {name:'Realince industries',category:'realince',start:'1832',end:'2090'},
    {name:'Nielsen',category:'share market',start:'1923',end:'2070'},
    {name:'Allscripts India LLC',category:'Software company',start:'1880',end:'2000'},
    {name:'Collabera',category:' technology company',start:'1991',end:'2026'},
    {name:'Concentrix',category:'business solutions ',start:'1983',end:'2040'},
    {name:'Larsen & Toubro',category:'Construction ',start:'1946',end:'2078'},
    {name:'Schneider Electric',category:'digital automation',start:'1782',end:'1925'},
    {name:'Sun Pharmaceutica',category:'seels',start:'1983',end:'2088'},
    {name:'L&T Technology Services',category:'Engineering Services',start:'2006',end:'2092'},
];

    const ages = [33,12,20,16,26,54,21,44,64,13,15,45,25,64,32];

        // for(let i =0; i<companies.length; i ++)
        // {
        //     console.log(companies[i]);
        // }


        // forEach //

        // companies.forEach(function(company){
        //     console.log(company);
        // })

        // companies.forEach(function(company){
        //     console.log(company.name);
        // })

        // companies.forEach(function(company){
        //     console.log(company.category);
        // })

        // companies.forEach(function(company){
        //     console.log(company.start);
        // })

        // companies.forEach(function(company){
        //     console.log(company.end);
        // })

        

        // filter //
            
        // let klassy = [];
        // for (let i=0; i<ages.length;i++)
        // {
        //     if (ages[i]>=21){
        //         klassy.push(ages[i]);
        //     }
        // }
        // console.log(klassy);

        // const klassy = ages.filter(function(age){
        //     if (age>21){
        //         return true;
        //     }
        // });
        // console.log(klassy);



        // by using array function //

        // const klassy = ages.filter(age=>age>=21);
        // console.log(klassy);

        // const seelsCompanies = companies.filter(function(company){
        //     if(company.category === 'seels'){
        //         return true ;
        //     }
        // })
        // console.log(seelsCompanies);



        // by using arrow function //

        // const seelsCompanies = companies.filter(company=>company.category==='seels');
        // console.log(seelsCompanies);

        // const tatagroupcompanies = companies.filter(company=>company.category==='tatagroup');
        // console.log(tatagroupcompanies);

        // const sharemarketcompanies = companies.filter(company=>company.category==='share market');
        // console.log(sharemarketcompanies);



        //    get 60s companies //

        // const sixtyscompanies = companies.filter(company=>(company.start>=1860 && company.start<1900));
        // console.log(sixtyscompanies);

        // const sixtyscompanies = companies.filter(company=>(company.start>=1868 && company.start<1980));
        // console.log(sixtyscompanies);

        // get companies lasted Ten years  //

        // const lastedtenyears = companies.filter(company=>(company.end-company.start>=10));
        // console.log(lastedtenyears);



        // Map //

        // create array of companies //

        // const companynames = companies.map(function(company)
        // {
        //     return company.name;
        // });
        // console.log(companynames);



        // create Array of 1 //

        // const test = companies.map(function(company)
        // {
        //     return 1 ;
        // })
        // console.log(test);

        // const testmap = companies.map(function(company)
        // {
        //     return `${company.name}[${company.start}]-[${company.end}];`
        // });
        // console.log(testmap);

        // const testmap = companies.map(company=>`${company.name}[${company.start}-${company.end}]`);
        // console.log(testmap);



        // ages  //

        // const agesqure = ages.map(age=>Math.sqrt(age));
        // console.log(agesqure);

        // const agestimetwo = ages.map(age=>age*2);
        // console.log(agestimetwo);

        // const agemap = ages.map(age=>Math.sqrt(age)).map(age=>age*2);
        // console.log(agemap);



        // sqrt // by normal function  //

        // const sortedcompanies= companies.sort(function(c1,c2)
        // {
        //     if(c1.start>c2.start)
        //     {
        //         return 1 ;
        //     }
        //     else
        //     {
        //         return -1;
        //     }
        // });
        // console.log(sortedcompanies);



        // By Array function //

        // const sortedcompanies = companies.sort((a,b)=>(a.start>b.start ? 1: -1));
        // console.log(companies);



        //   sort ages  // number wise chek karega(bada chota)  //

        // const sortAges = ages.sort();
        // console.log(sortAges);



        //  by using Array function  //

        // const sortAges = ages.sort((a,b)=>a-b);
        // console.log(sortAges);



        // Descending order (bada chota)  //

        // const sortAges = ages.sort((a,b)=>a-b);
        // console.log(sortAges);

        // const sortAges = ages.sort((a,b)=>b-a);
        // console.log(sortAges);

        

        // reduce  //

        // let agesum = 0;
        // for(let i=0 ; i<ages.length; i++)
        // {
        //     agesum = agesum + ages[i];
        // }
        // console.log(agesum);



         //    adding by reduce  //

        // const agesum = ages.reduce(function(total,age)
        // {
        //     return total + age ;
        // },0);
        // console.log(agesum);



        //  by using Array function //

        // const agesum = ages.reduce((total,age)=>total + age ,0);
        // console.log(agesum);



        // get total years for each companies  //

        // const totalyears = companies.reduce(function(total,company)
        // {
        //     return total + (company.end - company.start);
        // },0);
        // console.log(totalyears);



        // by using Array function  //

        // const totalyears = companies.reduce((total,company)=> total + (company.end - company.start),0);
        // console.log(totalyears);



        //   combine method  //

        const combined = ages.map(age=>age*2)
        .filter(age=>age>40)
        .sort((a,b)=>a+b,0);
        // .reduce((a,b)=> a+b,0);

        console.log(combined);