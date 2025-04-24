
if (!sessionStorage.getItem("dozvoljen_pristup")) {
    console.log("Nemate dozvolu za pristup ovoj stranici!");
    window.location.href = "index.html";  // Preusmeravanje na početnu stranicu
}

document.getElementById("loginButton").addEventListener("click", async function() {
    const ime = document.getElementById("email").value;
    const prezime = document.getElementById("password").value;
    
    
        const response = await fetch('https://samsungappslab.vtsnis.edu.rs/api/logingosti', {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ime, prezime })
        });
    
        const data = await response.json();
        
        if (response.ok) {
            // Možeš sačuvati token u localStorage ili sessionStorage
            sessionStorage.setItem("token", data.access_token);
            sessionStorage.setItem("rola", data.rola);
            sessionStorage.setItem("dozvoljen_pristup", "da");
            window.location.href = "app.html";
        } else {
            alert("Greška: " + data.message);
        }
    




    
});