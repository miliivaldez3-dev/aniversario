// script.js - Efectos para la página de aniversario

// Función para crear pétalos dinámicos
function crearPetalos() {
    const container = document.querySelector('.petalos-container');
    if (!container) return;
    
    const numPetalos = 25; // Puedes ajustar la cantidad de pétalos
    
    for (let i = 0; i < numPetalos; i++) {
        const petalo = document.createElement('div');
        petalo.className = 'petalo';
        
        // Posición y animación aleatoria
        const left = Math.random() * 100; // 0% a 100%
        const duration = 6 + Math.random() * 8; // 6-14 segundos
        const delay = Math.random() * 5; // 0-5 segundos de delay
        const size = 15 + Math.random() * 15; // 15-30px
        
        petalo.style.left = `${left}%`;
        petalo.style.animationDuration = `${duration}s`;
        petalo.style.animationDelay = `${delay}s`;
        petalo.style.width = `${size}px`;
        petalo.style.height = `${size}px`;
        
        container.appendChild(petalo);
    }
}


// Funciones para los juegos (placeholders por ahora)
function iniciarQuiz() {
    const juegoDiv = document.getElementById('juego');
    juegoDiv.innerHTML = `
        <div class="quiz-container">
            <h3>💕 Quiz del Amor 💕</h3>
            <p>¿En qué fecha fue nuestro primer beso?</p>
            <div class="botones-quiz">
                <button class="btn-quiz" onclick="responderQuiz(this, true)">26 de agosto</button>
                <button class="btn-quiz" onclick="responderQuiz(this, false)">11 de Octubre</button>
                <button class="btn-quiz" onclick="responderQuiz(this, false)">28 de Abril</button>
            </div>
        </div>
    `;
}

function responderQuiz(boton, esCorrecto) {
    // Deshabilitar todos los botones
    const botones = document.querySelectorAll('.btn-quiz');
    botones.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.7';
    });
    
    // Animación según la respuesta
    if (esCorrecto) {
        boton.classList.add('correcto');
        setTimeout(() => {
            mostrarResultado('¡Correcto! El mejor día de mi vida 💖', '💕');
        }, 600);
    } else {
        boton.classList.add('incorrecto');
        setTimeout(() => {
            mostrarResultado('¡Nop! Te equivocaste 😊', '💔');
        }, 600);
    }
}

function girarRuleta() {
    const juegoDiv = document.getElementById('juego');
    juegoDiv.innerHTML = `
        <div class="ruleta-container">
            <h3>🎡 Ruleta del Amor 🎡</h3>
            <p>¡Gira la ruleta y descubre una sorpresa!</p>
            <button class="btn-ruleta" onclick="girarRuletaReal(this)">Girar Ruleta</button>
            <div id="resultado-ruleta" style="margin-top: 20px; font-size: 1.2rem;"></div>
        </div>
    `;
}

function girarRuletaReal(boton) {
    const premios = [
        {texto: "💋 Un besito", emoji: "💋"},
        {texto: "💌 Un mensajito hot", emoji: "💌"},
        {texto: "🌹 Una rosa", emoji: "🌹"},
        {texto: "🎁 Un regalo sorpresa", emoji: "🎁"},
        {texto: "💞 Un abrazo fuerte", emoji: "💞"},
        {texto: "🌟 Un paseito nocturno", emoji: "🌟"},
    ];
    
    // Animación de giro
    boton.classList.add('ruleta-girando');
    boton.disabled = true;
    boton.textContent = '🎡 Girando...';
    
    // Mostrar animación de carga
    const resultadoDiv = document.getElementById('resultado-ruleta');
    resultadoDiv.innerHTML = '<div style="animation: pulse 1s infinite">✨</div>';
    
    setTimeout(() => {
        const premio = premios[Math.floor(Math.random() * premios.length)];
        
        // Quitar animación de giro
        boton.classList.remove('ruleta-girando');
        boton.disabled = false;
        boton.textContent = '🎡 Girar Nuevamente';
        
        // Mostrar resultado con animación
        resultadoDiv.innerHTML = `
            <div style="animation: aparecer 1s ease-out">
                <div style="font-size: 3rem; margin: 10px 0;">${premio.emoji}</div>
                <h4 style="color: #ff6b8b; margin: 10px 0;">¡Felicidades!</h4>
                <p style="font-size: 1.3rem; font-weight: bold;">${premio.texto}</p>
            </div>
        `;
    }, 2000);
}

function mostrarResultado(mensaje, emoji) {
    const modal = document.createElement('div');
    modal.className = 'modal-resultado';
    modal.innerHTML = `
        <div class="contenido-modal">
            <button class="cerrar-modal" onclick="this.parentElement.parentElement.remove()">×</button>
            <div style="font-size: 4rem; margin-bottom: 1rem;">${emoji}</div>
            <h3 style="color: #ff6b8b; margin-bottom: 1rem;">${mensaje}</h3>
            <button class="btn-quiz" onclick="this.parentElement.parentElement.remove()">Continuar</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Efecto de confeti para celebraciones
function lanzarConfeti() {
    const confetiContainer = document.createElement('div');
    confetiContainer.style.position = 'fixed';
    confetiContainer.style.top = '0';
    confetiContainer.style.left = '0';
    confetiContainer.style.width = '100%';
    confetiContainer.style.height = '100%';
    confetiContainer.style.pointerEvents = 'none';
    confetiContainer.style.zIndex = '9999';
    
    for (let i = 0; i < 50; i++) {
        const confeti = document.createElement('div');
        confeti.innerHTML = ['🎉', '🎊', '💖', '💕', '🌟', '✨'][Math.floor(Math.random() * 6)];
        confeti.style.position = 'absolute';
        confeti.style.fontSize = (20 + Math.random() * 20) + 'px';
        confeti.style.left = Math.random() * 100 + '%';
        confeti.style.animation = `confetiCaida ${2 + Math.random() * 3}s linear forwards`;
        confetiContainer.appendChild(confeti);
    }
    
    document.body.appendChild(confetiContainer);
    
    setTimeout(() => {
        confetiContainer.remove();
    }, 3000);
}

// Agregar animación de confeti al CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes confetiCaida {
        0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);