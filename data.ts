import { AppData } from './types';

export const portfolioData: AppData = {
  "personal": {
    "name": "Arpit Yadav",
    "title": "Senior Software Development Engineer",
    "location": "Patiala, India",
    "email": "arpit.y@example.com",
    "phone": "+91-9876543210",
    "github": "https://github.com/arpityadav-dev",
    "linkedin": "https://linkedin.com/in/arpityadav-dev",
    "resumeUrl": "#",
    "bio": "Product-minded engineer with 6+ years of experience building high-throughput distributed systems. Specialized in backend optimization, cloud infrastructure, and applied machine learning pipelines."
  },
  "skills": [
    "Java", "Kotlin", "Python", "TypeScript", "React", "Node.js", "Go",
    "AWS (Lambda, ECS, S3)", "Docker", "Kubernetes", "PostgreSQL", "Redis", 
    "Kafka", "Elasticsearch", "Terraform", "CI/CD"
  ],
  "experience": [
    {
      "company": "TechStream Inc.",
      "role": "Senior SDE",
      "start": "2022-05",
      "end": "Present",
      "bullets": [
        "Architected a microservices migration strategy for the payment gateway, reducing technical debt and cutting deployment time by 60%.",
        "Optimized database query performance for high-volume transaction logs, reducing P99 latency from 250ms to 120ms (-52%).",
        "Mentored 4 junior developers and introduced automated code quality gates in CI pipelines."
      ]
    },
    {
      "company": "DataFlow Systems",
      "role": "SDE II",
      "start": "2019-06",
      "end": "2022-04",
      "bullets": [
        "Implemented a distributed caching layer using Redis, improving API throughput by 2.5x during peak load.",
        "Developed a real-time fraud detection service processing 5k events/sec with <200ms latency.",
        "Reduced cloud infrastructure costs by 15% through right-sizing instances and implementing auto-scaling policies."
      ]
    }
  ],
  "projects": [
    {
      "id": "proj-traffic",
      "title": "Smart Traffic Control System",
      "tagline": "Real-time traffic optimizer using Reinforcement Learning",
      "description": "A city-scale traffic management system that adjusts signal timings dynamically based on real-time congestion data feeds.",
      "bullets": [
        "Reduced average intersection wait times by 22% in simulation environments.",
        "Built a fault-tolerant ingestion pipeline using Kafka and Apache Spark to handle 10k+ sensor events/sec.",
        "Deployed RL models via TensorFlow Serving on Kubernetes with auto-scaling."
      ],
      "tech": ["Python", "Kafka", "Spark", "TensorFlow", "Kubernetes", "Docker"],
      "role": "Lead Engineer",
      "repo": "https://github.com/example/smart-traffic",
      "demo": "https://demo.example.com",
      "images": ["https://picsum.photos/800/450?random=1", "https://picsum.photos/800/450?random=11"],
      "tags": ["ML", "Backend", "Infrastructure"],
      "metrics": { "improvement_pct": 22, "throughput": "10k events/sec" }
    },
    {
      "id": "proj-ecom",
      "title": "OmniShop Headless Commerce",
      "tagline": "High-performance generic e-commerce API engine",
      "description": "A headless e-commerce backend focused on speed and extensibility, designed to support multiple frontend clients (Web, Mobile, POS).",
      "bullets": [
        "Achieved <50ms response time for catalog search using Elasticsearch custom analyzers.",
        "Designed an event-driven inventory system preventing overselling during flash sales.",
        "Integrated Stripe and PayPal webhooks with idempotency handling."
      ],
      "tech": ["Node.js", "TypeScript", "PostgreSQL", "Elasticsearch", "Redis", "AWS Lambda"],
      "role": "Full Stack Developer",
      "repo": "https://github.com/example/omnishop",
      "demo": "https://demo.example.com",
      "images": ["https://picsum.photos/800/450?random=2", "https://picsum.photos/800/450?random=22"],
      "tags": ["Backend", "API", "E-commerce"],
      "metrics": { "latency_ms": 45, "uptime": "99.99%" }
    }
  ]
};