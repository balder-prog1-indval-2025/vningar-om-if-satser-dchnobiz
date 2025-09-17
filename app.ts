/*
write("Är du myndig?")
let ålder = +await read("Din ålder: ")
if(ålder >= 18) {
    write("Du är myndig")
    write("( ◠‿◠ )")
} else if(ålder > 100) {
    write("Du ä död....")
} else {
    write("Omyndig!")
    write("( -_•)▄︻テحكـ━一💥                          (¬_¬)")
}
*/
/*
let längd = +await read("Hur lång är du i (CM)???: ")
if(längd < 200) {
    write("Du är kort! (˃ᗜ˂)")
} else {
    write("Du var lång du!!!: (⊙_⊙)")
}
*/
/*
let talet = +await read("Ditt Tal: ")
if(talet > 0) {
    write("Talet " +talet+ " är positivt")
} else if(talet == 0) {
    write("Talet är noll")
} else {
    write("Talet är negativt")
}
*/
/*
let x = +await read("Värdet på x = ")
let y = +await read("Värdet på y = ")
if(x < y) {
    write("x < y")
} else if(x > y) {
    write("x > y")
} else {
    write("x = y")
}
*/
/*
let x = +await read("Tal 1: ")
let y = +await read("Tal 2: ")
let operator = await read("Operator (+, -, *, /): ")
if(operator == ("+")) {
    let z = x + y
    write(z)
} if (operator == ("-")) {
    let z = x - y
    write(z)
} if(operator == ("*")) {
    let z = x * y
    write(z)
} if(operator == ("/")) {
    let z = x / y
    write(z)
}
*/
/*
let valör = +await read("Valör (1-13): ")
if(valör == 1) {
    write("Ett ess")
} else if(valör == 11) {
    write("En knekt")
} else if(valör == 12) {
    write("En dam")
} else if(valör == 13) {
    write("En kung")
} else if(valör > 13 || valör < 1) {
    write("Har du någonsin rört en kortlek!??!!??")
} else{
    await read(valör + (":a"))
}
*/
/*
let nummer = +await read("Månadsnummer: ")
if(nummer < 1 || nummer > 12) {
    write("Ja du om du tror att det finns en månad med detta månadsnummer så är du inte nykter!")
} else if(nummer == 1) {
    write("Januari")
} else if(nummer == 2) {
    write("Februari")
} else if(nummer == 3) {
    write("Mars")
} else if(nummer == 4) {
    write("April")
} else if(nummer == 5) {
    write("Maj")
} else if(nummer == 6) {
    write("Juni")
} else if(nummer == 7) {
    write("Juli")
} else if(nummer == 8) {
    write("Augusti")
} else if(nummer == 9) {
    write("September")
} else if(nummer == 10) {
    write("Oktober")
} else if(nummer == 11) {
    write("Novermber")
} else if(nummer == 12) {
    write("December")
}
*/
/*
let nummer = +await read("Månadsnummer: ")
if(nummer == 12 || nummer == 1 || nummer == 2) {
    write("Vinter")
} else if(nummer >= 3 && nummer <= 5) {
    write("Vår")
} else if(nummer >= 6 && nummer <= 8) {
    write("Sommar")
} else {
    write("Höst")
}
*/
/*
let tal1 = +await read("Tal 1: ")
let tal2 = +await read("Tal 2: ")
let produkt = +await read("Produkt: ")
if(produkt != tal1 * tal2) {
    let z = tal1 * tal2
    write("Fel. Rätt svar: " +z+ " ")
} else if(produkt == tal1 * tal2) {
    write("Du har rätt!")
}
*/
/*
let tal1 = +await read("Tal 1: ")
let tal2 = +await read("Tal 2: ")
let summa = tal1 + tal2
let medel = (tal1 + tal2)/2
write("Summa: "+summa+" ")
write("Medel: "+medel+" ")
if(tal1 < tal2) {
    write("Minsta: "+tal1+" ")
}
if(tal2 < tal1) {
    write("Minsta: "+tal2+" ")
} 
if(tal1 > tal2) {
    write("Största: "+tal1+" ")
}
if(tal2 > tal1) {
    write("Största: "+tal2+" ")
} else if(tal1 == tal2) {
    write("Talen är lika stora")
}
*/
/*
let tal1 = +await read("Tal 1: ")
let tal2 = +await read("Tal 2: ")
let tal3 = +await read("Tal 3: ")
let summa = tal1 + tal2 + tal3
let medel = (tal1 + tal2 + tal3)/3
write("Summa: "+summa+" ")
write("Medel: "+medel+" ")
if(tal1 < tal2 && tal1 < tal3) {
    write("Minsta: "+tal1+" ")
}
if(tal2 < tal1 && tal2 < tal3) {
    write("Minsta: "+tal2+" ")
} 
if(tal3 < tal1 && tal3 < tal2) {
    write("Minsta: "+tal3+" ")
}
if(tal1 > tal2 && tal1 > tal3) {
    write("Största: "+tal1+" ")
}
if(tal2 > tal1 && tal2 > tal3) {
    write("Största: "+tal2+" ")
} 
if(tal3 > tal1 && tal3 > tal2) {
    write("Största: "+tal3+" ")
}
else if(tal1 == tal2 && tal2 == tal3) {
    write("Talen är lika stora")
}
else if(tal1 == tal2) {
    write("Tal1 och Tal2 är lika stora")
}
else if(tal1 == tal3) {
    write("Tal1 och Tal3 är lika stora")
}
else if(tal2 == tal3) {
    write("Tal2 och Tal3 är lika stora")
}
*/
/*
let tecken = await read("Tecken: ")
let storbokstav = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ"
let litenbokstav = "abcdefghijklmnopqrstuvwxyzåäö"
if(storbokstav.includes(tecken)) {
    write("Stor bokstav")
} else if(litenbokstav.includes(tecken)) {
    write("Liten bokstav")
} else {
    write("Annat tecken")
}
*/

export{}