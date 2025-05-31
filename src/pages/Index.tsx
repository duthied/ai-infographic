import React from 'react';
import { Header } from '@/components/Header';
import { ConceptCard } from '@/components/ConceptCard';
import { DomainImpactCard } from '@/components/DomainImpactCard';
import { Brain, Cpu, Network, Server, MessageSquare, Code, TrendingUp, BookOpen, GraduationCap, Library } from 'lucide-react';

const Index = () => {
  const concepts = [
    {
      id: 'ai',
      title: 'Artificial Intelligence (AI)',
      icon: Brain,
      color: 'from-emerald-500 to-teal-500',
      description: 'The big picture: Making machines smart',
      details: [
        'AI is like giving computers a brain that can learn, reason, and make decisions',
        'Think of it as training a computer to recognize patterns, just like how you learned to recognize faces or read handwriting',
        'Examples: Recommendation systems, image recognition, voice assistants',
        'Fun fact: AI has been around since the 1950s, but only recently became powerful enough for everyday use!'
      ]
    },
    {
      id: 'llm',
      title: 'Large Language Models (LLMs)',
      icon: Cpu,
      color: 'from-slate-500 to-gray-500',
      description: 'AI that understands and generates human language',
      details: [
        'Think of LLMs as incredibly well-read assistants that have absorbed millions of books, articles, and conversations',
        'They predict the next word in a sequence, like a super-powered autocomplete',
        'Examples: ChatGPT, Claude, Gemini - they all use LLM technology',
        'They can write, translate, summarize, code, and even be creative!',
        'Limitation: They don\'t actually "understand" - they\'re pattern matching masters'
      ]
    },
    {
      id: 'models',
      title: 'AI Models',
      icon: Network,
      color: 'from-amber-500 to-orange-500',
      description: 'The "brains" behind AI applications',
      details: [
        'A model is like a recipe that tells the computer how to process information',
        'Different models for different jobs: some excel at images, others at text, some at predictions',
        'Training a model is like teaching someone a skill through millions of examples',
        'Model types: GPT (text generation), DALL-E (image creation), BERT (text understanding)',
        'The bigger the model (more parameters), the more capable it usually is'
      ]
    },
    {
      id: 'mcp',
      title: 'Model Context Protocol (MCP)',
      icon: Server,
      color: 'from-stone-500 to-neutral-500',
      description: 'Connecting AI models to real-world data and tools',
      details: [
        'MCP is like giving AI models access to live information and tools',
        'Instead of just knowing old training data, models can now access databases, APIs, and real-time information',
        'Think of it as the difference between having a really smart friend vs. having that friend with internet access',
        'Examples: AI that can check your calendar, search current databases, or control smart home devices',
        'This makes AI more useful and up-to-date in business applications'
      ]
    }
  ];

  const domains = [
    {
      id: 'marketing',
      title: 'Marketing & Content',
      icon: TrendingUp,
      color: 'from-emerald-400 to-teal-400',
      description: 'Personalized campaigns and content at scale',
      impacts: [
        'Automated content generation for social media, emails, and blogs',
        'Real-time personalization based on customer behavior and preferences',
        'Predictive analytics to identify high-value prospects and optimal timing',
        'A/B testing automation to continuously optimize messaging and creative'
      ]
    },
    {
      id: 'support',
      title: 'Customer Support',
      icon: MessageSquare,
      color: 'from-amber-400 to-orange-400',
      description: '24/7 intelligent assistance and issue resolution',
      impacts: [
        'AI chatbots handling routine inquiries instantly, freeing up human agents',
        'Sentiment analysis to prioritize urgent or frustrated customers',
        'Automated ticket routing to the most qualified support specialists',
        'Real-time language translation for global customer communication'
      ]
    },
    {
      id: 'development',
      title: 'Software Development',
      icon: Code,
      color: 'from-stone-400 to-neutral-400',
      description: 'Accelerated coding and smarter development workflows',
      impacts: [
        'Code generation and completion, reducing development time by 30-50%',
        'Automated bug detection and suggested fixes before deployment',
        'Natural language to code conversion for rapid prototyping',
        'Intelligent code reviews and optimization recommendations'
      ]
    }
  ];

  const learningResources = [
    {
      id: 'beginner',
      title: 'Getting Started',
      icon: BookOpen,
      color: 'from-emerald-400 to-teal-400',
      description: 'Perfect for complete beginners',
      impacts: [
        <>
          <a 
            href="https://www.coursera.org/collections/machine-learning" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-emerald-600 hover:text-emerald-700 underline"
          >
            Start with Andrew Ng's Machine Learning Course on Coursera
          </a>
          {' - clear explanations for non-technical audiences'}
        </>,
        'Watch YouTube channels like "3Blue1Brown" for visual explanations of neural networks',
        'Try ChatGPT, Claude, or Gemini daily to understand capabilities and limitations'
      ]
    },
    {
      id: 'intermediate',
      title: 'Practical Learning',
      icon: GraduationCap,
      color: 'from-amber-400 to-orange-400',
      description: 'Hands-on experience and deeper understanding',
      impacts: [
        <>
          <a 
              href="https://course17.fast.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 underline"
            >
              Take the Fast.ai course - practical deep learning without heavy math prerequisites
            </a>
        </>,
        'Build simple projects: chatbots, image classifiers, or text summarizers',
        'Join AI communities like Hugging Face, Reddit r/MachineLearning, or Discord servers',
        'Experiment with no-code AI tools like Google\'s Teachable Machine or RunwayML'
      ]
    },
    {
      id: 'business',
      title: 'Business Applications',
      icon: Library,
      color: 'from-stone-400 to-neutral-400',
      description: 'Strategic implementation in organizations',
      impacts: [
        'Read "Prediction Machines" by Agrawal, Gans & Goldfarb for economic perspective',
        'Attend industry conferences like AI Summit or local AI meetups',
        'Start an AI pilot project in your organization - begin small and measurable',
        'Follow AI newsletters like "The Batch" by deeplearning.ai or "Import AI" for trends'
      ]
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 to-amber-50">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6">
            Understanding AI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              From Basics to Business
            </span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Navigate the world of artificial intelligence with clear explanations and practical insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {concepts.map((concept) => (
            <ConceptCard key={concept.id} {...concept} />
          ))}
        </div>

        {/* Domain Impact Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Real-World Impact
            </h3>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              How these AI advancements are transforming key business domains
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {domains.map((domain) => (
              <DomainImpactCard key={domain.id} {...domain} />
            ))}
          </div>
        </div>

        {/* Learning Resources Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Your Learning Journey
            </h3>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Curated resources to deepen your AI knowledge at every level
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {learningResources.map((resource) => (
              <DomainImpactCard key={resource.id} {...resource} />
            ))}
          </div>

          {/* Internal Learning Resources Sub-section */}
        </div>

        {/* Getting Started Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              <span className="mr-2">🚀</span>Getting Started
            </h3>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Step-by-Step Approach to Implementing AI in Your Organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-stone-100">
              <h4 className="font-bold text-lg text-stone-800 mb-2">Identify Use Cases</h4>
              <p className="text-stone-600">Look for repetitive, time-consuming tasks in your role</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-stone-100">
              <h4 className="font-bold text-lg text-stone-800 mb-2">Start Small</h4>
              <p className="text-stone-600">Begin with pilot projects that have clear success metrics</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-stone-100">
              <h4 className="font-bold text-lg text-stone-800 mb-2">Learn & Experiment</h4>
              <p className="text-stone-600">Try AI tools safely in controlled environments</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-stone-100">
              <h4 className="font-bold text-lg text-stone-800 mb-2">Scale Gradually</h4>
              <p className="text-stone-600">Expand successful pilots to broader implementation</p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
              <Brain className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-stone-800 mb-4">The Big Picture</h3>
            <p className="text-stone-600 text-lg max-w-3xl mx-auto">
              AI is transforming how we work, create, and solve problems. Understanding these concepts 
              helps you leverage AI tools effectively and stay ahead in the evolving digital landscape.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
