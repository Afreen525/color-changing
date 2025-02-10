const btn = document.querySelector('.btn');


const colors = [
    { background: '#ffac09', shadow: '0 0 40px #ffac09' },
    { background: '#601A3E', shadow: '0 0 30px #601A3E' },
    { background: '#28a745', shadow: '0 0 30px #28a745' },
    { background: '#007bff', shadow: '0 0 30px #007bff' },
    { background: '#dc3545', shadow: '0 0 30px #dc3545' },
    { background: '#601A3E', shadow: '0 0 30px #601A3E' },
    { background: '#4C0212', shadow: '0 0 30px #4C0212' },
    { background: '#9866C7', shadow: '0 0 30px #9866C7' }
    
    
];

let currentColorIndex = 0;

btn.addEventListener('click', () => {
    
    btn.style.backgroundColor = colors[currentColorIndex].background;
    btn.style.boxShadow = colors[currentColorIndex].shadow;

    
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});
