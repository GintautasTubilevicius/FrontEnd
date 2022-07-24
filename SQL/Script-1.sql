-- 1. Paimti visas reikšmes iš offices
select * from offices o;
-- 2. Paimti tik vard?, pavard? ir Email iš employees
select firstName, lastName, email from employees;
-- 3. Paimti visas eilutes iš payments, kuri? suma didesn? nei 50 000
select * from payments where amount > 50000;
-- 4. Rikiuojant pagal vard?, paimti pirmus 5 darbuotojus
select * from employees e order by firstName asc limit 5;
-- 5. Paimti iš produkt? kod?, pavadinim?, kiek? sand?lyje ir pirkimo kain? tu produkt?, kuri? kaina yra tarp 25.0 ir 40
select productCode, productName, quantityInStock, buyPrice from products p where buyPrice between 25.0 and 40;
-- 6. Paimti kliento pavadinimus ir kredito limitus tik klient? iš USA, kuri? kredito limitas didesnis nei 100 000 (lentel? customers)
select customerName, creditLimit from customers where country = 'USA' and creditLimit > 100000;
-- 7. Paimti užsakymo nr, užsakymo dat?, status? ir komentar? iš orders, kuri? status n?ra 'In Process', rikiuojant nuo naujausio iki seniausio
select orderNumber, orderDate, status, comments from orders where status != 'In Process' order by orderDate desc;



