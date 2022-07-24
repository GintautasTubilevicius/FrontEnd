-- Naudojant classicmodels

--  1. Sugrupuoti orderDetails pagal orderNumber ir susumuoti u�sakym? sumas.
select orderNumber, sum(priceEach*quantityOrdered) as 'UzsakymuSumos' from orderdetails o group by orderNumber;

--  2. Sugrupuoti orders pagal status ir suskai?iuoti, kiek u�sakym? turi kok? status?.

select status, count(status) as 'UzsakymuKiekisPagalStatusa' from orders o  group by status ;

--  3. Naudojant klient? lentel?, gaukite �alis ir toje �alyse esant? did�iausi? kredito limit?.

select country, max(creditLimit) as 'DidziausiasUzsakymuLimitas' from customers group by country order by DidziausiasUzsakymuLimitas asc;

--  4. Suskai?iuokite, kiek kiekvienas klientas padar? mok?jim? ir paimkite tik tuos, kur padaryta 4 ar daugiau pirkim?.
-- Parodykite klient? kodus ir mok?jim? skai?ius
select customerNumber, count(checkNumber) as 'mokejimuSkaicius'  from payments group by customerNumber 
	having mokejimuSkaicius >=4 order by mokejimuSkaicius asc;

--  5. Paimkite u�sakytas prekes, kuri? u�sakym? status yra "In Process"
select * from orderdetails where orderNumber in (select orderNumber from orders where status = "In Process");

--  6. Paimkite u�sakym? prekes t? u�sakym?, kur u�sakyta tik viena prek?.
-- Reikalinga u�sakymo kodas, produkto kodas, vienet? skai?ius ir kaina.

select orderNumber, productCode, quantityOrdered, priceEach  from orderdetails 
	group by orderNumber having count(productCode) = 2 order by priceEach asc;

