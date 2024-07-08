require('dotenv').config();
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const Papa = require('papaparse');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const CSV_FILE_PATH = process.env.CSV_FILE_PATH || path.join(__dirname, 'qa_data.csv'); //Add your CSV file with first column as questions (all in lower case) and second column as answers corresponding to its first column cell's question...
const FEEDBACK_FILE_PATH = process.env.FEEDBACK_FILE_PATH || path.join(__dirname, 'feedback.txt'); //Make a feedback.txt file in the server directory to store the converstations and feedback from the user... It helps in better understanding of what users are questiong and if chatbot is replying back upto their expectations...

//Serve the CSV file...
app.get('/api/qa_data', (req, res) => {
  res.sendFile(CSV_FILE_PATH);
});

//Handle feedback...
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
