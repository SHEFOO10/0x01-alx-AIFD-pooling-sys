import React from "react"

export default function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">PollApp</h3>
            <p className="text-sm text-muted-foreground">
              Create, share, and vote on polls with your community.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Create Polls</li>
              <li>Vote Anonymously</li>
              <li>Real-time Results</li>
              <li>Share with Friends</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>GitHub</li>
              <li>Twitter</li>
              <li>Discord</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 PollApp. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
