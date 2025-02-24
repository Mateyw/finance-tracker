-- gesamtausgaben eines nutzers für die kategorie, den monat, das jahr und den typen
SELECT SUM(amount) 
FROM transactions 
WHERE user_id = ? AND category = ? AND MONTH(date) = ? AND YEAR(date) = ? AND transaction_type = 'expense';

-- durchschnittliche ausgaben eines nutzers für die kategorie, den monat, das jahr und den typen
SELECT AVG(amount) 
FROM transactions 
WHERE user_id = ? AND category = ? AND MONTH(date) = ? AND YEAR(date) = ? AND transaction_type = 'expense';

-- gesamtausgaben eines nutzers für die kategorie, den monat, das jahr und den typen
SELECT SUM(amount) 
FROM transactions 
WHERE user_id = ? AND category = ? AND MONTH(date) = ? AND YEAR(date) = ? AND transaction_type = 'expense'; 


-- konkreter testfall:
SELECT SUM(amount) 
FROM transactions 
WHERE user_id = 14 AND category = 'Food' AND MONTH(date) = 2  AND YEAR(date) = 2025 AND type = 'Expense'; 



