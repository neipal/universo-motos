function calculateDepreciation() {
    const motoValue = parseFloat(document.getElementById('motoValue').value);
    const creditTerm = parseInt(document.getElementById('creditTerm').value);

    if (!motoValue || !creditTerm || motoValue <= 0 || creditTerm <= 0) {
        alert('Por favor, ingresa valores válidos');
        return;
    }

    // Tasas de depreciación
    const newMotoFirstYearRate = 0.26; // 26% primer año
    const newMotoAnnualRate = 0.10; // 10% años siguientes
    const usedMotoAnnualRate = 0.10; // 10% anual

    // Cálculos para moto nueva
    const newMotoFirstYearDepreciation = motoValue * newMotoFirstYearRate;
    const newMotoValueAfterFirstYear = motoValue - newMotoFirstYearDepreciation;
    let newMotoFinalValue = newMotoValueAfterFirstYear;
    
    // Cálculos para años adicionales
    const remainingYears = (creditTerm / 12) - 1;
    if (remainingYears > 0) {
        newMotoFinalValue *= Math.pow(1 - newMotoAnnualRate, remainingYears);
    }

    // Cálculos para moto seminueva
    const usedMotoFirstYearDepreciation = motoValue * usedMotoAnnualRate;
    let usedMotoFinalValue = motoValue;
    const totalYears = creditTerm / 12;
    usedMotoFinalValue *= Math.pow(1 - usedMotoAnnualRate, totalYears);

    // Mostrar resultados
    document.getElementById('newMotoDepreciation').textContent = 
        `$${newMotoFirstYearDepreciation.toLocaleString('es-MX')} MXN`;
    document.getElementById('newMotoFinalValue').textContent = 
        `$${newMotoFinalValue.toLocaleString('es-MX')} MXN`;
    document.getElementById('usedMotoDepreciation').textContent = 
        `$${usedMotoFirstYearDepreciation.toLocaleString('es-MX')} MXN`;
    document.getElementById('usedMotoFinalValue').textContent = 
        `$${usedMotoFinalValue.toLocaleString('es-MX')} MXN`;

    // Mostrar resultados
    document.getElementById('calculatorResults').classList.add('show');
} 