"use strict";
<script>
  const produits = document.querySelectorAll('.produit');
  const filtres = document.querySelectorAll('input[type="checkbox"]');

  function filtrerProduits() {
    produits.forEach(produit => {
      produit.style.display = 'none';
      if (filtres[0].checked && produit.querySelector('img').alt === 'Chemise') {
        produit.style.display = 'block';
      }
      if (filtres[1].checked && produit.querySelector('img').alt === 'Pantalon') {
        produit.style.display = 'block';
      }
      // Ajoutez plus de conditions ici
    })
  }

  filtres.forEach(filtre = filtre.addEventListener('click', filtrerProduits));
</script>
