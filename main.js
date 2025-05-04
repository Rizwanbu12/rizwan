    const matrix = document.getElementById('matrix');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = matrix.clientWidth;
    canvas.height = matrix.clientHeight;
    matrix.appendChild(canvas);
    
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    
    const alphabet = katakana + latin + nums + symbols;
    
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    
    const rainDrops = [];
    
    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }
    
    const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0f0';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
            
            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };
    
    setInterval(draw, 30);
    
 
    window.addEventListener('resize', () => {
        canvas.width = matrix.clientWidth;
        canvas.height = matrix.clientHeight;
    });
    

    const typeWriter = (element, text, speed) => {
        let i = 0;
        const typing = () => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        };
        typing();
    };
    

    const typingText = document.querySelector('.typing-text');
    const originalText = typingText.textContent;
    typingText.textContent = '';
    typeWriter(typingText, originalText, 100);
    
   
    setTimeout(() => {
        const command = document.querySelector('.command');
        command.style.borderRight = 'none';
    }, 3500);
    
 
    const glitchElements = document.querySelectorAll('.glitch');
    glitchElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.animation = 'glitch-effect 0.5s infinite';
        });
        el.addEventListener('mouseleave', () => {
            el.style.animation = '';
        });
    });