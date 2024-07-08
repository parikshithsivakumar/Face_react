const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const Papa = require('papaparse');

const app = express();
app.use(express.json());

const CSV_FILE_PATH = path.join(__dirname, 'qa_data.csv');
const FEEDBACK_FILE_PATH = path.join(__dirname, 'feedback.txt');

//Serve the CSV file
app.get('/qa_data.csv', (req, res) => {
  res.sendFile(CSV_FILE_PATH);
});

//Handle feedback
app.post('/api/feedback', async (req, res) => {
  try {
    const { timestamp, question, feedback } = req.body;
    
    const feedbackLine = `${timestamp}|${question}|${feedback}\n`;
    
    await fs.appendFile(FEEDBACK_FILE_PATH, feedbackLine, 'utf8');
    
    res.status(200).json({ message: 'Feedback saved successfully' });
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).json({ error: 'Failed to save feedback' });
  }
});

app.get('/api/feedback', async (req, res) => {
  try {
    const feedbackContent = await fs.readFile(FEEDBACK_FILE_PATH, 'utf8');
    const feedbackLines = feedbackContent.split('\n').filter(line => line.trim() !== '');
    const feedback = feedbackLines.map(line => {
      const [timestamp, question, feedbackType] = line.split('|');
      return { timestamp, question, feedback: feedbackType };
    });
    res.json(feedback);
  } catch (error) {
    console.error('Error reading feedback:', error);
    res.status(500).json({ error: 'Failed to read feedback' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
