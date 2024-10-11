if (localStorage.getItem('isAuthenticated') !== 'true') {
    window.location.href = 'index.html';
}

const exercises = [
    { id: 1, title: 'Sum of Two Numbers', description: 'Write a program to sum two numbers', difficulty: 'Easy', language: 'Python', status: 'Not Started' },
    { id: 2, title: 'Factorial', description: 'Calculate the factorial of a number', difficulty: 'Medium', language: 'Java', status: 'In Progress' },
    { id: 3, title: 'Reverse String', description: 'Reverse a given string', difficulty: 'Easy', language: 'C', status: 'Completed' },
];

function filterExercises() {
    const languageFilter = document.getElementById('languageFilter').value;
    const keyword = document.getElementById('keywordSearch').value.toLowerCase();
    
    const filteredExercises = exercises.filter(exercise => {
        return (languageFilter === 'all' || exercise.language === languageFilter) &&
               (exercise.title.toLowerCase().includes(keyword) || exercise.description.toLowerCase().includes(keyword));
    });
    
    displayExercises(filteredExercises);
}

function displayExercises(exercises) {
    const exerciseList = document.getElementById('exerciseList');
    exerciseList.innerHTML = '';
    
    exercises.forEach(exercise => {
        const exerciseItem = document.createElement('div');
        exerciseItem.className = 'exercise-item';
        exerciseItem.innerHTML = `
            <h3>${exercise.title}</h3>
            <p>${exercise.description}</p>
            <p>Difficulty: ${exercise.difficulty}</p>
            <p>Status: ${exercise.status}</p>
            <button onclick="viewExercise(${exercise.id})">View</button>
        `;
        exerciseList.appendChild(exerciseItem);
    });
}

function viewExercise(id) {
    const exercise = exercises.find(ex => ex.id === id);
    localStorage.setItem('currentExercise', JSON.stringify(exercise));
    window.location.href = 'exercise.html';
}

document.getElementById('languageFilter').addEventListener('change', filterExercises);
document.getElementById('keywordSearch').addEventListener('input', filterExercises);

filterExercises();
