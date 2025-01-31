import React, { useState } from 'react';
import jsPDF from 'jspdf';
import './Dashboard.css';

const Dashboard = () => {
    const [healthMetrics, setHealthMetrics] = useState(null);

    const calculateBMI = (weight, height) => {
        const heightInMeters = height / 100;
        return (weight / (heightInMeters ** 2)).toFixed(2);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            const formData = new FormData(event.target);

            const healthData = {
                fullName: formData.get('fullName'),
                age: parseInt(formData.get('age')),
                weight: parseFloat(formData.get('weight')),
                height: parseFloat(formData.get('height')),
                bloodPressure: formData.get('bloodPressure'),
                heartRate: parseFloat(formData.get('heartRate')),
                gender: formData.get('gender'),
                cholesterol: parseFloat(formData.get('cholesterol')),
                glucose: parseFloat(formData.get('glucose')),
                activityLevel: formData.get('activityLevel'),
            };

            const bmi = calculateBMI(healthData.weight, healthData.height);
            const idealWeightRange = calculateIdealWeightRange(healthData.height);
            const healthMessage = getHealthMessage(bmi, healthData.bloodPressure, healthData.heartRate);
            const timestamp = new Date().toLocaleString();

            setHealthMetrics({
                ...healthData,
                bmi,
                bmiCategory: bmi < 18.5 ? "Underweight" : bmi < 24.9 ? "Normal weight" : bmi < 29.9 ? "Overweight" : "Obese",
                idealWeightRange,
                healthMessage,
                timestamp,
            });
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    const calculateIdealWeightRange = (height) => {
        const heightInMeters = height / 100;
        const minWeight = (18.5 * (heightInMeters ** 2)).toFixed(1);
        const maxWeight = (24.9 * (heightInMeters ** 2)).toFixed(1);
        return `${minWeight} kg - ${maxWeight} kg`;
    };

    const getHealthMessage = (bmi, bloodPressure, heartRate) => {
        let message = "Your health metrics are within a normal range.";
        if (bmi < 18.5) message = "You are underweight. Consider consulting a nutritionist.";
        else if (bmi > 24.9) message = "You are overweight. A balanced diet and exercise are recommended.";
        if (bloodPressure === "high") message += " Your blood pressure is high. Please consult a doctor.";
        if (heartRate > 100) message += " Your heart rate is above normal. Consider seeking medical advice.";
        return message;
    };
    const downloadPDF = () => {
        const doc = new jsPDF();

        // Set font size
        const fontSize = 16;
        doc.setFontSize(fontSize);

        // Define page width and margins
        const pageWidth = doc.internal.pageSize.width;
        const margin = 10;
        const usablePageWidth = pageWidth - margin * 2;

        const centerText = (text, y) => {
            const wrappedText = doc.splitTextToSize(text, usablePageWidth);
            wrappedText.forEach((line) => {
                const textWidth = doc.getTextWidth(line);
                const x = (pageWidth - textWidth) / 2;
                doc.text(line, x, y);
                y += fontSize * 0.7; // Adjust spacing between lines
            });
            return y;
        };

        const {
            fullName, age, gender, weight, height, bloodPressure, heartRate, bmi, bmiCategory, idealWeightRange, healthMessage, timestamp
        } = healthMetrics;

        let y = margin; // Starting Y position with margin

        // Add each line to the PDF, adjusting for text wrapping
        y = centerText("Health Metrics Summary", y);
        y += 10; // Add extra space after title

        y = centerText(`Full Name: ${fullName}`, y);
        y = centerText(`Age: ${age}`, y);
        y = centerText(`Gender: ${gender}`, y);
        y = centerText(`Weight: ${weight} kg`, y);
        y = centerText(`Height: ${height} cm`, y);
        y = centerText(`Blood Pressure: ${bloodPressure}`, y);
        y = centerText(`Heart Rate: ${heartRate} bpm`, y);
        y = centerText(`BMI: ${bmi} (${bmiCategory})`, y);
        y = centerText(`Ideal Weight Range: ${idealWeightRange}`, y);

        // Split long messages and ensure text wraps properly
        const healthMessageLines = doc.splitTextToSize(`Health Message: ${healthMessage}`, usablePageWidth);
        healthMessageLines.forEach((line) => {
            y = centerText(line, y);
        });

        y = centerText(`Report Generated On: ${timestamp}`, y);

        // Check if we need a new page
        if (y > doc.internal.pageSize.height - margin) {
            doc.addPage();
            y = margin;
        }

        doc.save(`${fullName}_HealthMetrics.pdf`);
    };



    return (
        <div className="dashboard-section">
            <div className="health-form-m">
                <h2>Health Form</h2>
                {healthMetrics ? (
                    <div className="health-metrics">
                        <h3>Health Metrics Summary</h3>
                        <p><strong>Full Name:</strong> {healthMetrics.fullName}</p>
                        <p><strong>Age:</strong> {healthMetrics.age}</p>
                        <p><strong>Weight:</strong> {healthMetrics.weight} kg</p>
                        <p><strong>Height:</strong> {healthMetrics.height} cm</p>
                        <p><strong>Blood Pressure:</strong> {healthMetrics.bloodPressure}</p>
                        <p><strong>Heart Rate:</strong> {healthMetrics.heartRate} bpm</p>
                        {/* <p><strong>Cholesterol:</strong> {healthMetrics.cholesterol} mg/dL</p>
                        <p><strong>Glucose:</strong> {healthMetrics.glucose} mg/dL</p>
                        <p><strong>Activity Level:</strong> {healthMetrics.activityLevel}</p> */}
                        <p><strong>BMI:</strong> {healthMetrics.bmi} ({healthMetrics.bmiCategory})</p>
                        <p><strong>Ideal Weight Range:</strong> {healthMetrics.idealWeightRange}</p>
                        <p><strong>Health Message:</strong> {healthMetrics.healthMessage}</p>
                        <p><strong>Report Generated On:</strong> {healthMetrics.timestamp}</p>
                        <button onClick={downloadPDF}>Download PDF</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="health-form">
                            <div>
                                <label htmlFor="fullName">Full Name:</label>
                                <input type="text" id="fullName" name="fullName" required />
                            </div>
                            <div>
                                <label htmlFor="age">Age:</label>
                                <input type="number" id="age" name="age" required />
                            </div>
                            <div>
                                <label htmlFor="gender">Gender:</label>
                                <select id="gender" name="gender" required>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="weight">Weight (kg):</label>
                                <input type="number" id="weight" name="weight" required />
                            </div>
                            <div>
                                <label htmlFor="height">Height (cm):</label>
                                <input type="number" id="height" name="height" required />
                            </div>
                            <div>
                                <label htmlFor="bloodPressure">Blood Pressure:</label>
                                <input type="text" id="bloodPressure" name="bloodPressure" required />
                            </div>
                            <div>
                                <label htmlFor="heartRate">Heart Rate (bpm):</label>
                                <input type="number" id="heartRate" name="heartRate" required />
                            </div>
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
