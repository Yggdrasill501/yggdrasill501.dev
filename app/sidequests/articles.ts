export interface Article {
  title: string;
  url: string;
  note?: string;
}

export interface ArticleSection {
  name: string;
  items: Article[];
}

export const articles: ArticleSection[] = [
  {
    name: "Data science & analytics",
    items: [
      {
        title:
          "What's the real difference between data science and data analytics?",
        url: "https://deepnote.com/guides/data-science-and-analytics/data-science-vs-data-analytics",
      },
      {
        title: "Modern data team collaboration",
        url: "https://deepnote.com/guides/data-science-and-analytics/modern-data-team-collaboration",
      },
      {
        title: "Introduction to data science for managers",
        url: "https://deepnote.com/guides/data-science-and-analytics/introduction-to-data-science-for-managers",
      },
      {
        title: "How to analyze Google ads data in Python using Deepnote",
        url: "https://deepnote.com/guides/data-science-and-analytics/how-to-analyze-google-ads-data-in-python-using-deepnote",
      },
      {
        title: "How to analyze data from QuickBooks in Python using Deepnote",
        url: "https://deepnote.com/guides/data-science-and-analytics/how-to-analyze-data-from-quickbooks-in-python-using-deepnote",
      },
    ],
  },
  {
    name: "Jupyter",
    items: [
      {
        title: "What is JupyterHub?",
        url: "https://deepnote.com/guides/jupyter/jupyterhub",
      },
      {
        title: "How to add comments to a Jupyter notebook",
        url: "https://deepnote.com/guides/jupyter/comments",
      },
    ],
  },
  {
    name: "Collaboration",
    items: [
      {
        title: "Real time collaboration in Jupyter",
        url: "https://deepnote.com/guides/collaboration/real-time-collaboration-in-jupyter",
      },
    ],
  },
  {
    name: "Google Cloud",
    items: [
      {
        title: "What is Google Colaboratory?",
        url: "https://deepnote.com/guides/google-cloud/google-colaboratory",
      },
    ],
  },
  {
    name: "AWS",
    items: [
      {
        title: "What is Sagemaker?",
        url: "https://deepnote.com/guides/aws/sagemaker",
      },
    ],
  },
  {
    name: "Data platforms",
    items: [
      {
        title: "Data science in notebooks",
        url: "https://deepnote.com/guides/data-platforms/data-science-in-notebooks",
      },
    ],
  },
  {
    name: "ChatGPT",
    items: [
      {
        title: "How to use AI for data science",
        url: "https://deepnote.com/guides/chatgpt/ai-for-data-science",
      },
    ],
  },
  {
    name: "Notebook integrations",
    items: [
      {
        title: "Rust kernel in Deepnote for blazingly fast notebooks",
        url: "https://deepnote.com/guides/notebook-integrations/rust-kernel-in-deepnote",
      },
      {
        title: "Using JavaScript in Deepnote",
        url: "https://deepnote.com/guides/notebook-integrations/javascript-in-deepnote",
        note: "byline not served; near-certain",
      },
      {
        title: "Enhancing data analysis with Deepnote and Scala",
        url: "https://deepnote.com/guides/notebook-integrations/deepnote-and-scala",
      },
      {
        title: "Mastering R in Deepnote",
        url: "https://deepnote.com/guides/notebook-integrations/mastering-r-in-deepnote",
      },
      {
        title: "Boosting data processing in Deepnote: C++ kernels",
        url: "https://deepnote.com/guides/notebook-integrations/boosting-data-processing-in-deepnote-and-cpp-kernels",
      },
      {
        title: "Importing function from another notebook",
        url: "https://deepnote.com/guides/notebook-integrations/importing-function-from-another-notebook",
      },
    ],
  },
  {
    name: "Platform solutions",
    items: [
      {
        title:
          "Building a Streamlit app with LangChain and OpenAI in Deepnote",
        url: "https://deepnote.com/guides/platform-solutions/streamlit-app-with-langchain-and-openai-in-deepnote",
      },
      {
        title: "Use Poetry in Deepnote instead of dealing with local packages",
        url: "https://deepnote.com/guides/platform-solutions/poetry-in-deepnote",
      },
      {
        title: "Using Folium in Deepnote: displaying maps",
        url: "https://deepnote.com/guides/platform-solutions/folium-in-deepnote",
      },
      {
        title: "Selenium web-driver exception in Deepnote",
        url: "https://deepnote.com/guides/platform-solutions/selenium-in-deepnote",
      },
      {
        title: "Connecting to Oracle Cloud database with Deepnote",
        url: "https://deepnote.com/guides/platform-solutions/oracle-cloud-database-with-deepnote",
      },
      {
        title: "Resolving pyodbc connection issues in Deepnote",
        url: "https://deepnote.com/guides/platform-solutions/pyodbc-in-deepnote",
      },
    ],
  },
  {
    name: "Notebook tutorials",
    items: [
      {
        title: "Wavelength denoising with PyWavelets in Deepnote",
        url: "https://deepnote.com/guides/notebook-tutorials/wavelength-denoising-in-deepnote",
      },
      {
        title: "Extracting tabular data from PDFs with Deepnote",
        url: "https://deepnote.com/guides/notebook-tutorials/pdfs-with-deepnote",
      },
      {
        title: "TripAdvisor datasets in Deepnote",
        url: "https://deepnote.com/guides/notebook-tutorials/tripadvisor-datasets-in-deepnote",
      },
      {
        title: "Guide BJH analysis in Deepnote",
        url: "https://deepnote.com/guides/notebook-tutorials/gbjh-analysis-in-deepnote",
      },
      {
        title: "Modern Python ORM for data science",
        url: "https://deepnote.com/guides/notebook-tutorials/modern-python-orm-for-data-science",
      },
      {
        title: "Linear regression in Deepnote",
        url: "https://deepnote.com/guides/notebook-tutorials/linear-regression-in-deepnote",
      },
      {
        title: "Python functions and variable scope with Deepnote",
        url: "https://deepnote.com/guides/notebook-tutorials/python-functions-and-variable-with-deepnote",
      },
      {
        title: "Cheat sheet for markdown in Deepnote notebooks",
        url: "https://deepnote.com/guides/notebook-tutorials/markdown-in-deepnote",
      },
      {
        title: "Python conditional statements in Deepnote",
        url: "https://deepnote.com/guides/notebook-tutorials/python-conditional-statements-in-deepnote",
      },
      {
        title:
          "Exploring exponentials, radicals and logarithms with Deepnote Notebooks",
        url: "https://deepnote.com/guides/notebook-tutorials/exponentials-radicals-and-logarithms-with-deepnote-notebooks",
      },
      {
        title: "Deepnote Pandas puzzle: mastering Pandas",
        url: "https://deepnote.com/guides/notebook-tutorials/deepnote-pandas-puzzle-a-comprehensive-guide-to-mastering-pandas",
      },
      {
        title: "Deepnote Notebooks for data analysis",
        url: "https://deepnote.com/guides/notebook-tutorials/deepnote-notebooks-for-data-analysis",
      },
      {
        title: "Analyzing salaries dataset with Deepnote",
        url: "https://deepnote.com/guides/notebook-tutorials/analyzing-salaries-with-deepnote",
      },
      {
        title: "Analyzing e-commerce purchases data in Deepnote",
        url: "https://deepnote.com/guides/notebook-tutorials/analyzing-e-commerce-in-deepnote",
      },
    ],
  },
  {
    name: "Tutorials",
    items: [
      {
        title: "Anti-money laundering in Python",
        url: "https://deepnote.com/guides/tutorials/anti-money-laundering-in-python",
      },
      {
        title: "Automated forecasting in Python",
        url: "https://deepnote.com/guides/tutorials/automated-forecasting-in-python",
      },
      {
        title: "Introduction to stock trading in Python",
        url: "https://deepnote.com/guides/tutorials/introduction-to-stock-trading-in-python",
      },
      {
        title: "Introduction to Python for banking",
        url: "https://deepnote.com/guides/tutorials/introduction-to-python-for-banking",
      },
      {
        title: "Introduction to credit card fraud detection in Python",
        url: "https://deepnote.com/guides/tutorials/introduction-to-credit-card-fraud-detection-in-python",
      },
      {
        title:
          "Introduction to Python for retail analysis using Deepnote",
        url: "https://deepnote.com/guides/tutorials/introduction-to-python-for-retail-analysis-using-deepnote",
      },
      {
        title:
          "Introduction to Python for real estate investment analysis in Deepnote",
        url: "https://deepnote.com/guides/tutorials/real-estate-investment-analysis",
      },
      {
        title:
          "Introduction to Python for real estate market analysis in Deepnote",
        url: "https://deepnote.com/guides/tutorials/real-estate-market-analysis",
      },
      {
        title: "Introduction to Python for property valuation in Deepnote",
        url: "https://deepnote.com/guides/tutorials/introduction-to-python-for-property-valuation-in-deepnote",
      },
      {
        title: "Introduction to Python for health care in Deepnote",
        url: "https://deepnote.com/guides/tutorials/health-care-in-deepnote",
      },
      {
        title: "Introduction to Python for drug development and discovery",
        url: "https://deepnote.com/guides/tutorials/drug-development-and-discovery",
      },
      {
        title: "Introduction to Python for the Pharmaceutical Industry",
        url: "https://deepnote.com/guides/tutorials/introduction-to-python-for-the-pharmaceutical-industry",
      },
      {
        title:
          "Automating insurance claims processing in Python using Deepnote",
        url: "https://deepnote.com/guides/tutorials/automating-insurance-claims-processing-in-python",
      },
      {
        title:
          "Introduction to Python for insurance risk assessment in Deepnote",
        url: "https://deepnote.com/guides/tutorials/insurance-risk-assessment",
      },
      {
        title: "Fraud detection in insurance using Python in Deepnote",
        url: "https://deepnote.com/guides/tutorials/fraud-detection-in-insurance-using-python",
      },
      {
        title:
          "Introduction to Python for data science for manufacturing in Deepnote",
        url: "https://deepnote.com/guides/tutorials/data-science-for-manufacturing",
      },
      {
        title: "Transportation analytics in Python",
        url: "https://deepnote.com/guides/tutorials/transportation-analytics-in-python",
      },
      {
        title:
          "Introduction to supply chain management in Python using Deepnote",
        url: "https://deepnote.com/guides/tutorials/supply-chain-management-in-python",
      },
      {
        title:
          "Introduction to Python for telecom network optimization in Deepnote",
        url: "https://deepnote.com/guides/tutorials/introduction-to-python-for-telecom-network-optimization",
      },
      {
        title:
          "Customer churn prediction in telecom using Python in Deepnote",
        url: "https://deepnote.com/guides/tutorials/customer-churn-prediction-in-telecom-using-python",
      },
      {
        title: "Energy management in Python using Deepnote",
        url: "https://deepnote.com/guides/tutorials/energy-management-in-python",
      },
      {
        title:
          "Introduction to marketing automation in Python using Deepnote",
        url: "https://deepnote.com/guides/tutorials/introduction-to-marketing-automation-in-python-using-deepnote",
      },
    ],
  },
  {
    name: "Blog",
    items: [
      {
        title:
          "Introducing modules: reusable workflows for your entire team",
        url: "https://deepnote.com/blog/modules",
      },
      {
        title: "Kaggle vs Deepnote: a side-by-side comparison for 2024",
        url: "https://deepnote.com/blog/kaggle-vs-deepnote",
      },
      {
        title: "Polynote vs Deepnote",
        url: "https://deepnote.com/blog/polynote-vs-deepnote",
      },
      {
        title: "Mode vs Deepnote",
        url: "https://deepnote.com/blog/mode-vs-deepnote",
      },
      {
        title: "Zepl vs Deepnote",
        url: "https://deepnote.com/blog/zepl-vs-deepnote",
      },
      {
        title: "Julius AI vs Deepnote",
        url: "https://deepnote.com/blog/juliusai-vs-deepnote",
      },
      {
        title: "CoCalc vs Deepnote",
        url: "https://deepnote.com/blog/cocalc-vs-deepnote",
      },
      {
        title: "Zeppelin vs Deepnote",
        url: "https://deepnote.com/blog/zeppelin-vs-deepnote",
      },
      {
        title: "Husprey vs Deepnote",
        url: "https://deepnote.com/blog/husprey-vs-deepnote",
      },
      {
        title: "Count vs Deepnote",
        url: "https://deepnote.com/blog/count-vs-deepnote",
      },
      {
        title: "Power BI vs Deepnote",
        url: "https://deepnote.com/blog/powerbi-vs-deepnote",
      },
      {
        title: "DataCamp vs Deepnote",
        url: "https://deepnote.com/blog/datacamp-vs-deepnote",
      },
      {
        title: "Observable vs Deepnote",
        url: "https://deepnote.com/blog/observable-vs-deepnote",
      },
      {
        title: "Nextjournal vs Deepnote",
        url: "https://deepnote.com/blog/nextjournal-vs-deepnote",
      },
      {
        title: "VS Code vs Deepnote",
        url: "https://deepnote.com/blog/vscode-vs-deepnote",
      },
      {
        title: "nteract vs Deepnote",
        url: "https://deepnote.com/blog/nteract-vs-deepnote",
      },
      {
        title: "Push Metrics vs Deepnote",
        url: "https://deepnote.com/blog/pushmetrics-vs-deepnote",
      },
      {
        title: "Amazon QuickSight vs Deepnote",
        url: "https://deepnote.com/blog/quicksight-vs-deepnote",
      },
      {
        title: "Dataiku vs Deepnote",
        url: "https://deepnote.com/blog/dataiku-vs-deepnote",
      },
      {
        title: "Alteryx vs Deepnote",
        url: "https://deepnote.com/blog/alteryx-vs-deepnote",
      },
      {
        title: "Qlik vs Deepnote",
        url: "https://deepnote.com/blog/qlik-vs-deepnote",
      },
      {
        title: "Sisense vs Deepnote",
        url: "https://deepnote.com/blog/sisense-vs-deepnote",
      },
    ],
  },
];
