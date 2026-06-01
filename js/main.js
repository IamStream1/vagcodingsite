function filterServices(category) {
    // 1. Schovat všechny tbody skupiny
    const groups = document.querySelectorAll('.service-type');
    groups.forEach(group => {
        group.classList.remove('show-rows');
    });

    // 2. Deaktivovat aktivní třídu u všech tlačítek tabs
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Aktivovat vybranou skupinu řádků
    const activeGroup = document.getElementById(category);
    if (activeGroup) {
        activeGroup.classList.add('show-rows');
    }

    // 4. Nastavit aktivní stav aktuálnímu tlačítku
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}