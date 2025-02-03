import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import ContactForm from '@/components/ContactForm';
import VideoProjects from '@/components/VideoProjects';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <Projects />
      <VideoProjects />
      <AboutMe />
    </main>
  );
}
