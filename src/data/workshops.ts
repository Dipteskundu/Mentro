import { Workshop } from "@/types";

const workshop = (
  id: string,
  title: string,
  description: string,
  mentorId: string,
  topic: string,
  category: string,
  level: Workshop["level"],
  sessionType: Workshop["sessionType"],
  date: string,
  duration: string,
  totalSeats: number,
  availableSeats: number,
  learningOutcomes: string[],
  imageUrl: string,
  price: number,
  rating: number,
  reviewCount: number,
  enrolledCount: number,
): Workshop => ({ id, title, description, mentorId, topic, category, level, sessionType, date, duration, totalSeats, availableSeats, learningOutcomes, imageUrl, price, rating, reviewCount, enrolledCount });

export const workshops: Workshop[] = [
  workshop("ws-001", "React Foundations: Build with Confidence", "A live, studio-style introduction to React for developers ready to turn solid JavaScript into polished product interfaces.", "m-001", "Web Development", "Development", "Beginner", "Workshop", "2026-09-05T10:00:00", "3 hours", 24, 6, ["Compose maintainable component trees", "Model local state and user interactions", "Build accessible form flows", "Ship a responsive mini-product"], "/images/workshop-react-fundamentals.jpg", 0, 4.9, 186, 1248),
  workshop("ws-002", "React Architecture for Product Teams", "Move beyond components and learn the patterns senior engineers use to make complex React products easier to extend, test, and review.", "m-001", "Web Development", "Development", "Advanced", "Workshop", "2026-09-12T14:00:00", "4 hours", 18, 4, ["Design compound-component APIs", "Extract resilient custom hooks", "Profile and remove rendering bottlenecks", "Make state boundaries explicit"], "/images/workshop-react-patterns.jpg", 89, 4.9, 94, 632),
  workshop("ws-003", "React Native: From Prototype to Store", "Create a production-minded mobile experience with native navigation, offline-friendly state, and the interaction details users notice.", "m-002", "Mobile Development", "Development", "Intermediate", "Workshop", "2026-09-08T11:00:00", "5 hours", 16, 5, ["Structure a scalable mobile app", "Build gesture-led navigation", "Work with device capabilities", "Prepare a release-ready build"], "/images/workshop-react-native.jpg", 79, 4.8, 121, 817),
  workshop("ws-004", "Flutter Product Sprint", "A focused two-day build sprint for crafting expressive cross-platform apps with clean architecture and a refined visual system.", "m-002", "Mobile Development", "Development", "Beginner", "Bootcamp", "2026-09-15T09:00:00", "2 days", 20, 7, ["Write idiomatic Dart", "Build layouts that adapt beautifully", "Manage app state with intent", "Present a portfolio-ready prototype"], "/images/workshop-flutter.jpg", 149, 4.8, 78, 504),
  workshop("ws-005", "Machine Learning for Curious Builders", "Understand how practical ML projects are scoped, evaluated, and communicated—without getting lost in the mathematics.", "m-003", "AI/ML", "IT & Software", "Beginner", "Webinar", "2026-09-10T15:00:00", "2 hours", 80, 19, ["Frame a useful ML question", "Read model metrics with confidence", "Avoid common data-quality traps", "Plan a responsible first experiment"], "/images/workshop-machine-learning.jpg", 0, 4.9, 243, 2316),
  workshop("ws-006", "Deep Learning Systems Lab", "An intensive, hands-on lab for engineers who want to train, validate, and deploy neural-network workflows with TensorFlow.", "m-003", "AI/ML", "IT & Software", "Advanced", "Bootcamp", "2026-09-20T09:00:00", "3 days", 14, 3, ["Design training pipelines", "Diagnose overfitting and drift", "Build vision and sequence models", "Package models for production"], "/images/workshop-deep-learning.jpg", 249, 4.8, 63, 391),
  workshop("ws-007", "Data Stories with Python", "Turn untidy data into a concise, decision-ready narrative with pandas, visual analysis, and a clear point of view.", "m-003", "Data Science", "IT & Software", "Intermediate", "Workshop", "2026-09-18T13:00:00", "4 hours", 22, 8, ["Create reproducible notebooks", "Clean and join imperfect datasets", "Choose honest visual encodings", "Present insights to stakeholders"], "/images/workshop-data-analysis.jpg", 69, 4.8, 158, 1092),
  workshop("ws-008", "Cloud Fluency: AWS Essentials", "A practical foundation in cloud decisions, secure service design, and the AWS vocabulary needed to collaborate with platform teams.", "m-004", "Cloud Computing", "IT & Software", "Beginner", "Webinar", "2026-09-07T10:00:00", "2 hours", 100, 34, ["Map workloads to cloud services", "Understand shared responsibility", "Estimate costs thoughtfully", "Prepare for the Cloud Practitioner exam"], "/images/workshop-cloud-practitioner.jpg", 0, 4.9, 274, 2741),
  workshop("ws-009", "Kubernetes Reliability Clinic", "A small-group clinic for operating container platforms with the observability, deployment discipline, and recovery habits production demands.", "m-004", "Cloud Computing", "IT & Software", "Advanced", "Mentorship", "2026-09-22T14:00:00", "6 hours", 8, 2, ["Design resilient workload manifests", "Troubleshoot networking and storage", "Build actionable observability", "Run a calm incident response"], "/images/workshop-kubernetes.jpg", 189, 5, 49, 278),
  workshop("ws-010", "CI/CD Delivery Craft", "Design a delivery pipeline your team can trust: fast feedback, secure defaults, predictable releases, and less manual handoff.", "m-004", "DevOps", "IT & Software", "Intermediate", "Workshop", "2026-09-25T11:00:00", "3 hours", 20, 6, ["Model a durable delivery workflow", "Automate meaningful quality gates", "Containerize with secure defaults", "Make deployments observable"], "/images/workshop-cicd.jpg", 79, 4.8, 116, 884),
  workshop("ws-011", "Interface Design Essentials", "Learn the visual and interaction principles behind calm, intuitive digital products through critiques, exercises, and real interface examples.", "m-005", "UI/UX Design", "Design", "Beginner", "Workshop", "2026-09-09T13:00:00", "3 hours", 28, 11, ["Run a lightweight design critique", "Create visual hierarchy", "Use typography with purpose", "Prototype a clear user flow"], "/images/workshop-uiux.jpg", 0, 4.9, 197, 1654),
  workshop("ws-012", "Design Systems for Growing Products", "Build a system that brings design and engineering into alignment—from tokens and components to adoption and governance.", "m-005", "UI/UX Design", "Design", "Advanced", "Mentorship", "2026-09-28T10:00:00", "5 hours", 10, 3, ["Define an extensible token model", "Design components for real product states", "Document patterns for adoption", "Set healthy contribution practices"], "/images/workshop-design-systems.jpg", 169, 4.9, 71, 413),
];
