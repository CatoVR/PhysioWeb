function showLocation(location) {
    const location1 = document.getElementById('location1');
    const location2 = document.getElementById('location2');
    
    if (location === 'location1') {
        location1.classList.add('active');
        location1.classList.remove('minimized');
        location2.classList.add('minimized');
        location2.classList.remove('active');
        content2.classList.add('hidden');
        content1.classList.remove('hidden');
    } else if (location === 'location2') {
        location1.classList.add('minimized');
        location1.classList.remove('active');
        location2.classList.add('active');
        location2.classList.remove('minimized');
        content1.classList.add('hidden');
        content2.classList.remove('hidden');
    }
}
