import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to{" "}
          <span className="text-primary">ALX Polly</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Create engaging polls, gather opinions, and make data-driven decisions. 
          Join the community and start polling today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/polls">
            <Button size="lg" className="text-lg px-8 py-3">
              Browse Polls
            </Button>
          </Link>
          <Link href="/polls/create">
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Create Poll
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Create Polls</CardTitle>
            <CardDescription>
              Easily create custom polls with multiple options and expiration dates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Design engaging polls with our intuitive form builder. Add descriptions, 
              set expiration dates, and customize options to match your needs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vote & Participate</CardTitle>
            <CardDescription>
              Cast your vote on community polls and see real-time results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Participate in polls created by others. View live results with 
              beautiful charts and percentage breakdowns.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Secure & Private</CardTitle>
            <CardDescription>
              User authentication ensures secure voting and poll creation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Create an account to start creating polls. Your data is protected 
              and voting is secure with our authentication system.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-muted-foreground mb-6">
          Join thousands of users creating and participating in polls
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth/signup">
            <Button size="lg">Create Account</Button>
          </Link>
          <Link href="/auth/signin">
            <Button variant="outline" size="lg">Sign In</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
