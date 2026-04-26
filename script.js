const textarea = document.getElementById('message');
  const counter = document.getElementById('charCount');

  textarea.addEventListener('input', () => {
    const length = textarea.value.length;
    counter.innerText = `${length} / 200 characters`;

    
    if (length > 200) {
      counter.classList.remove('text-gray-500', 'dark:text-gray-400');
      counter.classList.add('text-red-500', 'font-bold');
      textarea.classList.add('border-red-500', 'focus:ring-red-500');
    } else {
      counter.classList.add('text-gray-500', 'dark:text-gray-400');
      counter.classList.remove('text-red-500', 'font-bold');
      textarea.classList.remove('border-red-500', 'focus:ring-red-500');
    }
  });

  
  function toggleAccordion(index) {
    const contents = document.querySelectorAll('.accordion-content');
    const arrows = document.querySelectorAll('.arrow-icon');

    contents.forEach((content, i) => {
        if (i === index) {
            
            content.classList.toggle('hidden');
            arrows[i].classList.toggle('rotate-180');
        } else {
            
            content.classList.add('hidden');
            arrows[i].classList.remove('rotate-180');
        }
    });
}



const allButtons = document.querySelectorAll('.tab-btn');
const allPanels = document.querySelectorAll('.tab-panel');

allButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        
        allPanels.forEach(panel => {
            panel.classList.add('hidden');
        });
        
        
        allButtons.forEach(b => {
            b.classList.remove('border-blue-600', 'text-blue-600');
            b.classList.add('border-transparent', 'text-gray-500');
        });

      
        btn.classList.add('border-blue-600', 'text-blue-600');
        btn.classList.remove('border-transparent', 'text-gray-500');

        
        const targetId = btn.getAttribute('data-tab'); 
        const targetPanel = document.getElementById('panel-' + targetId);
        
        if (targetPanel) {
            targetPanel.classList.remove('hidden');
        }
    });
});