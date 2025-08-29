import PollCard from "@/components/polls/PollCard"
import { Poll } from "@/lib/types"
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Mock data for demonstration
const mockPolls: Poll[] = [
  {
    id: "1",
    title: "What's your favorite programming language?",
    description: "Vote for your preferred programming language for web development",
    options: [
      { id: "1-1", text: "JavaScript/TypeScript", votes: 45 },
      { id: "1-2", text: "Python", votes: 32 },
      { id: "1-3", text: "Java", votes: 28 },
      { id: "1-4", text: "C#", votes: 15 }
    ],
    createdBy: "user1",
    createdAt: new Date("2024-01-15"),
    isActive: true
  },
  {
    id: "2",
    title: "Best framework for building APIs?",
    description: "Which framework do you prefer for building REST APIs?",
    options: [
      { id: "2-1", text: "Express.js", votes: 38 },
      { id: "2-2", text: "FastAPI", votes: 42 },
      { id: "2-3", text: "Spring Boot", votes: 25 },
      { id: "2-4", text: "Django REST", votes: 20 }
    ],
    createdBy: "user2",
    createdAt: new Date("2024-01-14"),
    isActive: true
  }
]

export default function PollsPage() {
  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Polls</h1>
          <p className="text-muted-foreground">
            Discover and vote on polls created by the community
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockPolls.map((poll) => (
            <PollCard key={poll.id} poll={poll} />
          ))}
        </div>
        {mockPolls.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No polls available yet.</p>
          </div>
        )}
      </div>
    </ProtectedRoute>
  )
}
