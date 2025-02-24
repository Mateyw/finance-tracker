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



