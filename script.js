let names = ["Wandile", "Khum", "Selina", "Precious", "Andiswe", "Maspeka", "Kagisho", "Vusi", "Mduzi", "Nkosi", "Happy", "Sthembiso", "Ntombea", "Sophie", "Lucky"]

let display = document.getElementById("display");

for (let i = 0; i < names.length; i++) {
    display.innerHTML += "<hr>" + names[i] + "</hr>"
}