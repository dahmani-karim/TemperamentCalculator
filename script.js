function calculateResults() {
    const form = document.getElementById('quiz-form');
    const resultsDiv = document.getElementById('results');
    const resultText = document.getElementById('result-text');
    
    let scores = { N: 0, L: 0, S: 0, B: 0 };

    const formData = new FormData(form);
    formData.forEach((value) => {
        value.split(',').forEach(letter => {
            scores[letter] = (scores[letter] || 0) + 1;
        });
    });

    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topTemperament = sortedScores[0][0];

    // Afficher les scores cumulés dans le HTML
    document.getElementById('score-N').textContent = `Score Nerveux: ${scores.N}`;
    document.getElementById('score-L').textContent = `Score Lymphatique: ${scores.L}`;
    document.getElementById('score-S').textContent = `Score Sanguin: ${scores.S}`;
    document.getElementById('score-B').textContent = `Score Bilieux: ${scores.B}`;

    // Correspondance des lettres avec les tempéraments
    const temperaments = {
        N: 'Nerveux',
        L: 'Lymphatique',
        S: 'Sanguin',
        B: 'Bilieux'
    };

    resultsDiv.style.display = 'block';
    
    resultText.textContent = `Votre tempérament dominant est : ${temperaments[topTemperament]}`;
}
