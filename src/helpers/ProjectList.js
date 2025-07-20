import Img1 from '../assets/vox-seg-0.gif';
import Img2 from '../assets/yourcloset.jpg';
import Img5 from '../assets/5.jpg';
import Img4 from '../assets/4.jpg';
import Img6 from '../assets/9.png';
import Img3 from '../assets/3.jpeg';
import Img10 from '../assets/10.jpeg';

export const ProjectList = [

    {
        name:'Stock Market App',
        image: Img10,
        video: 'https://drive.google.com/file/d/1r1Xvg7b5rMBSq-JQNBHhq7vbCvI6ANQK/view',
        text:[
            'Developed a responsive web app allowing users to buy/sell stocks and manage portfolios.',
            'Integrated real-time data using Finhub API; visualized data with interactive HighchartJS charts.'
        ]
    },
    {
        name: 'Face swapping in live streaming',
        image: Img1,
        video: 'https://vimeo.com/1101785774?share=copy#%23t=0', // Add your video URL here, e.g., 'https://example.com/video1.mp4'
        text: ['Achieved face swapping capabilities in live streaming by modifying 1st Order motion model algorithm and applying unsupervised segmentation masks consisting of 5 segmented parts (5 Segment Model).',
            'Transformed model by creating 10 segmented parts and trained it on VoxCeleb dataset.',
            'Synthesized face parsing model and used motion supervised co - part segmentation for part swapping.',
            'Enhanced algorithm by using relative keypoint locations instead of absolute keypoint locations.']
    },
    {
        name: 'Smart wardrobe planner',
        image: Img2,
        video: null, // Add your video URL here
        text: ["Devised a system to aid users in choosing daily outfits, also provided recommendations for buying new ones",
            "Developed CNN model for clothes classification with an accuracy of 95%.",
            "Generated 16 binary classification model for each cloth in questionnaire, applied cosine similarity between two embeddings to predict matching with average accuracy of 76%."]
    },
    {
        name: 'Mental health state detection',
        image: Img4,
        video: null, // Add your video URL here
        text: ["Constructed a system to detect mental health state by exploring 4 parameters, tracking heart rate through pulse recognition, physical and mental tiredness through facial detection, and stress levels through sentimental analysis.",
            "Employed Histogram of Oriented Gradient + CNN for facial emotion detection with an average accuracy of 90%.",
            "Deployed OpenCV to locate face and isolate forehead, modeled available method on it for pulse - based detection.",
            "Trained chatbot with Sentiment140 dataset containing 1.6 million tweets, annotated(0 = negative, 4 = positive)."]
    },
    {
        name: 'Detecting biases in College Recruitment',
        image: Img5,
        video: null, // Add your video URL here
        text: [" Volunteered for CKIDS datafest and worked under guidance of Prof. Jeremy Abramson.",
            "Extracted recruit players data from 247 sports through asynchronous web scrapping and FIPS code of census block group where the high school is located, using Census Geocode API.",
            "Geomerged the obtained FIPS code with open census Safe Graph data to analyze socio-economic factors.",
            "Visualized the relevant features using heatmap, spike map, scatterplot, polygon tract on Streamlit dashboard."]
    },
    {
        name: 'Abstractive text summarization',
        image: Img6,
        video: null, // Add your video URL here
        text: [" Evaluated and compared performance of 3 models using BLEU and ROUGE score.",
            "Augmented model's performance by 7% utilizing Beam Search decoder instead of Argument Max in inference phase.",
            "Deduced insights as to why 1 model performs better than others in BLEU score and relatively poor in ROUGE score."]
    },
    {
        name: 'Bechdaal',
        image: Img3,
        video: null, // Add your video URL here
        text: [" Led a team of 6 interns and developed a web application for home chefs to sell their homemade food.",
            "Formulated the startup's vision, goals, and objectives."]
    }
]