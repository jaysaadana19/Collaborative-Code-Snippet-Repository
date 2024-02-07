export const snippetsData = [
    {
      "title": "How to Fetch Data Using JavaScript",
      "description": "Learn how to use the fetch() function to make HTTP requests.",
      "tags": ["JavaScript", "HTTP", "Fetch"],
      "language": "JavaScript",
      "likes": 120,
      "views": 2500,
      "postedBy": "SomeOne#432",
      "discussions": [
        "How to handle errors in fetch requests?",
        "Optimizing fetch performance",
        "Using async/await with fetch"
      ],
      "codeSnippet": "fetch('https://example.com/data.json')\n  .then(response => response.json())\n  .then(data => console.log(data));"
    },
    {
      "title": "Python: Read CSV File",
      "description": "Read data from a CSV file using Python's built-in libraries.",
      "tags": ["Python", "CSV", "File I/O"],
      "language": "Python",
      "likes": 80,
      "views": 1800,
      "postedBy": "ironman#007",
      "discussions": [
        "How to handle different delimiters in CSV files?",
        "Efficiently reading large CSV files",
        "Writing data back to a CSV file"
      ],
      "codeSnippet": "import csv\n\nwith open('data.csv', 'r') as file:\n    reader = csv.reader(file)\n    for row in reader:\n        print(row)"
    },
    {
      "title": "Responsive CSS Grid Layout",
      "description": "Create a responsive grid layout using CSS Grid.",
      "tags": ["CSS", "Layout", "Responsive Design"],
      "language": "CSS",
      "likes": 70,
      "views": 2200,
      "postedBy": "caterpill#112",
      "discussions": [
        "Best practices for grid-based layouts",
        "Handling different screen sizes",
        "Grid vs. Flexbox"
      ],
      "codeSnippet": ".grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n}"
    },
    {
      "title": "JavaScript: Debounce Function",
      "description": "Learn how to create a debounce function to limit the frequency of function calls.",
      "tags": ["JavaScript", "Function", "Optimization"],
      "language": "JavaScript",
      "likes": 90,
      "views": 2100,
      "postedBy": "KFPanda#008",
      "discussions": [
        "Choosing the right debounce delay",
        "Debouncing user input",
        "Debounce vs. throttle"
      ],
      "codeSnippet": "function debounce(func, delay) {\n  let timeout;\n  return function (...args) {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => func(...args), delay);\n  };\n}"
    },
    {
      "title": "Java: Calculate Factorial",
      "description": "Compute the factorial of a given number in Java.",
      "tags": ["Java", "Math", "Recursion"],
      "language": "Java",
      "likes": 60,
      "views": 1500,
      "postedBy": "jamesbond#902",
      "discussions": [
        "Iterative vs. recursive factorial implementation",
        "Handling large factorials",
        "Factorial use cases"
      ],
      "codeSnippet": "public static int factorial(int n) {\n  if (n == 0 || n == 1) {\n    return 1;\n  }\n  return n * factorial(n - 1);\n}"
    },
    {
      "title": "PHP: Validate Email Address",
      "description": "Check if an email address is valid using PHP.",
      "tags": ["PHP", "Validation", "Regular Expressions"],
      "language": "PHP",
      "likes": 50,
      "views": 1400,
      "postedBy": "Thor#240",
      "discussions": [
        "Best practices for email validation",
        "Handling international email addresses",
        "Custom validation rules"
      ],
      "codeSnippet": "$email = 'user@example.com';\nif (filter_var($email, FILTER_VALIDATE_EMAIL)) {\n  echo 'Valid email address';\n} else {\n  echo 'Invalid email address';\n}"
    },
    {
        "title": "Next.js: Dynamic Routing",
        "description": "Create dynamic routes for dynamic content in Next.js.",
        "tags": ["Next.js", "React", "Routing"],
        "language": "JavaScript",
        "likes": 70,
        "views": 2200,
        "postedBy": "SomeOne#432",
        "discussions": [
          "Customizing route parameters",
          "Fetching data for dynamic routes",
          "SEO considerations for dynamic pages"
        ],
        "codeSnippet": "// pages/[slug].js\nimport { useRouter } from 'next/router';\n\nconst DynamicPage = () => {\n  const router = useRouter();\n  const { slug } = router.query;\n\n  return <div>Dynamic content for {slug}</div>;\n};\n\nexport default DynamicPage;"
      },
      {
        "title": "React: Context API",
        "description": "Manage global state using React's Context API.",
        "tags": ["React", "State Management", "Context"],
        "language": "JavaScript",
        "likes": 90,
        "views": 2100,
        "postedBy": "SomeOne#432",
        "discussions": [
          "Creating context providers and consumers",
          "Sharing state across components",
          "Performance considerations"
        ],
        "codeSnippet": "// context/ThemeContext.js\nimport { createContext, useContext, useState } from 'react';\n\nconst ThemeContext = createContext();\n\nexport const useTheme = () => useContext(ThemeContext);\n\nexport const ThemeProvider = ({ children }) => {\n  const [theme, setTheme] = useState('light');\n\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n};"
      },
]