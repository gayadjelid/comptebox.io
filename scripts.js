// Initialiser EmailJS avec votre user ID
(function() {
    emailjs.init("m87_r54favuHuHHfO");
})();

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire classique

    // Récupérer les données du formulaire
    const subscriptionSelect = document.getElementById('subscription');
    const selectedOption = subscriptionSelect.options[subscriptionSelect.selectedIndex];

    // Mettre à jour les champs cachés avec les données sélectionnées
    document.getElementById('price').value = selectedOption.getAttribute('data-price');
    document.getElementById('period').value = selectedOption.getAttribute('data-period');

    // Envoyer le formulaire via EmailJS
    emailjs.sendForm('service_87nzp6y', 'template_xlet0tl', this)
        .then(() => {
            alert('Formulaire envoyé avec succès !');
            document.getElementById('paymentForm').reset(); // Réinitialiser le formulaire
        }, (error) => {
            alert('Erreur lors de l\'envoi du formulaire : ' + JSON.stringify(error));
        });
});
