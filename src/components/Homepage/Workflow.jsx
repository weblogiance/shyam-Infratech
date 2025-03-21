import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Award,
  Users,
  Target,
  Lightbulb,
  BarChart,
  Globe,
  Shield,
  CheckCircle,
  ArrowRight,
  ClipboardCheck,
  Settings,
  LineChart,
  Wrench
} from 'lucide-react';

const stats = [
  { number: "500+", label: "Clients Served" },
  { number: "30%", label: "Average Energy Savings" },
  { number: "24/7", label: "Support Available" },
  { number: "15+", label: "Years Experience" }
];

const values = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Reliability",
    description: "Consistent and dependable energy solutions you can count on."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Sustainability",
    description: "Committed to environmental responsibility and green practices."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Innovation",
    description: "Cutting-edge solutions for modern energy challenges."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Partnership",
    description: "Building lasting relationships with our clients and communities."
  }
];

const achievements = [
  {
    year: "2023",
    title: "Industry Leadership Award",
    description: "Recognized for pioneering sustainable energy solutions"
  },
  {
    year: "2022",
    title: "Green Innovation Excellence",
    description: "Awarded for breakthrough energy optimization technology"
  },
  {
    year: "2021",
    title: "Customer Satisfaction Award",
    description: "Highest rated energy management service provider"
  }
];

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Michael Chen",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Emily Rodriguez",
    role: "Sustainability Head",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "James Wilson",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

const workflowSteps = [
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "Initial Assessment",
    description: "Comprehensive evaluation of current energy systems and consumption patterns",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Strategy Development",
    description: "Custom energy management plan tailored to your specific needs",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Implementation",
    description: "Expert installation and integration of energy-efficient solutions",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Monitoring & Optimization",
    description: "Continuous tracking and refinement of energy performance",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
  }
];

function Timelines() {
  return (
    <div className=" bg-white">
               
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold tracking-wide bg-gradient-to-r from-blue-500 to-gray-500 text-transparent bg-clip-text text-center mb-16">Our Workflow Process</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-r from-blue-500 to-gray-500 hidden md:block" />
            
            <div className="space-y-16 relative">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-8 relative`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-gray-500 rounded-full hidden md:block" />
                  
                  <div className="flex-1">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-gradient-to-r from-blue-100 to-gray-100 rounded-lg text-blue-600">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold ml-4">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="overflow-hidden rounded-xl shadow-lg"
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-64 object-cover"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}

export default Timelines;