document.addEventListener('DOMContentLoaded', () => {
    const submissionStatus = document.getElementById('submissionStatus');
    const testCaseTable = document.getElementById('testCaseTable');
    const submissionScore = document.getElementById('submissionScore');
    const submissionTime = document.getElementById('submissionTime');
    const submissionMemory = document.getElementById('submissionMemory');
    const retryButton = document.getElementById('retryButton');
    const dashboardButton = document.getElementById('dashboardButton');

    // Giả sử bạn nhận được dữ liệu kết quả nộp bài từ máy chủ ở đây
    const submissionData = {
        status: 'Success',
        testCases: [
            {
                input: '10',
                expectedOutput: '20',
                actualOutput: '20',
                result: 'Đúng'
            },
            {
                input: '5',
                expectedOutput: '10',
                actualOutput: '10',
                result: 'Đúng'
            },
            // Thêm test case khác ở đây...
        ],
        score: 10,
        time: '1.2s',
        memory: '32MB'
    };

    submissionStatus.textContent = submissionData.status;

    submissionData.testCases.forEach(testCase => {
        const row = testCaseTable.insertRow();
        const testCaseCell = row.insertCell(0);
        const inputCell = row.insertCell(1);
        const expectedOutputCell = row.insertCell(2);
        const actualOutputCell = row.insertCell(3);
        const resultCell = row.insertCell(4);

        testCaseCell.textContent = 'Test Case 1';
        inputCell.textContent = testCase.input;
        expectedOutputCell.textContent = testCase.expectedOutput;
        actualOutputCell.textContent = testCase.actualOutput;
        resultCell.textContent = testCase.result;
    });

    submissionScore.textContent = submissionData.score;
    submissionTime.textContent = submissionData.time;
    submissionMemory.textContent = submissionData.memory;

    retryButton.addEventListener('click', () => {
        // Logic để thử lại bài tập ở đây
        // Ví dụ: chuyển hướng đến trang bài tập
        window.location.href = 'exercise.html';
    });

    dashboardButton.addEventListener('click', () => {
        // Quay lại bảng điều khiển
        window.location.href = 'dashboard.html';
    });
    
});