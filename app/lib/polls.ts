import { Poll, CreatePollData, Vote } from "./types"

// Mock data storage - replace with actual database
let polls: Poll[] = [
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

let votes: Vote[] = []

export async function getPolls(): Promise<Poll[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return polls.filter(poll => poll.isActive)
}

export async function getPollById(id: string): Promise<Poll | null> {
  await new Promise(resolve => setTimeout(resolve, 300))
  return polls.find(poll => poll.id === id) || null
}

export async function createPoll(data: CreatePollData, userId: string): Promise<Poll> {
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const newPoll: Poll = {
    id: Date.now().toString(),
    title: data.title,
    description: data.description,
    options: data.options.map((text, index) => ({
      id: `${Date.now()}-${index}`,
      text,
      votes: 0
    })),
    createdBy: userId,
    createdAt: new Date(),
    expiresAt: data.expiresAt,
    isActive: true
  }
  
  polls.push(newPoll)
  return newPoll
}

export async function voteOnPoll(pollId: string, optionId: string, userId: string): Promise<boolean> {
  await new Promise(resolve => setTimeout(resolve, 500))
  
  // Check if user already voted on this poll
  const existingVote = votes.find(vote => 
    vote.pollId === pollId && vote.userId === userId
  )
  
  if (existingVote) {
    return false // User already voted
  }
  
  // Find the poll and option
  const poll = polls.find(p => p.id === pollId)
  if (!poll) return false
  
  const option = poll.options.find(o => o.id === optionId)
  if (!option) return false
  
  // Record the vote
  votes.push({
    id: Date.now().toString(),
    pollId,
    optionId,
    userId,
    createdAt: new Date()
  })
  
  // Update vote count
  option.votes += 1
  
  return true
}

export async function getUserPolls(userId: string): Promise<Poll[]> {
  await new Promise(resolve => setTimeout(resolve, 300))
  return polls.filter(poll => poll.createdBy === userId)
}

export async function deletePoll(pollId: string, userId: string): Promise<boolean> {
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const poll = polls.find(p => p.id === pollId)
  if (!poll || poll.createdBy !== userId) {
    return false
  }
  
  poll.isActive = false
  return true
}

export async function searchPolls(query: string): Promise<Poll[]> {
  await new Promise(resolve => setTimeout(resolve, 300))
  
  const searchTerm = query.toLowerCase()
  return polls.filter(poll => 
    poll.isActive && (
      poll.title.toLowerCase().includes(searchTerm) ||
      poll.description.toLowerCase().includes(searchTerm)
    )
  )
}
