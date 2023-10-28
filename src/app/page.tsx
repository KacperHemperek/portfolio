import SectionHeading from '~/components/common/section-heading';
import ContactMeSection from '~/components/homepage/contact-me-section';
import ExperienceSection from '~/components/homepage/experience-section';
import Footer from '~/components/homepage/footer';
import HomeHeader from '~/components/homepage/home-header';
import ProjectsSection from '~/components/homepage/projects-section';

export default function Home() {
  return (
    <main className='mx-auto max-w-2xl px-6'>
      <HomeHeader />
      <ExperienceSection />
      <ProjectsSection />
      <section id='skills'>
        <SectionHeading title='Skills' number='03' />
      </section>
      <ContactMeSection />
      <Footer />
    </main>
  );
}
