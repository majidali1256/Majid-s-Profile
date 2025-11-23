import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt, FaEnvelope, FaGithub, FaChevronDown,
  FaPaperPlane, FaCircle, FaCheckCircle, FaJava, FaReact, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import {
  SiKotlin, SiPython, SiTensorflow, SiPytorch,
  SiFirebase, SiGit, SiFigma, SiJavascript, SiMongodb
} from 'react-icons/si';
import profileImage from './assets/img_7316-cbnhmbo9.jpg';
import szabistLogo from './assets/szabist-logo.png';


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:majidhussain7591@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-[#0F172A] text-gray-200 font-sans overflow-x-hidden">


      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 py-6 flex justify-between items-center"
      >
        <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-1.5 flex items-center gap-2 text-xs md:text-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-gray-300">Available for Opportunities</span>
        </div>
        <div className="hidden md:block bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-indigo-500/20">
          Web, Android & ML Developer
        </div>
      </motion.nav>


      <section className="container mx-auto px-6 py-10 flex flex-col-reverse md:flex-row items-center min-h-[85vh]">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 z-10">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Majid Ali</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-gray-400 mb-6 font-light">
            Web, Android & ML Developer | Vibe Coder
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-lg mx-auto md:mx-0 mb-10 text-gray-400 leading-relaxed">
            I build dynamic web and Android applications, blending robust engineering with a touch of machine learning. I write my own code but also embrace "vibe coding"—leveraging AI tools when needed to streamline development and create impactful digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-indigo-500/30 transition-all cursor-pointer block text-center">
              View My Work
            </motion.a>
            <motion.a
              href="#contact-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-600 hover:border-gray-400 text-white font-semibold py-3 px-8 rounded-lg transition-all cursor-pointer block text-center">
              Contact Me
            </motion.a>
          </motion.div>
        </div>

        <div className="md:w-1/2 flex justify-center relative z-0">

          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-10 right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[80px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, delay: 4 }}
            className="absolute bottom-0 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[80px]"
          />

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-b from-gray-700 to-gray-900 border border-gray-700 shadow-2xl">
            <img src={profileImage} alt="Majid Ali" className="w-full h-full object-cover rounded-full border-4 border-[#0F172A]" />


            <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="absolute top-4 right-8 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"></motion.div>
            <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute bottom-10 left-4 w-6 h-6 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.8)]"></motion.div>
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute top-1/2 -right-4 w-8 h-8 bg-purple-600 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.8)]"></motion.div>
          </motion.div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="flex justify-center pb-10">
        <div className="flex flex-col items-center text-xs uppercase tracking-widest cursor-pointer">
          Scroll to explore
          <FaChevronDown className="mt-2" />
        </div>
      </motion.div>


      <section id="about" className="container mx-auto px-6 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-3 gap-6"
        >


          <motion.div variants={fadeInUp} className="lg:col-span-2 bg-[#1E293B] p-8 rounded-2xl border border-gray-700 shadow-xl relative overflow-hidden">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-indigo-500/20 rounded-full mr-4">
                <FaCircle className="text-indigo-400 text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-white">About Me</h2>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              I'm a passionate Web, Android, and Machine Learning developer currently pursuing my BS in Computer Science at SZABIST Islamabad. With a strong foundation in computer science principles and hands-on experience in full-stack development and AI, I create solutions that bridge the gap between technology and human needs.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Beyond coding, I value community building and mentoring. My development philosophy blends traditional engineering with 'vibe coding'—I write robust code myself while leveraging AI to enhance productivity and solve complex problems efficiently.
            </p>


            <div className="flex flex-wrap gap-3">
              {['Leadership', 'Mentorship', 'Problem Solving', 'Creativity', 'Community'].map((badge, index) => {
                const colorClasses = [
                  'bg-blue-600',
                  'bg-purple-600',
                  'bg-green-600',
                  'bg-yellow-600',
                  'bg-red-600'
                ];
                const colorClass = colorClasses[index % colorClasses.length];
                return (
                  <motion.span
                    key={badge}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 ${colorClass} text-white text-sm font-semibold rounded-lg flex items-center gap-2 cursor-default`}>
                    <FaCheckCircle /> {badge}
                  </motion.span>
                )
              })}
            </div>
          </motion.div>


          <div className="space-y-6">

            <motion.div variants={fadeInUp} className="bg-[#1E293B] p-6 rounded-2xl border border-gray-700 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-blue-500">●</span> Majid Ali
              </h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-blue-500" /> Islamabad, Pakistan
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-500" /> majidhussain7591@gmail.com
                </div>
              </div>
            </motion.div>


            <motion.div
              variants={scaleIn}
              className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl shadow-xl text-center relative overflow-hidden">
              <div className="bg-white/10 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4 backdrop-blur-md overflow-hidden">
                <img
                  src={szabistLogo}
                  alt="SZABIST Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white">BS Computer Science</h3>
              <p className="text-indigo-100">SZABIST Islamabad</p>
              <p className="text-indigo-200 text-sm mt-1">2022 - Present</p>

              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>


      <section className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-12">


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              Education <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            </motion.h2>
            <div className="space-y-4">
              <TimelineItem
                year="2022 - Present"
                title="BS Computer Science"
                subtitle="SZABIST Islamabad"
                desc="Focus: Android Development & Machine Learning"
                color="blue"
              />
              <TimelineItem
                year="2019 - 2021"
                title="Intermediate (FSc)"
                subtitle="Army Public School & College, Sialkot Cantt"
                color="green"
              />
              <TimelineItem
                year="2019"
                title="Matriculation"
                subtitle="Army Public School & College, Sialkot Cantt"
                color="yellow"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              Leadership & Mentorship <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            </motion.h2>
            <div className="space-y-4">
              <TimelineItem
                year="2023 - Present"
                title="Developer Community Lead"
                subtitle="SZABIST Tech Society"
                desc="Building developer communities and mentoring junior students"
                color="purple"
              />
              <TimelineItem
                year="2022 - 2023"
                title="Teaching Assistant"
                subtitle="Computer Science Department"
                desc="Mentoring students in programming fundamentals"
                color="purple"
              />
            </div>
          </motion.div>
        </div>
      </section>


      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4"
        >
          <SkillCard name="HTML" icon={<FaHtml5 />} color="text-orange-500" />
          <SkillCard name="CSS" icon={<FaCss3Alt />} color="text-blue-500" />
          <SkillCard name="JavaScript" icon={<SiJavascript />} color="text-yellow-300" />
          <SkillCard name="React" icon={<FaReact />} color="text-blue-400" />
          <SkillCard name="MongoDB" icon={<SiMongodb />} color="text-green-500" />
          <SkillCard name="Kotlin" icon={<SiKotlin />} color="text-purple-400" />
          <SkillCard name="Java" icon={<FaJava />} color="text-red-400" />
          <SkillCard name="Python" icon={<SiPython />} color="text-yellow-400" />
          <SkillCard name="TensorFlow" icon={<SiTensorflow />} color="text-orange-400" />
          <SkillCard name="PyTorch" icon={<SiPytorch />} color="text-red-500" />
          <SkillCard name="Firebase" icon={<SiFirebase />} color="text-yellow-500" />
          <SkillCard name="Git" icon={<SiGit />} color="text-orange-500" />
          <SkillCard name="Figma" icon={<SiFigma />} color="text-pink-400" />
        </motion.div>
      </section>


      <section id="projects" className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12 justify-center"
        >
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12 -mt-8"
        >
          Explore my latest projects showcasing expertise in Android development and Machine Learning
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <ProjectCard
            color="bg-blue-600"
            title="Health Tracker App"
            description="Android application for monitoring health metrics with real-time data visualization"
            tags={['Kotlin', 'Firebase', 'Room DB']}
          />
          <ProjectCard
            color="bg-green-600"
            title="Image Recognition ML"
            description="Machine learning model for object detection and classification in images"
            tags={['Python', 'TensorFlow', 'OpenCV']}
          />
          <ProjectCard
            color="bg-purple-600"
            title="E-commerce Android App"
            description="Full-featured e-commerce platform with payment integration"
            tags={['Java', 'Retrofit', 'MVVM']}
          />
        </motion.div>
      </section>


      <section className="container mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl font-bold text-white underline decoration-indigo-500 underline-offset-8">Get In Touch</h2>
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
          </div>
          <p className="text-gray-400">Have a project in mind or want to discuss potential opportunities? Feel free to reach out!</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >

          <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-blue-600 rounded-xl p-6 text-white flex flex-col justify-between shadow-lg shadow-blue-900/20">
            <div>
              <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                <FaEnvelope className="text-xl" />
              </div>
              <h3 className="font-bold text-lg">Email</h3>
              <p className="text-blue-100 text-sm mb-4">Send me a message</p>
              <p className="font-semibold text-sm mb-4">majidhussain7591@gmail.com</p>
            </div>
            <a href="mailto:majidhussain7591@gmail.com" className="w-full bg-white text-blue-600 py-2 rounded font-bold text-sm hover:bg-blue-50 transition text-center block">Send Email</a>
          </motion.div>


          <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-[#1E293B] border border-gray-700 rounded-xl p-6 text-white flex flex-col justify-between shadow-xl">
            <div>
              <div className="bg-gray-700 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                <FaGithub className="text-xl" />
              </div>
              <h3 className="font-bold text-lg">GitHub</h3>
              <p className="text-gray-400 text-sm mb-4">View my projects</p>
              <p className="font-semibold text-sm mb-4">github.com/majidali1256</p>
            </div>
            <a href="https://github.com/majidali1256" target="_blank" rel="noopener noreferrer" className="w-full bg-gray-700 text-white py-2 rounded font-bold text-sm hover:bg-gray-600 transition text-center block">View Profile</a>
          </motion.div>


          <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-green-600 rounded-xl p-6 text-white flex flex-col justify-between shadow-lg shadow-green-900/20">
            <div>
              <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <h3 className="font-bold text-lg">Location</h3>
              <p className="text-green-100 text-sm mb-4">Currently based in</p>
              <p className="font-semibold text-sm mb-4">Islamabad, Pakistan</p>
            </div>
            <a href="#contact-form" className="w-full bg-green-500 border border-green-400 text-white py-2 rounded font-bold text-sm flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div> Available for Remote Work
            </a>
          </motion.div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#2e1065] to-[#1e1b4b] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >

          <div className="md:w-1/2 p-10 md:p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-indigo-200 mb-8">Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.</p>
            <ul className="space-y-4 text-indigo-100">
              <li className="flex items-center gap-3"><span className="w-3 h-3 bg-green-400 rounded-full"></span> I'll respond within 24-48 hours</li>
              <li className="flex items-center gap-3"><span className="w-3 h-3 bg-green-400 rounded-full"></span> Available for remote work opportunities</li>
              <li className="flex items-center gap-3"><span className="w-3 h-3 bg-green-400 rounded-full"></span> Based in Islamabad, Pakistan</li>
              <li className="flex items-center gap-3"><span className="w-3 h-3 bg-green-400 rounded-full"></span> majidhussain7591@gmail.com</li>
            </ul>
          </div>


          <div id="contact-form" className="md:w-1/2 bg-[#0F172A]/50 p-10 md:p-12 backdrop-blur-sm">
            <h4 className="text-xl font-bold text-white mb-6">Send me a Message</h4>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded p-2.5 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded p-2.5 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded p-2.5 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="What is this regarding?"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded p-2.5 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Please provide as much detail as possible..."
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded transition flex items-center justify-center gap-2">
                Send Message <FaPaperPlane className="text-xs" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>


      <footer className="bg-[#0B1120] py-8 text-center text-gray-500 text-sm border-t border-gray-800">
        <p className="mb-1">&copy; 2025 Majid Ali. All rights reserved.</p>
        <p>Web, Android & ML Developer</p>
      </footer>
    </div>
  );
};



const TimelineItem = ({ year, title, subtitle, desc, color }) => {
  const borderColors = {
    blue: 'border-blue-500',
    green: 'border-green-500',
    yellow: 'border-yellow-500',
    purple: 'border-purple-500'
  };
  const textColors = {
    blue: 'text-blue-400',
    green: 'text-green-400',
    yellow: 'text-yellow-400',
    purple: 'text-purple-400'
  };

  return (
    <motion.div
      variants={fadeInUp}
      className={`bg-[#1E293B] p-5 rounded-lg border-l-4 ${borderColors[color]} shadow-md hover:bg-gray-800 transition-colors`}
    >
      <p className={`${textColors[color]} text-sm font-bold mb-1`}>{year}</p>
      <h3 className="text-white font-bold text-lg">{title}</h3>
      <p className="text-gray-400 text-sm">{subtitle}</p>
      {desc && <p className="text-gray-500 text-xs mt-2">{desc}</p>}
    </motion.div>
  );
};

const SkillCard = ({ name, icon, color }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -5, borderColor: 'rgba(147, 51, 234, 0.5)' }}
    className="bg-[#1E293B] p-4 rounded-xl flex flex-col items-center justify-center gap-2 shadow-lg border border-gray-700/50 transition-all cursor-default">
    <div className={`text-3xl ${color}`}>{icon}</div>
    <span className="text-xs font-medium text-gray-300">{name}</span>
  </motion.div>
);

const ProjectCard = ({ color, title, description, tags }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -10 }}
    className="bg-[#1E293B] rounded-xl overflow-hidden shadow-xl border border-gray-700 flex flex-col">
    <div className={`h-40 ${color} flex items-center justify-center relative`}>
      <div className="w-12 h-12 bg-white rounded-full shadow-lg"></div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">{tag}</span>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gray-700/50 hover:bg-gray-700 text-white py-2 rounded text-sm font-semibold transition-colors">
        View Project Details
      </motion.button>
    </div>
  </motion.div>
);

export default App;