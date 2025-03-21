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
  Wrench,
  Leaf,
  TrendingUp,
  Heart
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

const missionPoints = [
  {
    icon: <Leaf className="w-12 h-12 text-green-500" />,
    title: "Environmental Stewardship",
    description: "Leading the transition to sustainable energy practices while preserving our planet's resources for future generations."
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
    title: "Innovation Excellence",
    description: "Continuously pushing boundaries to develop cutting-edge energy solutions that define industry standards."
  },
  {
    icon: <Heart className="w-12 h-12 text-red-500" />,
    title: "Community Impact",
    description: "Creating positive change in communities through sustainable energy practices and education."
  }
];

function Aboutus() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        {/* Header content */}
      </header>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About InfraTech Energy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering sustainable energy solutions for a brighter tomorrow. We're committed to transforming how businesses manage and optimize their energy consumption.
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-6">{point.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80&w=800"
                alt="Our Mission"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 cclassName="text-5xl font-bold tracking-wide bg-gradient-to-r from-blue-500 to-gray-500 text-transparent bg-clip-text text-center mb-16">Our Journey</h2>
              <p className="text-lg text-gray-600">
                Since our founding in 2008, InfraTech Energy has been at the forefront of the energy management revolution. We've grown from a small team of passionate engineers to a global leader in sustainable energy solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-50 p-4 rounded-lg text-center"
                  >
                    <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold tracking-wide bg-gradient-to-r from-blue-500 to-gray-500 text-transparent bg-clip-text text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="achievements">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold tracking-wide bg-gradient-to-r from-blue-500 to-gray-500 text-transparent bg-clip-text text-center mb-16">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors duration-300"
              >
                <div className="text-blue-600 font-bold mb-2">{achievement.year}</div>
                <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="team">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold tracking-wide bg-gradient-to-r from-blue-500 to-gray-500 text-transparent bg-clip-text text-center mb-16">Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-gray-500">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Energy Management?</h2>
            <p className="text-xl mb-8">Join us in creating a more sustainable future for your business.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;