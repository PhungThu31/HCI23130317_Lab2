document.addEventListener('DOMContentLoaded', function() {
    const exerciseTitle = document.getElementById('exerciseTitle');
    const exerciseDescription = document.getElementById('exerciseDescription');
    const languageSelector = document.getElementById('languageSelector');
    const codeEditor = document.getElementById('codeEditor');
    const runButton = document.getElementById('runButton');
    const submitButton = document.getElementById('submitButton');
    const output = document.getElementById('output');
    const backButton = document.getElementById('backButton');

    // Giả sử bạn có một mảng bài tập
    const exercises = [
        {
            id: 1,
            title: 'C Exercise',
            description: 'Write a program that prints "Hello, World!"',
            language: 'C'
        },
        {
            id: 2,
            title: 'Python Exercise',
            description: 'Write a program to calculate the sum of two numbers',
            language: 'Python'
        },
        {
            id: 3,
            title: 'Java Exercise',
            description: 'Write a program that prints numbers from 1 to 10',
            language: 'Java'
        }
    ];
    

    // Hiển thị bài tập đầu tiên khi trang tải lên
    displayExercise(exercises[0]);

    // Xử lý sự kiện chọn ngôn ngữ
    languageSelector.addEventListener('change', function() {
        const selectedExercise = exercises.find(exercise => exercise.language === this.value);
        if (selectedExercise) {
            displayExercise(selectedExercise);
        }
    });

    // Xử lý sự kiện chạy code
    runButton.addEventListener('click', function() {
        const code = codeEditor.value;
        simulateCodeExecution(code);
    });

    // Xử lý sự kiện quay lại trang dashboard
    backButton.addEventListener('click', function() {
        window.location.href = 'dashboard.html'; // Thay đổi đường dẫn tương ứng với trang dashboard
    });

    submitButton.addEventListener('click', function() {
        window.location.href = 'result.html'; 
    });

    function displayExercise(exercise) {
        exerciseTitle.textContent = exercise.title;
        exerciseDescription.textContent = exercise.description;
        languageSelector.value = exercise.language;
    }

    function simulateCodeExecution(code) {
        // Giả lập việc chạy code và hiển thị kết quả
        let outputText = '';
        if (languageSelector.value === 'C') {
            outputText = `Compiled and executed successfully!\nOutput: ${code}`;
        } else if (languageSelector.value === 'Python') {
            outputText = `Executed successfully!\nOutput: ${code.replace(/\n/g, '\n    ')}`;
        } else if (languageSelector.value === 'Java') {
            outputText = `Compiled and executed successfully!\nOutput: ${code.replace(/\n/g, '\n    ')}`;
        }
        output.textContent = outputText;
    }
});