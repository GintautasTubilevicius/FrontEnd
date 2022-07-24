-- Naudojant classicmodels

--  1. Sugrupuoti orderDetails pagal orderNumber ir susumuoti užsakym? sumas.
select orderNumber, sum(priceEach*quantityOrdered) as 'UzsakymuSumos' from orderdetails o group by orderNumber;

--  2. Sugrupuoti orders pagal status ir suskai?iuoti, kiek užsakym? turi kok? status?.

select status, count(status) as 'UzsakymuKiekisPagalStatusa' from orders o  group by status ;

--  3. Naudojant klient? lentel?, gaukite šalis ir toje šalyse esant? didžiausi? kredito limit?.

select country, max(creditLimit) as 'DidziausiasUzsakymuLimitas' from customers group by country order by DidziausiasUzsakymuLimitas asc;

--  4. Suskai?iuokite, kiek kiekvienas klientas padar? mok?jim? ir paimkite tik tuos, kur padaryta 4 ar daugiau pirkim?.
-- Parodykite klient? kodus ir mok?jim? skai?ius
select customerNumber, count(checkNumber) as 'mokejimuSkaicius'  from payments group by customerNumber 
	having mokejimuSkaicius >=4 order by mokejimuSkaicius asc;

--  5. Paimkite užsakytas prekes, kuri? užsakym? status yra "In Process"
select * from orderdetails where orderNumber in (select orderNumber from orders where status = "In Process");

--  6. Paimkite užsakym? prekes t? užsakym?, kur užsakyta tik viena prek?.
-- Reikalinga užsakymo kodas, produkto kodas, vienet? skai?ius ir kaina.

select orderNumber, productCode, quantityOrdered, priceEach  from orderdetails 
	group by orderNumber having count(productCode) = 2 order by priceEach asc;

