$f = fopen("database.txt", "w");

fwrite($f, "test");

// Write text
fwrite($f, $_POST["name"]); 
// Write text
fwrite($f, $_POST["email"]); 

// Close the text file
fclose($f);

