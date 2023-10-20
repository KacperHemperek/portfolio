import SectionHeading from '~/components/common/section-heading';
import ExperienceSection from '~/components/homepage/experience-section';
import HomeHeader from '~/components/homepage/home-header';

export default function Home() {
  return (
    <main className='mx-auto max-w-2xl px-6 pb-24'>
      <HomeHeader />
      <ExperienceSection />
      <section id='projects'>
        <SectionHeading title='Projects' number='02' />
      </section>
      <section id='skills'>
        <SectionHeading title='Skills' number='03' />
      </section>
      <section id='contact'>
        <SectionHeading title='Contact' number='04' />
      </section>
    </main>
  );
}
