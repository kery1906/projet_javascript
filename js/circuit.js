function calculateCurrents() {
    // Récupérer les valeurs des résistances et de la tension
    const R1 = parseFloat(document.getElementById('R1').value);
    const R2 = parseFloat(document.getElementById('R2').value);
    const R3 = parseFloat(document.getElementById('R3').value);
    const R4 = parseFloat(document.getElementById('R4').value);
    const E = parseFloat(document.getElementById('E').value);

    // Vérifier que les valeurs sont positives et non nulles
    if (isNaN(R1) || R1 <= 0 || isNaN(R2) || R2 <= 0 || isNaN(R3) || R3 <= 0 || isNaN(R4) || R4 <= 0 || isNaN(E) || E <= 0) {
        document.getElementById('results').innerText = "Toutes les valeurs doivent être positives et non nulles.";
        return;
    }

    // Calculer les courants
    const I1 = E / R1;
    const I4 = I1;
    const I2 = I1 * (R3 / (R2 + R3));
    const I3 = I1 * (R2 / (R2 + R3));

    // Vérifier la condition I1 = I4
    // if (I1 !== I4) {
    //     document.getElementById('error').innerHTML = "Erreur, I1 doit être égal à I4";
    //     return;
    // }

    // Afficher les résultats
    document.getElementById('results').innerHTML = `
        <strong>Résultats:</strong><br>
        I1 = ${I1.toFixed(2)} A<br>
        I2 = ${I2.toFixed(2)} A<br>
        I3 = ${I3.toFixed(2)} A<br>
        I4 = ${I4.toFixed(2)} A
    `;
}

function reinitialiser() {
    document.getElementById("R1").value = "";
    document.getElementById("R2").value = "";
    document.getElementById("R3").value = "";
    document.getElementById("R4").value = "";
    document.getElementById("E").value = "";
    document.getElementById("results").innerHTML = "";
}
