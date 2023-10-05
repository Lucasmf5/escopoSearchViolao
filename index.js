console.log("Escolha seu violão!");
document.getElementById("myButton").onclick = function () {
    let nac;
    let tipo;
    let amp;
    let violao;
    nac = document.getElementById("nac").value;
    console.log("Você escolheu um violão " + nac + ".");

    tipo = document.getElementById("tipo").value;
    console.log("Você escolheu um violão " + tipo + ".");

    amp = document.getElementById("amp").value;
    console.log("Você escolheu um violão " + amp + ".");
    // AMERICANOS
    if (nac === "americanos" && tipo === "aço" && amp === "elétrico") {
        violao = "Nós temos os violões: \n Martin: Eltroacústico Aço D-X2E, Eltroacústico Little Martin Aço LX-1RE e Eltroacústico Aço DC-X2E \n Taylor: Eletroacústico Aço Baby BT-1, Eltroacústico Aço 110E Walnut e Eltroacústico Aço Academy A10E \n Fender: Eltroacústico Aço Malibu, Eltroacústico Aço Newporter e Eltroacústico Aço CD-60";
    }
    if (nac === "americanos" && tipo === "nylon" && amp === "elétrico") {
        violao = "Nós não possuimos violões americanos de nylon e elétricos.";
    }
    if (nac === "americanos" && tipo === "aço" && amp === "acústico") {
        violao = "Nós não possuimos violões americanos de aço e acústicos.";
    }
    if (nac === "americanos" && tipo === "nylon" && amp === "acústico") {
        violao = "Nós não possuimos violões americanos de nylon e acústicos.";
    }

    //JAPONESES
    if (nac === "japoneses" && tipo === "aço" && amp === "elétrico") {
        violao = "Nós temos os violões:\nYamaha: Eltroacústico Aço Yamaha LS16M. \nTakamine: Eltroacústico Aço GD-12CE e Eltroacústico Aço Jumbo GJ72CE.";
    }
    if (nac === "japoneses" && tipo === "nylon" && amp === "elétrico") {
        violao = "Nós não possuimos violões japoneses de nylon e elétricos";
    }
    if (nac === "japoneses" && tipo === "aço" && amp === "acústico") {
        violao = "Nós não possuimos violões japoneses de açõ e acústicos.";
    }
    if (nac === "japoneses" && tipo === "nylon" && amp === "acústico") {
        violao = "Nós temos os violões: \nYamaha: Acústico Nylon NTX3 Clássico e Acústico Nylon NCX1 Clássico. \nTakamine: Acústico Nylon GC1CE Clássico.";
    }
    // COREANO
    if (nac === "coreano" && tipo === "aço" && amp === "elétrico") {
        violao = "Nós temos os violões: \nCort: Eltroacústico Aço CEC-1 e Eltroacústico Aço Cort Earth 60 mini.";
    }
    if (nac === "coreano" && tipo === "nylon" && amp === "elétrico") {
        violao = "Nós temos os violões: Cort: Eltroacústico Nylon CEC-3.";
    }
    if (nac === "coreano" && tipo === "aço" && amp === "acústico") {
        violao = "Nós não possuimos violões coreanos de aço e acústicos.";
    }
    if (nac === "coreano" && tipo === "nylon" && amp === "acústico") {
        violao = "Nós não possuimos violões coreanos de nylon e acústicos.";
    }
    //BRASILEIROS
    if (nac === "brasileiros" && tipo === "aço" && amp === "elétrico") {
        violao = "Nós temos os violões: \nGiannini: Eletroacustico Aço FK2 GOAL. \nEagle: Eletroacústico Aço EMA 663 e Eletroacústico Aço EMD 660.";
    }
    if (nac === "brasileiros" && tipo === "nylon" && amp === "elétrico") {
        violao = "Nós temos os violões: \nGiannini: Eletroacústico Nylon GNF-1D e Eletroacústico Nylon NTR1 EQ. \nRozini: Eletroacústico Nylon RX515 e Eletroacústico Nylon RX213.";
    }
    if (nac === "brasileiros" && tipo === "aço" && amp === "acústico") {
        violao = "Nós temos os violões: \nRozini: Acústico Aço RX540.";
    }
    if (nac === "brasileiros" && tipo === "nylon" && amp === "acústico") {
        violao = "Nós temos os violões: \nEagle: Acústico Nylon EMN 880C.";
    }
    document.getElementById("dLabel").innerHTML = violao;
}

