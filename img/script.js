function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const selected = document.getElementById(sectionId);
    selected.classList.add('active');
}
