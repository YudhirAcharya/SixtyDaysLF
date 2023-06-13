const companies=[
    {name:'C1',category:"finance",start:1981,end:2003},
    {name:'C2',category:"auto",start:2004,end:2005},
    {name:'C3',category:"retail",start:2021,end:2020},
    {name:'C4',category:"bank",start:2006,end:2023},
    {name:'C5',category:"law",start:1981,end:2003},
]

for(i=0;i< companies.length; i++)
{
    console.log(companies[i])
}
for each
companies.forEach(function(company)
{
    console.log(company)
})
const ages = [23,43,5,75,34,23,57,87]
//filter
let canDrink = [];
for(let i=0; i<ages.length;i++)
{
    if (ages[i]>=21)
    {
        canDrink.push(ages[i])
    }
}
console.log(canDrink)
const canDrink =ages.filter(function(age)
{
    if(age>=21)
    {
        return true
    }
})
//or
const canDrink =ages.filter(age => age>=21)
console.log(canDrink)
const retailCompanies =companies.filter(company => company.category==='retail')
console.log(retailCompanies)
const millCompanies = companies.filter(company =>company.start>=2000)
console.log(millCompanies)
const duration =companies.filter(company=>(company.end -company.start)>10)
console.log(duration)
//map
const companyName = companies.map(company=>company.name)
console.log(companyName)
const companyMap =companies.map(company=>
   company.name+" "+company.start+"-"+company.end
)
console.log(companyMap)
const sqrt = ages.map(age=>Math.sqrt(age))
console.log(sqrt)
sort
const sortedCompanies = companies.sort(sort=(a,b)=>
{
    if (a.start>b.start)
    {
        return 1
    }
    else return -1
})
console.log(sortedCompanies)
const sortedAges =ages.sort((a,b)=>
    a-b
)
console.log(sortedAges)
//reduce
const ageSum =ages.reduce((total,age)=>
total +age, 0)
console.log(ageSum)
