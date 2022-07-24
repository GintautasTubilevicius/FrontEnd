-- 1. Paimti visas reik�mes i� offices
select * from offices o;
-- 2. Paimti tik vard?, pavard? ir Email i� employees
select firstName, lastName, email from employees;
-- 3. Paimti visas eilutes i� payments, kuri? suma didesn? nei 50 000
select * from payments where amount > 50000;
-- 4. Rikiuojant pagal vard?, paimti pirmus 5 darbuotojus
select * from employees e order by firstName asc limit 5;
-- 5. Paimti i� produkt? kod?, pavadinim?, kiek? sand?lyje ir pirkimo kain? tu produkt?, kuri? kaina yra tarp 25.0 ir 40
select productCode, productName, quantityInStock, buyPrice from products p where buyPrice between 25.0 and 40;
-- 6. Paimti kliento pavadinimus ir kredito limitus tik klient? i� USA, kuri? kredito limitas didesnis nei 100 000 (lentel? customers)
select customerName, creditLimit from customers where country = 'USA' and creditLimit > 100000;
-- 7. Paimti u�sakymo nr, u�sakymo dat?, status? ir komentar? i� orders, kuri? status n?ra 'In Process', rikiuojant nuo naujausio iki seniausio
select orderNumber, orderDate, status, comments from orders where status != 'In Process' order by orderDate desc;



