import { Bot, Globe, History, Sparkles } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Indian Language Support",
      description: "Translate to and from multiple Indian languages using Bhashini API integration.",
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "AI Text Processing",
      description: "Leverage OpenAI's powerful models for summarization, paraphrasing, and more.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Advanced Features",
      description: "Content generation, sentiment analysis, and contextual translations.",
    },
    {
      icon: <History className="h-10 w-10 text-primary" />,
      title: "Translation History",
      description: "Save and access your previous translations for quick reference.",
    },
  ]

  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Our platform combines the best of AI and translation technology
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm border">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

