document.addEventListener('DOMContentLoaded', function() {
    // Filtro de categorias
    const categoryButtons = document.querySelectorAll('.category-btn');
    const videoCards = document.querySelectorAll('.video-card');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe active de todos os botões
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe active apenas ao botão clicado
            this.classList.add('active');
            
            const selectedCategory = this.textContent.trim().toLowerCase();
            
            // Filtra os vídeos
            videoCards.forEach(card => {
                if (selectedCategory === 'todos') {
                    card.style.display = 'block';
                } else {
                    const cardCategories = card.dataset.category.toLowerCase();
                    if (cardCategories.includes(selectedCategory)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});

        // Script para o FAQ
        document.addEventListener('DOMContentLoaded', function() {
            const faqQuestions = document.querySelectorAll('.faq-question');
            
            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    const item = question.parentElement;
                    item.classList.toggle('active');
                    
                    const icon = question.querySelector('i');
                    icon.classList.toggle('fa-chevron-down');
                    icon.classList.toggle('fa-chevron-up');
                });
            });
        });
