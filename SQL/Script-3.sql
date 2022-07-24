-- 1. Padarykite Left Join tarp classicmodels.orderdetails ir classicmodels.orders per stulpelį orderNumber

select * from orderdetails o left join orders o2 on o.orderNumber = o2.orderNumber ;
 
-- 2. Padarykite Left Join tarp world.country ir world.city per stulpelius Code ir CountryCode. 
select * from country c left join city ci  on c.Code  = ci.CountryCode;
 
-- 3. Padarykite Left Join tarp classicmodels.orderdetails ir classicmodels.products per productCode stulpelį bei left join su productLines per productCode
select * from orderdetails o left join products p  on o.productCode  = p.productCode 
	left join productlines p2 on p.productCode  = p2.productLine  ;
	
-- 1. Panaudojus join operaciją tarp orders ir customers per customersNumber stupelius, paimkite orderNumber ir customerName stulpelius.
select orderNumber, customerName from orders o left join customers c on o.customerNumber = c.customerNumber;

-- 2. Sujungus lenteles orders su orderDetails, paimkite užsakymo numerį, užsakymo datą, produkto kodą, vieneto kainą bei vienetų skaičių.

select o.orderNumber, orderDate, productCode, priceEach, quantityOrdered  from orderdetails o 
	left join orders o2 on o.orderNumber = o2.orderNumber;
 
 -- 3. Naudojant lenteles orders, orderDetails ir products, paimkite užsakymo numerį, užsakymo datą, produkto pavadinimą, vieneto kainą bei vienetų skaičių.

select o.orderNumber, orderDate, p.productName, priceEach, quantityOrdered  from orderdetails o 
	left join orders o2 on o.orderNumber = o2.orderNumber left join products p on o.productCode = p.productCode;

 -- 4. Sujungkite employees su savimi ir paimkite darbuotojų vardus bei pavardes ir šalia jų atspausdinkite jų viršininko vardą ir pavardę

select e.firstName, e.lastName, e.jobTitle, e2.firstName as bossFirstName, e2.lastName as bossLastName, 
       e2.jobTitle as bossJobTitle from employees e 
		left join employees e2 on e.reportsTo = e2.employeeNumber;


 -- 5. Sujungus lenteles customers, employees ir offices lenteles, paimkite kliento pavadinimą, atsakingo darbuotojo vardą bei pavardę, 
 --    ofiso valstybę, miestą bei adresą. Praleiskite tuos klientus, kurie neturi už juos atsakingo darbuotojo.
select customerName, e.firstName, e.lastName, o.country, o.city, o.addressLine1  from customers c 
	left join employees e on c.salesRepEmployeeNumber = e.employeeNumber 
	inner join offices o on e.officeCode = o.officeCode ;

 -- 6. Naudojant lenteles orders ir orderDetails, paimkite užsakymo numerį, užsakymo datą, bei užsakymo bendrą sumą (kiek iš viso sumokėti už užsakymą)

select o.orderNumber, orderDate, sum(priceEach*quantityOrdered) as orderTotalPrice  from orderdetails o 
	left join orders o2 on o.orderNumber = o2.orderNumber group by orderNumber ;
	