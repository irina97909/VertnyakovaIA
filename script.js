document.addEventListener('DOMContentLoaded', function() {
    // Интересы
    const toggleBtn = document.getElementById('toggleBtn');
    const additionalInfo = document.getElementById('additional-info');
    let isInterestsExpanded = false;

    toggleBtn.addEventListener('click', function() {
        if (isInterestsExpanded) {
            additionalInfo.style.display = 'none';
            toggleBtn.textContent = 'Показать интересы';
            isInterestsExpanded = false;
        } else {
            additionalInfo.style.display = 'block';
            toggleBtn.textContent = 'Скрыть интересы';
            isInterestsExpanded = true;
        }
    });

    // Навыки
    const skillsBtn = document.getElementById('skillsBtn');
    const skillsInfo = document.getElementById('skills-info');
    let isSkillsExpanded = false;

    skillsBtn.addEventListener('click', function() {
        if (isSkillsExpanded) {
            skillsInfo.style.display = 'none';
            skillsBtn.textContent = 'Показать навыки';
            isSkillsExpanded = false;
        } else {
            skillsInfo.style.display = 'block';
            skillsBtn.textContent = 'Скрыть навыки';
            isSkillsExpanded = true;
        }
    });
});