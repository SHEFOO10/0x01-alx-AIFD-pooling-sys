"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Poll } from "@/lib/types"
import { BarChart3, Users, Calendar, ArrowRight } from "lucide-react"

interface PollCardProps {
  poll: Poll
}

export default function PollCard({ poll }: PollCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [hasVoted, setHasVoted] = useState(false)

  const totalVotes = poll.options.reduce((sum, option) => sum + option.votes, 0)

  const handleVote = async () => {
    if (!selectedOption) return
    
    // TODO: Implement voting logic
    console.log("Voting for option:", selectedOption)
    
    // Simulate API call
    setTimeout(() => {
      setHasVoted(true)
      // TODO: Update poll data with new vote
    }, 500)
  }

  const getVotePercentage = (votes: number) => {
    if (totalVotes === 0) return 0
    return Math.round((votes / totalVotes) * 100)
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg font-semibold line-clamp-2">
          {poll.title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {poll.description}
        </CardDescription>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{totalVotes} votes</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{poll.createdAt.toLocaleDateString()}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {poll.options.map((option) => (
          <div key={option.id} className="space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id={option.id}
                name={`poll-${poll.id}`}
                value={option.id}
                checked={selectedOption === option.id}
                onChange={(e) => setSelectedOption(e.target.value)}
                disabled={hasVoted}
                className="h-4 w-4"
              />
              <label htmlFor={option.id} className="flex-1 text-sm">
                {option.text}
              </label>
              {hasVoted && (
                <span className="text-sm font-medium">
                  {getVotePercentage(option.votes)}%
                </span>
              )}
            </div>
            
            {hasVoted && (
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${getVotePercentage(option.votes)}%` }}
                />
              </div>
            )}
          </div>
        ))}
        
        {!hasVoted && (
          <Button 
            onClick={handleVote} 
            disabled={!selectedOption}
            className="w-full"
          >
            Vote
          </Button>
        )}
        
        {hasVoted && (
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Thanks for voting!</span>
            <Button variant="ghost" size="sm">
              View Results <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
